/** Angular Imports */
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Custom Data Source */
import { KafkaEventsDataSource } from './kafka-events.datasource';

/** Custom Components */
import { RetryConfirmationDialogComponent } from './retry-confirmation-dialog/retry-confirmation-dialog.component';

/** Custom Services */
import { SystemService } from '../system.service';
import { TranslateService } from '@ngx-translate/core';

/** Custom Utils */
import { getKafkaEventStatusColor, formatKafkaEventRetryCount, KafkaEventStatus } from './kafka-event-status.utils';

/** rxjs Imports */
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AsyncPipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import {
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
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Kafka Events Component.
 */
@Component({
  selector: 'mifosx-kafka-events',
  templateUrl: './kafka-events.component.html',
  styleUrls: ['./kafka-events.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FormsModule,
    FaIconComponent,
    MatProgressBar,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatTooltip,
    MatButton,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatSortHeader,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatPaginator,
    AsyncPipe,
    DateFormatPipe
  ]
})
export class KafkaEventsComponent implements OnInit, AfterViewInit {
  /** Columns to be displayed in kafka events table. */
  displayedColumns: string[] = [
    'eventId',
    'entityName',
    'actionName',
    'status',
    'topicName',
    'partitionKey',
    'retryCount',
    'createdAt',
    'lastRetryAt',
    'actions'
  ];
  /** Data source for kafka events table. */
  dataSource: KafkaEventsDataSource;
  /** Loading state */
  isLoading = false;
  /** Selected status filter */
  selectedStatus: string = '';
  /** Kafka Event Status enum for template usage */
  kafkaEventStatus = KafkaEventStatus;

  /** Paginator for kafka events table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for kafka events table. */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * @param {SystemService} systemService System Service.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {TranslateService} translateService Translate Service.
   * @param {MatSnackBar} snackBar Snackbar for notifications.
   */
  constructor(
    private systemService: SystemService,
    private router: Router,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Initializes the data source for kafka events table and loads the first page.
   */
  ngOnInit() {
    this.dataSource = new KafkaEventsDataSource(this.systemService);
    this.getKafkaEvents();
  }

  /**
   * Retry all failed Kafka events and refresh the list.
   */
  retryAll() {
    // Get total failed count for dialog
    const dialogRef = this.dialog.open(RetryConfirmationDialogComponent, {
      data: {
        isBulk: true,
        totalFailed: null // Will be updated if needed
      }
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response && response.confirm) {
        this.isLoading = true;
        this.systemService.retryAllKafkaEvents().subscribe({
          next: () => {
            this.loadKafkaEventsPage();
            this.isLoading = false;
            this.snackBar.open(this.translateService.instant('labels.text.Retry all initiated'), 'Close', {
              duration: 3000
            });
          },
          error: () => {
            this.isLoading = false;
            this.snackBar.open(this.translateService.instant('labels.text.Error retrying events'), 'Close', {
              duration: 3000
            });
          }
        });
      }
    });
  }

  /**
   * Retry a single failed Kafka event.
   * @param {string} eventId Event ID to retry.
   * @param {any} event Event object for dialog data.
   */
  retryEvent(eventId: string, event?: any) {
    const dialogRef = this.dialog.open(RetryConfirmationDialogComponent, {
      data: {
        eventId: eventId,
        status: event?.status || KafkaEventStatus.FAILED,
        retryCount: event?.retryCount,
        maxRetries: event?.maxRetries,
        isBulk: false
      }
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response && response.confirm) {
        this.isLoading = true;
        this.systemService.retryKafkaEvent(eventId).subscribe({
          next: () => {
            this.loadKafkaEventsPage();
            this.isLoading = false;
            this.snackBar.open(this.translateService.instant('labels.text.Event retry initiated'), 'Close', {
              duration: 3000
            });
          },
          error: () => {
            this.isLoading = false;
            this.snackBar.open(this.translateService.instant('labels.text.Error retrying event'), 'Close', {
              duration: 3000
            });
          }
        });
      }
    });
  }

  /**
   * Sets up pagination and sorting.
   */
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadKafkaEventsPage()))
      .subscribe();
  }

  /**
   * Initializes the data source for kafka events table and loads the first page.
   */
  getKafkaEvents() {
    this.isLoading = true;
    const pageIndex: number = this.paginator ? this.paginator.pageIndex : 0;
    const pageSize: number = this.paginator ? this.paginator.pageSize : 10;

    const sortParam = this.getSortParameter();
    this.dataSource.getKafkaEvents(pageIndex, pageSize, this.selectedStatus || undefined, sortParam);
    this.isLoading = false;
  }

  /**
   * Loads a page of kafka events.
   */
  loadKafkaEventsPage() {
    this.getKafkaEvents();
  }

  /**
   * Handles status filter change.
   * @param {any} event Selection change event.
   */
  onStatusChange(event: any) {
    this.selectedStatus = event.value || '';
    this.paginator.pageIndex = 0; // Reset to first page when filter changes
    this.loadKafkaEventsPage();
  }

  /**
   * Converts MatSort to API sort format.
   * @returns {string | undefined} Sort parameter in format "fieldName,direction" or undefined.
   */
  getSortParameter(): string | undefined {
    if (!this.sort || !this.sort.active || !this.sort.direction) {
      return undefined;
    }
    return `${this.sort.active},${this.sort.direction}`;
  }

  /**
   * Gets the status color class.
   * @param {string} status Status from API.
   * @returns {string} CSS class name.
   */
  getStatusColor(status: string): string {
    return getKafkaEventStatusColor(status);
  }

  /**
   * Navigates to view event details.
   * @param {string} eventId Event ID.
   */
  viewEvent(eventId: string) {
    this.router.navigate([
      '/system/kafka-events',
      eventId
    ]);
  }

  /**
   * Formats retry count display.
   * @param {number} retryCount Current retry count.
   * @param {number} maxRetries Maximum retries.
   * @returns {string} Formatted retry count string.
   */
  formatRetryCount(retryCount: number, maxRetries: number): string {
    return formatKafkaEventRetryCount(retryCount, maxRetries);
  }

  /**
   * Truncates event ID for display.
   * @param {string} eventId Full event ID.
   * @returns {string} Truncated event ID.
   */
  truncateEventId(eventId: string): string {
    if (!eventId) {
      return '';
    }
    return eventId.length > 30 ? eventId.substring(0, 30) + '...' : eventId;
  }
}
