/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import {
  UntypedFormArray,
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
  ValidationErrors
} from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { forkJoin } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { DiscountRulesService } from '../../discount-rules/services/discount-rules.service';
import { SettingsService } from 'app/settings/settings.service';
import { OrganizationService } from 'app/organization/organization.service';
import { Dates } from 'app/core/utils/dates';
import { minNumberValueValidator } from 'app/shared/validators/min-number-value.validator';
import { maxNumberValueValidator } from 'app/shared/validators/max-number-value.validator';
import { MatDivider } from '@angular/material/divider';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ValidateOnFocusDirective } from '../../../directives/validate-on-focus.directive';
import { GlAccountSelectorComponent } from '../../../shared/accounting/gl-account-selector/gl-account-selector.component';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/** Custom Models */
import { FeeSplitRequest } from '../models/fee-split.model';

/**
 * Create charge component.
 */
@Component({
  selector: 'mifosx-create-charge',
  templateUrl: './create-charge.component.html',
  styleUrls: ['./create-charge.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatTableModule,
    MatDivider,
    MatCheckbox,
    MatProgressSpinner,
    ValidateOnFocusDirective,
    GlAccountSelectorComponent
  ]
})
export class CreateChargeComponent implements OnInit {
  /** Charge form. */
  chargeForm: UntypedFormGroup;
  /** Charges template data. */
  chargesTemplateData: any;
  /** Charge time type data. */
  chargeTimeTypeData: any;
  /** Charge calculation type data. */
  chargeCalculationTypeData: any = '';
  /** Income and liability account data */
  incomeAndLiabilityAccountData: any;
  /** Minimum due date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum due date allowed. */
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  /** Repeat every label */
  repeatEveryLabel: string;
  /** Currency decimal places */
  currencyDecimalPlaces: number;
  /** Available funds for stakeholder selection */
  availableFunds: any[] = [];
  /** Available GL accounts for fee split */
  glAccounts: any[] = [];
  /** Track if funds have been loaded */
  private fundsLoaded = false;
  /** Loading state for charge creation */
  loading = false;
  /** Available discount rules */
  availableDiscountRules: any[] = [];
  /** Selected discount rules */
  selectedDiscountRules: any[] = [];
  /** Filtered available rules (excluding already selected ones) */
  filteredAvailableRules: any[] = [];

  showChart: boolean = false;
  dataSource = new MatTableDataSource<UntypedFormGroup>();

  /**
   * Retrieves the charges template data and income and liability account data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {Dates} dateUtils Date Utils to format date.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private discountRulesService: DiscountRulesService,
    private route: ActivatedRoute,
    private router: Router,
    private dateUtils: Dates,
    private settingsService: SettingsService,
    private organizationService: OrganizationService
  ) {
    this.route.data.subscribe((data: { chargesTemplate: any }) => {
      this.chargesTemplateData = data.chargesTemplate;
      if (data.chargesTemplate.incomeOrLiabilityAccountOptions.liabilityAccountOptions) {
        this.incomeAndLiabilityAccountData =
          data.chargesTemplate.incomeOrLiabilityAccountOptions.incomeAccountOptions.concat(
            data.chargesTemplate.incomeOrLiabilityAccountOptions.liabilityAccountOptions
          );
      } else {
        this.incomeAndLiabilityAccountData = data.chargesTemplate.incomeOrLiabilityAccountOptions.incomeAccountOptions;
      }

      // Setup fee split data loading after template data is available
      this.setupFeeSplitDataLoading();
    });
  }

  /**
   * Creates and sets the charge form.
   */
  ngOnInit() {
    this.createChargeForm();
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
    this.setChargeForm();
    this.setConditionalControls();
    // in case the route data was already loaded before ngOnInit
    this.setupFeeSplitDataLoading();
    this.loadDiscountRules();

    this.chargeForm.get('enableSlabs')?.valueChanges.subscribe((checked: boolean) => {
      const amountControl = this.chargeForm.get('amount');
      if (checked) {
        // Checkbox selected → hide amount → clear validators
        amountControl?.clearValidators();
        amountControl?.updateValueAndValidity();
      } else {
        // Checkbox unselected → require amount again
        amountControl?.setValidators([
          Validators.required,
          Validators.pattern('^\\s*(?=.*[1-9])\\d*(?:\\.\\d+)?\\s*$')]);
        amountControl?.updateValueAndValidity();
      }
    });
  }

