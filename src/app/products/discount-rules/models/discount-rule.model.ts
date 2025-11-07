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

/**
 * Enhanced assignment payload for attaching rules to entities (e.g., charges, savings products)
 * Backward compatible with existing API that accepts an array of { id }.
 */
export interface DiscountRuleAssignment {
  id: number;
  /** Optional per-assignment priority, defaults to 0 when omitted */
  assignmentPriority?: number;
}

/**
 * Supported policy combination strategies. SUM_CAP is the current default.
 */
export type DiscountCombinationStrategy = 'SUM_CAP' | string;

/**
 * Entity types that can have discount policies/assignments.
 */
export type DiscountEntityType = 'CHARGE' | 'SAVINGS_PRODUCT' | string;

/**
 * Entity-level discount policy configured on charges or products.
 */
export interface DiscountPolicy {
  id?: number;
  entityType?: DiscountEntityType;
  entityId?: number;
  /** When true, all assigned rules must be applicable (strict AND) */
  allRulesRequired?: boolean;
  /** How multiple discounts combine when multiple rules qualify */
  combinationStrategy?: DiscountCombinationStrategy;
  createdOnUtc?: string;
  lastModifiedOnUtc?: string;
  createdBy?: number;
  lastModifiedBy?: number;
}

/**
 * Assigned discount rule representation returned in entity additionalAttributes.
 * Includes rule metadata plus assignment-specific fields.
 */
export interface AssignedDiscountRule extends Partial<DiscountRule> {
  ruleId?: number; // Some APIs return ruleId alongside id
  entityType?: DiscountEntityType;
  entityId?: number;
  assignmentPriority?: number;
}

/**
 * Common additional attributes shape for entities that surface discount info
 */
export interface DiscountAdditionalAttributes {
  enableDiscountEngine?: boolean;
  /** Enhanced assigned rules list with assignmentPriority and stats */
  discountRules?: AssignedDiscountRule[];
  /** Optional entity-level policy configuration */
  discountPolicy?: DiscountPolicy | null;
}
