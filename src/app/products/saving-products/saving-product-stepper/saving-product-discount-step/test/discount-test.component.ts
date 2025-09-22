import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DiscountRulesService } from '../../../../discount-rules/services/discount-rules.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatSpinner } from '@angular/material/progress-spinner';

/**
 * Discount Engine Test Component
 * For testing discount functionality directly
 */
@Component({
  selector: 'mifosx-discount-test',
  templateUrl: './discount-test.component.html',
  styleUrls: ['./discount-test.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatSpinner
  ]
})
export class DiscountTestComponent implements OnInit {
  testForm: FormGroup;
  previewResult: any = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private discountService: DiscountRulesService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.testForm = this.fb.group({
      productId: [
        1,
        Validators.required
      ],
      originalAmount: [
        100,
        [
          Validators.required,
          Validators.min(0)]
      ],
      discountRules: this.fb.array([])
    });

    // Add a sample discount rule
    this.addSampleRule();
  }

  addSampleRule(): void {
    const rules = this.testForm.get('discountRules') as FormArray;
    rules.push(
      this.fb.group({
        name: [
          'Sample 10% Discount',
          Validators.required
        ],
        ruleType: [
          'PERCENTAGE',
          Validators.required
        ],
        discountValue: [
          10,
          [
            Validators.required,
            Validators.min(0)]
        ],
        maxDiscountAmount: [50],
        priority: [1]
      })
    );
  }

  addDiscountRule(): void {
    const rules = this.testForm.get('discountRules') as FormArray;
    rules.push(
      this.fb.group({
        name: [
          '',
          Validators.required
        ],
        ruleType: [
          'PERCENTAGE',
          Validators.required
        ],
        discountValue: [
          '',
          [
            Validators.required,
            Validators.min(0)]
        ],
        maxDiscountAmount: [''],
        priority: [0]
      })
    );
  }

  removeDiscountRule(index: number): void {
    const rules = this.testForm.get('discountRules') as FormArray;
    rules.removeAt(index);
  }

  async testPreview(): Promise<void> {
    this.loading = true;
    this.previewResult = null;

    try {
      const formValue = this.testForm.value;
      const result = await this.discountService.previewDiscount(formValue.originalAmount).toPromise();

      this.previewResult = result;
      console.log('Preview result:', result);
    } catch (error) {
      console.error('Error testing preview:', error);
      this.previewResult = { error: error.message };
    } finally {
      this.loading = false;
    }
  }

  async testCreateRule(): Promise<void> {
    this.loading = true;

    try {
      const formValue = this.testForm.value;
      const rules = formValue.discountRules;

      for (const rule of rules) {
        const result = await this.discountService.createDiscountRule(rule).toPromise();

        console.log('Created rule:', result);
      }

      alert('Discount rules created successfully!');
    } catch (error) {
      console.error('Error creating rules:', error);
      alert('Error creating rules: ' + error.message);
    } finally {
      this.loading = false;
    }
  }

  async testGetRules(): Promise<void> {
    this.loading = true;

    try {
      const rules = await this.discountService.getDiscountRules().toPromise();

      console.log('Retrieved rules:', rules);
      alert(`Found ${rules.length} discount rules`);
    } catch (error) {
      console.error('Error getting rules:', error);
      alert('Error getting rules: ' + error.message);
    } finally {
      this.loading = false;
    }
  }

  get discountRules(): FormArray {
    return this.testForm.get('discountRules') as FormArray;
  }
}
