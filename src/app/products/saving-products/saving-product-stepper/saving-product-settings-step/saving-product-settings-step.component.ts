import { Component, OnInit, Input } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-saving-product-settings-step',
  templateUrl: './saving-product-settings-step.component.html',
  styleUrls: ['./saving-product-settings-step.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatTooltip,
    MatCheckbox,
    MatDivider,
    MatStepperPrevious,
    FaIconComponent,
    MatStepperNext
  ]
})
export class SavingProductSettingsStepComponent implements OnInit {
  @Input() savingProductsTemplate: any;

  savingProductSettingsForm: UntypedFormGroup;

  lockinPeriodFrequencyTypeData: any;
  taxGroupData: any;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.createSavingProductSettingsForm();
    this.setConditionalControls();
  }

  ngOnInit() {
    this.lockinPeriodFrequencyTypeData = this.savingProductsTemplate.lockinPeriodFrequencyTypeOptions;
    this.taxGroupData = this.savingProductsTemplate.taxGroupOptions;

    // handle resolver shapes: some endpoints return product merged, others return { product, template }
    const productData =
      this.savingProductsTemplate && (this.savingProductsTemplate.product || this.savingProductsTemplate.savingProduct)
        ? this.savingProductsTemplate.product || this.savingProductsTemplate.savingProduct
        : this.savingProductsTemplate || {};
    // API may return EMT fields under additionalParameters or additionalAttributes depending on endpoint/version
    const ap =
      productData.additionalParameters ||
      productData.additionalAttributes ||
      (this.savingProductsTemplate &&
        (this.savingProductsTemplate.additionalParameters || this.savingProductsTemplate.additionalAttributes)) ||
      {};

    this.savingProductSettingsForm.patchValue({
      minRequiredOpeningBalance: this.savingProductsTemplate.minRequiredOpeningBalance,
      lockinPeriodFrequency: this.savingProductsTemplate.lockinPeriodFrequency,
      lockinPeriodFrequencyType:
        this.savingProductsTemplate.lockinPeriodFrequencyType &&
        this.savingProductsTemplate.lockinPeriodFrequencyType.id,
      withdrawalFeeForTransfers: this.savingProductsTemplate.withdrawalFeeForTransfers,
      minBalanceForInterestCalculation: this.savingProductsTemplate.minBalanceForInterestCalculation,
      enforceMinRequiredBalance: this.savingProductsTemplate.enforceMinRequiredBalance,
      minRequiredBalance: this.savingProductsTemplate.minRequiredBalance,
      allowOverdraft: this.savingProductsTemplate.allowOverdraft,
      minOverdraftForInterestCalculation: this.savingProductsTemplate.minOverdraftForInterestCalculation,
      nominalAnnualInterestRateOverdraft: this.savingProductsTemplate.nominalAnnualInterestRateOverdraft,
      overdraftLimit: this.savingProductsTemplate.overdraftLimit,
      isEmtLevyApplicableForDeposit:
        ap.isEmtLevyApplicableForDeposit !== undefined
          ? ap.isEmtLevyApplicableForDeposit
          : productData.isEmtLevyApplicableForDeposit !== undefined
            ? productData.isEmtLevyApplicableForDeposit
            : false,
      isEmtLevyApplicableForWithdraw:
        ap.isEmtLevyApplicableForWithdraw !== undefined
          ? ap.isEmtLevyApplicableForWithdraw
          : productData.isEmtLevyApplicableForWithdraw !== undefined
            ? productData.isEmtLevyApplicableForWithdraw
            : false,
      withHoldTax: this.savingProductsTemplate.withHoldTax,
      taxGroupId: this.savingProductsTemplate.taxGroup && this.savingProductsTemplate.taxGroup.id,
      isDormancyTrackingActive: this.savingProductsTemplate.isDormancyTrackingActive,
      daysToInactive: this.savingProductsTemplate.daysToInactive,
      daysToDormancy: this.savingProductsTemplate.daysToDormancy,
      daysToEscheat: this.savingProductsTemplate.daysToEscheat
    });

    // initialize override and EMT fields if template provides them
    if (
      ap.isEmtLevyApplicableForDeposit ||
      ap.isEmtLevyApplicableForWithdraw ||
      productData.isEmtLevyApplicableForDeposit ||
      productData.isEmtLevyApplicableForWithdraw
    ) {
      // ensure override control exists
      if (!this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting')) {
        this.savingProductSettingsForm.addControl('overrideGlobalEmtLevySetting', new UntypedFormControl(false));
      }
      const overrideValue =
        ap.overrideGlobalEmtLevySetting !== undefined
          ? ap.overrideGlobalEmtLevySetting
          : productData.overrideGlobalEmtLevySetting !== undefined
            ? productData.overrideGlobalEmtLevySetting
            : this.savingProductsTemplate.overrideGlobalEmtLevySetting;
      if (overrideValue) {
        this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting').setValue(overrideValue);
        // add emt amount/threshold controls
        if (!this.savingProductSettingsForm.get('emtLevyAmount')) {
          this.savingProductSettingsForm.addControl('emtLevyAmount', new UntypedFormControl(''));
        }
        if (!this.savingProductSettingsForm.get('emtLevyThreshold')) {
          this.savingProductSettingsForm.addControl('emtLevyThreshold', new UntypedFormControl(''));
        }
        const amount =
          ap.emtLevyAmount !== undefined
            ? ap.emtLevyAmount
            : productData.emtLevyAmount !== undefined
              ? productData.emtLevyAmount
              : this.savingProductsTemplate.emtLevyAmount;
        const threshold =
          ap.emtLevyThreshold !== undefined
            ? ap.emtLevyThreshold
            : productData.emtLevyThreshold !== undefined
              ? productData.emtLevyThreshold
              : this.savingProductsTemplate.emtLevyThreshold;
        this.savingProductSettingsForm.get('emtLevyAmount').setValue(amount);
        this.savingProductSettingsForm.get('emtLevyThreshold').setValue(threshold);
      }
    }
  }

  createSavingProductSettingsForm() {
    this.savingProductSettingsForm = this.formBuilder.group({
      minRequiredOpeningBalance: [''],
      lockinPeriodFrequency: [''],
      lockinPeriodFrequencyType: [''],
      withdrawalFeeForTransfers: [false],
      minBalanceForInterestCalculation: [''],
      enforceMinRequiredBalance: [false],
      minRequiredBalance: [''],
      allowOverdraft: [false],
      // EMT levy related controls (separate flags)
      isEmtLevyApplicableForDeposit: [false],
      isEmtLevyApplicableForWithdraw: [false],
      withHoldTax: [false],
      isDormancyTrackingActive: [false]
    });
  }

  setConditionalControls() {
    this.savingProductSettingsForm.get('allowOverdraft').valueChanges.subscribe((allowOverdraft: any) => {
      if (allowOverdraft) {
        this.savingProductSettingsForm.addControl('minOverdraftForInterestCalculation', new UntypedFormControl(''));
        this.savingProductSettingsForm.addControl('nominalAnnualInterestRateOverdraft', new UntypedFormControl(''));
        this.savingProductSettingsForm.addControl('overdraftLimit', new UntypedFormControl(''));
      } else {
        this.savingProductSettingsForm.removeControl('minOverdraftForInterestCalculation');
        this.savingProductSettingsForm.removeControl('nominalAnnualInterestRateOverdraft');
        this.savingProductSettingsForm.removeControl('overdraftLimit');
      }
    });

    this.savingProductSettingsForm.get('withHoldTax').valueChanges.subscribe((withHoldTax: any) => {
      if (withHoldTax) {
        this.savingProductSettingsForm.addControl('taxGroupId', new UntypedFormControl('', Validators.required));
      } else {
        this.savingProductSettingsForm.removeControl('taxGroupId');
      }
    });

    // EMT levy conditional controls
    // watch either deposit or withdraw EMT applicability
    const watchEmt = () => {
      const deposit = this.savingProductSettingsForm.get('isEmtLevyApplicableForDeposit')
        ? this.savingProductSettingsForm.get('isEmtLevyApplicableForDeposit').value
        : false;
      const withdraw = this.savingProductSettingsForm.get('isEmtLevyApplicableForWithdraw')
        ? this.savingProductSettingsForm.get('isEmtLevyApplicableForWithdraw').value
        : false;
      if (deposit || withdraw) {
        if (!this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting')) {
          this.savingProductSettingsForm.addControl('overrideGlobalEmtLevySetting', new UntypedFormControl(false));
        }
      } else {
        // remove override and any related fields
        if (this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting')) {
          this.savingProductSettingsForm.removeControl('overrideGlobalEmtLevySetting');
        }
        if (this.savingProductSettingsForm.get('emtLevyAmount')) {
          this.savingProductSettingsForm.removeControl('emtLevyAmount');
        }
        if (this.savingProductSettingsForm.get('emtLevyThreshold')) {
          this.savingProductSettingsForm.removeControl('emtLevyThreshold');
        }
      }
    };

    // subscribe to value changes to handle dynamic add/remove
    this.savingProductSettingsForm.valueChanges.subscribe(() => watchEmt());

    // react to override checkbox if present
    // use safe getter since control may not exist yet
    const watchOverride = () => {
      const overrideControl = this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting');
      if (!overrideControl) return;
      overrideControl.valueChanges.subscribe((override: any) => {
        if (override) {
          this.savingProductSettingsForm.addControl('emtLevyAmount', new UntypedFormControl(''));
          this.savingProductSettingsForm.addControl('emtLevyThreshold', new UntypedFormControl(''));
        } else {
          this.savingProductSettingsForm.removeControl('emtLevyAmount');
          this.savingProductSettingsForm.removeControl('emtLevyThreshold');
        }
      });
    };

    // subscribe once when override control is added/removed by listening to form changes
    this.savingProductSettingsForm.valueChanges.subscribe(() => watchOverride());

    this.savingProductSettingsForm
      .get('isDormancyTrackingActive')
      .valueChanges.subscribe((isDormancyTrackingActive: any) => {
        if (isDormancyTrackingActive) {
          this.savingProductSettingsForm.addControl('daysToInactive', new UntypedFormControl('', Validators.required));
          this.savingProductSettingsForm.addControl('daysToDormancy', new UntypedFormControl('', Validators.required));
          this.savingProductSettingsForm.addControl('daysToEscheat', new UntypedFormControl('', Validators.required));
        } else {
          this.savingProductSettingsForm.removeControl('daysToInactive');
          this.savingProductSettingsForm.removeControl('daysToDormancy');
          this.savingProductSettingsForm.removeControl('daysToEscheat');
        }
      });
  }

  get savingProductSettings() {
    const value = this.savingProductSettingsForm.value || {};
    // ensure EMT fields are always present even if controls were added/removed dynamically
    const isEmtLevyApplicableForDeposit = this.savingProductSettingsForm.get('isEmtLevyApplicableForDeposit')
      ? this.savingProductSettingsForm.get('isEmtLevyApplicableForDeposit').value
      : value.isEmtLevyApplicableForDeposit !== undefined
        ? value.isEmtLevyApplicableForDeposit
        : false;
    const isEmtLevyApplicableForWithdraw = this.savingProductSettingsForm.get('isEmtLevyApplicableForWithdraw')
      ? this.savingProductSettingsForm.get('isEmtLevyApplicableForWithdraw').value
      : value.isEmtLevyApplicableForWithdraw !== undefined
        ? value.isEmtLevyApplicableForWithdraw
        : false;
    const overrideGlobalEmtLevySetting = this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting')
      ? this.savingProductSettingsForm.get('overrideGlobalEmtLevySetting').value
      : value.overrideGlobalEmtLevySetting;
    const emtLevyAmount = this.savingProductSettingsForm.get('emtLevyAmount')
      ? this.savingProductSettingsForm.get('emtLevyAmount').value
      : value.emtLevyAmount;
    const emtLevyThreshold = this.savingProductSettingsForm.get('emtLevyThreshold')
      ? this.savingProductSettingsForm.get('emtLevyThreshold').value
      : value.emtLevyThreshold;

    return {
      ...value,
      isEmtLevyApplicableForDeposit,
      isEmtLevyApplicableForWithdraw,
      overrideGlobalEmtLevySetting,
      emtLevyAmount,
      emtLevyThreshold
    };
  }
}
