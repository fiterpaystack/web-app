/** Angular Imports */
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import {
  MatTableDataSource,
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
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

/** Custom Dialogs */
import { RejectShareDialogComponent } from './reject-share-dialog/reject-share-dialog.component';

/** Custom Serices */
import { SharesService } from 'app/shares/shares.service';
import { SettingsService } from 'app/settings/settings.service';
import { NgClass } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { StatusLookupPipe } from '../../../pipes/status-lookup.pipe';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Reject shares component.
 */
@Component({
  selector: 'mifosx-reject-shares',
  templateUrl: './reject-shares.component.html',
  styleUrls: ['./reject-shares.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatSortHeader,
    MatCellDef,
    MatCell,
    NgClass,
    MatTooltip,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatPaginator,
    StatusLookupPipe,
    DateFormatPipe
  ]
})
export class RejectSharesComponent implements OnInit {
  /** Shares account data. */
  sharesAccountData: any;

  /** Shares account Id */
  accountId: any;
  /** Shares account data. */
  sharesData: any[];
  /** Columns to be displayed in shares table. */
  displayedColumns: string[] = [
    'transactionDate',
    'totalShares',
    'redeemedPrice',
    'status',
    'reject'
  ];
  /** Data source for shares table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for shares table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for shares table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  /** Shares table reference */
  @ViewChild('sharesTable', { static: true }) sharesTableRef: MatTable<Element>;

  /**
   * @param {SharesService} sharesService Shares Service
   * @param {ActivatedRoute} route Activated Route
   * @param {MatDialog} dialog Mat Dialog
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(
    private sharesService: SharesService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private settingsService: SettingsService
  ) {
    this.accountId = this.route.parent.snapshot.params['shareAccountId'];
    this.route.data.subscribe((data: { shareAccountActionData: any }) => {
      this.sharesAccountData = data.shareAccountActionData;
    });
  }

  /**
   * Sets the shares table.
   */
  ngOnInit() {
    this.sharesData = this.sharesAccountData.purchasedShares.filter(
      (share: any) => share.status.value === 'Pending Approval'
    );
    this.setShares();
  }

  /**
   * Initializes the data source, paginator and sorter for shares table.
   */
  setShares() {
    this.dataSource = new MatTableDataSource(this.sharesData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Rejects a share
   * @param {any} id Share Id
   */
  reject(id: any) {
    const rejectSharesDialogRef = this.dialog.open(RejectShareDialogComponent, {
      data: { shareId: id }
    });
    rejectSharesDialogRef.afterClosed().subscribe((response: any) => {
      if (response.reject) {
        const locale = this.settingsService.language.code;
        const dateFormat = this.settingsService.dateFormat;
        const data = {
          requestedShares: [{ id }],
          dateFormat,
          locale
        };
        this.sharesService.executeSharesAccountCommand(this.accountId, 'rejectadditionalshares', data).subscribe(() => {
          const share = this.sharesData.find((element) => element.id === id);
          const index = this.sharesData.indexOf(share);
          this.sharesData.splice(index, 1);
          this.dataSource.data = this.sharesData;
          this.sharesTableRef.renderRows();
        });
      }
    });
  }
}
