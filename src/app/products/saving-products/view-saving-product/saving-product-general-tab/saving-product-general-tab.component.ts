import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Accounting } from 'app/core/utils/accounting';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatDivider } from '@angular/material/divider';
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
  MatRow,
  MatTableDataSource
} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewSavingsAccountingDetailsComponent } from '../../../../shared/accounting/view-savings-accounting-details/view-savings-accounting-details.component';
import { FormatNumberPipe } from '../../../../pipes/format-number.pipe';
import { YesnoPipe } from '../../../../pipes/yesno.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-saving-product-general-tab',
  templateUrl: './saving-product-general-tab.component.html',
  styleUrls: ['./saving-product-general-tab.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    MatDivider,
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
    ViewSavingsAccountingDetailsComponent,
    FormatNumberPipe,
    YesnoPipe,
    MatTooltipModule
  ]
})
export class SavingProductGeneralTabComponent {
  savingProduct: any;
  discountRulesDataSource: MatTableDataSource<any> = new MatTableDataSource();
  private combinationStrategyCopy = '';

  chargesDisplayedColumns: string[] = [
    'name',
    'chargeCalculationType',
    'amount',
    'chargeTimeType'
  ];
  discountRulesDisplayedColumns: string[] = [
    'name',
    'ruleType',
    'ruleParameters',
    'rulePriority',
    'active'
  ];
  paymentFundSourceDisplayedColumns: string[] = [
    'paymentTypeId',
    'fundSourceAccountId'
  ];
  feesPenaltyIncomeDisplayedColumns: string[] = [
    'chargeId',
    'incomeAccountId'
  ];

  constructor(
    private route: ActivatedRoute,
    private accounting: Accounting,
    private translateService: TranslateService
  ) {
    this.combinationStrategyCopy = this.translateService.instant('labels.inputs.Combination Strategy Sum Cap');
    this.route.data.subscribe((data: { savingProduct: any }) => {
      this.savingProduct = data.savingProduct;

      // Update the data source
      const discountRules = this.getDiscountRules();
      this.discountRulesDataSource.data = discountRules;
    });
  }

  isCashOrAccrualAccounting(): boolean {
    return this.accounting.isCashOrAccrualAccounting(this.savingProduct.accountingRule);
  }

  isAccrualAccounting(): boolean {
    return this.accounting.isAccrualAccounting(this.savingProduct.accountingRule);
  }

  getDiscountRules(): any[] {
    if (!this.savingProduct) {
      return [];
    }

    // Check multiple possible locations for discount rules
    let discountRules = [];

    // First try direct discountRules property
    if (this.savingProduct.discountRules) {
      discountRules = this.savingProduct.discountRules;
    }
    // Then try additionalAttributes.discountRules
    else if (this.savingProduct.additionalAttributes?.discountRules) {
      discountRules = this.savingProduct.additionalAttributes.discountRules;
    }
    // Also check additionalParameters.discountRules
    else if (this.savingProduct.additionalParameters?.discountRules) {
      discountRules = this.savingProduct.additionalParameters.discountRules;
    }

    return discountRules || [];
  }

  getTimePeriodLabel(timePeriod: string): string {
    const labels: { [key: string]: string } = {
      DAILY: 'day',
      WEEKLY: 'week',
      MONTHLY: 'month',
      YEARLY: 'year'
    };
    return labels[timePeriod] || timePeriod.toLowerCase();
  }

  getCombinationStrategyLabel(strategy?: string | null): string {
    const key = (strategy || 'SUM_CAP').toUpperCase();
    if (key === 'SUM_CAP') {
      return this.combinationStrategyCopy;
    }
    return key.replace(/_/g, ' ').toLowerCase();
  }
}
