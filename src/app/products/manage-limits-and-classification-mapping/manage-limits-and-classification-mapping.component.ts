/** Angular Imports */
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
//import { MatDialog } from '@angular/material/dialog';
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
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { YesnoPipe } from '../../pipes/yesno.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
//import { EditMappingDialogComponent } from './edit-mapping-dialog/edit-mapping-dialog.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'mifosx-manage-limits-and-classification-mapping',
  templateUrl: './manage-limits-and-classification-mapping.component.html',
  styleUrls: ['./manage-limits-and-classification-mapping.component.scss'],
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
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow
    //EditMappingDialogComponent
  ]
})
export class ManageLimitsAndClassificationMappingComponent implements OnInit {
  displayedColumns: string[] = [
    'classification',
    'limit'
  ];

  dataSource: MatTableDataSource<any>;
  classificationMappingData: any;

  /** Paginator for the Limits and Classification Mapping Table */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //constructor(private dialog: MatDialog,private route: ActivatedRoute,private service: ProductsService) {
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {
    this.route.data.subscribe((data: { limitsMapping: any }) => {
      this.classificationMappingData = data.limitsMapping;
    });
  }

  /**
   * Sets the limits and classification mapping table.
   */
  ngOnInit() {
    this.setClassificationMappingDataSource();
  }

  /**
   * Initializes the data source, paginator and sorter for transaction limit table.
   */
  setClassificationMappingDataSource() {
    this.dataSource = new MatTableDataSource(this.classificationMappingData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters data in limits and classification mapping table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* openEditDialog(classification: any) {
        const dialogRef = this.dialog.open(EditMappingDialogComponent, {
          width: '400px',
          data: { classification }
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // Handle the saved data
            this.refreshData();
          }

        });
      } */

  refreshData() {
    this.service.getTransacitonLimitToClassificationMapping().subscribe((data: any[]) => {
      this.dataSource.data = data;
    });
  }
}
