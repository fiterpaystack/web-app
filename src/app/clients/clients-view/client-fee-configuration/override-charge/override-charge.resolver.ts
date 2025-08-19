/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable, of } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../../../clients.service';

/**
 * Override Charge data resolver.
 */
@Injectable({
  providedIn: 'root'
})
export class OverrideChargeResolver {
  /**
   * @param {ClientsService} clientsService Clients service.
   */
  constructor(private clientsService: ClientsService) {}

  /**
   * Returns the Override Charge template data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const clientId = route.params['clientId'];
    // TODO: Implement API call to get charge template data
    // For now, return empty observable
    return of({
      chargeOptions: [],
      calculationTypes: [],
      chargeTimeTypes: []
    });
  }
}