  /**
   * Creates the charge form.
   */
  createChargeForm() {
    this.chargeForm = this.formBuilder.group(
      {
        chargeAppliesTo: [
          '',
          Validators.required
        ],
        name: [
          '',
          Validators.required
        ],
        currencyCode: [
          '',
          Validators.required
        ],
        chargeTimeType: [
          '',
          Validators.required
        ],
        chargeCalculationType: [
          '',
          Validators.required
        ],
        amount: [
          '',
          [
            Validators.required,
            Validators.pattern('^\\s*(?=.*[1-9])\\d*(?:\\.\\d+)?\\s*$')]
        ],
        active: [false],
        penalty: [false],
        taxGroupId: [null],
        minCap: [
          null,
          [maxNumberValueValidator('maxCap')]
        ],
        maxCap: [
          null,
          [minNumberValueValidator('minCap')]
        ],
        /** New chart group */

        enableSlabs: [false],
        chartSlabs: this.formBuilder.array([]), // <-- IMPORTANT

        enableFeeSplit: [false],
        stakeholderSplits: this.formBuilder.array([])
      },
      { validators: this.validateFeeSplitTotals }
    );
  }

  displayedColumns: string[] = [
    'fromAmount',
    'toAmount',
    'value',
    'actions'
  ];

  get chartSlabControls() {
    return this.chartSlabs.controls;
  }

  /** Getter for chartSlabs form array */
  get chartSlabs(): FormArray {
    return this.chargeForm.get('chartSlabs') as FormArray;
  }

