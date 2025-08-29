/**
 * Fee Split Data Models
 *
 * This file contains TypeScript interfaces for fee split related data structures
 * used throughout the charge management system.
 */

export interface ChargeStakeholderSplit {
  id?: number;
  chargeId: number;
  chargeName: string;
  fundId: number;
  fundName: string;
  splitType: 'PERCENTAGE' | 'FLAT_AMOUNT';
  splitValue: number;
  glAccountId: number;
  glAccountName: string;
  glAccountCode: string;
  glAccountHierarchy: string;
  active: boolean;
  createdDate?: string;
  lastModifiedDate?: string;
  createdBy?: number;
  lastModifiedBy?: number;

  // Backward compatibility properties
  charge?: {
    id: number;
    name: string;
  };
  fund?: {
    id: number;
    name: string;
  };
  glAccount?: {
    id: number;
    name: string;
    glCode: string;
    hierarchy: string;
  };
  percentageSplit?: boolean;
  flatAmountSplit?: boolean;
}

export interface FeeSplitAudit {
  id: number;
  transactionId: string;
  transactionType: string;
  totalFeeAmount: number;
  splitDate: string;
  officeId: number;
  officeName?: string;
  splitDetails: FeeSplitDetail[];
  createdDate: string;
}

export interface FeeSplitDetail {
  id: number;
  feeSplitAuditId: number;
  fundId: number;
  fundName: string;
  splitAmount: number;
  splitPercentage?: number;
  glAccountId: number;
  glAccountName: string;
  glCode: string;
  journalEntryId: number;
  createdDate: string;
}

export interface FeeSplitRequest {
  fundId: number;
  splitType: 'PERCENTAGE' | 'FLAT_AMOUNT';
  splitValue: number;
  glAccountId: number;
  active?: boolean;
}

export interface FeeSplitValidationResult {
  isValid: boolean;
  totalPercentage: number;
  totalFlatAmount: number;
  errors: string[];
}

export interface FeeSplitSummary {
  totalSplits: number;
  totalPercentage: number;
  totalFlatAmount: number;
  hasPercentageSplits: boolean;
  hasFlatAmountSplits: boolean;
}
