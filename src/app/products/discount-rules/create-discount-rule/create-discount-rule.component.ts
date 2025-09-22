import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountRule, DiscountRuleTypeInfo } from '../models/discount-rule.model';
import { DiscountRulesService } from '../services/discount-rules.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'mifosx-create-discount-rule',
  templateUrl: './create-discount-rule.component.html',
  styleUrls: ['./create-discount-rule.component.scss'],
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
    FormsModule
  ]
})
export class CreateDiscountRuleComponent implements OnInit {
  discountRule: DiscountRule = {
    name: '',
    description: '',
    active: true,
    rulePriority: 0,
    ruleType: '',
    ruleParametersJson: ''
  };

  availableRuleTypes: DiscountRuleTypeInfo[] = [];
  selectedRuleTypeInfo: DiscountRuleTypeInfo | null = null;
  ruleParameters: { [key: string]: any } = {};

  constructor(
    public router: Router,
    private discountRulesService: DiscountRulesService
  ) {}

  ngOnInit(): void {
    this.loadAvailableRuleTypes();
  }

  private loadAvailableRuleTypes(): void {
    this.discountRulesService.getAvailableRuleTypes().subscribe({
      next: (types) => {
        this.availableRuleTypes = types;
        console.log('Available rule types:', types);
      },
      error: (error) => {
        console.error('Error loading rule types:', error);
      }
    });
  }

  onRuleTypeChange(ruleType: string): void {
    if (ruleType) {
      this.discountRulesService.getRuleTypeInfo(ruleType).subscribe({
        next: (info) => {
          this.selectedRuleTypeInfo = info;
          this.initializeParameters();
          console.log('Rule type info:', info);
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
      this.discountRulesService.createDiscountRule(this.discountRule).subscribe({
        next: () => {
          this.router.navigate(['/products/discount-rules']);
        },
        error: (error) => {
          console.error('Error creating discount rule:', error);
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
