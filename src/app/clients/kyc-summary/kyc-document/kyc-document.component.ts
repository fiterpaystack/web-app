import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { KycSummary, PersonRef } from '../models/kyc-summary.model';
import { DateFormatPipe } from 'app/pipes/date-format.pipe';

@Component({
  selector: 'mifosx-kyc-document',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    DateFormatPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="kyc-doc-root" class="doc">
      <div class="header">
        <h2>KYC Summary</h2>
      </div>

      <div class="section">
        <h3>Customer Information</h3>
        <div class="row">
          <div class="label">Full Name</div>
          <div class="value">{{ kyc?.personal.fullName }}</div>
        </div>
        <div class="row">
          <div class="label">Date of Birth</div>
          <div class="value">{{ kyc?.personal.dateOfBirth | dateFormat }}</div>
        </div>
        <div class="row">
          <div class="label">Marital Status</div>
          <div class="value">{{ kyc?.personal.maritalStatus || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Gender</div>
          <div class="value">{{ kyc?.personal.gender || 'Not provided' }}</div>
        </div>
      </div>

      <div class="section">
        <h3>Contact Details</h3>
        <div class="row">
          <div class="label">Mobile No</div>
          <div class="value">{{ kyc?.contact.mobile || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Email</div>
          <div class="value">{{ kyc?.contact.email || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Home Address</div>
          <div class="value">{{ kyc?.contact.address || 'Not provided' }}</div>
        </div>
      </div>

      <div class="section">
        <h3>Identity Information</h3>
        <div class="row">
          <div class="label">BVN</div>
          <div class="value">{{ kyc?.identity.bvn || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Means of Identity</div>
          <div class="value">{{ kyc?.identity.meansOfIdentity || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Identity Card No</div>
          <div class="value">{{ kyc?.identity.idNumber || 'Not provided' }}</div>
        </div>
        <div class="row">
          <div class="label">Issue Date</div>
          <div class="value">{{ kyc?.identity.issueDate | dateFormat }}</div>
        </div>
        <div class="row">
          <div class="label">Expiry Date</div>
          <div class="value">{{ kyc?.identity.expiryDate | dateFormat }}</div>
        </div>
      </div>

      <div class="section" *ngIf="(familyMembersList().length || 0) > 0">
        <h3>Family Members</h3>
        <div class="table">
          <div class="trow thead">
            <div class="tcell">First Name</div>
            <div class="tcell">Middle Name</div>
            <div class="tcell">Last Name</div>
            <div class="tcell">Age</div>
            <div class="tcell">Marital Status</div>
            <div class="tcell">Gender</div>
            <div class="tcell">Profession</div>
            <div class="tcell">Date Of Birth</div>
          </div>
          <div class="trow" *ngFor="let p of familyMembersList()">
            <div class="tcell">{{ p.firstName || '-' }}</div>
            <div class="tcell">{{ p.middleName || '-' }}</div>
            <div class="tcell">{{ p.lastName || '-' }}</div>
            <div class="tcell">{{ p.age ?? '-' }}</div>
            <div class="tcell">{{ p.maritalStatus || '-' }}</div>
            <div class="tcell">{{ p.gender || '-' }}</div>
            <div class="tcell">{{ p.profession || '-' }}</div>
            <div class="tcell">{{ p.dateOfBirth | dateFormat }}</div>
          </div>
        </div>
      </div>

      <div class="section" *ngIf="(kyc?.documents?.length || 0) > 0">
        <h3>Documents</h3>
        <div class="table">
          <div class="trow thead">
            <div class="tcell name">Category</div>
            <div class="tcell">Name</div>
            <div class="tcell">Uploaded</div>
          </div>
          <div class="trow" *ngFor="let d of kyc?.documents">
            <div class="tcell name">{{ d.category }}</div>
            <div class="tcell">{{ d.name }}</div>
            <div class="tcell">{{ d.uploaded ? 'Yes' : 'No' }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .doc {
        width: 210mm;
        min-height: 297mm;
        padding: 16mm;
        background: #fff;
        color: #000;
        box-sizing: border-box;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 12px;
      }
      .header {
        text-align: center;
        margin-bottom: 8mm;
      }
      .section {
        margin-top: 6mm;
      }
      .row {
        display: grid;
        grid-template-columns: 40mm 1fr;
        gap: 2mm 4mm;
        margin: 1.5mm 0;
      }
      .label {
        font-weight: 600;
      }
      .table {
        width: 100%;
        border: 1px solid #ddd;
        border-collapse: collapse;
      }
      .trow {
        display: grid;
        grid-template-columns: 1fr 1fr 20mm;
        border-top: 1px solid #eee;
      }
      .trow:first-child {
        border-top: none;
      }
      .tcell {
        padding: 2mm 3mm;
      }
      .thead {
        background: #f6f6f6;
        font-weight: 600;
      }
      .name {
        word-break: break-word;
      }
    `

  ]
})
export class KycDocumentComponent {
  @Input({ required: true }) kyc!: KycSummary;

  familyMembersList(): any[] {
    return Array.isArray(this.kyc?.familyMembers) ? this.kyc.familyMembers : [];
  }
}
