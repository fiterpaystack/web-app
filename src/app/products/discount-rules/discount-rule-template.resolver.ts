import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DiscountRule } from './models/discount-rule.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountRuleTemplateResolver {
  resolve(): Observable<any> {
    // Return template data for creating new discount rules
    return of({
      ruleTypes: [
        'PERCENTAGE',
        'FLAT'
      ],
      currencies: [
        'USD',
        'NGN',
        'EUR'
      ]
    });
  }
}
