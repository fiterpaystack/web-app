/** Angular Imports */
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { RouterLink } from '@angular/router';

/** Custom Data Source */
import { KafkaNotificationsDataSource } from './kafka-notifications.datasource';

/** Custom Services */
import { SystemService } from '../system.service';

/** rxjs Imports */
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AsyncPipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
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
 * Kafka Notifications Component.
 */
@Component({
  selector: 'mifosx-kafka-notifications',
  templateUrl: './kafka-notifications.component.html',
  styleUrls: ['./kafka-notifications.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    MatProgressBar,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatTooltip,
    MatButton,
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
export class KafkaNotificationsComponent implements OnInit, AfterViewInit {
  /** Kafka Notifications Data */
  kafkaNotificationsData: any;
  /** Columns to be displayed in kafka notifications table. */
  displayedColumns: string[] = [
    'clientName',
    'accountNumber',
    'accountProductName',
    'eventType',
    'pndReason',
    'status',
    'timestamp'
  ];
  /** Data source for kafka notifications table. */
  dataSource: KafkaNotificationsDataSource;
  /** Loading state */
  isLoading = false;

  /** Paginator for kafka notifications table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for kafka notifications table. */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * @param {SystemService} systemService System Service.
   */
  constructor(private systemService: SystemService) {}

  /**
   * Initializes the data source for kafka notifications table and loads the first page.
   */
  ngOnInit() {
    this.dataSource = new KafkaNotificationsDataSource(this.systemService);
    this.getKafkaNotifications();
  }

  /**
   * Retry all failed Kafka notifications and refresh the list.
   */
  retryAll() {
    this.isLoading = true;
    this.systemService.retryAllKafkaNotifications().subscribe({
      next: () => {
        this.loadKafkaNotificationsPage();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  /**
   * Sets up pagination and sorting.
   */
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadKafkaNotificationsPage()))
      .subscribe();
  }

  /**
   * Initializes the data source for kafka notifications table and loads the first page.
   */
  getKafkaNotifications() {
    this.isLoading = true;
    const pageIndex: number = this.paginator ? this.paginator.pageIndex : 0;
    const pageSize: any = this.paginator ? this.paginator.pageSize : 10;

    this.dataSource.getKafkaNotifications(pageIndex, pageSize);
    this.isLoading = false;
  }

  /**
   * Loads a page of kafka notifications.
   */
  loadKafkaNotificationsPage() {
    if (!this.sort.direction) {
      delete this.sort.active;
    }
    this.getKafkaNotifications();
  }

  /**
   * Formats timestamp array to readable date string.
   * @param {number[]} timestampArray Timestamp array from API.
   * @returns {Date} Formatted date.
   */
  formatTimestamp(timestampArray: number[]): Date {
    if (!timestampArray || timestampArray.length < 6) {
      return new Date();
    }
    // timestampArray format: [year, month, day, hour, minute, second]
    // Note: month is 0-indexed in JavaScript Date constructor
    return new Date(
      timestampArray[0],
      timestampArray[1] - 1,
      timestampArray[2],
      timestampArray[3],
      timestampArray[4],
      timestampArray[5]
    );
  }

  /**
   * Gets the event type display text.
   * @param {string} eventType Event type from API.
   * @returns {string} Display text.
   */
  getEventTypeDisplay(eventType: string): string {
    return eventType
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }

  /**
   * Gets the status color class.
   * @param {string} status Status from API.
   * @returns {string} CSS class name.
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'status-pending';
      case 'SENT':
        return 'status-sent';
      case 'FAILED':
        return 'status-failed';
      default:
        return 'status-unknown';
    }
  }
}
