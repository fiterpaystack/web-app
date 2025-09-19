/**
 * Discount Analytics Models
 * TypeScript interfaces for discount analytics
 */

export interface DiscountAnalyticsReport {
  totalApplications: number;
  totalDiscountAmount: number;
  averageDiscountPercentage: number;
  totalOriginalAmount: number;
  totalFinalAmount: number;
  applicationsByDate: ApplicationByDate[];
  discountTrend: DiscountTrend[];
  topRules: TopRule[];
}

export interface ApplicationByDate {
  date: string;
  applications: number;
  totalDiscount: number;
}

export interface DiscountTrend {
  date: string;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
}

export interface TopRule {
  ruleId: number;
  ruleName: string;
  applications: number;
  totalDiscount: number;
  averageDiscount: number;
}
