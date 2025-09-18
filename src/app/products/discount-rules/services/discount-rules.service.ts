import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SettingsService } from 'app/settings/settings.service';
import { DiscountRule, DiscountPreview, DiscountRuleTypeInfo } from '../models/discount-rule.model';

/**
 * Discount Rules Service
 * Handles API calls for discount rule management
 */
@Injectable({
  providedIn: 'root'
})
export class DiscountRulesService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  private get baseUrl(): string {
    return '';
  }

  /**
   * Get all discount rules
   */
  getDiscountRules(): Observable<DiscountRule[]> {
    return this.http.get<DiscountRule[]>(`/v1/discount-rules`).pipe(catchError(this.handleError));
  }

  /**
   * Get a specific discount rule
   */
  getDiscountRule(ruleId: number): Observable<DiscountRule> {
    return this.http.get<DiscountRule>(`/v1/discount-rules/${ruleId}`).pipe(catchError(this.handleError));
  }

  /**
   * Create a new discount rule
   */
  createDiscountRule(rule: DiscountRule): Observable<DiscountRule> {
    return this.http.post<DiscountRule>(`/v1/discount-rules`, rule).pipe(
      tap(() => console.log('Discount rule created successfully')),
      catchError(this.handleError)
    );
  }

  /**
   * Update an existing discount rule
   */
  updateDiscountRule(ruleId: number, rule: DiscountRule): Observable<DiscountRule> {
    return this.http.put<DiscountRule>(`/v1/discount-rules/${ruleId}`, rule).pipe(
      tap(() => console.log('Discount rule updated successfully')),
      catchError(this.handleError)
    );
  }

  /**
   * Delete a discount rule
   */
  deleteDiscountRule(ruleId: number): Observable<any> {
    return this.http.delete<any>(`/v1/discount-rules/${ruleId}`).pipe(
      tap(() => console.log('Discount rule deleted successfully')),
      catchError(this.handleError)
    );
  }

  /**
   * Preview discount impact
   */
  previewDiscount(originalAmount: number): Observable<DiscountPreview> {
    return this.http
      .post<DiscountPreview>(`/v1/discount-rules/preview`, {
        originalAmount: originalAmount
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Get discount rules for a specific product
   */
  getProductDiscountRules(productId: number): Observable<DiscountRule[]> {
    return this.http.get<DiscountRule[]>(`/v1/products/${productId}/discount-rules`).pipe(catchError(this.handleError));
  }

  /**
   * Create a discount rule for a specific product
   */
  createProductDiscountRule(productId: number, rule: DiscountRule): Observable<DiscountRule> {
    return this.http
      .post<DiscountRule>(`/v1/products/${productId}/discount-rules`, rule)
      .pipe(catchError(this.handleError));
  }

  /**
   * Update a discount rule for a specific product
   */
  updateProductDiscountRule(productId: number, ruleId: number, rule: DiscountRule): Observable<DiscountRule> {
    return this.http
      .put<DiscountRule>(`/v1/products/${productId}/discount-rules/${ruleId}`, rule)
      .pipe(catchError(this.handleError));
  }

  /**
   * Delete a discount rule for a specific product
   */
  deleteProductDiscountRule(productId: number, ruleId: number): Observable<any> {
    return this.http
      .delete<any>(`/v1/products/${productId}/discount-rules/${ruleId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Preview discount impact for a specific product
   */
  previewProductDiscount(productId: number, originalAmount: number): Observable<DiscountPreview> {
    return this.http
      .post<DiscountPreview>(`/v1/products/${productId}/discount-rules/preview`, {
        originalAmount: originalAmount
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Get available discount rule types
   */
  getAvailableRuleTypes(): Observable<DiscountRuleTypeInfo[]> {
    return this.http.get<DiscountRuleTypeInfo[]>(`/v1/discount-rules/types`).pipe(catchError(this.handleError));
  }

  /**
   * Get detailed information about a specific rule type
   */
  getRuleTypeInfo(ruleType: string): Observable<DiscountRuleTypeInfo> {
    return this.http
      .get<DiscountRuleTypeInfo>(`/v1/discount-rules/types/${ruleType}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: any): Observable<never> {
    console.error('Discount Rules Service Error:', error);
    let errorMessage = 'An error occurred';

    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return throwError(() => new Error(errorMessage));
  }
}
