/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../../clients.service';

/**
 * Client Fee Configuration data resolver.
 */
@Injectable({
  providedIn: 'root'
})
export class ClientFeeConfigurationResolver {
  /**
   * @param {ClientsService} clientsService Clients service.
   */
  constructor(private clientsService: ClientsService) {}

  /**
   * Returns the Client Fee Configuration data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const clientId = route.parent.params['clientId'];
    // Use the extended API to get charge override data
    return this.clientsService.getExtendedClientCharges(clientId);
  }
}
