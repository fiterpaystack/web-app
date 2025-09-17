/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { TranslateService } from '@ngx-translate/core';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { GlAccountSelectorComponent } from '../../../shared/accounting/gl-account-selector/gl-account-selector.component';

/**
 * Edit tax component.
 */
@Component({
  selector: 'mifosx-edit-tax-component',
  templateUrl: './edit-tax-component.component.html',
  styleUrls: ['./edit-tax-component.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    GlAccountSelectorComponent
  ]
})
export class EditTaxComponentComponent implements OnInit {
  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum start date allowed. */
  maxDate = new Date();
  /** Tax Component form. */
  taxComponentForm: UntypedFormGroup;
  /** Tax Component data. */
  taxComponentData: any;
  /** Tax Component template data. */
  taxComponentTemplateData: any;
  /** Credit Account Type data. */
  creditAccountTypeData: any;
  /** Credit Account data. */
  creditAccountData: any[] = [];

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {Dates} dateUtils Date Utils to format date.
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private dateUtils: Dates,
    private settingsService: SettingsService,
    private translateService: TranslateService
  ) {
    this.route.data.subscribe((data: { taxComponent: any; taxComponentTemplate?: any }) => {
      this.taxComponentData = data.taxComponent;
      this.taxComponentTemplateData = data.taxComponentTemplate;
    });
  }

  /**
   * Creates the edit tax component form.
   */
  ngOnInit() {
    this.minDate = this.settingsService.minAllowedDate;
    this.maxDate = this.settingsService.maxAllowedDate;
    this.editTaxComponent();
    this.setConditionalControls();
  }

  /**
   * Edit tax component form.
   */
  editTaxComponent() {
    this.creditAccountTypeData = this.taxComponentTemplateData?.glAccountTypeOptions || [];

    const selectedCreditAccountTypeId = this.taxComponentData?.creditAccountType?.id ?? null;
    // Preload GLs for the selected type
    if (selectedCreditAccountTypeId) {
      this.creditAccountData = this.getAccountsData(selectedCreditAccountTypeId);
    }

    this.taxComponentForm = this.formBuilder.group({
      name: [
        this.taxComponentData.name,
        [Validators.required]
      ],
      percentage: [
        this.taxComponentData.percentage,
        [
          Validators.required,
          Validators.pattern('^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$'),
          Validators.max(100)]
      ],
      startDate: [this.taxComponentData.startDate && new Date(this.taxComponentData.startDate)],
      creditAccountType: [selectedCreditAccountTypeId]
      // Added on demand in setConditionalControls if not present
    });

    // Add credit account control with initial value if present
    const initialCreditAccountId = this.taxComponentData?.creditAccount?.id ?? '';
    this.taxComponentForm.addControl(
      'creditAccountId',
      new UntypedFormControl(initialCreditAccountId, Validators.required)
    );
  }

  /**
   * Sets reactive handlers for dependent fields
   */
  setConditionalControls() {
    const creditCtrl = this.taxComponentForm.get('creditAccountType');
    if (creditCtrl) {
      creditCtrl.valueChanges.subscribe((creditAccountTypeId) => {
        this.creditAccountData = this.getAccountsData(creditAccountTypeId);
        if (!this.taxComponentForm.get('creditAccountId')) {
          this.taxComponentForm.addControl('creditAccountId', new UntypedFormControl('', Validators.required));
        } else {
          this.taxComponentForm.get('creditAccountId').setValue('');
        }
      });
    }
  }

  /**
   * @param accountTypeId Account type ID of account type.
   * @returns Accounts list for the type
   */
  getAccountsData(accountTypeId: number) {
    switch (accountTypeId) {
      case 1:
        return this.taxComponentTemplateData?.glAccountOptions?.assetAccountOptions || [];
      case 2:
        return this.taxComponentTemplateData?.glAccountOptions?.liabilityAccountOptions || [];
      case 3:
        return this.taxComponentTemplateData?.glAccountOptions?.equityAccountOptions || [];
      case 4:
        return this.taxComponentTemplateData?.glAccountOptions?.incomeAccountOptions || [];
      case 5:
        return this.taxComponentTemplateData?.glAccountOptions?.expenseAccountOptions || [];
      default:
        return [];
    }
  }

  /**
   * Submits the edit tax component form and edits tax component,
   * if successfull redirects to tax component.
   */
  submit() {
    const taxComponentFormData = this.taxComponentForm.value;
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevStartDate: Date = this.taxComponentForm.value.startDate;
    if (taxComponentFormData.startDate instanceof Date) {
      taxComponentFormData.startDate = this.dateUtils.formatDate(prevStartDate, dateFormat);
    }
    const data = {
      ...taxComponentFormData,
      dateFormat,
      locale
    };
    this.productsService.updateTaxComponent(this.taxComponentData.id, data).subscribe((response: any) => {
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
