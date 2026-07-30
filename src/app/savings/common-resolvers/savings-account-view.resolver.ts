/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService, SAVINGS_TRANSACTIONS_PAGE_SIZE } from '../savings.service';

/**
 * Savings Account data resolver.
 */
@Injectable()
export class SavingsAccountViewResolver {
  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private savingsService: SavingsService) {}

  /**
   * Returns the Savings Account data.
   * Only the first page of transactions is fetched here to avoid loading
   * accounts with very large transaction histories in a single request.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const savingAccountId = route.paramMap.get('savingAccountId');
    return this.savingsService.getSavingsAccountData(savingAccountId, SAVINGS_TRANSACTIONS_PAGE_SIZE, 0);
  }
}
