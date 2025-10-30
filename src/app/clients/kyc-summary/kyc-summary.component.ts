import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  createComponent,
  inject
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf, DOCUMENT } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { KycSummary } from './models/kyc-summary.model';
import { FamilyMembersListComponent } from './family-members-list/family-members-list.component';
import { KycDocumentComponent } from './kyc-document/kyc-document.component';
import { KycExportService } from './kyc-export.service';

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
  private appRef = inject(ApplicationRef);
  private injector = inject(EnvironmentInjector);
  private document = inject(DOCUMENT);
  private exportSvc = inject(KycExportService);
  kyc: KycSummary = this.route.snapshot.data['kycSummary'];

  async print(): Promise<void> {
    const container = this.document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-10000px';
    container.style.top = '0';
    this.document.body.appendChild(container);

    const compRef = createComponent(KycDocumentComponent, {
      environmentInjector: this.injector
    });
    compRef.location.nativeElement.id = 'kyc-doc-host';
    compRef.instance.kyc = this.kyc;
    this.appRef.attachView(compRef.hostView);
    container.appendChild(compRef.location.nativeElement);

    // Ensure change detection & layout complete before capture
    compRef.changeDetectorRef.markForCheck();
    compRef.changeDetectorRef.detectChanges();
    await Promise.resolve();

    try {
      await this.exportSvc.exportDomToPdf('#kyc-doc-root', 'kyc-summary.pdf');
    } finally {
      this.appRef.detachView(compRef.hostView);
      compRef.destroy();
      container.remove();
    }
  }

  nextOfKinMembers(): any[] {
    const members = this.kyc?.familyMembers ?? [];
    const filtered = members.filter((m: any) => (m?.relationship ?? '').toString().toLowerCase().includes('next'));
    return filtered.length ? filtered : members;
  }
}
