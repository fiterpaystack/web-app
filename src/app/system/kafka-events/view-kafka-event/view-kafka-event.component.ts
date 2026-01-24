/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Components */
import { RetryConfirmationDialogComponent } from '../retry-confirmation-dialog/retry-confirmation-dialog.component';

/** Custom Services */
import { SystemService } from '../../system.service';
import { TranslateService } from '@ngx-translate/core';

/** Material Imports */
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltip } from '@angular/material/tooltip';
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
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * View Kafka Event Component.
 */
@Component({
  selector: 'mifosx-view-kafka-event',
  templateUrl: './view-kafka-event.component.html',
  styleUrls: ['./view-kafka-event.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatProgressBar,
    MatTooltip,
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
    FaIconComponent,
    DateFormatPipe
  ]
})
export class ViewKafkaEventComponent implements OnInit {
  /** Event data */
  event: any;
  /** Retry attempts data */
  retryAttempts: any[] = [];
  /** Loading state */
  isLoading = false;
  /** Event ID from route */
  eventId: string;
  /** Formatted payload JSON */
  payloadFormatted: string = '';

  /** Columns for retry attempts table */
  displayedColumns: string[] = [
    'attemptNumber',
    'status',
    'errorMessage',
    'attemptedAt',
    'duration'
  ];

  /**
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SystemService} systemService System Service.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {TranslateService} translateService Translate Service.
   * @param {MatSnackBar} snackBar Snackbar for notifications.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private systemService: SystemService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {
    this.eventId = this.route.snapshot.params['eventId'];
  }

  /**
   * Loads event data and retry attempts.
   */
  ngOnInit() {
    this.loadEvent();
    this.loadRetryAttempts();
  }

  /**
   * Loads the event data.
   */
  loadEvent() {
    this.isLoading = true;
    this.systemService.getKafkaEvent(this.eventId).subscribe({
      next: (event: any) => {
        this.event = event;
        this.formatPayload();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open(this.translateService.instant('labels.text.Error loading event'), 'Close', {
          duration: 3000
        });
      }
    });
  }

  /**
   * Loads retry attempts for the event.
   */
  loadRetryAttempts() {
    this.systemService.getKafkaEventRetryAttempts(this.eventId).subscribe({
      next: (response: any) => {
        // API returns { attempts: [...], totalAttempts: number }
        this.retryAttempts = response.attempts || response.content || response || [];
      },
      error: () => {
        this.retryAttempts = [];
      }
    });
  }

  /**
   * Formats the payload JSON for display.
   */
  formatPayload() {
    if (this.event && this.event.payload) {
      try {
        const payloadObj = typeof this.event.payload === 'string' ? JSON.parse(this.event.payload) : this.event.payload;
        this.payloadFormatted = JSON.stringify(payloadObj, null, 2);
      } catch (e) {
        this.payloadFormatted = this.event.payload;
      }
    }
  }

  /**
   * Copies payload to clipboard.
   */
  copyPayload() {
    if (this.payloadFormatted) {
      navigator.clipboard.writeText(this.payloadFormatted).then(() => {
        this.snackBar.open(this.translateService.instant('labels.text.Copied to clipboard'), 'Close', {
          duration: 2000
        });
      });
    }
  }

  /**
   * Downloads payload as JSON file.
   */
  downloadPayload() {
    if (this.payloadFormatted) {
      const blob = new Blob([this.payloadFormatted], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `event-${this.eventId}.json`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }

  /**
   * Opens retry confirmation dialog and retries the event.
   */
  retryEvent() {
    const dialogRef = this.dialog.open(RetryConfirmationDialogComponent, {
      data: {
        eventId: this.event.eventId,
        status: this.event.status,
        retryCount: this.event.retryCount,
        maxRetries: this.event.maxRetries,
        isBulk: false
      }
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response && response.confirm) {
        this.isLoading = true;
        this.systemService.retryKafkaEvent(this.event.eventId).subscribe({
          next: () => {
            this.isLoading = false;
            this.snackBar.open(this.translateService.instant('labels.text.Event retry initiated'), 'Close', {
              duration: 3000
            });
            // Reload event data
            this.loadEvent();
            this.loadRetryAttempts();
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
   * Navigates back to the list.
   */
  goBack() {
    this.router.navigate(['/system/kafka-events']);
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
      case 'DLQ':
        return 'status-dlq';
      default:
        return 'status-unknown';
    }
  }

  /**
   * Formats retry count display.
   * @param {number} retryCount Current retry count.
   * @param {number} maxRetries Maximum retries.
   * @returns {string} Formatted retry count string.
   */
  formatRetryCount(retryCount: number, maxRetries: number): string {
    return `${retryCount} / ${maxRetries}`;
  }

  /**
   * Gets retry attempt status display.
   * @param {any} attempt Retry attempt object.
   * @returns {string} Status display.
   */
  getRetryAttemptStatus(attempt: any): string {
    return attempt.success ? 'SUCCESS' : 'FAILED';
  }
}
