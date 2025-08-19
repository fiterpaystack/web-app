/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCheckbox } from '@angular/material/checkbox';

/**
 * Create Collateral component.
 */
@Component({
  selector: 'mifosx-create-transaction-limit',
  templateUrl: './create-transaction-limit.component.html',
  styleUrls: ['./create-transaction-limit.component.scss'],
  imports: [
    MatCheckbox,
    ...STANDALONE_SHARED_IMPORTS
  ]
})
export class CreateTransactionLimitComponent implements OnInit {
  /** Transaction Limit Form */
  transactionLimitForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.createTransactoinLimitForm();
  }

  /**
   * Create the transactionLimit Form
   */
  createTransactoinLimitForm() {
    this.transactionLimitForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      maxSingleDepositAmount: [
        '',
        [
          Validators.required,
          Validators.min(0)]
      ],
      balanceCumulative: [
        '',
        [
          Validators.required,
          Validators.min(0)]
      ],
      isActive: [
        true,
        Validators.required
      ],
      description: [
        '',
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
    this.productsService.createTransactionLimit(data).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
