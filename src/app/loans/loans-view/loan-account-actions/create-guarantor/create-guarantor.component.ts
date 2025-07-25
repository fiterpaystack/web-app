/** Angular Imports */
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Create Guarantor Action
 */
@Component({
  selector: 'mifosx-create-guarantor',
  templateUrl: './create-guarantor.component.html',
  styleUrls: ['./create-guarantor.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCheckbox,
    MatAutocompleteTrigger,
    MatAutocomplete
  ]
})
export class CreateGuarantorComponent implements OnInit, AfterViewInit {
  @Input() dataObject: any;
  /** New Guarantor Form */
  newGuarantorForm: UntypedFormGroup;
  /** Loan ID */
  loanId: string;
  /** Relation Types */
  relationTypes: any;
  /** Show Client Details Form */
  showClientDetailsForm = false;
  /** Minimum date allowed. */
  minDate = new Date(1900, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Client data. */
  clientsData: any = [];
  /** Account Options */
  accountOptions: any = [];

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loanService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(
    private formBuilder: UntypedFormBuilder,
    private loanService: LoansService,
    private route: ActivatedRoute,
    private router: Router,
    private dateUtils: Dates,
    private clientsService: ClientsService,
    private settingsService: SettingsService
  ) {
    this.loanId = this.route.snapshot.params['loanId'];
  }

  ngOnInit() {
    this.maxDate = this.settingsService.businessDate;
    this.createNewGuarantorForm();
    this.setNewGuarantorDetailsForm();
    this.buildDependencies();
  }

  /** Create Guarantor Details Form */
  createNewGuarantorForm() {
    this.newGuarantorForm = this.formBuilder.group({
      existingClient: [''],
      name: [
        '',
        Validators.required
      ],
      clientRelationshipTypeId: [''],
      savingsId: [''],
      amount: ['']
    });
  }

  /** Sets Guarantor Details Form */
  setNewGuarantorDetailsForm() {
    this.relationTypes = this.dataObject.allowedClientRelationshipTypes;
    this.newGuarantorForm.patchValue({
      existingClient: true
    });
  }

  /**
   * Add guarantor detail fields to the UI.
   */
  buildDependencies() {
    this.newGuarantorForm.get('existingClient').valueChanges.subscribe(() => {
      this.showClientDetailsForm = !this.showClientDetailsForm;
      if (this.showClientDetailsForm) {
        this.newGuarantorForm.addControl('firstname', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('lastname', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('dob', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('addressLine1', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('addressLine2', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('city', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('zip', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('mobileNumber', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('housePhoneNumber', new UntypedFormControl(''));
        this.newGuarantorForm.removeControl('name');
        this.newGuarantorForm.removeControl('savingsId');
        this.newGuarantorForm.removeControl('amount');
      } else {
        this.newGuarantorForm.addControl('name', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('savingsId', new UntypedFormControl(''));
        this.newGuarantorForm.addControl('amount', new UntypedFormControl(''));
        this.newGuarantorForm.removeControl('firstname');
        this.newGuarantorForm.removeControl('lastname');
        this.newGuarantorForm.removeControl('dob');
        this.newGuarantorForm.removeControl('addressLine1');
        this.newGuarantorForm.removeControl('addressLine2');
        this.newGuarantorForm.removeControl('city');
        this.newGuarantorForm.removeControl('zip');
        this.newGuarantorForm.removeControl('mobileNumber');
        this.newGuarantorForm.removeControl('housePhoneNumber');
      }
    });
  }

  /**
   * Subscribes to Clients search filter:
   */
  ngAfterViewInit() {
    if (this.newGuarantorForm.value.existingClient) {
      this.newGuarantorForm.get('name').valueChanges.subscribe((value: string) => {
        if (value.length >= 2) {
          this.clientsService.getFilteredClients('displayName', 'ASC', true, value).subscribe((data: any) => {
            this.clientsData = data.pageItems;
          });
        }
      });
    }
  }

  clientSelected(clientDetails: any) {
    this.accountOptions = [];
    this.loanService.guarantorAccountResource(this.loanId, clientDetails.id).subscribe((response: any) => {
      this.accountOptions = response.accountLinkingOptions;
    });
  }

  /**
   * Displays Client name in form control input.
   * @param {any} client Client data.
   * @returns {string} Client name if valid otherwise undefined.
   */
  displayClient(client: any): string | undefined {
    return client ? client.displayName : undefined;
  }

  /** Submits the new guarantor details form */
  submit() {
    const newGuarantorFormData = this.newGuarantorForm.value;
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;

    const prevdob: Date = this.newGuarantorForm.value.dob;
    const guarantorTypeId: number = this.newGuarantorForm.value.existingClient
      ? this.dataObject.guarantorTypeOptions[0].id
      : this.dataObject.guarantorTypeOptions[2].id;
    const data = {
      ...newGuarantorFormData,
      locale,
      dateFormat,
      guarantorTypeId
    };

    if (this.newGuarantorForm.value.existingClient) {
      data['entityId'] = this.newGuarantorForm.controls.name.value.id;
    } else {
      if (newGuarantorFormData.dob instanceof Date) {
        data['dob'] = this.dateUtils.formatDate(prevdob, dateFormat);
      }
    }

    delete data.existingClient;
    delete data.name;

    this.loanService.createNewGuarantor(this.loanId, data).subscribe((response: any) => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }
}
