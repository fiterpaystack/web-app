/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortHeader } from '@angular/material/sort';
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
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Amazon S3 Component.
 */
@Component({
  selector: 'mifosx-amazon-s3',
  templateUrl: './amazon-s3.component.html',
  styleUrls: ['./amazon-s3.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
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
  ]
})
export class AmazonS3Component implements OnInit {
  /** Amazon S3 configuration data. */
  amazonS3ConfigurationData: any;
  /** Columns to be displayed in Amazon S3 configuration table. */
  displayedColumns: string[] = [
    'name',
    'value'
  ];
  /** Data source for Amazon S3 configuration table. */
  dataSource: MatTableDataSource<any>;

  /** Sorter for Amazon S3 configuration table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the Amazon S3 configuration data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { amazonS3Configuration: any }) => {
      this.amazonS3ConfigurationData = data.amazonS3Configuration;
    });
  }

  /**
   * Sets the Amazon S3 Configuration table.
   */
  ngOnInit() {
    this.setAmazonS3Configuration();
  }

  /**
   * Initializes the data source and sorter for Amazon S3 configuration table.
   */
  setAmazonS3Configuration() {
    this.dataSource = new MatTableDataSource(this.amazonS3ConfigurationData);
    this.dataSource.sort = this.sort;
  }

  getConfigurationValue(configuration: any): string {
    const value = configuration.value;
    if (configuration.name === 's3_access_key' || configuration.name === 's3_secret_key') {
      return value
        ? value.replace(value.substr(1, value.length - 3), value.substr(1, value.length - 3).replace(/./g, '*'))
        : '';
    }
    return value;
  }
}
