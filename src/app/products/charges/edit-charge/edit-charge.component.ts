/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  ReactiveFormsModule,
  UntypedFormArray
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { maxNumberValueValidator } from 'app/shared/validators/max-number-value.validator';
import { minNumberValueValidator } from 'app/shared/validators/min-number-value.validator';
import { ValidateOnFocusDirective } from '../../../directives/validate-on-focus.directive';
import { GlAccountSelectorComponent } from '../../../shared/accounting/gl-account-selector/gl-account-selector.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

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
    MatIconModule
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
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: { chargesTemplate: any }) => {
      this.chargeData = data.chargesTemplate;
    });
  }

  ngOnInit() {
    this.editChargeForm();
    this.dataSource.data = this.chartSlabs.controls as FormGroup[];
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
      chartSlabs: this.formBuilder.array([])
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
    if (this.chargeData.taxGroup) {
      this.chargeForm.addControl(
        'taxGroupId',
        this.formBuilder.control({ value: this.chargeData.taxGroup.id, disabled: true })
      );
    } else {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({ value: '' }));
    }
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
    if (charges.enableSlabs) {
      charges.chart = { chartSlabs: charges.chartSlabs };
      delete charges.amount;
    } else {
      delete charges.chart;
    }
    this.productsService.updateCharge(this.chargeData.id.toString(), charges).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
