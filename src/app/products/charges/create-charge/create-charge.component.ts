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
import { AssignedDiscountRule, DiscountRuleAssignment } from '../../discount-rules/models/discount-rule.model';

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
  availableDiscountRules: AssignedDiscountRule[] = [];
  /** Selected discount rules */
  selectedDiscountRules: AssignedDiscountRule[] = [];
  /** Filtered available rules (excluding already selected ones) */
  filteredAvailableRules: AssignedDiscountRule[] = [];
  /** Combination strategies exposed to the UI */
  readonly discountCombinationOptions = [
    {
      value: 'SUM_CAP',
      label: 'Sum with cap (default)'
    }
  ];
  private readonly PRIORITY_MIN = 0;
  private readonly PRIORITY_MAX = 999;
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
        stakeholderSplits: this.formBuilder.array([]),
        allRulesRequired: [{ value: false, disabled: true }],
        combinationStrategy: [
          { value: 'SUM_CAP', disabled: true },
          Validators.required
        ]
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
      this.handleDiscountEligibility(chargeAppliesTo);
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
    // Initialize discount controls based on default value
    this.handleDiscountEligibility(this.chargeForm.get('chargeAppliesTo')?.value);
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
    if (this.loading || this.discountPriorityInvalid) {
      return; // Prevent multiple submissions or invalid discount configuration
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

    // Discount assignment and policy payloads (only when savings-related)
    if (this.isSavingsCharge()) {
      data.discountRules = this.selectedDiscountRules.map((rule) => this.toDiscountAssignment(rule));
      data.allRulesRequired = this.chargeForm.get('allRulesRequired')?.value ?? false;
      data.combinationStrategy = this.chargeForm.get('combinationStrategy')?.value ?? 'SUM_CAP';
    } else {
      data.discountRules = [];
      delete data.allRulesRequired;
      delete data.combinationStrategy;
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
      !this.selectedDiscountRules.find(
        (rule) => this.getRuleIdentifier(rule) === this.getRuleIdentifier(discountRuleSelect.value)
      )
    ) {
      const normalizedRule = this.buildAssignedRule(discountRuleSelect.value);
      this.selectedDiscountRules = [
        ...this.selectedDiscountRules,
        normalizedRule
      ];
      this.updateFilteredAvailableRules();
      discountRuleSelect.value = null; // Clear the selection
      this.markDiscountsDirty();
    }
  }

  /**
   * Remove a discount rule from the selected list
   */
  removeDiscountRule(index: number): void {
    this.selectedDiscountRules.splice(index, 1);
    this.selectedDiscountRules = [...this.selectedDiscountRules];
    this.updateFilteredAvailableRules();
    this.markDiscountsDirty();
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

  /**
   * True when savings is selected for charge applies to
   */
  isSavingsCharge(): boolean {
    return this.chargeForm?.get('chargeAppliesTo')?.value === 2;
  }

  /**
   * True when there are invalid priority values
   */
  get discountPriorityInvalid(): boolean {
    if (!this.selectedDiscountRules.length) {
      return false;
    }
    return this.selectedDiscountRules.some((rule) => !this.isPriorityWithinRange(rule.assignmentPriority));
  }

  /**
   * Helper to show error text when discount validation fails
   */
  get discountValidationMessage(): string | null {
    if (!this.discountPriorityInvalid) {
      return null;
    }
    return `Priority must be between ${this.PRIORITY_MIN} and ${this.PRIORITY_MAX}.`;
  }

  /**
   * Handle priority edits from the UI
   */
  updateAssignmentPriority(rule: AssignedDiscountRule, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const parsed = Number(value);
    if (isNaN(parsed)) {
      rule.assignmentPriority = this.PRIORITY_MIN;
    } else {
      rule.assignmentPriority = Math.min(Math.max(parsed, this.PRIORITY_MIN), this.PRIORITY_MAX);
    }
    this.markDiscountsDirty();
  }

  /**
   * Enable/disable discount controls when charge type changes
   */
  private handleDiscountEligibility(chargeAppliesTo: number): void {
    const requiresDiscountControls = chargeAppliesTo === 2;
    const discountControls: string[] = [
      'allRulesRequired',
      'combinationStrategy'
    ];

    discountControls.forEach((controlName) => {
      const control = this.chargeForm.get(controlName as string);
      if (!control) {
        return;
      }
      if (requiresDiscountControls) {
        control.enable({ emitEvent: false });
      } else {
        control.disable({ emitEvent: false });
        if (controlName === 'allRulesRequired') {
          control.patchValue(false, { emitEvent: false });
        }
        if (controlName === 'combinationStrategy') {
          control.patchValue('SUM_CAP', { emitEvent: false });
        }
      }
    });

    if (!requiresDiscountControls && this.selectedDiscountRules.length) {
      this.selectedDiscountRules = [];
      this.updateFilteredAvailableRules();
    }
  }

  /**
   * Map UI rule to assignment payload
   */
  private toDiscountAssignment(rule: AssignedDiscountRule): DiscountRuleAssignment {
    return {
      id: this.getRuleIdentifier(rule),
      assignmentPriority: rule.assignmentPriority ?? this.PRIORITY_MIN
    };
  }

  /**
   * Normalize assigned rule payload
   */
  private buildAssignedRule(rule: AssignedDiscountRule): AssignedDiscountRule {
    return {
      ...rule,
      ruleId: rule.ruleId ?? rule.id,
      assignmentPriority: rule.assignmentPriority ?? this.PRIORITY_MIN
    };
  }

  /**
   * Normalize rule identifier regardless of API shape
   */
  private getRuleIdentifier(rule: AssignedDiscountRule): number {
    return rule.ruleId ?? rule.id ?? 0;
  }

  private isPriorityWithinRange(priority: number | undefined | null): boolean {
    if (priority === null || priority === undefined) {
      return false;
    }
    return priority >= this.PRIORITY_MIN && priority <= this.PRIORITY_MAX;
  }

  private markDiscountsDirty(): void {
    this.chargeForm.markAsDirty();
    this.chargeForm.markAsTouched();
    this.chargeForm.updateValueAndValidity();
  }
}
