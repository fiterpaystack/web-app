/** Angular Imports */
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';

/** Custom Components */
import { TranslateService } from '@ngx-translate/core';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { GlAccountDisplayComponent } from '../../../shared/accounting/gl-account-display/gl-account-display.component';
import { YesnoPipe } from '../../../pipes/yesno.pipe';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTable } from '@angular/material/table';
import { MatColumnDef } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatCellDef } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { MatRowDef } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/** Custom Models */
import { ChargeStakeholderSplit, FeeSplitAudit } from '../models/fee-split.model';

/**
 * View Charge Component.
 */
@Component({
  selector: 'mifosx-view-charge',
  templateUrl: './view-charge.component.html',
  styleUrls: ['./view-charge.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    GlAccountDisplayComponent,
    YesnoPipe,
    MatProgressSpinner,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
  ]
})
export class ViewChargeComponent {
  /** Charge data. */
  chargeData: any;
  /** Boolean for MinCap and MaxCap */
  minCap: boolean;
  maxCap: boolean;
  /** Fee split data */
  feeSplits: ChargeStakeholderSplit[] = [];
  feeSplitAudits: FeeSplitAudit[] = [];
  loadingSplits = false;
  loadingAudits = false;

  /** Selected audit for details dialog */
  selectedAudit: any = null;

  /** View child for split details dialog template */
  @ViewChild('splitDetailsDialog') splitDetailsDialog!: TemplateRef<any>;
  /**
   * Retrieves the charge data from `resolve`.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   * @param {TranslateService} translateService Translate Service.
   */
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {
    this.route.data.subscribe((data: { charge: any }) => {
      this.chargeData = data.charge;
      if (this.chargeData.minCap) {
        this.minCap = true;
      }
      if (this.chargeData.maxCap) {
        this.maxCap = true;
      }

      // Load fee splits if enabled
      if (this.chargeData.enableFeeSplit) {
        this.loadFeeSplits();
        this.loadFeeSplitAudits();
      }
    });
  }

  /**
   * Deletes the charge and redirects to charges.
   */
  deleteCharge() {
    const deleteChargeDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.translateService.instant('labels.inputs.Charge') + ' ' + this.chargeData.id }
    });
    deleteChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.productsService.deleteCharge(this.chargeData.id).subscribe(() => {
          this.router.navigate(['/products/charges']);
        });
      }
    });
  }

  /**
   * Load fee splits for the charge
   */
  private loadFeeSplits() {
    this.loadingSplits = true;
    this.productsService.getChargeStakeholderSplits(this.chargeData.id).subscribe({
      next: (splits) => {
        this.feeSplits = splits;
        this.loadingSplits = false;
      },
      error: (error) => {
        console.error('Error loading fee splits:', error);
        this.loadingSplits = false;
      }
    });
  }

  /**
   * Load fee split audit history for the charge
   */
  private loadFeeSplitAudits() {
    this.loadingAudits = true;
    this.productsService.getFeeSplitAuditsByCharge(this.chargeData.id).subscribe({
      next: (audits) => {
        this.feeSplitAudits = audits;
        this.loadingAudits = false;
      },
      error: (error) => {
        console.error('Error loading fee split audits:', error);
        this.loadingAudits = false;
      }
    });
  }

  /**
   * Get total percentage for fee splits
   */
  getTotalPercentage(): number {
    if (!this.feeSplits || this.feeSplits.length === 0) {
      return 0;
    }
    return this.feeSplits
      .filter((split) => split.splitType === 'PERCENTAGE')
      .reduce((total, split) => total + (split.splitValue || 0), 0);
  }

  /**
   * Get total flat amount for fee splits
   */
  getTotalFlatAmount(): number {
    if (!this.feeSplits || this.feeSplits.length === 0) {
      return 0;
    }
    return this.feeSplits
      .filter((split) => split.splitType === 'FLAT_AMOUNT')
      .reduce((total, split) => total + (split.splitValue || 0), 0);
  }

  /**
   * Get flattened split details for table display
   * Transforms audit records into individual split rows
   */
  getFlattenedSplitDetails(): any[] {
    const flattenedDetails: any[] = [];

    this.feeSplitAudits.forEach((audit) => {
      if (audit.splitDetails && audit.splitDetails.length > 0) {
        audit.splitDetails.forEach((detail) => {
          flattenedDetails.push({
            transactionId: audit.transactionId,
            splitDate: audit.splitDate,
            totalFeeAmount: audit.totalFeeAmount,
            splitAmount: detail.splitAmount,
            splitPercentage: detail.splitPercentage,
            glAccountName: detail.glAccountName,
            fundName: detail.fundName,
            journalEntryId: detail.journalEntryId
          });
        });
      }
    });

    return flattenedDetails;
  }

  /**
   * Get total split amount for an audit record
   */
  getTotalSplitAmount(audit: any): number {
    if (!audit.splitDetails || audit.splitDetails.length === 0) {
      return 0;
    }
    return audit.splitDetails.reduce((total: number, detail: any) => total + (detail.splitAmount || 0), 0);
  }

  /**
   * View split details for a specific audit record
   */
  viewSplitDetails(audit: any): void {
    this.selectedAudit = audit;
    const dialogRef = this.dialog.open(this.splitDetailsDialog, {
      width: '800px',
      maxHeight: '90vh'
    });
  }
}
