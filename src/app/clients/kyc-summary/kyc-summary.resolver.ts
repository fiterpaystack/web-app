import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { KycSummary } from './models/kyc-summary.model';
import { KycSummaryService } from './kyc-summary.service';

@Injectable()
export class KycSummaryResolver {
  constructor(private kycSummaryService: KycSummaryService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<KycSummary> {
    const clientId = route.parent?.paramMap.get('clientId') as string;
    return this.kycSummaryService.getKycSummary(clientId);
  }
}
