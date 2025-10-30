import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { KycSummary } from './models/kyc-summary.model';
import { FamilyMembersListComponent } from './family-members-list/family-members-list.component';

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
    MatButton,
    FamilyMembersListComponent
  ]
})
export class KycSummaryComponent {
  private route = inject(ActivatedRoute);
  kyc: KycSummary = this.route.snapshot.data['kycSummary'];

  print(): void {
    // Intentionally disabled for now
    return;
  }

  nextOfKinMembers(): any[] {
    const members = this.kyc?.familyMembers ?? [];
    const filtered = members.filter((m: any) => (m?.relationship ?? '').toString().toLowerCase().includes('next'));
    return filtered.length ? filtered : members;
  }
}
