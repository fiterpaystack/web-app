/** Angular Imports */
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Components */
import { SavingProductDetailsStepComponent } from '../saving-product-stepper/saving-product-details-step/saving-product-details-step.component';
import { SavingProductCurrencyStepComponent } from '../saving-product-stepper/saving-product-currency-step/saving-product-currency-step.component';
import { SavingProductTermsStepComponent } from '../saving-product-stepper/saving-product-terms-step/saving-product-terms-step.component';
import { SavingProductSettingsStepComponent } from '../saving-product-stepper/saving-product-settings-step/saving-product-settings-step.component';
import { SavingProductChargesStepComponent } from '../saving-product-stepper/saving-product-charges-step/saving-product-charges-step.component';
import { SavingProductAccountingStepComponent } from '../saving-product-stepper/saving-product-accounting-step/saving-product-accounting-step.component';
import { SavingProductDiscountRulesStepComponent } from '../saving-product-stepper/saving-product-discount-rules-step/saving-product-discount-rules-step.component';

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
  selector: 'mifosx-edit-saving-product',
  templateUrl: './edit-saving-product.component.html',
  styleUrls: ['./edit-saving-product.component.scss'],
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
    SavingProductAccountingStepComponent,
    SavingProductDiscountRulesStepComponent,
    SavingProductPreviewStepComponent,
    SavingProductWithdrawalFrequencyStepComponent
  ]
})
export class EditSavingProductComponent {
  @ViewChild(SavingProductDetailsStepComponent, { static: true })
  savingProductDetailsStep: SavingProductDetailsStepComponent;
  @ViewChild(SavingProductCurrencyStepComponent, { static: true })
  savingProductCurrencyStep: SavingProductCurrencyStepComponent;
  @ViewChild(SavingProductTermsStepComponent, { static: true }) savingProductTermsStep: SavingProductTermsStepComponent;
  @ViewChild(SavingProductSettingsStepComponent, { static: true })
  savingProductSettingsStep: SavingProductSettingsStepComponent;
  @ViewChild(SavingProductChargesStepComponent, { static: true })
  savingProductChargesStep: SavingProductChargesStepComponent;
  @ViewChild(SavingProductAccountingStepComponent, { static: true })
  savingProductAccountingStep: SavingProductAccountingStepComponent;
  @ViewChild(SavingProductDiscountRulesStepComponent, { static: true })
  savingProductDiscountRulesStep: SavingProductDiscountRulesStepComponent;
  @ViewChild(SavingProductWithdrawalFrequencyStepComponent, { static: true })
  savingProductWithdrawalFrequencyStep: SavingProductWithdrawalFrequencyStepComponent;

  savingProductAndTemplate: any;
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
    this.route.data.subscribe((data: { savingProductAndTemplate: any }) => {
      this.savingProductAndTemplate = data.savingProductAndTemplate;
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

  get savingProductWithdrawalFrequencyForm() {
    return this.savingProductWithdrawalFrequencyStep.form;
  }

  get savingProductAccountingForm() {
    return this.savingProductAccountingStep.savingProductAccountingForm;
  }

  get savingProductFormValidAndNotPristine() {
    return (
      this.savingProductDetailsForm.valid &&
      this.savingProductCurrencyForm.valid &&
      this.savingProductTermsForm.valid &&
      this.savingProductSettingsForm.valid &&
      this.savingProductWithdrawalFrequencyForm.valid &&
      this.savingProductAccountingForm.valid &&
      (!this.savingProductDetailsForm.pristine ||
        !this.savingProductCurrencyForm.pristine ||
        !this.savingProductTermsForm.pristine ||
        !this.savingProductSettingsForm.pristine ||
        !this.savingProductChargesStep.pristine ||
        !this.savingProductWithdrawalFrequencyForm.pristine ||
        !this.savingProductAccountingForm.pristine ||
        !this.savingProductDiscountRulesStep.pristine)
    );
  }

  get savingProduct() {
    return {
      ...this.savingProductDetailsStep.savingProductDetails,
      ...this.savingProductCurrencyStep.savingProductCurrency,
      ...this.savingProductTermsStep.savingProductTerms,
      ...this.savingProductSettingsStep.savingProductSettings,
      ...this.savingProductChargesStep.savingProductCharges,
      ...this.savingProductWithdrawalFrequencyStep.savingProductWithdrawalFrequency,
      ...this.savingProductAccountingStep.savingProductAccounting,
      ...this.savingProductDiscountRulesStep.savingProductDiscountRules
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
    this.productsService
      .updateSavingProduct(this.savingProductAndTemplate.id, savingProduct)
      .subscribe((response: any) => {
        this.router.navigate(
          [
            '../../',
            response.resourceId
          ],
          { relativeTo: this.route }
        );
      });
  }
}
