import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SettingsService } from 'app/settings/settings.service';
import { DiscountRule } from '../models/discount-rule.model';

/**
 * Service for managing discount rule assignments
 */
@Injectable({
  providedIn: 'root'
})
export class DiscountRuleAssignmentService {
  private baseUrl = '';

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  /**
   * Assign a discount rule to a product
   */
  assignDiscountRuleToProduct(ruleId: number, productId: number, productType: string): Observable<DiscountRule> {
    const url = `${this.baseUrl}/v1/discount-rules/products/${ruleId}/assign`;
    const payload = {
      productId: productId,
      productType: productType
    };

    return this.http.post<DiscountRule>(url, payload).pipe(
      catchError((error: any) => {
        console.error('Error assigning discount rule to product:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Unassign a discount rule from a product
   */
  unassignDiscountRuleFromProduct(ruleId: number, productId: number, productType: string): Observable<any> {
    const url = `${this.baseUrl}/v1/discount-rules/products/${ruleId}/products/${productId}`;
    const params = new HttpParams().set('productType', productType);

    return this.http.delete(url, { params }).pipe(
      catchError((error: any) => {
        console.error('Error unassigning discount rule from product:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Assign a discount rule to a charge
   */
  assignDiscountRuleToCharge(ruleId: number, chargeId: number): Observable<DiscountRule> {
    const url = `${this.baseUrl}/v1/discount-rules/charges/${ruleId}/assign`;
    const payload = {
      chargeId: chargeId
    };

    return this.http.post<DiscountRule>(url, payload).pipe(
      catchError((error: any) => {
        console.error('Error assigning discount rule to charge:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Unassign a discount rule from a charge
   */
  unassignDiscountRuleFromCharge(ruleId: number, chargeId: number): Observable<any> {
    const url = `${this.baseUrl}/v1/discount-rules/charges/${ruleId}/charges/${chargeId}`;

    return this.http.delete(url).pipe(
      catchError((error: any) => {
        console.error('Error unassigning discount rule from charge:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get all discount rules assigned to a product
   */
  getDiscountRulesForProduct(productId: number, productType: string): Observable<DiscountRule[]> {
    const url = `${this.baseUrl}/v1/discount-rules/products/products/${productId}`;
    const params = new HttpParams().set('productType', productType);

    return this.http.get<DiscountRule[]>(url, { params }).pipe(
      catchError((error: any) => {
        console.error('Error getting discount rules for product:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get all discount rules assigned to a charge
   */
  getDiscountRulesForCharge(chargeId: number): Observable<DiscountRule[]> {
    const url = `${this.baseUrl}/v1/discount-rules/charges/charges/${chargeId}`;

    return this.http.get<DiscountRule[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error getting discount rules for charge:', error);
        return throwError(() => error);
      })
    );
  }
}
