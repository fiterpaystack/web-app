import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow
} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCheckbox } from '@angular/material/checkbox';
import { AlertService } from 'app/core/alert/alert.service';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { DiscountRulesService } from '../../../discount-rules/services/discount-rules.service';
import {
  AssignedDiscountRule,
  DiscountPolicy,
  DiscountRule,
  DiscountRuleAssignment
} from '../../../discount-rules/models/discount-rule.model';

/**
 * Saving Product Discount Rules Step Component
 * Handles selection of discount rules for savings products (simplified charges-like pattern)
 */
@Component({
  selector: 'mifosx-saving-product-discount-rules-step',
  templateUrl: './saving-product-discount-rules-step.component.html',
  styleUrls: ['./saving-product-discount-rules-step.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatButton,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    MatCheckbox,
    MatStepperPrevious,
    MatStepperNext,
    FaIconComponent
  ]
})
export class SavingProductDiscountRulesStepComponent implements OnInit {
  @Input() savingProductsTemplate: any;
  @Input() currencyCode: UntypedFormControl;

  discountRulesDataSource: AssignedDiscountRule[] = [];
  availableDiscountRules: DiscountRule[] = [];
  displayedColumns: string[] = [
    'name',
    'ruleType',
    'ruleParameters',
    'rulePriority',
    'action'
  ];
  policyForm: UntypedFormGroup;

  pristine = true;
  loading = false;
  readonly discountCombinationOptions = [
    {
      value: 'SUM_CAP',
      label: 'Sum with cap (default)'
    }
  ];
  private readonly PRIORITY_MIN = 0;
  private readonly PRIORITY_MAX = 999;

  constructor(
    public dialog: MatDialog,
    private translateService: TranslateService,
    private alertService: AlertService,
    private discountRulesService: DiscountRulesService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.initializePolicyForm();
    this.loadAvailableDiscountRules();
    this.loadExistingDiscountRules();
    this.pristine = true;
  }

  loadExistingDiscountRules() {
    // Load existing discount rules from the template (for edit mode)
    // Check both possible locations: direct discountRules or additionalAttributes.discountRules
    let existingRules = [];

    if (this.savingProductsTemplate) {
      // First try direct discountRules property
      if (this.savingProductsTemplate.discountRules) {
        existingRules = this.savingProductsTemplate.discountRules;
      }
      // Then try additionalAttributes.discountRules
      else if (this.savingProductsTemplate.additionalAttributes?.discountRules) {
        existingRules = this.savingProductsTemplate.additionalAttributes.discountRules;
      }
      // Also check if it's nested under product/additionalAttributes
      else if (this.savingProductsTemplate.product?.additionalAttributes?.discountRules) {
        existingRules = this.savingProductsTemplate.product.additionalAttributes.discountRules;
      }
    }

    if (existingRules && existingRules.length > 0) {
      this.discountRulesDataSource = existingRules.map((rule: AssignedDiscountRule) => this.buildAssignedRule(rule));
      this.pristine = true;
    }
  }

  loadAvailableDiscountRules() {
    this.loading = true;
    this.discountRulesService.getDiscountRules().subscribe({
      next: (rules: DiscountRule[]) => {
        this.availableDiscountRules = rules.filter((rule) => rule.active);
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading discount rules:', error);
        this.alertService.alert({ type: 'Error', message: 'Error loading discount rules' });
        this.loading = false;
      }
    });
  }

  addDiscountRule(ruleSelect: any) {
    if (ruleSelect.value) {
      const selectedRule = ruleSelect.value;

      // Check if rule is already added
      const isAlreadyAdded = this.discountRulesDataSource.some(
        (rule) => this.getRuleIdentifier(rule) === this.getRuleIdentifier(selectedRule)
      );

      if (!isAlreadyAdded) {
        const normalizedRule = this.buildAssignedRule(selectedRule);
        this.discountRulesDataSource = this.discountRulesDataSource.concat([normalizedRule]);
        ruleSelect.value = '';
        this.pristine = false;
      } else {
        this.alertService.alert({ type: 'Error', message: 'This discount rule is already added' });
      }
    }
  }

