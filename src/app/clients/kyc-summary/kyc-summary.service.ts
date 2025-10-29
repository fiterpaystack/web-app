import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KycSummary, MOCK_KYC_SUMMARY } from './models/kyc-summary.model';

@Injectable({ providedIn: 'root' })
export class KycSummaryService {
  getKycSummary(clientId: string): Observable<KycSummary> {
    // Mocked implementation; replace internals with API calls later.
    return of(MOCK_KYC_SUMMARY);
  }
}
