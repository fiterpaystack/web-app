import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountRule } from '../models/discount-rule.model';
import { DiscountRulesService } from '../services/discount-rules.service';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'mifosx-view-discount-rule',
  templateUrl: './view-discount-rule.component.html',
  styleUrls: ['./view-discount-rule.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton
  ]
})
export class ViewDiscountRuleComponent implements OnInit {
  discountRule: DiscountRule;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private discountRulesService: DiscountRulesService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { discountRule: DiscountRule }) => {
      this.discountRule = data.discountRule;
    });
  }

  edit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  formatRuleParameters(ruleParametersJson: string): string {
    if (!ruleParametersJson) {
      return 'No parameters';
    }

    try {
      const params = JSON.parse(ruleParametersJson);
      return JSON.stringify(params, null, 2);
    } catch (error) {
      return ruleParametersJson;
    }
  }
}
