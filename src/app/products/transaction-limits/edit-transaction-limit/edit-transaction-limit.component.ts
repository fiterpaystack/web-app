/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'mifosx-edit-transaction-limit',
  templateUrl: './edit-transaction-limit.component.html',
  styleUrls: ['./edit-transaction-limit.component.scss'],
  imports: [
    MatCheckbox,
    ...STANDALONE_SHARED_IMPORTS
  ]
})
export class EditTransactionLimitComponent implements OnInit {
  transactionLimitForm: UntypedFormGroup;
  transactionLimitData: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: { transactionLimit: any }) => {
      this.transactionLimitData = data.transactionLimit;
    });
  }

  ngOnInit(): void {
    this.createTransactoinLimitForm();
  }

  /**
   * Create the transactionLimit Form
   */
  createTransactoinLimitForm() {
    this.transactionLimitForm = this.formBuilder.group({
      name: [
        this.transactionLimitData.name,
        Validators.required
      ],
      maxSingleDepositAmount: [
        this.transactionLimitData.maxSingleDepositAmount,
        [
          Validators.required,
          Validators.min(0)]
      ],
      balanceCumulative: [
        this.transactionLimitData.balanceCumulative,
        [
          Validators.required,
          Validators.min(0)]
      ],
      isActive: [
        this.transactionLimitData.isActive,
        Validators.required
      ],
      description: [
        this.transactionLimitData.description,
        Validators.required
      ]
    });
  }

  /**
   * Submit a new transactionLimit form
   */
  submit() {
    const transactionLimitFormData = this.transactionLimitForm.value;
    const locale = this.settingsService.language.code;
    const data = {
      ...transactionLimitFormData,
      locale
    };
    this.productsService.updateTransactionLimit(this.transactionLimitData.id, data).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
