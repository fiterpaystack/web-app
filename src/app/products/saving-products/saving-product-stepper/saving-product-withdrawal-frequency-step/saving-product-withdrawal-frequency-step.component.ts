import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'mifosx-saving-product-withdrawal-frequency-step',
  templateUrl: './saving-product-withdrawal-frequency-step.component.html',
  styleUrls: ['./saving-product-withdrawal-frequency-step.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatDivider,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton,
    MatStepperPrevious,
    MatStepperNext
  ]
})
export class SavingProductWithdrawalFrequencyStepComponent implements OnInit {
  @Input() savingProductsTemplate: any;

  form: UntypedFormGroup;

  timePeriodOptions = [
    { value: 'DAILY', label: 'Daily' },
    { value: 'WEEKLY', label: 'Weekly' },
    { value: 'MONTHLY', label: 'Monthly' },
    { value: 'YEARLY', label: 'Yearly' }
  ];

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      enable: [true],
      withdrawalFrequencySettings: this.fb.array([])
    });
  }

  ngOnInit() {
    const existing = this.savingProductsTemplate?.additionalAttributes?.withdrawalFrequencySettings || [];
    if (Array.isArray(existing) && existing.length) {
      existing.forEach((s: any) => this.addSetting(s));
    } else {
      // start empty; unlimited by default
      this.form.get('enable')?.setValue(false);
    }
  }

  get settingsArray(): UntypedFormArray {
    return this.form.get('withdrawalFrequencySettings') as UntypedFormArray;
  }

  private createSetting(setting?: any): UntypedFormGroup {
    return this.fb.group({
      maxWithdrawals: [
        setting?.maxWithdrawals ?? 1,
        [
          Validators.required,
          Validators.min(1)]
      ],
      timePeriod: [
        setting?.timePeriod ?? 'MONTHLY',
        [Validators.required]
      ],
      isActive: [setting?.isActive ?? true]
    });
  }

  addSetting(setting?: any) {
    // prevent duplicate time periods
    const period = setting?.timePeriod;
    if (period && this.settingsArray.value?.some((r: any) => r.timePeriod === period)) return;
    this.settingsArray.push(this.createSetting(setting));
    this.form.get('enable')?.setValue(true);
  }

  removeSetting(index: number) {
    this.settingsArray.removeAt(index);
    if (this.settingsArray.length === 0) {
      this.form.get('enable')?.setValue(false);
    }
  }

  applyTemplate(template: 'conservative' | 'moderate' | 'flexible') {
    const templates: Record<string, any[]> = {
      conservative: [
        { maxWithdrawals: 1, timePeriod: 'WEEKLY', isActive: true },
        { maxWithdrawals: 2, timePeriod: 'MONTHLY', isActive: true }
      ],
      moderate: [
        { maxWithdrawals: 2, timePeriod: 'WEEKLY', isActive: true },
        { maxWithdrawals: 4, timePeriod: 'MONTHLY', isActive: true }
      ],
      flexible: [
        { maxWithdrawals: 1, timePeriod: 'DAILY', isActive: true },
        { maxWithdrawals: 3, timePeriod: 'WEEKLY', isActive: true },
        { maxWithdrawals: 6, timePeriod: 'MONTHLY', isActive: true }
      ]
    };
    this.settingsArray.clear();
    (templates[template] || []).forEach((t) => this.settingsArray.push(this.createSetting(t)));
    this.form.get('enable')?.setValue(this.settingsArray.length > 0);
  }

  isTimePeriodDisabled(period: string, currentIndex: number): boolean {
    const settings = this.settingsArray.value || [];
    // Check if this period is already used by another rule (not the current one)
    return settings.some((setting: any, index: number) => index !== currentIndex && setting.timePeriod === period);
  }

  get savingProductWithdrawalFrequency() {
    const enabled = this.form.get('enable')?.value;
    const settings: any[] = (this.settingsArray.value || []).filter((r: any) => !!r);
    // If not enabled or no rules, omit the field to imply unlimited
    return enabled && settings.length > 0 ? { withdrawalFrequencySettings: settings } : {};
  }
}
