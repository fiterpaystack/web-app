/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';

/** rxjs Imports */
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { DiscountRulesService } from '../../discount-rules/services/discount-rules.service';
import { SettingsService } from 'app/settings/settings.service';
import { OrganizationService } from 'app/organization/organization.service';
import { maxNumberValueValidator } from 'app/shared/validators/max-number-value.validator';
import { minNumberValueValidator } from 'app/shared/validators/min-number-value.validator';
import { ValidateOnFocusDirective } from '../../../directives/validate-on-focus.directive';
import { GlAccountSelectorComponent } from '../../../shared/accounting/gl-account-selector/gl-account-selector.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
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
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinner,
    MatDivider
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
  showChart: boolean = false;
  dataSource = new MatTableDataSource<UntypedFormGroup>();
  /** Fee split data */
  feeSplits: ChargeStakeholderSplit[] = [];
  availableFunds: any[] = [];
  glAccounts: any[] = [];
  private fundsLoaded = false;
  loading = false;
  /** Original tax group id captured at load for comparison */
  originalTaxGroupId: number | null = null;
  /** Available discount rules */
  availableDiscountRules: any[] = [];
  /** Selected discount rules */
  selectedDiscountRules: any[] = [];
  /** Filtered available rules (excluding already selected ones) */
  filteredAvailableRules: any[] = [];

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
    private discountRulesService: DiscountRulesService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService,
    private organizationService: OrganizationService,
    private dialog: MatDialog
  ) {
    this.route.data.subscribe((data: { chargesTemplate: any }) => {
      this.chargeData = data.chargesTemplate;
    });
  }

  ngOnInit() {
    this.editChargeForm();
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
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
      ],
      enableSlabs: [this.chargeData.chargeSlabs?.length > 0],
      chartSlabs: this.formBuilder.array([]),
      enableFeeSplit: [this.chargeData.enableFeeSplit === true]
    });

    /** Pre-populate slabs if present */
    if (this.chargeData.chargeSlabs?.length) {
      this.chargeData.chargeSlabs.forEach((slab: any) => this.addSlab(slab));
      this.chargeForm.get('amount')?.clearValidators();
      this.chargeForm.get('amount')?.updateValueAndValidity();
      this.dataSource.data = this.chartSlabs.controls as FormGroup[];
    }

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
    this.originalTaxGroupId = this.chargeData.taxGroup ? this.chargeData.taxGroup.id : null;
    this.chargeForm.addControl('taxGroupId', this.formBuilder.control(this.originalTaxGroupId));

    /** Watch enableSlabs changes */
    this.chargeForm.get('enableSlabs')?.valueChanges.subscribe((enabled) => {
      if (enabled) {
        this.chargeForm.get('amount')?.clearValidators();
      } else {
        this.chargeForm.get('amount')?.setValidators([
          Validators.required,
          Validators.pattern('^\\s*(?=.*[1-9])\\d*(?:\\.\\d+)?\\s*$')]);
      }
      this.chargeForm.get('amount')?.updateValueAndValidity();
    });

    // Initialize fee split form array based on toggle current value
    if (this.chargeForm.get('enableFeeSplit')?.value) {
      this.chargeForm.addControl('stakeholderSplits', this.formBuilder.array([], [this.splitTotalsValidator()]));
      this.loadExistingFeeSplits();
    }

    // React to enableFeeSplit changes
    this.chargeForm.get('enableFeeSplit')?.valueChanges.subscribe((enabled: boolean) => {
      const hasArray = !!this.chargeForm.get('stakeholderSplits');
      if (enabled && !hasArray) {
        this.chargeForm.addControl('stakeholderSplits', this.formBuilder.array([], [this.splitTotalsValidator()]));
        if (!this.fundsLoaded) {
          this.loadFunds();
        }
        this.loadExistingFeeSplits();
      } else if (!enabled && hasArray) {
        this.chargeForm.removeControl('stakeholderSplits');
      }
    });

    // Add discount rules form control if charge applies to savings
    if (this.chargeData.chargeAppliesTo.id === 2) {
      // Initialize selected discount rules from existing data
      this.selectedDiscountRules = this.chargeData.additionalAttributes?.discountRules || [];
      this.loadDiscountRules();
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

  displayedColumns: string[] = [
    'fromAmount',
    'toAmount',
    'value',
    'actions'
  ];
  get isChartSelected(): boolean {
    return this.chargeForm.get('enableSlabs')?.value === true;
  }
  get chartSlabs(): UntypedFormArray {
    return this.chargeForm.get('chartSlabs') as UntypedFormArray;
  }

  /** Add a new slab row */
  addSlab(slab?: any): void {
    const slabsArray = this.chargeForm.get('chartSlabs') as UntypedFormArray;
    let newFromAmount = '';
    if (slabsArray.length > 0) {
      const lastSlab = slabsArray.at(slabsArray.length - 1) as UntypedFormGroup;
      const lastToAmount = lastSlab.get('toAmount')?.value;

      if (lastToAmount && !isNaN(lastToAmount)) {
        newFromAmount = (parseInt(lastToAmount, 10) + 1).toString();
      }
    }
    this.chartSlabs.push(
      this.formBuilder.group({
        fromAmount: [
          slab?.fromAmount || newFromAmount,
          Validators.required
        ],
        toAmount: [slab?.toAmount || ''],
        value: [
          slab?.value || '',
          Validators.required
        ]
      })
    );
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
  }

  /** Remove a slab row */
  removeSlab(index: number): void {
    this.chartSlabs.removeAt(index);
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
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

    if (charges.taxGroupId === '' || charges.taxGroupId === undefined) {
      delete charges.taxGroupId;
    }
    // Allow explicit null to remove association; keep as-is
    if (!charges.minCap) {
      delete charges.minCap;
    }
    if (!charges.maxCap) {
      delete charges.maxCap;
    }
    if (charges.enableSlabs) {
      charges.chart = { chartSlabs: charges.chartSlabs };
      delete charges.amount;
    } else {
      delete charges.chart;
    }

    // Transform discount rules from array of objects to array of objects with id field
    if (this.selectedDiscountRules && this.selectedDiscountRules.length > 0) {
      charges.discountRules = this.selectedDiscountRules.map((rule: any) => ({ id: rule.id }));
    } else {
      charges.discountRules = [];
    }

    // Extract fee split data and record toggle state; API for charge update doesn't accept splits array
    const stakeholderSplits = charges.stakeholderSplits;
    const newEnableFeeSplit: boolean = !!charges.enableFeeSplit;
    delete charges.stakeholderSplits;

    // Update charge first
    this.productsService.updateCharge(this.chargeData.id.toString(), charges).subscribe({
      next: (response: any) => {
        const previouslyEnabled = !!this.chargeData.enableFeeSplit;

        // Case 1: previously enabled -> now disabled: delete all existing splits
        if (previouslyEnabled && !newEnableFeeSplit) {
          if (this.feeSplits && this.feeSplits.length > 0) {
            const ops = this.feeSplits.map((s) =>
              this.productsService.deleteChargeStakeholderSplit(this.chargeData.id, s.id!)
            );
            forkJoin(ops).subscribe({
              next: () => {
                this.loading = false;
                this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: () => {
                this.loading = false;
                this.router.navigate(['../'], { relativeTo: this.route });
              }
            });
          } else {
            this.loading = false;
            this.router.navigate(['../'], { relativeTo: this.route });
          }
          return;
        }

        // Case 2: previously disabled -> now enabled: create all provided splits
        if (!previouslyEnabled && newEnableFeeSplit) {
          if (stakeholderSplits && stakeholderSplits.length > 0) {
            const ops = stakeholderSplits.map((s: any) =>
              this.productsService.createChargeStakeholderSplit(this.chargeData.id, this.toFeeSplitRequest(s))
            );
            forkJoin(ops).subscribe({
              next: () => {
                this.loading = false;
                this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: () => {
                this.loading = false;
                this.router.navigate(['../'], { relativeTo: this.route });
              }
            });
          } else {
            this.loading = false;
            this.router.navigate(['../'], { relativeTo: this.route });
          }
          return;
        }

        // Case 3: remains enabled: diff and update
        if (previouslyEnabled && newEnableFeeSplit && this.hasFeeSplitChanges(stakeholderSplits)) {
          this.updateFeeSplits(stakeholderSplits);
          return;
        }

        // Case 4: remains disabled: nothing to do
        this.loading = false;
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: (error) => {
        console.error('Error updating charge:', error);
        this.loading = false;
        // TODO: Show error notification
      }
    });
  }

  /**
   * Handle selection changes for tax group with confirmation and revert on cancel
   */
  onTaxGroupSelectionChange(newTaxGroupId: number | null) {
    // If nothing changed, do nothing
    if (newTaxGroupId === this.originalTaxGroupId) {
      return;
    }

    // Add a small delay to allow the dropdown to close before showing the dialog
    setTimeout(() => {
      const heading = 'Confirm Tax Group Change';
      const dialogContext =
        newTaxGroupId === null
          ? 'Removing the tax group affects future transactions only. Historical transactions remain unchanged. Proceed to remove'
          : 'Changing the tax group affects future transactions only. Historical transactions remain unchanged. Proceed to change';

      const dialogRef = (this as any).dialog?.open
        ? (this as any).dialog.open(ConfirmationDialogComponent, {
            data: { heading, dialogContext, type: 'warn' }
          })
        : null;

      if (!dialogRef) {
        // If dialog isn't available, keep new value silently
        return;
      }

      dialogRef.afterClosed().subscribe((result: any) => {
        if (!result || !result.confirm) {
          // Revert selection
          this.chargeForm.patchValue({ taxGroupId: this.originalTaxGroupId });
        }
      });
    }, 100); // 100ms delay to allow dropdown to close
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
    if (this.chargeForm.get('enableFeeSplit')?.value && !this.fundsLoaded) {
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

  /**
   * Load available discount rules
   */
  private loadDiscountRules(): void {
    this.discountRulesService.getDiscountRules().subscribe({
      next: (discountRules: any[]) => {
        this.availableDiscountRules = discountRules.filter((rule: any) => rule.active);
        this.updateFilteredAvailableRules();
      },
      error: (error: any) => {
        console.error('Error loading discount rules:', error);
        this.availableDiscountRules = [];
        this.filteredAvailableRules = [];
      }
    });
  }

  /**
   * Update filtered available rules (exclude already selected ones)
   */
  private updateFilteredAvailableRules(): void {
    const selectedIds = this.selectedDiscountRules.map((rule) => rule.id);
    this.filteredAvailableRules = this.availableDiscountRules.filter((rule) => !selectedIds.includes(rule.id));
  }

  /**
   * Add a discount rule to the selected list
   */
  addDiscountRule(discountRuleSelect: any): void {
    if (
      discountRuleSelect.value &&
      !this.selectedDiscountRules.find((rule) => rule.id === discountRuleSelect.value.id)
    ) {
      this.selectedDiscountRules.push(discountRuleSelect.value);
      this.updateFilteredAvailableRules();
      discountRuleSelect.value = null; // Clear the selection
    }
  }

  /**
   * Remove a discount rule from the selected list
   */
  removeDiscountRule(index: number): void {
    this.selectedDiscountRules.splice(index, 1);
    this.updateFilteredAvailableRules();
  }

  /**
   * Format rule parameters for display
   */
  formatRuleParameters(ruleParametersJson: string): string {
    if (!ruleParametersJson) {
      return 'No parameters';
    }

    try {
      const params = JSON.parse(ruleParametersJson);
      return JSON.stringify(params, null, 2);
    } catch (error) {
      return ruleParametersJson;
    }
  }
}
