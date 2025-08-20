/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MatFormField, MatLabel, MatError, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Observable, of } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { ClientsService } from '../../../clients.service';
import { AlertService } from '../../../../core/alert/alert.service';

/**
 * Override Charge component for overriding default Fineract charges.
 */
@Component({
  selector: 'mifosx-override-charge',
  templateUrl: './override-charge.component.html',
  styleUrls: ['./override-charge.component.scss'],
  standalone: true,
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatFormField,
    MatLabel,
    MatError,
    MatHint,
    MatInput,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatCheckbox,
    MatButton,
    MatDivider,
    FaIconComponent
  ]
})
export class OverrideChargeComponent implements OnInit {
  /** Override charge form */
  overrideChargeForm: FormGroup;
  /** Client ID */
  clientId: string;
  /** Available charges for override */
  availableCharges: any[] = [];
  /** Filtered charges for autocomplete */
  filteredCharges: Observable<any[]>;
  /** Selected charge object */
  selectedCharge: any = null;
  /** Loading state for charge search */
  isLoadingCharges = false;
  /** Edit mode flag */
  isEditMode = false;
  /** Existing charge data for edit */
  existingChargeData: any = null;
  /** Charge calculation types */
  calculationTypes = [
    { id: 1, name: 'Flat', value: 'FLAT' },
    { id: 2, name: 'Percentage', value: 'PERCENT_OF_AMOUNT' },
    { id: 3, name: 'Percentage of Interest', value: 'PERCENT_OF_INTEREST' }
  ];
  /** Charge time types */
  chargeTimeTypes = [
    { id: 1, name: 'Disbursement', value: 'DISBURSEMENT' },
    { id: 2, name: 'Specified due date', value: 'SPECIFIED_DUE_DATE' },
    { id: 3, name: 'Monthly Fee', value: 'MONTHLY_FEE' },
    { id: 4, name: 'Annual Fee', value: 'ANNUAL_FEE' },
    { id: 5, name: 'Withdrawal Fee', value: 'WITHDRAWAL_FEE' }
  ];

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   * @param {AlertService} alertService AlertService for notifications.
   * @param {TranslateService} translateService TranslateService for translations.
   */
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private alertService: AlertService,
    private translateService: TranslateService
  ) {
    // For override-charge component, the route hierarchy is:
    // /clients/:clientId/client-fee-configuration/override-charge
    // So we need to go up 2 levels to get the clientId parameter
    this.clientId =
      this.route.parent?.parent?.snapshot.params['clientId'] ||
      this.route.parent?.snapshot.params['clientId'] ||
      this.route.snapshot.params['clientId'];

    // If still not found, try to get from current URL as fallback
    if (!this.clientId) {
      const urlSegments = this.router.url.split('/');
      const clientsIndex = urlSegments.findIndex((segment) => segment === 'clients');
      if (clientsIndex !== -1 && clientsIndex + 1 < urlSegments.length) {
        this.clientId = urlSegments[clientsIndex + 1];
      }
    }

    // Check if this is edit mode
    this.route.queryParams.subscribe((params) => {
      this.isEditMode = params['edit'] === 'true';
    });

    // Get existing charge data if coming from edit
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.existingChargeData = this.router.getCurrentNavigation()?.extras.state!['chargeData'];
    }
  }

  ngOnInit() {
    // Validate that we have a clientId
    if (!this.clientId) {
      this.alertService.alert({
        type: 'error',
        message: this.translateService.instant('Error: Client ID not found. Please navigate from the client page.')
      });
      this.router.navigate(['/clients']);
      return;
    }

    this.createOverrideChargeForm();
    this.setupChargeAutocomplete();

    // If in edit mode, populate form with existing data
    if (this.isEditMode && this.existingChargeData) {
      this.populateFormWithExistingData();
    }
  }

  /**
   * Creates the override charge form.
   */
  createOverrideChargeForm(): void {
    this.overrideChargeForm = this.formBuilder.group({
      chargeSearch: [
        { value: '', disabled: this.isEditMode },
        this.isEditMode ? [] : [Validators.required]
      ],
      chargeId: [
        '',
        Validators.required
      ],
      chargeName: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.maxLength(100)]
      ],
      chargeAppliesTo: [{ value: '', disabled: true }],
      currencyCode: [{ value: '', disabled: true }],
      chargeTimeType: [
        { value: '', disabled: true },
        Validators.required
      ],
      chargeCalculationType: [
        { value: '', disabled: true },
        Validators.required
      ],
      chargePaymentMode: [{ value: '', disabled: true }],
      amount: [
        '',
        [
          Validators.required,
          Validators.min(0)]
      ],
      minCap: [
        '',
        [Validators.min(0)]
      ],
      maxCap: [
        '',
        [Validators.min(0)]
      ],
      feeFrequency: [{ value: '', disabled: true }],
      feeInterval: [{ value: '', disabled: true }],
      feeOnMonthDay: [{ value: '', disabled: true }],
      taxGroupId: [{ value: '', disabled: true }],
      active: [true],
      penalty: [{ value: false, disabled: true }]
    });

    // Add cross-validation for min/max cap
    this.addMinMaxCapValidation();
  }

  /**
   * Sets up the charge autocomplete functionality.
   */
  setupChargeAutocomplete(): void {
    this.filteredCharges = this.overrideChargeForm.get('chargeSearch')!.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => this.filterCharges(value || ''))
    );
  }

  /**
   * Filters charges based on search term using the API.
   */
  private filterCharges(value: string): Observable<any[]> {
    // Don't search if term is less than 2 characters or if in edit mode
    if (value.length < 2 || this.isEditMode) {
      this.isLoadingCharges = false;
      return of([]);
    }

    this.isLoadingCharges = true;

    return this.clientsService.searchClientCharges(this.clientId, value).pipe(
      map((response: any[]) => {
        this.isLoadingCharges = false;
        // Transform the API response to match our expected format
        return response.map((charge) => ({
          id: charge.chargeId,
          chargeId: charge.chargeId,
          name: charge.name,
          description: charge.name // Using name as description since API doesn't provide description
        }));
      }),
      catchError((error) => {
        this.isLoadingCharges = false;

        // Fallback to mock data if API fails
        const mockFiltered = this.availableCharges
          .filter((charge) => charge.name.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 10);
        return of(mockFiltered);
      }),
      // Handle empty results
      switchMap((charges: any[]) => {
        return of(charges);
      })
    );
  }

  /**
   * Submits the override charge form.
   */
  submit(): void {
    // Validate that we have a clientId
    if (!this.clientId) {
      this.alertService.alert({
        type: 'error',
        message: this.translateService.instant('Error: Client ID is missing. Please navigate from the client page.')
      });
      return;
    }

    // Validate that a charge has been selected
    if (!this.selectedCharge) {
      this.overrideChargeForm.get('chargeSearch')?.setErrors({ required: true });
    }

    if (this.overrideChargeForm.valid && this.selectedCharge) {
      const overrideChargeData: any = {
        chargeId: this.selectedCharge.chargeId || this.selectedCharge.id,
        amount: this.overrideChargeForm.get('amount')?.value,
        active: this.overrideChargeForm.get('active')?.value
      };

      // Include min/max cap values if they are available and form shows them
      if (this.showMinMaxCap()) {
        const minCapValue = this.overrideChargeForm.get('minCap')?.value;
        const maxCapValue = this.overrideChargeForm.get('maxCap')?.value;

        if (minCapValue !== null && minCapValue !== undefined && minCapValue !== '') {
          overrideChargeData.minCap = minCapValue;
        }

        if (maxCapValue !== null && maxCapValue !== undefined && maxCapValue !== '') {
          overrideChargeData.maxCap = maxCapValue;
        }
      }

      // Choose the appropriate API call based on mode
      let apiCall: Observable<any>;

      if (this.isEditMode && this.existingChargeData?.overrideId) {
        // Update existing charge override
        const chargeOverrideId = this.existingChargeData.overrideId;
        apiCall = this.clientsService.updateExtendedClientCharge(this.clientId, chargeOverrideId, overrideChargeData);
      } else {
        // Create new charge override
        apiCall = this.clientsService.createExtendedClientCharge(this.clientId, overrideChargeData);
      }

      apiCall.subscribe({
        next: (response) => {
          this.alertService.alert({
            type: 'success',
            message: this.translateService.instant(
              this.isEditMode ? 'Charge updated successfully' : 'Charge override created successfully'
            )
          });

          // Navigate back to fee configuration
          this.cancel();
        },
        error: (error) => {
          this.alertService.alert({
            type: 'error',
            message: this.translateService.instant(
              'Failed to ' + (this.isEditMode ? 'update' : 'create') + ' charge override. Please try again.'
            )
          });
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.overrideChargeForm.controls).forEach((key) => {
        this.overrideChargeForm.get(key)?.markAsTouched();
      });

      this.alertService.alert({
        type: 'error',
        message: this.translateService.instant('Please fill all required fields and select a charge')
      });
    }
  }

  /**
   * Cancels the override charge creation and navigates back.
   */
  cancel(): void {
    this.router.navigate(['../../client-fee-configuration'], { relativeTo: this.route });
  }

  /**
   * Populates form with existing charge data for edit mode.
   */
  populateFormWithExistingData(): void {
    if (this.existingChargeData) {
      this.selectedCharge = this.existingChargeData;

      // Use override values if available, otherwise fall back to original values
      const amountValue =
        this.existingChargeData.overrideAmount !== null && this.existingChargeData.overrideAmount !== undefined
          ? this.existingChargeData.overrideAmount
          : this.existingChargeData.amount;

      const minCapValue =
        this.existingChargeData.overrideMinCap !== null && this.existingChargeData.overrideMinCap !== undefined
          ? this.existingChargeData.overrideMinCap
          : this.existingChargeData.minCap;

      const maxCapValue =
        this.existingChargeData.overrideMaxCap !== null && this.existingChargeData.overrideMaxCap !== undefined
          ? this.existingChargeData.overrideMaxCap
          : this.existingChargeData.maxCap;

      this.overrideChargeForm.patchValue({
        chargeId: this.existingChargeData.id,
        chargeName: this.existingChargeData.name,
        chargeSearch: this.existingChargeData.name,
        chargeAppliesTo: this.existingChargeData.chargeTimeType?.value || '',
        currencyCode: this.existingChargeData.currency?.code || '',
        chargeTimeType: this.existingChargeData.chargeTimeType?.value || '',
        chargeCalculationType: this.existingChargeData.chargeCalculationType?.value || '',
        chargePaymentMode: this.existingChargeData.chargePaymentMode?.value || '',
        amount: amountValue !== null && amountValue !== undefined ? amountValue : '',
        minCap: minCapValue !== null && minCapValue !== undefined ? minCapValue : '',
        maxCap: maxCapValue !== null && maxCapValue !== undefined ? maxCapValue : '',
        penalty: this.existingChargeData.penalty || false,
        active: this.existingChargeData.overrideActive !== false,
        taxGroupId: this.existingChargeData.incomeAccount?.name || ''
      });
    }
  }

  /**
   * Handles charge selection from autocomplete.
   */
  onChargeSelected(selectedCharge: any): void {
    if (selectedCharge && selectedCharge.chargeId) {
      // Set basic selected charge info
      this.selectedCharge = selectedCharge;

      // Fetch detailed charge information using the charge service
      this.clientsService.getChargeDetailsForOverride(selectedCharge.chargeId).subscribe({
        next: (chargeDetails: any) => {
          // Update selected charge with full details
          this.selectedCharge = {
            ...selectedCharge,
            ...chargeDetails
          };

          // Populate form with charge details
          this.overrideChargeForm.patchValue({
            chargeId: chargeDetails.id || selectedCharge.chargeId,
            chargeName: chargeDetails.name || selectedCharge.name,
            chargeSearch: chargeDetails.name || selectedCharge.name,
            chargeAppliesTo: chargeDetails.chargeAppliesTo?.value || '',
            currencyCode: chargeDetails.currencyOptions?.[0]?.code || '',
            chargeTimeType: chargeDetails.chargeTimeType?.value || '',
            chargeCalculationType: chargeDetails.chargeCalculationType?.value || '',
            chargePaymentMode: chargeDetails.chargePaymentMode?.value || '',
            amount: chargeDetails.amount || '',
            minCap: chargeDetails.minCap !== null && chargeDetails.minCap !== undefined ? chargeDetails.minCap : '',
            maxCap: chargeDetails.maxCap !== null && chargeDetails.maxCap !== undefined ? chargeDetails.maxCap : '',
            penalty: chargeDetails.penalty || false,
            taxGroupId: chargeDetails.taxGroup?.name || ''
          });
        },
        error: (error) => {
          // Fallback to basic charge info if detailed fetch fails
          this.overrideChargeForm.patchValue({
            chargeId: selectedCharge.chargeId,
            chargeName: selectedCharge.name,
            chargeSearch: selectedCharge.name
          });

          this.alertService.alert({
            type: 'warning',
            message: this.translateService.instant('Could not load charge details. Using basic information.')
          });
        }
      });
    }
  }

  /**
   * Displays charge name in autocomplete.
   */
  displayChargeName(charge: any): string {
    return charge ? charge.name : '';
  }

  /**
   * Handles charge selection change.
   */
  onChargeSelectionChange(): void {
    // This method is kept for backward compatibility but is now handled by onChargeSelected
    const selectedChargeId = this.overrideChargeForm.get('chargeId')?.value;
    const selectedCharge = this.availableCharges.find((charge) => charge.id === selectedChargeId);

    if (selectedCharge) {
      this.overrideChargeForm.patchValue({
        chargeName: selectedCharge.name
      });
    }
  }

  /**
   * Checks if a form control has an error.
   */
  hasError(controlName: string, errorType: string): boolean {
    const control = this.overrideChargeForm.get(controlName);
    return control ? control.hasError(errorType) && (control.dirty || control.touched) : false;
  }

  /**
   * Determines if min/max cap fields should be shown.
   */
  showMinMaxCap(): boolean {
    if (!this.selectedCharge) return false;

    const chargeCalculationType = this.selectedCharge.chargeCalculationType?.value || '';

    // Show min/max cap fields for percentage-based calculations
    return (
      chargeCalculationType.toLowerCase().includes('percent') ||
      chargeCalculationType.toLowerCase().includes('%') ||
      chargeCalculationType.toLowerCase().includes('percentage')
    );
  }

  /**
   * Adds cross-validation for min/max cap fields.
   */
  addMinMaxCapValidation(): void {
    const minCapControl = this.overrideChargeForm.get('minCap');
    const maxCapControl = this.overrideChargeForm.get('maxCap');

    if (minCapControl && maxCapControl) {
      // Add validation when min cap changes
      minCapControl.valueChanges.subscribe(() => {
        this.validateMinMaxCap();
      });

      // Add validation when max cap changes
      maxCapControl.valueChanges.subscribe(() => {
        this.validateMinMaxCap();
      });
    }
  }

  /**
   * Validates that min cap is not greater than max cap.
   */
  validateMinMaxCap(): void {
    const minCapControl = this.overrideChargeForm.get('minCap');
    const maxCapControl = this.overrideChargeForm.get('maxCap');

    if (minCapControl && maxCapControl) {
      const minCapValue = parseFloat(minCapControl.value);
      const maxCapValue = parseFloat(maxCapControl.value);

      // Clear previous errors
      if (minCapControl.hasError('maxValue')) {
        delete minCapControl.errors!['maxValue'];
        if (Object.keys(minCapControl.errors || {}).length === 0) {
          minCapControl.setErrors(null);
        }
      }

      if (maxCapControl.hasError('minValue')) {
        delete maxCapControl.errors!['minValue'];
        if (Object.keys(maxCapControl.errors || {}).length === 0) {
          maxCapControl.setErrors(null);
        }
      }

      // Validate if both values are present and valid numbers
      if (!isNaN(minCapValue) && !isNaN(maxCapValue) && minCapValue > maxCapValue) {
        minCapControl.setErrors({ ...minCapControl.errors, maxValue: true });
        maxCapControl.setErrors({ ...maxCapControl.errors, minValue: true });
      }
    }
  }
}