  deleteDiscountRule(rule: DiscountRule) {
    const deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        deleteContext:
          this.translateService.instant('labels.inputs.Discount Rule') + ' ' + (rule as any).ruleName || rule.name
      }
    });

    deleteDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.discountRulesDataSource.splice(this.discountRulesDataSource.indexOf(rule), 1);
        this.discountRulesDataSource = this.discountRulesDataSource.concat([]);
        this.pristine = false;
      }
    });
  }

  get savingProductDiscountRules() {
    return {
      discountRules: this.discountRulesDataSource,
      discountRuleAssignments: this.discountRulesDataSource.map((rule) => this.toDiscountAssignment(rule)),
      allRulesRequired: this.policyForm.value.allRulesRequired,
      combinationStrategy: this.policyForm.value.combinationStrategy
    };
  }

  get discountPriorityInvalid(): boolean {
    if (!this.discountRulesDataSource.length) {
      return false;
    }
    return this.discountRulesDataSource.some((rule) => !this.isPriorityWithinRange(rule.assignmentPriority));
  }

  get discountValidationMessage(): string | null {
    if (!this.discountPriorityInvalid) {
      return null;
    }
    return `Priority must be between ${this.PRIORITY_MIN} and ${this.PRIORITY_MAX}.`;
  }

  updateAssignmentPriority(rule: AssignedDiscountRule, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const parsed = Number(value);
    if (isNaN(parsed)) {
      rule.assignmentPriority = this.PRIORITY_MIN;
    } else {
      rule.assignmentPriority = Math.min(Math.max(parsed, this.PRIORITY_MIN), this.PRIORITY_MAX);
    }
    this.pristine = false;
  }

  // Filter available rules to exclude already added ones
  get filteredAvailableRules() {
    return this.availableDiscountRules.filter(
      (rule) => !this.discountRulesDataSource.some((addedRule) => this.getRuleIdentifier(addedRule) === rule.id)
    );
  }

  private initializePolicyForm(): void {
    const policy = this.getPolicyFromTemplate();
    this.policyForm = this.fb.group({
      allRulesRequired: [policy?.allRulesRequired ?? false],
      combinationStrategy: [
        policy?.combinationStrategy ?? 'SUM_CAP',
        Validators.required
      ]
    });
    this.policyForm.valueChanges.subscribe(() => (this.pristine = false));
  }

  private getPolicyFromTemplate(): DiscountPolicy | null {
    if (!this.savingProductsTemplate) {
      return null;
    }

    return (
      this.savingProductsTemplate.additionalAttributes?.discountPolicy ||
      this.savingProductsTemplate.product?.additionalAttributes?.discountPolicy ||
      null
    );
  }

  private toDiscountAssignment(rule: AssignedDiscountRule): DiscountRuleAssignment {
    return {
      id: rule.ruleId ?? rule.id ?? 0,
      assignmentPriority: rule.assignmentPriority ?? this.PRIORITY_MIN
    };
  }

  private buildAssignedRule(rule: AssignedDiscountRule): AssignedDiscountRule {
    return {
      ...rule,
      ruleId: rule.ruleId ?? rule.id,
      assignmentPriority: rule.assignmentPriority ?? this.PRIORITY_MIN
    };
  }

  private getRuleIdentifier(rule: AssignedDiscountRule | DiscountRule): number {
    return (rule as AssignedDiscountRule).ruleId ?? rule.id ?? 0;
  }

  private isPriorityWithinRange(priority: number | undefined | null): boolean {
    if (priority === null || priority === undefined) {
      return false;
    }
    return priority >= this.PRIORITY_MIN && priority <= this.PRIORITY_MAX;
  }
}
