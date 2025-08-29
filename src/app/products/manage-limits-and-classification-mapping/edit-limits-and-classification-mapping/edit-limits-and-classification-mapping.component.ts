/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatOption, MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-edit-limits-and-classification-mapping',
  templateUrl: './edit-limits-and-classification-mapping.component.html',
  styleUrls: ['./edit-limits-and-classification-mapping.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS
  ]
})
export class EditLimitsAndClassificationMappingComponent implements OnInit {
  limitAndClassificationMappingForm: UntypedFormGroup;
  limitAndClassificationMappingFormData: any;
  transactionLimitOptions: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: { limitsMapping: any }) => {
      this.limitAndClassificationMappingFormData = data.limitsMapping;
      this.transactionLimitOptions = data.limitsMapping.savingsAccountTransactionLimitsSettingDataCollection;
    });
  }

  ngOnInit(): void {
    this.createLimitAndClassificationMappingForm();
  }

  /**
   * Create the transactionLimit Form
   */
  createLimitAndClassificationMappingForm() {
    this.limitAndClassificationMappingForm = this.formBuilder.group({
      name: [
        ''
      ],
      globalLimitId: [
        ''
      ]
    });
    this.limitAndClassificationMappingForm.patchValue({
      name: this.limitAndClassificationMappingFormData.classificationName,
      globalLimitId: this.limitAndClassificationMappingFormData.limitId
    });
  }

  /**
   * Submit a new transactionLimit form
   */
  submit() {
    //clientClassificationId,globalLimitId
    const formValue = this.limitAndClassificationMappingForm.value;
    const body = {
      globalLimitId: formValue.globalLimitId,
      clientClassificationId: this.limitAndClassificationMappingFormData.classificationId
    };
    if (this.limitAndClassificationMappingFormData.limitId) {
      this.productsService
        .updateTransactionLimitToClassificationMapping(this.limitAndClassificationMappingFormData.id, body)
        .subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
    } else {
      this.productsService.createTransactionLimitToClassificationMapping(body).subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
    }
  }
}
