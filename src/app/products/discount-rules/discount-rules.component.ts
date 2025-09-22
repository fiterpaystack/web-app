import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { PopoverService } from '../../configuration-wizard/popover/popover.service';
import { ConfigurationWizardService } from '../../configuration-wizard/configuration-wizard.service';
import { DiscountRulesService } from './services/discount-rules.service';
import { DiscountRule } from './models/discount-rule.model';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Discount Rules component.
 */
@Component({
  selector: 'mifosx-discount-rules',
  templateUrl: './discount-rules.component.html',
  styleUrls: ['./discount-rules.component.scss'],
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
    MatRow,
    MatPaginator,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    RouterLink
  ]
})
export class DiscountRulesComponent implements OnInit, AfterViewInit {
  /** Discount rules data. */
  discountRulesData: DiscountRule[] = [];
  /** Columns to be displayed in discount rules table. */
  displayedColumns: string[] = [
    'name',
    'ruleType',
    'ruleParameters',
    'active',
    'priority',
    'actions'
  ];
  /** Data source for discount rules table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for discount rules table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for discount rules table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /* Reference of create discount rules button */
  @ViewChild('buttonCreateDiscountRule') buttonCreateDiscountRule: ElementRef<any>;
  /* Template for popover on create discount rules button */
  @ViewChild('templateButtonCreateDiscountRule') templateButtonCreateDiscountRule: TemplateRef<any>;
  /* Reference of discount rules table */
  @ViewChild('discountRulesTable') discountRulesTable: ElementRef<any>;
  /* Template for popover on discount rules table */
  @ViewChild('templateDiscountRulesTable') templateDiscountRulesTable: TemplateRef<any>;

  /**
   * Retrieves the discount rules data from `resolve`.
   * @param {Router} router Router.
   * @param {ConfigurationWizardService} configurationWizardService ConfigurationWizard Service.
   * @param {PopoverService} popoverService PopoverService.
   */
  constructor(
    private router: Router,
    private configurationWizardService: ConfigurationWizardService,
    private popoverService: PopoverService,
    private discountRulesService: DiscountRulesService
  ) {}

  /**
   * Sets the discount rules table.
   */
  ngOnInit(): void {
    this.setDiscountRules();
  }

  /**
   * Initializes the data source, paginator and sorter for discount rules table.
   */
  ngAfterViewInit(): void {
    // Paginator and sort will be set after data is loaded
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * Sets the discount rules data from the service.
   */
  setDiscountRules(): void {
    this.discountRulesService.getDiscountRules().subscribe((discountRules: DiscountRule[]) => {
      this.discountRulesData = discountRules;
      this.dataSource = new MatTableDataSource(this.discountRulesData);

      // Set paginator and sort after data source is created
      if (this.dataSource && this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  /**
   * Filters data in discount rules table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Displays the popover on discount rules table.
   */
  displayPopover(): void {
    this.popoverService.open(
      this.templateDiscountRulesTable,
      this.discountRulesTable.nativeElement,
      'bottom',
      false,
      {}
    );
  }

  /**
   * Displays the popover on create discount rules button.
   */
  displayCreatePopover(): void {
    this.popoverService.open(
      this.templateButtonCreateDiscountRule,
      this.buttonCreateDiscountRule.nativeElement,
      'bottom',
      false,
      {}
    );
  }

  /**
   * Deletes the discount rule.
   * @param {DiscountRule} discountRule Discount rule to be deleted.
   */
  deleteDiscountRule(discountRule: DiscountRule): void {
    if (confirm('Are you sure you want to delete this discount rule?')) {
      this.discountRulesService.deleteDiscountRule(discountRule.id).subscribe(() => {
        this.setDiscountRules();
      });
    }
  }

  /**
   * Format rule parameters for display
   */
  formatRuleParameters(ruleParametersJson: string): string {
    if (!ruleParametersJson) {
      return 'No parameters';
    }

    try {
      const params = JSON.parse(ruleParametersJson);
      return JSON.stringify(params, null, 2);
    } catch (error) {
      return ruleParametersJson;
    }
  }
}
