/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow
} from '@angular/material/table';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormatNumberPipe } from '../../../pipes/format-number.pipe';
import { ClientsService } from '../../clients.service';
import { ConfirmationDialogComponent } from '../../../shared/confirmation-dialog/confirmation-dialog.component';
import { AlertService } from '../../../core/alert/alert.service';

/**
 * Client Fee Configuration component.
 */
@Component({
  selector: 'mifosx-client-fee-configuration',
  templateUrl: './client-fee-configuration.component.html',
  styleUrls: ['./client-fee-configuration.component.scss'],
  standalone: true,
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
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
    MatPaginator,
    MatSlideToggle,
    MatTooltip,
    FaIconComponent,
    FormatNumberPipe
  ]
})
export class ClientFeeConfigurationComponent implements OnInit {
  /** Columns to be displayed in charge overview table. */
  displayedColumns: string[] = [
    'chargeName',
    'chargeType',
    'calculationType',
    'amountPercentage',
    'activeStatus',
    'actions'
  ];
  /** Data source for charge overview table. */
  dataSource: MatTableDataSource<any>;
  /** Fee Configuration data */
  feeConfigData: any;
  /** Total filtered records for pagination */
  totalFilteredRecords: number = 0;
  /** Current page size */
  pageSize: number = 10;
  /** Current page index */
  pageIndex: number = 0;

  /** Paginator for charge overview table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   * Retrieves the charge overview data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   * @param {TranslateService} translateService Translation service.
   * @param {AlertService} alertService Alert service for notifications.
   * @param {ClientsService} clientsService Clients service.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private translateService: TranslateService,
    private alertService: AlertService,
    private clientsService: ClientsService
  ) {
    this.route.data.subscribe((data: { clientFeeConfigurationData: any }) => {
      // Handle the new API response format
      if (data.clientFeeConfigurationData) {
        this.feeConfigData = data.clientFeeConfigurationData.pageItems || [];
        this.totalFilteredRecords = data.clientFeeConfigurationData.totalFilteredRecords || 0;
      } else {
        this.feeConfigData = [];
        this.totalFilteredRecords = 0;
      }
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.feeConfigData);
    // Set up pagination manually since we're using server-side pagination
    this.setupPagination();
  }

  /**
   * Sets up pagination for server-side data
   */
  setupPagination(): void {
    if (this.paginator) {
      this.paginator.length = this.totalFilteredRecords;
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = this.pageIndex;

      // Handle page changes
      this.paginator.page.subscribe((pageEvent) => {
        this.pageSize = pageEvent.pageSize;
        this.pageIndex = pageEvent.pageIndex;
        this.loadChargeData();
      });
    }
  }

