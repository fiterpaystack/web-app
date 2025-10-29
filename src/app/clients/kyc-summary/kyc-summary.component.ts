import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { KycSummary } from './models/kyc-summary.model';

@Component({
  selector: 'mifosx-kyc-summary',
  templateUrl: './kyc-summary.component.html',
  styleUrls: ['./kyc-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    AsyncPipe,
    NgIf,
    NgFor,
    CurrencyPipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatButton
  ]
})
export class KycSummaryComponent {
  private route = inject(ActivatedRoute);
  kyc: KycSummary = this.route.snapshot.data['kycSummary'];

  print(): void {
    window.print();
  }
}
