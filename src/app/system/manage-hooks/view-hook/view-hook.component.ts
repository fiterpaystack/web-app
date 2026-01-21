/** Angular Imports */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { TranslateService } from '@ngx-translate/core';
import { SystemService } from '../../system.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * View Hook Component.
 */
@Component({
  selector: 'mifosx-view-hook',
  templateUrl: './view-hook.component.html',
  styleUrls: ['./view-hook.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    DateFormatPipe
  ]
})
export class ViewHookComponent {
  /** Hook Data. */
  hookData: any;

  /**
   * Retrieves the hook data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {SystemService} systemService System Service.
   * @param {Router} router Router for navigation.
   * @param {TranslateService} translateService Translate Service.
   */
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private systemService: SystemService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.route.data.subscribe((data: { hook: any }) => {
      this.hookData = data.hook;
    });
  }

  /**
   * Helper function to get config value by field name.
   * @param {string} fieldName The field name to search for.
   * @returns {string} The field value or empty string if not found.
   */
  getConfigValue(fieldName: string): string {
    if (!this.hookData.config || !Array.isArray(this.hookData.config)) {
      return '';
    }
    const field = this.hookData.config.find((c: any) => c.fieldName === fieldName);
    return field ? field.fieldValue : '';
  }

  /**
   * Deletes the current hook.
   */
  delete() {
    const deleteHookDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.translateService.instant('labels.inputs.hook') + ' ' + this.hookData.id }
    });
    deleteHookDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.systemService.deleteHook(this.hookData.id).subscribe(() => {
          this.router.navigate(['/system/hooks']);
        });
      }
    });
  }
}
