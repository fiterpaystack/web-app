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
  account: AccountInfo;
  employment?: EmploymentInfo;
  nextOfKin?: PersonRef;
  guarantor?: PersonRef;
  documents: DocumentInfo[];
}

export const MOCK_KYC_SUMMARY: KycSummary = {
  personal: {
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
    maritalStatus: 'Married',
    gender: 'Male',
    educationLevel: 'University',
    numberOfChildren: 1
  },
  contact: {
    mobile: '08012345678',
    email: 'john.doe@example.com',
    address: '6 Example Street, Ikate, Surulere, Lagos',
    monthsAtAddress: 24
  },
  identity: {
    bvn: '12345678901',
    meansOfIdentity: 'NIN',
    idNumber: 'NIN-1234-5678',
    issueDate: '2020-06-01',
    expiryDate: '2030-06-01'
  },
  account: {
    accountType: 'Savings',
    accountTier: 'Tier 3',
    bankName: 'Example Bank',
    accountName: 'JOHN DOE',
    accountNumber: '0123456789'
  },
  employment: {
    status: 'Employed',
    employerName: 'Zeta Corp',
    employerAddress: '12 Business Avenue VI',
    sector: 'Banking',
    monthlyNetIncome: 1000000,
    staffId: 'NA',
    telephone: '08000000000',
    landmark: 'Shoprite Mall'
  },
  nextOfKin: { name: '', relationship: '', address: '', mobile: '', email: '' },
  guarantor: { name: '', address: '', mobile: '', email: '' },
  documents: [
    { category: 'Identity', name: 'National ID', uploaded: true },
    { category: 'Address', name: 'Utility Bill', uploaded: true }
  ]
};
