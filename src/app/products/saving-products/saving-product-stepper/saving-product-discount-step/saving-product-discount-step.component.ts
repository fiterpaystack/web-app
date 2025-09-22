import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AlertService } from 'app/core/alert/alert.service';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DiscountRule, DiscountType } from '../../../discount-rules/models/discount-rule.model';

/**
 * Saving Product Discount Step Component
 * Handles discount rule configuration for savings products
 */
@Component({
  selector: 'mifosx-saving-product-discount-step',
  templateUrl: './saving-product-discount-step.component.html',
  styleUrls: ['./saving-product-discount-step.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCheckbox,
    MatTooltip,
    MatCard,
    MatCardContent,
    MatIconButton,
    FaIconComponent,
    MatStepperPrevious,
    MatStepperNext,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    MatSelect,
    MatOption
  ]
})
export class SavingProductDiscountStepComponent implements OnInit, OnChanges {
  @Input() savingProductsTemplate: any;
  @Input() currencyCode: UntypedFormControl;
  @Output() discountData = new EventEmitter<any>();

  savingProductDiscountForm: UntypedFormGroup;
  discountRules: UntypedFormArray;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private translateService: TranslateService,
    private dialog: MatDialog,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setupDebouncedValidation();

    // Populate form with existing discount rules from template
    if (this.savingProductsTemplate?.additionalAttributes?.discountRules) {
      this.populateExistingDiscountRules();
    }

    this.emitFormData();
  }

  ngOnChanges(): void {
    // Handle case where template data is loaded after ngOnInit
    if (this.savingProductsTemplate?.additionalAttributes?.discountRules && this.discountRules) {
      this.populateExistingDiscountRules();
    }
  }

  private createForm(): void {
    this.savingProductDiscountForm = this.formBuilder.group({
      enableDiscountEngine: [false],
      discountRules: this.formBuilder.array([])
    });

    this.discountRules = this.savingProductDiscountForm.get('discountRules') as UntypedFormArray;
  }

  private setupDebouncedValidation(): void {
    this.savingProductDiscountForm.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => {
      this.emitFormData();
    });
  }

  /**
   * Populate form with existing discount rules from template
   */
  private populateExistingDiscountRules(): void {
    const existingRules = this.savingProductsTemplate.additionalAttributes.discountRules;

    console.log('Template data:', this.savingProductsTemplate);
    console.log('Existing discount rules:', existingRules);

    // Set enableDiscountEngine
    this.savingProductDiscountForm.patchValue({
      enableDiscountEngine: this.savingProductsTemplate.additionalAttributes.enableDiscountEngine || false
    });

    // Clear existing rules first
    this.discountRules.clear();

    // Add existing discount rules to the form array with proper data
    if (existingRules && existingRules.length > 0) {
      existingRules.forEach((rule: any) => {
        console.log('Processing rule:', rule);
        const ruleFormGroup = this.createDiscountRuleFormGroup(rule);
        this.discountRules.push(ruleFormGroup);
      });
    }
  }

  /**
   * Create a form group for a discount rule
   */
  private createDiscountRuleFormGroup(rule: any): UntypedFormGroup {
    // Handle both API response format and form data format
    const ruleData = {
      name: rule.name || '',
      description: rule.description || '',
      ruleType: rule.ruleType || 'PERCENTAGE',
      priority: Number(rule.priority) || 0,
      active: rule.active !== undefined ? rule.active : true,
      ruleParametersJson: rule.ruleParametersJson || ''
    };

    return this.formBuilder.group({
      name: [
        ruleData.name,
        Validators.required
      ],
      description: [ruleData.description],
      ruleType: [
        ruleData.ruleType,
        Validators.required
      ],
      priority: [
        ruleData.priority,
        Validators.min(0)],
      active: [ruleData.active],
      ruleParametersJson: [ruleData.ruleParametersJson]
    });
  }

  /**
   * Add a new discount rule
   */
  addDiscountRule(): void {
    const newRule = {
      name: '',
      description: '',
      ruleType: 'PERCENTAGE',
      priority: 0,
      active: true,
      ruleParametersJson: ''
    };

    const newRuleFormGroup = this.createDiscountRuleFormGroup(newRule);
    this.discountRules.push(newRuleFormGroup);
  }

  /**
   * Remove a discount rule with confirmation dialog
   */
  removeDiscountRule(index: number): void {
    const rule = this.discountRules.at(index).value;
    const deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.translateService.instant('Discount Rule') + ' ' + rule.name }
    });

    deleteDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.discountRules.removeAt(index);
        this.alertService.alert({
          type: 'success',
          message: this.translateService.instant('Discount rule deleted successfully')
        });
      }
    });
  }

  /**
   * Get form data for parent component
   */
  get savingProductDiscounts() {
    return {
      enableDiscountEngine: this.savingProductDiscountForm.value.enableDiscountEngine,
      discountRules: this.savingProductDiscountForm.value.discountRules.map((rule: any) => ({
        ...rule,
        productId: this.savingProductsTemplate?.id || null,
        active: true
      }))
    };
  }

  /**
   * Emit form data to parent
   */
  private emitFormData(): void {
    this.discountData.emit(this.savingProductDiscounts);
  }

  /**
   * Check if discount engine is enabled
   */
  get isDiscountEngineEnabled(): boolean {
    return this.savingProductDiscountForm.get('enableDiscountEngine')?.value || false;
  }

  /**
   * Get discount rules count
   */
  get discountRulesCount(): number {
    return this.discountRules.length;
  }
}
