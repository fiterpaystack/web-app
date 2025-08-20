/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable, throwError } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../../../clients.service';

/**
 * Fee Detail data resolver.
 */
@Injectable({
  providedIn: 'root'
})
export class FeeDetailResolver {
  /**
   * @param {ClientsService} clientsService Clients service.
   */
  constructor(private clientsService: ClientsService) {}

  /**
   * Returns the Fee Detail data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Try different levels to find clientId
    const clientId =
      route.parent?.parent?.params['clientId'] || route.parent?.params['clientId'] || route.params['clientId'];
    const feeId = route.params['feeId'];

    if (!clientId || !feeId) {
      return throwError(() => new Error('Missing required parameters: clientId or feeId'));
    }

    // Return the API call - if it fails, the route will fail to load
    return this.clientsService.getExtendedClientChargeDetail(clientId, feeId);
  }
}
