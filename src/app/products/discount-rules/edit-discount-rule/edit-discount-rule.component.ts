import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountRule, DiscountRuleTypeInfo } from '../models/discount-rule.model';
import { DiscountRulesService } from '../services/discount-rules.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mifosx-edit-discount-rule',
  templateUrl: './edit-discount-rule.component.html',
  styleUrls: ['./edit-discount-rule.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatButton,
    MatCheckbox,
    FormsModule
  ]
})
export class EditDiscountRuleComponent implements OnInit {
  discountRule: DiscountRule;
  availableRuleTypes: DiscountRuleTypeInfo[] = [];
  selectedRuleTypeInfo: DiscountRuleTypeInfo | null = null;
  ruleParameters: { [key: string]: any } = {};

  // Make route accessible to template
  get route() {
    return this._route;
  }

  constructor(
    private _route: ActivatedRoute,
    public router: Router,
    private discountRulesService: DiscountRulesService
  ) {}

  ngOnInit(): void {
    this.loadAvailableRuleTypes();
    this._route.data.subscribe((data: { discountRule: DiscountRule }) => {
      this.discountRule = { ...data.discountRule };
      this.loadRuleTypeInfo();
    });
  }

  private loadAvailableRuleTypes(): void {
    this.discountRulesService.getAvailableRuleTypes().subscribe({
      next: (types) => {
        this.availableRuleTypes = types;
      },
      error: (error) => {
        console.error('Error loading rule types:', error);
      }
    });
  }

  private loadRuleTypeInfo(): void {
    if (this.discountRule.ruleType) {
      this.discountRulesService.getRuleTypeInfo(this.discountRule.ruleType).subscribe({
        next: (info) => {
          this.selectedRuleTypeInfo = info;
          this.loadExistingParameters();
        },
        error: (error) => {
          console.error('Error loading rule type info:', error);
        }
      });
    }
  }

  private loadExistingParameters(): void {
    if (this.discountRule.ruleParametersJson) {
      try {
        this.ruleParameters = JSON.parse(this.discountRule.ruleParametersJson);
      } catch (error) {
        console.error('Error parsing rule parameters:', error);
        this.ruleParameters = {};
      }
    }
  }

  onRuleTypeChange(ruleType: string): void {
    if (ruleType) {
      this.discountRulesService.getRuleTypeInfo(ruleType).subscribe({
        next: (info) => {
          this.selectedRuleTypeInfo = info;
          this.initializeParameters();
        },
        error: (error) => {
          console.error('Error loading rule type info:', error);
        }
      });
    } else {
      this.selectedRuleTypeInfo = null;
      this.ruleParameters = {};
    }
  }

  private initializeParameters(): void {
    if (this.selectedRuleTypeInfo) {
      this.ruleParameters = {};
      // Initialize with default values
      this.selectedRuleTypeInfo.requiredParameters.forEach((param) => {
        this.ruleParameters[param] = '';
      });
    }
  }

  private updateRuleParametersJson(): void {
    this.discountRule.ruleParametersJson = JSON.stringify(this.ruleParameters);
  }

  onParameterChange(): void {
    this.updateRuleParametersJson();
  }

  submit(): void {
    if (this.validateForm()) {
      this.discountRulesService.updateDiscountRule(this.discountRule.id, this.discountRule).subscribe({
        next: () => {
          this.router.navigate(['../'], { relativeTo: this._route });
        },
        error: (error) => {
          console.error('Error updating discount rule:', error);
          // TODO: Show error message to user
        }
      });
    }
  }

  private validateForm(): boolean {
    if (!this.discountRule.name?.trim()) {
      alert('Rule name is required');
      return false;
    }
    if (!this.discountRule.ruleType) {
      alert('Rule type is required');
      return false;
    }
    return true;
  }

  parseDropdownOptions(description: string): string[] {
    const match = description.match(/\[([^\]]+)\]/);
    return match ? match[1].split(', ').map((s) => s.trim()) : [];
  }
}