  /** Create one chart slab group */
  createChartSlab(newFormAmount: string): UntypedFormGroup {
    return this.formBuilder.group({
      fromAmount: [
        newFormAmount,
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d+)?$/)]
      ],
      toAmount: [],
      value: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d+)?$/)]
      ]
    });
  }

  /** Toggle chart slabs visibility */
  toggleChart(checked: boolean) {
    this.showChart = checked;
    if (checked && this.chartSlabs.length === 0) {
      this.addSlab(); // initialize with one row
    }
    if (!checked) {
      this.chartSlabs.clear();
    }
  }

  /** convenience getter for chartSlabs */

  /** add new slab row */
  addSlab() {
    const slabsArray = this.chargeForm.get('chartSlabs') as UntypedFormArray;

    let fromAmount = '';
    if (slabsArray.length > 0) {
      const lastSlab = slabsArray.at(slabsArray.length - 1) as UntypedFormGroup;
      const lastToAmount = lastSlab.get('toAmount')?.value;

      if (lastToAmount && !isNaN(lastToAmount)) {
        fromAmount = (parseInt(lastToAmount, 10) + 1).toString();
      }
    }
    this.chartSlabs.push(this.createChartSlab(fromAmount));
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
  }

  /** remove slab by index */
  removeSlab(index: number) {
    this.chartSlabs.removeAt(index);
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
  }

  get isChartSelected(): boolean {
    return this.chargeForm.get('enableSlabs')?.value === true;
  }

  /**
   * Sets the charge calculation type and charge time type data
   */
  setChargeForm() {
    this.chargeForm.get('chargeAppliesTo').valueChanges.subscribe((chargeAppliesTo) => {
      switch (chargeAppliesTo) {
        case 1:
          this.chargeCalculationTypeData = this.chargesTemplateData.loanChargeCalculationTypeOptions;
          this.chargeTimeTypeData = this.chargesTemplateData.loanChargeTimeTypeOptions;
          break;
        case 2:
          this.chargeCalculationTypeData = this.chargesTemplateData.savingsChargeCalculationTypeOptions;
          this.chargeTimeTypeData = this.chargesTemplateData.savingsChargeTimeTypeOptions;
          break;
        case 3:
          this.chargeCalculationTypeData = this.chargesTemplateData.clientChargeCalculationTypeOptions;
          this.chargeTimeTypeData = this.chargesTemplateData.clientChargeTimeTypeOptions;
          break;
        case 4:
          this.chargeCalculationTypeData = this.chargesTemplateData.shareChargeCalculationTypeOptions;
          this.chargeTimeTypeData = this.chargesTemplateData.shareChargeTimeTypeOptions;
          break;
      }
    });
  }

  /**
   * @returns {any} Filtered charge calculation type data.
   */
  filteredChargeCalculationType(): any {
    return this.chargeCalculationTypeData.filter((chargeCalculationType: any) => {
      if (
        this.chargeForm.get('chargeTimeType').value === 12 &&
        (chargeCalculationType.id === 3 || chargeCalculationType.id === 4)
      ) {
        return false;
      }
      if (this.chargeForm.get('chargeTimeType').value !== 12 && chargeCalculationType.id === 5) {
        return false;
      }
      if (this.chargeForm.get('chargeAppliesTo').value === 2) {
        if (
          !(
            this.chargeForm.get('chargeTimeType').value === 5 ||
            this.chargeForm.get('chargeTimeType').value === 16 ||
            this.chargeForm.get('chargeTimeType').value === 17
          ) &&
          chargeCalculationType.id === 2
        ) {
          return false;
        }
      }
      return true;
    });
  }

  showMinMaxCap(): boolean {
    const chargeAppliesTo = this.chargeForm.controls.chargeAppliesTo.value;
    const chargeCalculationType = this.chargeForm.controls.chargeCalculationType.value;
    const chargeTimeType = this.chargeForm.controls.chargeTimeType.value;

    if (chargeAppliesTo === 1) {
      return (
        chargeCalculationType === 2 ||
        chargeCalculationType === 3 ||
        chargeCalculationType === 4 ||
        chargeCalculationType === 5
      );
    } else if (chargeAppliesTo === 2) {
      return (chargeTimeType === 16 || chargeTimeType === 5) && chargeCalculationType === 2;
    } else if (chargeAppliesTo === 4) {
      return (chargeTimeType === 14 || chargeTimeType === 15) && chargeCalculationType === 2;
    }
    return false;
  }

  /**
   * Sets the conditional controls of the user form
   */
  setConditionalControls() {
    this.chargeForm.get('chargeAppliesTo').valueChanges.subscribe((chargeAppliesTo) => {
      this.chargeForm.get('penalty').enable();
      switch (chargeAppliesTo) {
        case 1: // Loan
          this.chargeForm.addControl('chargePaymentMode', new UntypedFormControl('', Validators.required));
          this.chargeForm.removeControl('incomeAccountId');
          break;
        case 2: // Savings
          this.chargeForm.removeControl('chargePaymentMode');
          this.chargeForm.removeControl('incomeAccountId');
          break;
        case 3: // Client
          this.chargeForm.removeControl('chargePaymentMode');
          this.chargeForm.addControl('incomeAccountId', new UntypedFormControl(''));
          break;
        case 4: // Shares
          this.chargeForm.removeControl('chargePaymentMode');
          this.chargeForm.removeControl('incomeAccountId');
          this.chargeForm.get('penalty').setValue(false);
          break;
      }
      this.chargeForm.get('chargeCalculationType').reset();
      this.chargeForm.get('chargeTimeType').reset();
    });
    this.chargeForm.get('chargeTimeType').valueChanges.subscribe((chargeTimeType) => {
      this.chargeForm.removeControl('feeFrequency');
      this.chargeForm.removeControl('feeInterval');
      this.chargeForm.removeControl('feeOnMonthDay');
      this.chargeForm.removeControl('addFeeFrequency');
      if (this.chargeForm.get('chargeAppliesTo').value !== 4) {
        this.chargeForm.get('penalty').enable();
      }
      switch (chargeTimeType) {
        case 6: // Annual Fee
          this.chargeForm.addControl('feeOnMonthDay', new UntypedFormControl('', Validators.required));
          break;
        case 7: // Monthly Fee
          this.chargeForm.addControl('feeOnMonthDay', new UntypedFormControl(''));
          this.chargeForm.addControl(
            'feeInterval',
            new UntypedFormControl('', [
              Validators.required,
              Validators.min(1),
              Validators.max(12),
              Validators.pattern('^[1-9]\\d*$')])
          );
          this.repeatEveryLabel = 'Months';
          break;
        case 9: // Overdue Fee
          this.chargeForm.get('penalty').setValue(true);
          this.chargeForm.addControl('addFeeFrequency', new UntypedFormControl(false));
          this.chargeForm.get('addFeeFrequency').valueChanges.subscribe((addFeeFrequency) => {
            if (addFeeFrequency) {
              this.chargeForm.addControl('feeFrequency', new UntypedFormControl('', Validators.required));
              this.chargeForm.addControl(
                'feeInterval',
                new UntypedFormControl('', [
                  Validators.required,
                  Validators.pattern('^[1-9]\\d*$')])
              );
            } else {
              this.chargeForm.removeControl('feeFrequency');
              this.chargeForm.removeControl('feeInterval');
            }
          });
          break;
        case 11: // Weekly Fee
          this.chargeForm.addControl(
            'feeInterval',
            new UntypedFormControl('', [
              Validators.required,
              Validators.pattern('^[1-9]\\d*$')])
          );
          this.repeatEveryLabel = 'Weeks';
          break;
      }
    });
    this.chargeForm.get('currencyCode').valueChanges.subscribe((currencyCode) => {
      this.currencyDecimalPlaces = this.chargesTemplateData.currencyOptions.find(
        (currency: any) => currency.code === currencyCode
      ).decimalPlaces;
    });
  }

  /**
   * Submits the charge form and creates charge,
   * if successful redirects to charges.
   */
  submit() {
    if (this.loading) {
      return; // Prevent multiple submissions
    }

    this.loading = true;
    const chargeFormData = this.chargeForm.value;
    const locale = this.settingsService.language.code;
    const prevFeeOnMonthDay: Date = this.chargeForm.value.feeOnMonthDay;
    const monthDayFormat = 'dd MMM';

    if (chargeFormData.feeOnMonthDay instanceof Date) {
      chargeFormData.feeOnMonthDay = this.dateUtils.formatDate(prevFeeOnMonthDay, monthDayFormat);
    }

    const data = {
      ...chargeFormData,
      monthDayFormat,
      locale,
      chart: {
        chartSlabs: chargeFormData.chartSlabs || []
      }
    };

    // Clean up form data
    delete data.addFeeFrequency;
    if (!data.taxGroupId) {
      delete data.taxGroupId;
    }
    if (!data.minCap) {
      delete data.minCap;
    }
    if (!data.maxCap) {
      delete data.maxCap;
    }
    delete (data as any).chartSlabs;

    // Transform discount rules from array of objects to array of objects with id field
    if (this.selectedDiscountRules && this.selectedDiscountRules.length > 0) {
      data.discountRules = this.selectedDiscountRules.map((rule: any) => ({ id: rule.id }));
    } else {
      data.discountRules = [];
    }

    // Extract fee split data before removing it from charge payload
    const stakeholderSplits = data.stakeholderSplits;
    const enableFeeSplit = data.enableFeeSplit;

    if (!enableFeeSplit) {
      delete data.enableFeeSplit;
      delete data.stakeholderSplits;
    } else {
      delete data.stakeholderSplits; // Remove from charge payload
    }

    // Create charge first
    this.productsService.createCharge(data).subscribe({
      next: (response: any) => {
        const chargeId = response.resourceId;

        // Create fee splits if enabled and splits are provided
        if (enableFeeSplit && stakeholderSplits && stakeholderSplits.length > 0) {
          this.createFeeSplits(chargeId, stakeholderSplits);
        } else {
          this.loading = false;
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      },
      error: (error) => {
        console.error('Error creating charge:', error);
        this.loading = false;
        // TODO: Show error notification to user
      }
    });
  }

  /**
   * Create fee splits for the newly created charge
   */
  private createFeeSplits(chargeId: number, splits: any[]) {
    const splitPromises = splits.map((split) => {
      const splitData: FeeSplitRequest = {
        fundId: split.fundId,
        splitType: split.splitType,
        splitValue: split.splitValue,
        glAccountId: split.glAccountId,
        active: true
      };
      return this.productsService.createChargeStakeholderSplit(chargeId, splitData);
    });

    forkJoin(splitPromises).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['../'], { relativeTo: this.route });
        // TODO: Show success notification
      },
      error: (error) => {
        console.error('Error creating fee splits:', error);
        this.loading = false;
        // TODO: Show error notification and potentially rollback charge creation
        // For now, navigate back but charge exists without splits
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }

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
          Validators.min(0)]
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
   * Validator for fee split totals
   */
  validateFeeSplitTotals(group: UntypedFormGroup): ValidationErrors | null {
    const enableFeeSplit = group.get('enableFeeSplit')?.value;
    if (!enableFeeSplit) {
      return null;
    }

    const stakeholderSplits = group.get('stakeholderSplits') as UntypedFormArray;
    let totalPercentage = 0;

    for (let i = 0; i < stakeholderSplits.length; i++) {
      const split = stakeholderSplits.at(i);
      const splitType = split.get('splitType')?.value;
      const splitValue = parseFloat(split.get('splitValue')?.value || '0');

      if (splitType === 'PERCENTAGE') {
        totalPercentage += splitValue;
      }
    }

    if (totalPercentage > 100) {
      return { totalPercentageExceeded: true };
    }

    return null;
  }

  /**
   * Setup fee split data loading with lazy loading approach
   */
  setupFeeSplitDataLoading(): void {
    // Use existing GL accounts from template data
    if (this.chargesTemplateData?.incomeOrLiabilityAccountOptions) {
      const incomeAccounts = this.chargesTemplateData.incomeOrLiabilityAccountOptions.incomeAccountOptions || [];
      const liabilityAccounts = this.chargesTemplateData.incomeOrLiabilityAccountOptions.liabilityAccountOptions || [];

      this.glAccounts = [
        ...incomeAccounts,
        ...liabilityAccounts
      ];
    } else {
      this.glAccounts = [];
    }

    // Check if form is available before setting up subscriptions
    if (!this.chargeForm) {
      return;
    }

    // Check initial state and load funds if fee split is already enabled
    const initialFeeSplitState = this.chargeForm.get('enableFeeSplit')?.value;

    if (initialFeeSplitState && !this.fundsLoaded) {
      this.loadFunds();
    }

    // Load funds when fee split is enabled (handles both initial state and changes)
    this.chargeForm.get('enableFeeSplit')?.valueChanges.subscribe((enabled) => {
      if (enabled && !this.fundsLoaded) {
        this.loadFunds();
      }
    });
  }

  /**
   * Load funds data when needed
   */
  private loadFunds(): void {
    this.organizationService.getFunds().subscribe({
      next: (funds) => {
        this.availableFunds = funds;
        this.fundsLoaded = true;
      },
      error: (error) => {
        console.error('Error loading funds:', error);
        this.availableFunds = [];
        this.fundsLoaded = false;
        // You could add user notification here
      }
    });
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
