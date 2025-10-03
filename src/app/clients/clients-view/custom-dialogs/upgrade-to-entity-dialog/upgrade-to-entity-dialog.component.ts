/** Angular Imports */
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { Dates } from 'app/core/utils/dates';
import { SettingsService } from 'app/settings/settings.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Upgrade to Entity dialog component.
 */
@Component({
  selector: 'mifosx-upgrade-to-entity-dialog',
  templateUrl: './upgrade-to-entity-dialog.component.html',
  styleUrls: ['./upgrade-to-entity-dialog.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatIcon
  ]
})
export class UpgradeToEntityDialogComponent implements OnInit {
  /** Upgrade to Entity Form */
  upgradeToEntityForm: UntypedFormGroup;

  /** Constitution Options */
  constitutionOptions: any[] = [];
  /** Business Line Options */
  businessLineOptions: any[] = [];

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Dialog data.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {Dates} dateUtils Date Utils.
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(
    public dialogRef: MatDialogRef<UpgradeToEntityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: UntypedFormBuilder,
    private dateUtils: Dates,
    private settingsService: SettingsService
  ) {
    this.constitutionOptions = data.constitutionOptions || [];
    this.businessLineOptions = data.businessLineOptions || [];
  }

  ngOnInit() {
    this.maxDate = this.settingsService.businessDate;
    this.createUpgradeToEntityForm();
  }

  /**
   * Creates the upgrade to entity form.
   */
  createUpgradeToEntityForm() {
    this.upgradeToEntityForm = this.formBuilder.group({
      entityName: [
        '',
        [Validators.required]
      ],
      constitutionId: [
        '',
        [Validators.required]
      ],
      incorpNumber: [''],
      incorpValidityTillDate: [''],
      mainBusinessLineId: [''],
      remarks: [''],
      incorporationDate: [
        new Date(),
        [Validators.required]
      ],
      upgradeDate: [new Date()]
    });
  }

  /**
   * Returns form control value.
   */
  get formControls() {
    return this.upgradeToEntityForm.controls;
  }

  /**
   * Returns the form value.
   */
  get formValue() {
    const formData = this.upgradeToEntityForm.value;
    const dateFormat = 'dd MMMM yyyy';
    const locale = 'en';

    // Build clientNonPersonDetails object with only non-empty values
    const clientNonPersonDetails: any = {
      constitutionId: formData.constitutionId,
      dateFormat: dateFormat,
      locale: locale
    };

    // Add optional fields only if they have values
    if (formData.incorpNumber) {
      clientNonPersonDetails.incorpNumber = formData.incorpNumber;
    }
    if (formData.incorpValidityTillDate) {
      clientNonPersonDetails.incorpValidityTillDate = this.dateUtils.formatDate(
        formData.incorpValidityTillDate,
        dateFormat
      );
    }
    if (formData.mainBusinessLineId) {
      clientNonPersonDetails.mainBusinessLineId = formData.mainBusinessLineId;
    }
    if (formData.remarks) {
      clientNonPersonDetails.remarks = formData.remarks;
    }

    const result: any = {
      clientNonPersonDetails: clientNonPersonDetails,
      entityName: formData.entityName,
      incorporationDate: this.dateUtils.formatDate(formData.incorporationDate, dateFormat),
      dateFormat: dateFormat,
      locale: locale
    };

    // Add upgradeDate only if it has a value
    if (formData.upgradeDate) {
      result.upgradeDate = this.dateUtils.formatDate(formData.upgradeDate, dateFormat);
    }

    return result;
  }
}
