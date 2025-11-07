export interface KycSummarySection<T> {
  title: string;
  data: T;
}

export interface PersonalInfo {
  fullName: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  gender?: string;
  educationLevel?: string;
  numberOfChildren?: number;
}

export interface ContactInfo {
  mobile?: string;
  email?: string;
  address?: string;
  monthsAtAddress?: number;
}

export interface IdentityInfo {
  bvn?: string;
  meansOfIdentity?: string;
  idNumber?: string;
  issueDate?: string;
  expiryDate?: string;
}

export interface IdentityRecord {
  type: string;
  number?: string;
  issueDate?: string;
  expiryDate?: string;
}

export interface AccountInfo {
  accountType?: string;
  accountTier?: string;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
}

export interface EmploymentInfo {
  status?: string;
  employerName?: string;
  employerAddress?: string;
  sector?: string;
  monthlyNetIncome?: number;
  staffId?: string;
  telephone?: string;
  landmark?: string;
}

export interface AddressInfo {
  type: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  fullAddress?: string;
}

export interface PersonRef {
  name?: string;
  relationship?: string;
  address?: string;
  mobile?: string;
  email?: string;
}

export interface DocumentInfo {
  category: string;
  name: string;
  uploaded: boolean;
}

export interface KycSummary {
  personal: PersonalInfo;
  contact: ContactInfo;
  identity: IdentityInfo;
  identityRecords: IdentityRecord[];
  account?: AccountInfo;
  employment?: EmploymentInfo;
  addresses?: AddressInfo[];
  nextOfKin?: PersonRef[];
  documents: DocumentInfo[];
  familyMembers?: any[];
}

// No mock data needed; KYC summary is now populated from live API endpoints.
