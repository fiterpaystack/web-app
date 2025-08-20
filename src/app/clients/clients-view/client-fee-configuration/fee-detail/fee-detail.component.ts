/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormatNumberPipe } from '../../../../pipes/format-number.pipe';

/**
 * Fee Detail component for viewing detailed information about a specific charge.
 */
@Component({
  selector: 'mifosx-fee-detail',
  templateUrl: './fee-detail.component.html',
  styleUrls: ['./fee-detail.component.scss'],
  standalone: true,
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCard,
    MatCardContent,
    MatButton,
    FaIconComponent,
    FormatNumberPipe
  ]
})
export class FeeDetailComponent implements OnInit {
  /** Fee/Charge data */
  feeData: any;
  /** Client ID */
  clientId: string;
  /** Fee ID */
  feeId: string;

  /**
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Fix clientId access - it's in the grandparent route since the hierarchy is:
    // /clients/:clientId/client-fee-configuration/detail/:feeId
    this.clientId =
      this.route.parent?.parent?.snapshot.params['clientId'] ||
      this.route.parent?.snapshot.params['clientId'] ||
      this.route.snapshot.params['clientId'];
    this.feeId = this.route.snapshot.params['feeId'];
  }

  ngOnInit() {
    this.loadFeeDetail();
  }

  /**
   * Loads fee detail data.
   */
  loadFeeDetail(): void {
    this.route.data.subscribe((data: { feeDetailData: any }) => {
      this.feeData = data.feeDetailData;
    });
  }

  /**
   * Navigates to edit mode for this fee.
   */
  editFee(): void {
    if (!this.feeData) {
      return;
    }

    // Navigate to override charge page in edit mode
    // Route: /clients/:clientId/client-fee-configuration/override-charge
    this.router.navigate(['../../override-charge'], {
      relativeTo: this.route,
      queryParams: {
        chargeId: this.feeData.id, // Original charge ID
        chargeOverrideId: this.feeData.chargeOverrideId, // Override ID if exists
        edit: true
      },
      state: {
        chargeData: this.feeData
      }
    });
  }

  /**
   * Gets the display value for charge type.
   */
  getChargeTypeDisplay(): string {
    return this.feeData?.chargeTimeType?.value || 'N/A';
  }

  /**
   * Gets the display value for calculation type.
   */
  getCalculationTypeDisplay(): string {
    return this.feeData?.chargeCalculationType?.value || 'N/A';
  }

  /**
   * Gets the formatted amount or percentage display.
   */
  getAmountDisplay(): string {
    if (!this.feeData?.amount) {
      return 'N/A';
    }

    const calculationType = this.getCalculationTypeDisplay();
    const symbol = this.feeData.currency?.displaySymbol || this.feeData.currency?.code || '';

    if (this.isPercentageAmount()) {
      return `${this.feeData.amount}%`;
    }

    return `${symbol}${this.feeData.amount}`;
  }

  /**
   * Gets the raw amount value for formatting.
   */
  getAmountValue(): number | null {
    return this.feeData?.amount || null;
  }

  getCustomAmountValue(): number | null {
    return this.feeData?.overrideAmount || null;
  }

  /**
   * Checks if the amount is a percentage.
   */
  isPercentageAmount(): boolean {
    const calculationType = this.getCalculationTypeDisplay();
    return calculationType.toLowerCase().includes('percent') || calculationType.toLowerCase().includes('%');
  }

  /**
   * Gets the currency symbol for display.
   */
  getCurrencySymbol(): string {
    return this.feeData?.currency?.displaySymbol || this.feeData?.currency?.code || '';
  }

  /**
   * Gets the CSS class for status display.
   */
  getStatusClass(): string {
    return this.feeData?.active ? 'status-active' : 'status-inactive';
  }

  /**
   * Gets the CSS class for penalty display.
   */
  getPenaltyClass(): string {
    return this.feeData?.penalty ? 'penalty-yes' : 'penalty-no';
  }

  /**
   * Determines if caps section should be shown.
   */
  shouldShowCaps(): boolean {
    return !!(this.feeData?.minCap || this.feeData?.maxCap);
  }

  /**
   * Determines if frequency section should be shown.
   */
  shouldShowFrequency(): boolean {
    return !!(this.feeData?.feeFrequency || this.feeData?.feeInterval || this.feeData?.feeOnMonthDay);
  }

  /**
   * Gets charge applies to display value.
   */
  getChargeAppliesToDisplay(): string {
    return this.feeData?.chargeAppliesTo?.value || 'N/A';
  }

  /**
   * Gets tax group display value.
   */
  getTaxGroupDisplay(): string {
    return this.feeData?.taxGroup?.name || 'N/A';
  }

  /**
   * Checks if charge has been overridden.
   */
  hasChargeOverride(): boolean {
    return this.feeData?.chargeOverrideId !== null && this.feeData?.chargeOverrideId !== undefined;
  }

  /**
   * Formats date for display.
   */
  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';

    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  }
}
