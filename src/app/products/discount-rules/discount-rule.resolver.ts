import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscountRulesService } from './services/discount-rules.service';
import { DiscountRule } from './models/discount-rule.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountRuleResolver implements Resolve<DiscountRule> {
  constructor(private discountRulesService: DiscountRulesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscountRule> {
    const ruleId = route.paramMap.get('ruleId');
    return this.discountRulesService.getDiscountRule(+ruleId);
  }
}
