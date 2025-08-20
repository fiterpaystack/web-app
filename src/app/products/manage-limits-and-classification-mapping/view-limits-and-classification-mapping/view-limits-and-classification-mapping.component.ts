import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';

/** Custom Components */
import { TranslateService } from '@ngx-translate/core';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * View Collateral Component
 */
@Component({
  selector: 'mifosx-view-limits-and-classification-mapping',
  templateUrl: './view-limits-and-classification-mapping.component.html',
  styleUrls: ['./view-limits-and-classification-mapping.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent
  ]
})
export class ViewLimitsAndClassificationMappingComponent {
  classificationMappingData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data: { limitsMapping: any }) => {
      this.classificationMappingData = data.limitsMapping;
    });
  }

  /* ngOnInit(): void {} */

  editLimitsAndClassificationMapping() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
