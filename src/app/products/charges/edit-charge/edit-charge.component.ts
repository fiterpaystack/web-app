/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormArray,
  Validators,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** rxjs Imports */
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { OrganizationService } from 'app/organization/organization.service';
import { maxNumberValueValidator } from 'app/shared/validators/max-number-value.validator';
import { minNumberValueValidator } from 'app/shared/validators/min-number-value.validator';
import { ValidateOnFocusDirective } from '../../../directives/validate-on-focus.directive';
import { GlAccountSelectorComponent } from '../../../shared/accounting/gl-account-selector/gl-account-selector.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/** Custom Models */
import { ChargeStakeholderSplit, FeeSplitRequest } from '../models/fee-split.model';

/**
 * Edit Charge component.
 */
@Component({
  selector: 'mifosx-edit-charge',
  templateUrl: './edit-charge.component.html',
  styleUrls: ['./edit-charge.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    ValidateOnFocusDirective,
    GlAccountSelectorComponent,
    MatCheckbox,
    MatProgressSpinner
  ]
})
export class EditChargeComponent implements OnInit {
  /** Selected Data. */
  chargeData: any;
  /** Charge form. */
  chargeForm: UntypedFormGroup;
  /** Select Income. */
  selectedIncome: any;
  /** Select Time Type. */
  selectedTime: any;
  /** Select Currency Type. */
  selectedCurrency: any;
  /** Select Calculation Type. */
  selectedCalculation: any;
  /** Charge Time Type options. */
  chargeTimeTypeOptions: any;
  /** Charge Calculation Type options. */
  chargeCalculationTypeOptions: any;
  /** Show Penalty. */
  showPenalty = true;
  /** Add Fee Frequency. */
  addFeeFrequency = true;
  /** Show GL Accounts. */
  showGLAccount = false;
  /** Charge Payment Mode. */
  chargePaymentMode = false;
  /** Show Fee Options. */
  showFeeOptions = false;
  /** Fee split data */
  feeSplits: ChargeStakeholderSplit[] = [];
  availableFunds: any[] = [];
  glAccounts: any[] = [];
  private fundsLoaded = false;
  loading = false;

  /**
   * Retrieves the charge data from `resolve`.
   * @param {ProductsService} productsService Products Service.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(
    private productsService: ProductsService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService,
    private organizationService: OrganizationService
  ) {
    this.route.data.subscribe((data: { chargesTemplate: any }) => {
      this.chargeData = data.chargesTemplate;
    });
  }

  ngOnInit() {
    this.editChargeForm();
    this.setupFeeSplitDataLoading();
  }

  /**
   * Edit Charge form.
   */
  editChargeForm() {
    this.showFeeOptions = this.chargeData.feeInterval && this.chargeData.feeInterval > 0;

    this.chargeForm = this.formBuilder.group({
      name: [
        this.chargeData.name,
        Validators.required
      ],
      chargeAppliesTo: [
        { value: this.chargeData.chargeAppliesTo.id, disabled: true },
        Validators.required
      ],
      currencyCode: [
        this.chargeData.currency.code,
        Validators.required
      ],
      amount: [
        this.chargeData.amount,
        Validators.required
      ],
      active: [this.chargeData.active],
      penalty: [this.chargeData.penalty],
      minCap: [
        this.chargeData.minCap || null,
        [maxNumberValueValidator('maxCap')]
      ],
      maxCap: [
        this.chargeData.maxCap || null,
        [minNumberValueValidator('minCap')]
      ],
      chargeTimeType: [
        this.chargeData.chargeTimeType.id,
        Validators.required
      ],
      chargeCalculationType: [
        this.chargeData.chargeCalculationType.id,
        Validators.required
      ]
    });
    switch (this.chargeData.chargeAppliesTo.value) {
      case 'Loan': {
        this.chargeTimeTypeOptions = this.chargeData.loanChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.loanChargeCalculationTypeOptions;
        this.addFeeFrequency = true;
        this.chargePaymentMode = true;
        this.chargeForm.addControl(
          'chargePaymentMode',
          this.formBuilder.control(this.chargeData.chargePaymentMode.id, Validators.required)
        );
        if (this.showFeeOptions) {
          this.getFeeFrequency(this.showFeeOptions);
          this.chargeForm.patchValue({
            feeInterval: this.chargeData.feeInterval,
            feeFrequency: this.chargeData.feeFrequency.id
          });
        }
        break;
      }
      case 'Savings': {
        this.chargeTimeTypeOptions = this.chargeData.savingsChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.savingsChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        break;
      }
      case 'Shares': {
        this.chargeTimeTypeOptions = this.chargeData.shareChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.shareChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        this.showGLAccount = false;
        this.showPenalty = false;
        break;
      }
      default: {
        this.chargeCalculationTypeOptions = this.chargeData.clientChargeCalculationTypeOptions;
        this.chargeTimeTypeOptions = this.chargeData.clientChargeTimeTypeOptions;
        this.showGLAccount = true;
        this.addFeeFrequency = false;
        this.chargeForm.addControl(
          'incomeAccountId',
          this.formBuilder.control(this.chargeData.incomeOrLiabilityAccount?.id, Validators.required)
        );
        break;
      }
    }
    if (this.chargeData.taxGroup) {
      this.chargeForm.addControl(
        'taxGroupId',
        this.formBuilder.control({ value: this.chargeData.taxGroup.id, disabled: true })
      );
    } else {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({ value: '' }));
    }

