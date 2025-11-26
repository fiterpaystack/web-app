/** Angular Imports */
import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

/** Custom Imports */
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { DateFormatPipe } from 'app/pipes/date-format.pipe';
import { Dates } from 'app/core/utils/dates';

export interface ReactivateChargeDialogData {
  charge: any;
  defaults: {
    businessDate: Date;
    maxFutureDate: Date;
    dateFormat: string;
  };
}

@Component({
  selector: 'mifosx-reactivate-charge-dialog',
  templateUrl: './reactivate-charge-dialog.component.html',
  styleUrls: ['./reactivate-charge-dialog.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSlideToggle,
    MatDatepickerModule,
    CdkScrollable,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DateFormatPipe
  ]
})
export class ReactivateChargeDialogComponent implements OnInit {
  /** Reactivation form */
  reactivateChargeForm: UntypedFormGroup;
  /** Whether charge needs a new due date */
  requiresDueDate = false;
  /** Whether charge is recurring */
  recurringCharge = false;
  /** Minimum selectable date */
  readonly minDate: Date;
  /** Maximum selectable date */
  readonly maxDate: Date;
  /** Last period settled information */
  readonly lastSettledPeriod = signal<any>(null);
  /** Next period preview */
  readonly nextPeriod = signal<any>(null);

  constructor(
    private dialogRef: MatDialogRef<ReactivateChargeDialogComponent>,
    private formBuilder: UntypedFormBuilder,
    private dates: Dates,
    @Inject(MAT_DIALOG_DATA) public data: ReactivateChargeDialogData
  ) {
    this.minDate = data.defaults.businessDate;
    this.maxDate = data.defaults.maxFutureDate || data.defaults.businessDate;
  }

  ngOnInit(): void {
    this.determineChargeCharacteristics();
    this.buildForm();
    this.seedSchedulePreview();
  }

  /**
   * Closes dialog without action.
   */
  close(): void {
    this.dialogRef.close();
  }

  /**
   * Submits form when valid.
   */
  submit(): void {
    if (this.reactivateChargeForm.invalid) {
      this.reactivateChargeForm.markAllAsTouched();
      return;
    }
    this.dialogRef.close({ data: { value: this.reactivateChargeForm.value } });
  }

  private buildForm(): void {
    this.reactivateChargeForm = this.formBuilder.group({
      reactivationDate: [
        this.data.defaults.businessDate || new Date(),
        Validators.required
      ],
      resumeFromNextBillingCycle: [this.recurringCharge]
    });

    if (this.requiresDueDate) {
      this.reactivateChargeForm.addControl(
        'dueDate',
        this.formBuilder.control(this.parseExistingDate(this.data.charge.dueDate) || null, Validators.required)
      );
      this.reactivateChargeForm.get('dueDate').valueChanges.subscribe((value) => {
        if (!this.recurringCharge) {
          this.nextPeriod.set(value);
        }
      });
    }
  }

  private determineChargeCharacteristics(): void {
    const chargeTimeValue = this.data.charge?.chargeTimeType?.value;
    const dueDateRequiredValues = [
      'Specified due date',
      'Installment Fee',
      'Overdraft Fee'
    ];
    this.requiresDueDate = dueDateRequiredValues.includes(chargeTimeValue);
    const recurringValues = [
      'Monthly Fee',
      'Annual Fee',
      'Weekly Fee'
    ];
    this.recurringCharge = recurringValues.includes(chargeTimeValue);
  }

  private seedSchedulePreview(): void {
    const charge = this.data.charge;
    this.lastSettledPeriod.set(
      charge.lastAppliedOnDate || charge.lastChargeAppliedDate || charge.lastPaymentDate || null
    );
    if (charge.nextDueDate) {
      this.nextPeriod.set(charge.nextDueDate);
      return;
    }
    if (this.recurringCharge && charge.feeOnMonthDay) {
      this.nextPeriod.set([2000].concat(charge.feeOnMonthDay));
      return;
    }
    if (this.requiresDueDate) {
      this.nextPeriod.set(this.parseExistingDate(charge.dueDate));
    }
  }

  private parseExistingDate(rawValue: any): Date | null {
    if (!rawValue) {
      return null;
    }
    try {
      return this.dates.parseDate(rawValue);
    } catch {
      return null;
    }
  }

  /**
   * Checks if the charge is percentage-based.
   * @returns {boolean} True if charge calculation type is percentage-based
   */
  isPercentageCharge(): boolean {
    const chargeCalculationType = this.data.charge?.chargeCalculationType?.value || '';
    const chargeCalculationTypeLower = chargeCalculationType.toLowerCase();
    return (
      chargeCalculationTypeLower.includes('percent') ||
      chargeCalculationTypeLower.includes('%') ||
      chargeCalculationTypeLower.includes('percentage')
    );
  }

  /**
   * Formats the charge amount based on calculation type.
   * For percentage charges: returns "X.X%" using amountOrPercentage field
   * For flat charges: returns formatted currency amount
   * @returns {string} Formatted charge amount
   */
  formatChargeAmount(): string {
    if (this.isPercentageCharge()) {
      // For percentage charges, use amountOrPercentage field to avoid showing 0
      const percentage = this.data.charge?.amountOrPercentage ?? this.data.charge?.amount;
      if (percentage === null || percentage === undefined) {
        return 'N/A';
      }
      return `${percentage}%`;
    }

    // For flat charges, use amount field and format as currency
    const amount = this.data.charge?.amount;
    if (amount === null || amount === undefined) {
      return 'N/A';
    }

    const currencyCode = this.data.charge?.currency?.code || '';
    const currencySymbol = this.data.charge?.currency?.displaySymbol || currencyCode;

    // Format number with 2 decimal places
    const formattedAmount = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);

    // Return with currency symbol (narrow format: symbol before amount)
    return `${currencySymbol}${formattedAmount}`;
  }
}
