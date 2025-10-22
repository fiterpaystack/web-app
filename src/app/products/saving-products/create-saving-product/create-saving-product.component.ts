/** Angular Imports */
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Components */
import { SavingProductDetailsStepComponent } from '../saving-product-stepper/saving-product-details-step/saving-product-details-step.component';
import { SavingProductCurrencyStepComponent } from '../saving-product-stepper/saving-product-currency-step/saving-product-currency-step.component';
import { SavingProductTermsStepComponent } from '../saving-product-stepper/saving-product-terms-step/saving-product-terms-step.component';
import { SavingProductSettingsStepComponent } from '../saving-product-stepper/saving-product-settings-step/saving-product-settings-step.component';
import { SavingProductChargesStepComponent } from '../saving-product-stepper/saving-product-charges-step/saving-product-charges-step.component';
import { SavingProductDiscountRulesStepComponent } from '../saving-product-stepper/saving-product-discount-rules-step/saving-product-discount-rules-step.component';
import { SavingProductAccountingStepComponent } from '../saving-product-stepper/saving-product-accounting-step/saving-product-accounting-step.component';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { Accounting } from 'app/core/utils/accounting';
import { MatStepper, MatStepperIcon, MatStep, MatStepLabel } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { SavingProductPreviewStepComponent } from '../saving-product-stepper/saving-product-preview-step/saving-product-preview-step.component';
import { SavingProductWithdrawalFrequencyStepComponent } from '../saving-product-stepper/saving-product-withdrawal-frequency-step/saving-product-withdrawal-frequency-step.component';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-create-saving-product',
  templateUrl: './create-saving-product.component.html',
  styleUrls: ['./create-saving-product.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatStepper,
    MatStepperIcon,
    FaIconComponent,
    MatStep,
    MatStepLabel,
    SavingProductDetailsStepComponent,
    SavingProductCurrencyStepComponent,
    SavingProductTermsStepComponent,
    SavingProductSettingsStepComponent,
    SavingProductChargesStepComponent,
    SavingProductDiscountRulesStepComponent,
    SavingProductAccountingStepComponent,
    SavingProductPreviewStepComponent,
    SavingProductWithdrawalFrequencyStepComponent
  ]
})
export class CreateSavingProductComponent {
  @ViewChild(SavingProductDetailsStepComponent, { static: true })
  savingProductDetailsStep: SavingProductDetailsStepComponent;
  @ViewChild(SavingProductCurrencyStepComponent, { static: true })
  savingProductCurrencyStep: SavingProductCurrencyStepComponent;
  @ViewChild(SavingProductTermsStepComponent, { static: true }) savingProductTermsStep: SavingProductTermsStepComponent;
  @ViewChild(SavingProductSettingsStepComponent, { static: true })
  savingProductSettingsStep: SavingProductSettingsStepComponent;
  @ViewChild(SavingProductChargesStepComponent, { static: true })
  savingProductChargesStep: SavingProductChargesStepComponent;
  @ViewChild(SavingProductDiscountRulesStepComponent, { static: true })
  savingProductDiscountRulesStep: SavingProductDiscountRulesStepComponent;
  @ViewChild(SavingProductAccountingStepComponent, { static: true })
  savingProductAccountingStep: SavingProductAccountingStepComponent;
  @ViewChild(SavingProductWithdrawalFrequencyStepComponent, { static: true })
  savingProductWithdrawalFrequencyStep: SavingProductWithdrawalFrequencyStepComponent;

  savingProductsTemplate: any;
  accountingRuleData: string[] = [];

  /**
   * @param {ActivatedRoute} route Activated Route.
   * @param {ProductsService} productsService Products Service.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service.
   */

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private settingsService: SettingsService,
    private accounting: Accounting
  ) {
    this.route.data.subscribe((data: { savingProductsTemplate: any }) => {
      this.savingProductsTemplate = data.savingProductsTemplate;
    });
    this.accountingRuleData = this.accounting.getAccountingRulesForSavings();
  }

  get savingProductDetailsForm() {
    return this.savingProductDetailsStep.savingProductDetailsForm;
  }

  get savingProductCurrencyForm() {
    return this.savingProductCurrencyStep.savingProductCurrencyForm;
  }

  get savingProductTermsForm() {
    return this.savingProductTermsStep.savingProductTermsForm;
  }

  get savingProductSettingsForm() {
    return this.savingProductSettingsStep.savingProductSettingsForm;
  }

  get savingProductAccountingForm() {
    return this.savingProductAccountingStep.savingProductAccountingForm;
  }

  get savingProductDiscountForm() {
    return this.savingProductDiscountRulesStep.savingProductDiscountRules;
  }

  get savingProductFormValid() {
    return (
      this.savingProductDetailsForm.valid &&
      this.savingProductCurrencyForm.valid &&
      this.savingProductTermsForm.valid &&
      this.savingProductSettingsForm.valid &&
      this.savingProductAccountingForm.valid
    );
  }

  get savingProduct() {
    return {
      ...this.savingProductDetailsStep.savingProductDetails,
      ...this.savingProductCurrencyStep.savingProductCurrency,
      ...this.savingProductTermsStep.savingProductTerms,
      ...this.savingProductSettingsStep.savingProductSettings,
      ...this.savingProductChargesStep.savingProductCharges,
      ...this.savingProductDiscountRulesStep.savingProductDiscountRules,
      ...this.savingProductWithdrawalFrequencyStep.savingProductWithdrawalFrequency,
      ...this.savingProductAccountingStep.savingProductAccounting
    };
  }

  submit() {
    // TODO: Update once language and date settings are setup
    const savingProduct = {
      ...this.savingProduct,
      charges: this.savingProduct.charges.map((charge: any) => ({ id: charge.id })),
      discountRules: this.savingProduct.discountRules.map((rule: any) => ({ id: rule.id })),
      locale: this.settingsService.language.code // locale required for nominalAnnualInterestRate
    };
    delete savingProduct.advancedAccountingRules;
    this.productsService.createSavingProduct(savingProduct).subscribe((response: any) => {
      this.router.navigate(
        [
          '../',
          response.resourceId
        ],
        { relativeTo: this.route }
      );
    });
  }
}
