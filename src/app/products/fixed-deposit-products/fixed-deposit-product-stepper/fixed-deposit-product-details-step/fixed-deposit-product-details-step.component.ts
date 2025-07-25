import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-fixed-deposit-product-details-step',
  templateUrl: './fixed-deposit-product-details-step.component.html',
  styleUrls: ['./fixed-deposit-product-details-step.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatStepperPrevious,
    FaIconComponent,
    MatStepperNext
  ]
})
export class FixedDepositProductDetailsStepComponent implements OnInit {
  @Input() fixedDepositProductsTemplate: any;

  fixedDepositProductDetailsForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.createFixedDepositProductDetailsForm();
  }

  ngOnInit() {
    if (!(this.fixedDepositProductsTemplate === undefined) && this.fixedDepositProductsTemplate.id) {
      this.fixedDepositProductDetailsForm.patchValue({
        name: this.fixedDepositProductsTemplate.name,
        shortName: this.fixedDepositProductsTemplate.shortName,
        description: this.fixedDepositProductsTemplate.description
      });
    }
  }

  createFixedDepositProductDetailsForm() {
    this.fixedDepositProductDetailsForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      shortName: [
        '',
        Validators.required
      ],
      description: [
        '',
        Validators.required
      ]
    });
  }

  get fixedDepositProductDetails() {
    return this.fixedDepositProductDetailsForm.value;
  }
}
