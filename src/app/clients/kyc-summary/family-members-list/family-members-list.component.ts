import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-family-members-list',
  template: `
    <div *ngIf="members?.length; else noData">
      <div class="family-row" *ngFor="let m of members; index as i">
        <div class="name">{{ displayName(m) }}</div>
        <div class="meta">
          <span class="relationship"><strong>Relationship:</strong> {{ m.relationship || 'Not provided' }}</span>
          <span class="gender" *ngIf="m.gender || m.genderId"><strong>Gender:</strong> {{ displayGender(m) }}</span>
          <span class="dob" *ngIf="m.dateOfBirth"
            ><strong>Date of Birth:</strong> {{ m.dateOfBirth | dateFormat }}</span
          >
          <span class="age" *ngIf="m.age !== undefined"><strong>Age:</strong> {{ m.age }} yrs</span>
          <span class="profession" *ngIf="m.profession"><strong>Profession:</strong> {{ m.profession }}</span>
        </div>
        <mat-divider />
      </div>
    </div>
    <ng-template #noData>
      <div class="empty">No family members</div>
    </ng-template>
  `,
  styles: [
    `
      .family-row {
        padding: 0.5rem 0;
      }
      .name {
        font-weight: 600;
      }
      .meta {
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.875rem;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .empty {
        color: rgba(0, 0, 0, 0.6);
      }
    `

  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    NgIf,
    NgFor,
    MatDivider,
    DateFormatPipe
  ]
})
export class FamilyMembersListComponent {
  @Input() members: any[] = [];

  displayName(member: any): string {
    const parts = [
      member?.firstName,
      member?.middleName,
      member?.lastName
    ].filter((x) => !!x && String(x).trim().length);
    return parts.join(' ');
  }

  displayGender(member: any): string {
    if (member?.gender) {
      const gender = String(member.gender).trim();
      return gender.length ? gender : 'Not provided';
    }
    if (member?.genderId) {
      return this.lookupGenderName(member.genderId, member);
    }
    return 'Not provided';
  }

  private lookupGenderName(id: number, member: any): string {
    const candidateSources = [
      member?.genderName,
      member?.genderType,
      member?.genderData,
      member?.genderLabel,
      member?.genderValue
    ];

    for (const source of candidateSources) {
      const normalized = this.normalizeGenderValue(source);
      if (normalized) {
        return normalized;
      }
    }

    return 'Not provided';
  }

  private normalizeGenderValue(input: any): string | undefined {
    if (!input) {
      return undefined;
    }

    if (typeof input === 'string') {
      const trimmed = input.trim();
      if (trimmed.length) {
        return trimmed;
      }
    }

    if (typeof input === 'object') {
      const value = input?.value ?? input?.name ?? input?.label;
      return this.normalizeGenderValue(value);
    }

    return undefined;
  }
}