  /**
   * Loads charge data with pagination
   */
  loadChargeData(): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    if (clientId) {
      const offset = this.pageIndex * this.pageSize;

      this.clientsService.getExtendedClientCharges(clientId, this.pageSize, offset).subscribe({
        next: (data) => {
          this.feeConfigData = data.pageItems || [];
          this.totalFilteredRecords = data.totalFilteredRecords || 0;
          this.dataSource.data = this.feeConfigData;

          if (this.paginator) {
            this.paginator.length = this.totalFilteredRecords;
          }
        },
        error: (error) => {
          console.error('Error loading charge data:', error);
          this.feeConfigData = [];
          this.dataSource.data = [];
        }
      });
    }
  }

  /**
   * Navigate to override charge page
   */
  navigateToOverrideCharge(): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    if (!clientId) {
      return;
    }

    this.router.navigate(['../client-fee-configuration/override-charge'], { relativeTo: this.route });
  }

  /**
   * Toggle active status of a charge
   * @param element Charge element
   * @param event Toggle event
   */
  toggleActiveStatus(element: any, event: any): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    if (!clientId || !element.overrideId) {
      // Revert the toggle state on error
      event.source.checked = !event.checked;
      element.overrideActive = !event.checked;
      return;
    }

    const actionText = event.checked ? 'activate' : 'deactivate';
    const chargeName = element.name || 'this charge';

    // Show confirmation dialog
    const confirmDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: this.translateService.instant('labels.heading.Confirm'),
        dialogContext:
          this.translateService.instant('labels.dialogContext.Are you sure you want to') +
          ` ${actionText} ` +
          chargeName
      }
    });

    confirmDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response && response.confirm) {
        // User confirmed, proceed with API call
        this.performToggleUpdate(element, event, clientId);
      } else {
        // User cancelled, revert the toggle state
        event.source.checked = !event.checked;
        element.overrideActive = !event.checked;
      }
    });
  }

  /**
   * Perform the actual toggle update after confirmation
   * @param element Charge element
   * @param event Toggle event
   * @param clientId Client ID
   */
  private performToggleUpdate(element: any, event: any, clientId: string): void {
    const tiered = this.isTieredCharge(element);
    // Prepare the update payload with current values
    const updatePayload: any = {
      active: event.checked,
      amount: tiered ? null : element.overrideAmount || element.amount,
      chargeId: element.id
    };

    if (tiered && Array.isArray(element.overrideSlabs)) {
      updatePayload.slabs = element.overrideSlabs.map((slab: any) => ({
        id: slab.id,
        fromAmount: slab.fromAmount,
        toAmount: slab.toAmount === undefined ? null : slab.toAmount,
        value: slab.value
      }));
    }

    // Include cap values if they exist
    if (element.minCap !== null && element.minCap !== undefined) {
      updatePayload.minCap = element.minCap;
    }

    if (element.maxCap !== null && element.maxCap !== undefined) {
      updatePayload.maxCap = element.maxCap;
    }

    // Call the API to update the charge override
    this.clientsService.updateExtendedClientCharge(clientId, element.overrideId, updatePayload).subscribe({
      next: (response) => {
        // Update the local data to reflect the change
        element.overrideActive = event.checked;

        const index = this.feeConfigData.findIndex((item: any) => item.overrideId === element.overrideId);
        if (index !== -1) {
          this.feeConfigData[index].overrideActive = element.overrideActive;
        }

        // Show success message
        const statusText = event.checked ? 'activated' : 'deactivated';
        this.alertService.alert({
          type: 'Charge Update',
          message: `Charge ${statusText} successfully`
        });
      },
      error: (error) => {
        // Show error message
        this.alertService.alert({
          type: 'Charge Update Error',
          message: 'Failed to update charge status. Please try again.'
        });

        // Revert the toggle state on error
        event.source.checked = !event.checked;
        element.overrideActive = !event.checked;
      }
    });
  }

  /**
   * Edit charge configuration
   * @param element Charge element
   */
  editCharge(element: any): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    // Navigate to override charge page with the charge data for editing
    // Use the original charge ID (element.id) for fetching charge details
    this.router.navigate(['../client-fee-configuration/override-charge'], {
      relativeTo: this.route,
      queryParams: {
        chargeId: element.id, // Original charge ID
        chargeOverrideId: element.overrideId, // Override ID if exists
        edit: true
      },
      state: {
        chargeData: element
      }
    });
  }

  /**
   * Delete charge configuration
   * @param element Charge element
   */
  deleteCharge(element: any): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    if (!clientId || !element.overrideId) {
      return;
    }

    const chargeName = element.name || 'this charge override';

    // Show confirmation dialog
    const confirmDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: this.translateService.instant('labels.heading.Confirm'),
        dialogContext:
          this.translateService.instant('labels.dialogContext.This action cannot be undone') +
          this.translateService.instant('labels.dialogContext.Are you sure you want to delete charge')
      }
    });

    confirmDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response && response.confirm) {
        // User confirmed, proceed with delete API call
        this.performDelete(element, clientId);
      }
    });
  }

  /**
   * Perform the actual delete after confirmation
   * @param element Charge element
   * @param clientId Client ID
   */
  private performDelete(element: any, clientId: string): void {
    this.clientsService.deleteExtendedClientCharge(clientId, element.overrideId).subscribe({
      next: (response) => {
        // Remove the item from local data
        const index = this.feeConfigData.findIndex((item: any) => item.overrideId === element.overrideId);
        if (index !== -1) {
          this.feeConfigData.splice(index, 1);
          this.dataSource.data = this.feeConfigData;
          this.totalFilteredRecords = Math.max(0, this.totalFilteredRecords - 1);

          // Update paginator
          if (this.paginator) {
            this.paginator.length = this.totalFilteredRecords;
          }
        }

        // Show success message
        this.alertService.alert({
          type: 'Charge Delete',
          message: 'Charge override deleted successfully'
        });
      },
      error: (error) => {
        // Show error message
        this.alertService.alert({
          type: 'Charge Delete Error',
          message: 'Failed to delete charge override. Please try again.'
        });
      }
    });
  }

  /**
   * View charge details
   * @param element Charge element
   */
  viewChargeDetails(element: any): void {
    const clientId = this.route.parent?.snapshot.params['clientId'];

    // Navigate to fee detail page with the charge data
    // Use the original charge ID for detail view
    this.router.navigate(
      [
        '../client-fee-configuration/detail',
        element.overrideId
      ],
      {
        relativeTo: this.route,
        state: {
          feeData: element
        }
      }
    );
  }

  /**
   * Check if charge has override
   * @param element Charge element
   * @returns True if charge has been overridden
   */
  hasChargeOverride(element: any): boolean {
    return element.overrideId !== null && element.overrideId !== undefined;
  }

  /**
   * Get charge type display value
   * @param element Charge element
   * @returns Display value for charge type
   */
  getChargeTypeDisplay(element: any): string {
    if (element.chargeTimeType && element.chargeTimeType.value) {
      return element.chargeTimeType.value;
    }
    return 'N/A';
  }

  /**
   * Get calculation type display value
   * @param element Charge element
   * @returns Display value for calculation type
   */
  getCalculationTypeDisplay(element: any): string {
    if (element.chargeCalculationType && element.chargeCalculationType.value) {
      return element.chargeCalculationType.value;
    }
    return 'N/A';
  }

  /**
   * Determine if the override uses slab tiers.
   */
  isTieredCharge(element: any): boolean {
    return Array.isArray(element?.overrideSlabs) && element.overrideSlabs.length > 0;
  }

  /**
   * Build a human-readable summary of the first and last slabs.
   */
  getTierSummary(element: any): string {
    if (!this.isTieredCharge(element)) {
      return '';
    }

    const slabs = element.overrideSlabs;
    const first = slabs[0];
    const last = slabs[slabs.length - 1];

    const formatAmount = (value: number | null | undefined) => {
      if (value === null || value === undefined) {
        return '∞';
      }
      return `${this.getCurrencySymbol(element)}${value}`;
    };

    const firstRange = `${formatAmount(first.fromAmount)} - ${formatAmount(first.toAmount)} → ${first.value}`;

    if (slabs.length === 1) {
      return firstRange;
    }

    const lastRange = `${formatAmount(last.fromAmount)} - ${formatAmount(last.toAmount)} → ${last.value}`;

    return `${firstRange} … ${lastRange}`;
  }

  /**
   * Get raw amount value for formatting
   * @param element Charge element
   * @returns Raw amount value
   */
  getAmountValue(element: any): number | null {
    return element.overrideAmount ?? element.amount ?? null;
  }

  /**
   * Check if amount is percentage
   * @param element Charge element
   * @returns True if percentage
   */
  isPercentageAmount(element: any): boolean {
    const calculationType = this.getCalculationTypeDisplay(element);
    return calculationType.toLowerCase().includes('percent') || calculationType.toLowerCase().includes('%');
  }

  /**
   * Get currency symbol for display
   * @param element Charge element
   * @returns Currency symbol or code
   */
  getCurrencySymbol(element: any): string {
    return element.currency?.displaySymbol || element.currency?.code || '';
  }
}