    // Add fee split form array if enabled
    if (this.chargeData.enableFeeSplit) {
      this.chargeForm.addControl('stakeholderSplits', this.formBuilder.array([], [this.splitTotalsValidator()]));
      this.loadExistingFeeSplits();
    }
  }

  /**
   * Custom validator for split totals
   */
  private splitTotalsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const splitsArray = control as UntypedFormArray;
      if (!splitsArray) return null;

      const percentageSplits = splitsArray.controls.filter((c) => c.get('splitType')?.value === 'PERCENTAGE');

      const totalPercentage = percentageSplits.reduce((sum, c) => sum + (c.get('splitValue')?.value || 0), 0);

      if (totalPercentage > 100) {
        return {
          totalPercentageExceeded: {
            current: totalPercentage,
            max: 100
          }
        };
      }

      return null;
    };
  }

  /**
   * Custom validator for split values
   */
  private splitValueValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const splitType = control.parent?.get('splitType')?.value;

      if (splitType === 'PERCENTAGE' && value > 100) {
        return { maxPercentage: { value: value, max: 100 } };
      }

      return null;
    };
  }

  /**
   * Get Add Fee Frequency value.
   */
  getFeeFrequency(isChecked: boolean) {
    this.showFeeOptions = isChecked;
    if (isChecked) {
      this.chargeForm.addControl('feeInterval', this.formBuilder.control('', Validators.required));
      this.chargeForm.addControl('feeFrequency', this.formBuilder.control('', Validators.required));
    } else {
      this.chargeForm.removeControl('feeInterval');
      this.chargeForm.removeControl('feeFrequency');
    }
  }

  /**
   * Submits Edit Charge form.
   */
  submit() {
    if (this.loading) {
      return; // Prevent multiple submissions
    }

    // Check for form validation errors
    if (this.hasFormErrors()) {
      console.error('Form has validation errors:', this.getFeeSplitErrors());
      return;
    }

    this.loading = true;
    const charges = this.chargeForm.getRawValue();
    charges.locale = this.settingsService.language.code;

    if (charges.taxGroupId.value === '') {
      delete charges.taxGroupId;
    }
    if (!charges.minCap) {
      delete charges.minCap;
    }
    if (!charges.maxCap) {
      delete charges.maxCap;
    }

    // Extract fee split data before removing it from charge payload
    const stakeholderSplits = charges.stakeholderSplits;
    delete charges.stakeholderSplits;

    // Update charge first
    this.productsService.updateCharge(this.chargeData.id.toString(), charges).subscribe({
      next: (response: any) => {
        // Update fee splits if enabled and there are changes
        if (this.chargeData.enableFeeSplit && this.hasFeeSplitChanges(stakeholderSplits)) {
          this.updateFeeSplits(stakeholderSplits);
        } else {
          this.loading = false;
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      },
      error: (error) => {
        console.error('Error updating charge:', error);
        this.loading = false;
        // TODO: Show error notification
      }
    });
  }

  /**
   * Check if there are any actual changes in fee splits
   */
  private hasFeeSplitChanges(splits: any[]): boolean {
    if (!this.feeSplits || this.feeSplits.length === 0) {
      return splits && splits.length > 0; // New splits to add
    }

    if (!splits || splits.length === 0) {
      return this.feeSplits.length > 0; // All splits to remove
    }

    // Check if any existing splits have changes
    const existingSplits = this.feeSplits;
    const newSplits = splits;

    // Check for removed splits
    const existingIds = existingSplits.map((s) => s.id);
    const newIds = newSplits.filter((s) => s.id).map((s) => s.id);
    const removedSplits = existingIds.filter((id) => !newIds.includes(id));

    if (removedSplits.length > 0) {
      return true;
    }

    // Check for new splits
    const newSplitCount = newSplits.filter((s) => !s.id).length;
    if (newSplitCount > 0) {
      return true;
    }

    // Check for modified splits
    for (const newSplit of newSplits) {
      if (newSplit.id && this.hasChanges(newSplit)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Load existing fee splits for the charge
   */
  private loadExistingFeeSplits() {
    this.productsService.getChargeStakeholderSplits(this.chargeData.id).subscribe({
      next: (splits) => {
        this.feeSplits = splits;
        this.populateFeeSplitForm();
      },
      error: (error) => {
        console.error('Error loading existing fee splits:', error);
      }
    });
  }

  /**
   * Populate fee split form with existing data
   */
  private populateFeeSplitForm() {
    const splitsArray = this.chargeForm.get('stakeholderSplits') as UntypedFormArray;
    splitsArray.clear();

    this.feeSplits.forEach((split) => {
      const splitForm = this.formBuilder.group({
        id: [split.id],
        fundId: [
          split.fund?.id,
          Validators.required
        ],
        splitType: [
          split.splitType,
          Validators.required
        ],
        splitValue: [
          split.splitValue,
          [
            Validators.required,
            Validators.min(0),
            this.splitValueValidator()
          ]
        ],
        glAccountId: [
          split.glAccount?.id,
          Validators.required
        ]
      });
      splitsArray.push(splitForm);
    });
  }

  /**
   * Update fee splits for the charge
   */
  private updateFeeSplits(splits: any[]) {
    const operations: Observable<any>[] = [];

    splits.forEach((split) => {
      if (split.id && this.isExistingSplit(split.id)) {
        // Check if split actually changed
        if (this.hasChanges(split)) {
          // UPDATE existing split (PUT)
          operations.push(
            this.productsService.updateChargeStakeholderSplit(
              this.chargeData.id,
              split.id,
              this.toFeeSplitRequest(split)
            )
          );
        }
        // If no changes, skip operation
      } else {
        // CREATE new split (POST)
        operations.push(
          this.productsService.createChargeStakeholderSplit(this.chargeData.id, this.toFeeSplitRequest(split))
        );
      }
    });

    // Delete splits that no longer exist
    const existingSplitIds = this.feeSplits.map((s) => s.id);
    const newSplitIds = splits.filter((s) => s.id).map((s) => s.id);
    const splitsToDelete = existingSplitIds.filter((id) => !newSplitIds.includes(id));

    splitsToDelete.forEach((splitId) => {
      operations.push(this.productsService.deleteChargeStakeholderSplit(this.chargeData.id, splitId));
    });

    // Execute only necessary operations
    if (operations.length > 0) {
      forkJoin(operations).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {
          console.error('Error updating fee splits:', error);
          this.loading = false;
        }
      });
    } else {
      // No changes needed
      this.loading = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  /**
   * Check if a split is an existing one
   */
  private isExistingSplit(splitId: number): boolean {
    return this.feeSplits.some((existing) => existing.id === splitId);
  }

  /**
   * Check if a split has actual changes
   */
  private hasChanges(split: any): boolean {
    const existing = this.feeSplits.find((s) => s.id === split.id);
    if (!existing) return true;

    return (
      existing.fundId !== split.fundId ||
      existing.splitType !== split.splitType ||
      existing.splitValue !== split.splitValue ||
      existing.glAccountId !== split.glAccountId
    );
  }

  /**
   * Convert form data to fee split request
   */
  private toFeeSplitRequest(split: any): FeeSplitRequest {
    return {
      fundId: split.fundId,
      splitType: split.splitType,
      splitValue: split.splitValue,
      glAccountId: split.glAccountId,
      active: true
    };
  }

  /**
   * Setup fee split data loading
   */
  private setupFeeSplitDataLoading() {
    // Check if form is available before setting up subscriptions
    if (!this.chargeForm) {
      return;
    }

    // Load GL accounts from template data
    if (this.chargeData.incomeOrLiabilityAccountOptions) {
      this.glAccounts = [
        ...(this.chargeData.incomeOrLiabilityAccountOptions.incomeAccountOptions || []),
        ...(this.chargeData.incomeOrLiabilityAccountOptions.liabilityAccountOptions || [])
      ];
    }

    // Load funds if fee split is enabled
    if (this.chargeData.enableFeeSplit && !this.fundsLoaded) {
      this.loadFunds();
    }
  }

  /**
   * Load funds from organization service
   */
  private loadFunds() {
    this.organizationService.getFunds().subscribe({
      next: (funds) => {
        this.availableFunds = funds;
        this.fundsLoaded = true;
      },
      error: (error) => {
        console.error('Error loading funds:', error);
      }
    });
  }

  /**
   * Getter for stakeholder splits form array
   */
  get stakeholderSplits(): UntypedFormArray {
    return this.chargeForm.get('stakeholderSplits') as UntypedFormArray;
  }

  /**
   * Add a new stakeholder split
   */
  addStakeholderSplit(): void {
    const splitForm = this.formBuilder.group({
      fundId: [
        '',
        Validators.required
      ],
      splitType: [
        'PERCENTAGE',
        Validators.required
      ],
      splitValue: [
        '',
        [
          Validators.required,
          Validators.min(0),
          this.splitValueValidator()
        ]
      ],
      glAccountId: [
        '',
        Validators.required
      ]
    });
    this.stakeholderSplits.push(splitForm);
  }

  /**
   * Remove a stakeholder split
   */
  removeStakeholderSplit(index: number): void {
    this.stakeholderSplits.removeAt(index);
  }

  /**
   * Get validation errors for fee splits
   */
  getFeeSplitErrors(): string[] {
    const errors: string[] = [];
    const splitsArray = this.chargeForm.get('stakeholderSplits') as UntypedFormArray;

    if (!splitsArray) return errors;

    const formErrors = splitsArray.errors;
    if (formErrors) {
      if (formErrors.totalPercentageExceeded) {
        errors.push(
          `Total percentage splits cannot exceed 100%. Current total: ${formErrors.totalPercentageExceeded.current}%`
        );
      }
    }

    // Check individual split errors
    splitsArray.controls.forEach((control, index) => {
      const splitErrors = control.errors;
      if (splitErrors) {
        if (splitErrors.maxPercentage) {
          errors.push(`Split ${index + 1}: Percentage cannot exceed 100%`);
        }
      }
    });

    return errors;
  }

  /**
   * Check if form has validation errors
   */
  hasFormErrors(): boolean {
    return this.chargeForm.invalid || this.getFeeSplitErrors().length > 0;
  }
}
