import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountRulesService } from '../../../../../discount-rules/services/discount-rules.service';
import { DiscountAnalyticsReport } from './models/product-discount-rule.model';

/**
 * Discount Analytics Component
 * Displays analytics and performance metrics for discount engine
 */
@Component({
  selector: 'mifosx-discount-analytics',
  templateUrl: './discount-analytics.component.html',
  styleUrls: ['./discount-analytics.component.scss']
})
export class DiscountAnalyticsComponent implements OnInit {
  analyticsForm: FormGroup;
  analyticsData: DiscountAnalyticsReport;
  loading = false;

  // Chart data
  chartData: any = {};

  // Key metrics
  keyMetrics = {
    totalApplications: 0,
    totalDiscountAmount: 0,
    averageDiscountPercentage: 0,
    totalOriginalAmount: 0,
    totalFinalAmount: 0
  };

  constructor(
    private fb: FormBuilder,
    private discountService: DiscountRulesService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadAnalytics();
  }

  private createForm(): void {
    this.analyticsForm = this.fb.group({
      fromDate: [
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        Validators.required
      ],
      toDate: [
        new Date(),
        Validators.required
      ],
      productId: [
        '',
        Validators.required
      ]
    });
  }

  async loadAnalytics(): Promise<void> {
    this.loading = true;

    try {
      const formValue = this.analyticsForm.value;
      const report = await this.discountService
        .getDiscountAnalytics(
          formValue.productId,
          this.formatDate(formValue.fromDate),
          this.formatDate(formValue.toDate)
        )
        .toPromise();

      this.analyticsData = report;
      this.updateKeyMetrics(report);
      this.updateCharts(report);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      this.loading = false;
    }
  }

  private updateKeyMetrics(report: DiscountAnalyticsReport): void {
    this.keyMetrics = {
      totalApplications: report.totalApplications,
      totalDiscountAmount: report.totalDiscountAmount,
      averageDiscountPercentage: report.averageDiscountPercentage,
      totalOriginalAmount: report.totalOriginalAmount,
      totalFinalAmount: report.totalFinalAmount
    };
  }

  private updateCharts(report: DiscountAnalyticsReport): void {
    // Discount trend chart
    this.chartData.discountTrend = {
      labels: [
        'Original Amount',
        'Discount Amount',
        'Final Amount'
      ],
      datasets: [
        {
          label: 'Amount',
          data: [
            report.totalOriginalAmount,
            report.totalDiscountAmount,
            report.totalFinalAmount
          ],
          backgroundColor: [
            '#2196F3',
            '#FF9800',
            '#4CAF50'
          ]
        }
      ]
    };

    // Applications chart
    this.chartData.applications = {
      labels: ['Total Applications'],
      datasets: [
        {
          label: 'Applications',
          data: [report.totalApplications],
          backgroundColor: ['#9C27B0']
        }
      ]
    };
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  onDateRangeChange(): void {
    this.loadAnalytics();
  }

  onProductChange(): void {
    this.loadAnalytics();
  }
}
