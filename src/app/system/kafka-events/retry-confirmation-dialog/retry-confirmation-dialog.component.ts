/** Angular Imports */
import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Retry Confirmation Dialog Component.
 */
@Component({
  selector: 'mifosx-retry-confirmation-dialog',
  templateUrl: './retry-confirmation-dialog.component.html',
  styleUrls: ['./retry-confirmation-dialog.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ]
})
export class RetryConfirmationDialogComponent {
  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides event data for confirmation.
   */
  constructor(
    public dialogRef: MatDialogRef<RetryConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  /**
   * Closes the dialog with confirmation.
   */
  confirm() {
    this.dialogRef.close({ confirm: true });
  }

  /**
   * Closes the dialog without confirmation.
   */
  cancel() {
    this.dialogRef.close();
  }
}
