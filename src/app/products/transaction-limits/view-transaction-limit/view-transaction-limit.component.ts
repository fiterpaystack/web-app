import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';

/** Custom Components */
import { TranslateService } from '@ngx-translate/core';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { YesnoPipe } from '../../../pipes/yesno.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * View Collateral Component
 */
@Component({
  selector: 'mifosx-view-transaction-limit',
  templateUrl: './view-transaction-limit.component.html',
  styleUrls: ['./view-transaction-limit.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    YesnoPipe
  ]
})
export class ViewTransactionLimitComponent {
  transactionLimitData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data: { transactionLimit: any }) => {
      this.transactionLimitData = data.transactionLimit;
    });
  }

  /* ngOnInit(): void {} */

  editTransactionLimit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
