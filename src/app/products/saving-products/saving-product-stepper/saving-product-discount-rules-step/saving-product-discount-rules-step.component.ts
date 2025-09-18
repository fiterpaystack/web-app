import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
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
import { AlertService } from 'app/core/alert/alert.service';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { DiscountRulesService } from '../../../discount-rules/services/discount-rules.service';
import { DiscountRule } from '../../../discount-rules/models/discount-rule.model';

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
    MatStepperPrevious,
    MatStepperNext,
    FaIconComponent
  ]
})
export class SavingProductDiscountRulesStepComponent implements OnInit {
  @Input() savingProductsTemplate: any;
  @Input() currencyCode: UntypedFormControl;

  discountRulesDataSource: DiscountRule[] = [];
  availableDiscountRules: DiscountRule[] = [];
  displayedColumns: string[] = [
    'name',
    'ruleType',
    'ruleParameters',
    'priority',
    'action'
  ];

  pristine = true;
  loading = false;

  constructor(
    public dialog: MatDialog,
    private translateService: TranslateService,
    private alertService: AlertService,
    private discountRulesService: DiscountRulesService
  ) {}

  ngOnInit() {
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
      this.discountRulesDataSource = [...existingRules];
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
      const isAlreadyAdded = this.discountRulesDataSource.some((rule) => rule.id === selectedRule.id);

      if (!isAlreadyAdded) {
        this.discountRulesDataSource = this.discountRulesDataSource.concat([selectedRule]);
        ruleSelect.value = '';
        this.pristine = false;
      } else {
        this.alertService.alert({ type: 'Error', message: 'This discount rule is already added' });
      }
    }
  }

  deleteDiscountRule(rule: DiscountRule) {
    const deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.translateService.instant('labels.inputs.Discount Rule') + ' ' + rule.name }
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
      discountRules: this.discountRulesDataSource
    };
  }

  // Filter available rules to exclude already added ones
  get filteredAvailableRules() {
    return this.availableDiscountRules.filter(
      (rule) => !this.discountRulesDataSource.some((addedRule) => addedRule.id === rule.id)
    );
  }
}
