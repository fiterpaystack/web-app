export interface DiscountRule {
  id?: number;
  name: string;
  description?: string;
  active: boolean;
  rulePriority: number;
  ruleType?: string;
  ruleParametersJson?: string;
  createdDate?: string;
  lastModifiedDate?: string;
  createdBy?: number;
  lastModifiedBy?: number;

  // Additional display fields
  applicationCount?: number;
  totalDiscountAmount?: number;
}

export interface DiscountPreview {
  originalAmount: number;
  totalDiscountAmount: number;
  finalAmount: number;
  applicableRulesCount: number;
  currencyCode: string;
}

export interface DiscountApplication {
  id: number;
  discountRuleId: number;
  entityType: string;
  entityId: number;
  chargeId: number;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  applicationDate: string;
  transactionId?: number;

  // Additional display fields
  ruleName?: string;
  entityName?: string;
  chargeName?: string;
}

export interface DiscountConditions {
  accountBalance?: AccountBalanceCondition;
  transaction?: TransactionCondition;
  timeBased?: TimeBasedCondition;
  client?: ClientCondition;
}

export interface AccountBalanceCondition {
  enabled: boolean;
  minimumBalance?: number;
  maximumBalance?: number;
  balanceType: string; // CURRENT, AVAILABLE, TOTAL
}

export interface TransactionCondition {
  enabled: boolean;
  minimumAmount?: number;
  maximumAmount?: number;
  transactionTypes?: string[];
  frequency: string; // FIRST_TIME, REGULAR, VIP
}

export interface TimeBasedCondition {
  enabled: boolean;
  validFrom?: string;
  validTo?: string;
  daysOfWeek?: number[];
  timeOfDay?: TimeRange;
}

export interface ClientCondition {
  enabled: boolean;
  clientType: string; // NEW, EXISTING, VIP
  minimumAccountAge?: number;
  maximumAccountAge?: number;
}

export interface TimeRange {
  start: string;
  end: string;
}

export interface DiscountRuleTypeInfo {
  ruleType: string;
  category: string;
  description: string;
  requiredParameters: string[];
  optionalParameters: string[];
  parameterDescriptions: { [key: string]: string };
}
