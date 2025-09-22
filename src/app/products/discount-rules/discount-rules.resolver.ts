import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscountRulesService } from './services/discount-rules.service';
import { DiscountRule } from './models/discount-rule.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountRulesResolver implements Resolve<DiscountRule[]> {
  constructor(private discountRulesService: DiscountRulesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscountRule[]> {
    return this.discountRulesService.getDiscountRules();
  }
}
