import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientsService } from 'app/clients/clients.service';
import { KycSummary, DocumentInfo, PersonRef, IdentityRecord, AddressInfo } from './models/kyc-summary.model';

@Injectable({ providedIn: 'root' })
export class KycSummaryService {
  constructor(private clientsService: ClientsService) {}

  getKycSummary(clientId: string): Observable<KycSummary> {
    return forkJoin({
      client: this.clientsService.getClientData(clientId),
      identifiers: this.clientsService.getClientIdentifiers(clientId),
      documents: this.clientsService.getClientDocuments(clientId),
      identityDt: this.clientsService.getClientDatatable(clientId, 'Identity Information'),
      familyMembers: this.clientsService.getClientFamilyMembers(clientId),
      occupationDt: this.clientsService.getClientDatatable(clientId, 'Occupation and Employer Name'),
      addresses: this.clientsService.getClientAddressData(clientId)
    }).pipe(
      map(({ client, identifiers, documents, identityDt, familyMembers, occupationDt, addresses }: any) => {
        const identityRows = this.parseGenericResultSet(identityDt);
        const bvnRow = identityRows.find(
          (r: any) =>
            (r['Identity Types_cd_Identity Type'] ?? r['Identity Type'] ?? '').toString().toUpperCase() === 'BVN'
        );
        const bvn = bvnRow?.['ID Number'] ?? undefined;
        const bvnIssue = this.extractDateArray(bvnRow?.['Issue Date']);
        const bvnExpiry = this.extractDateArray(bvnRow?.['Expiry Date']);

        const primaryId = this.pickPrimaryGovernmentId(identifiers);
        const nokList = this.pickNextOfKinList(familyMembers);
        const identityRecords: IdentityRecord[] = identityRows
          .map((row: any): IdentityRecord | undefined => {
            const type =
              this.normalizeIdentityType(row['Identity Types_cd_Identity Type']) ??
              this.normalizeIdentityType(row['Identity Type']) ??
              this.normalizeIdentityType(row['Identity Types']);
            const number = this.normalizeOptionalString(row['ID Number'] ?? row['Id Number']);
            const issueDate = this.extractDateArray(row['Issue Date']);
            const expiryDate = this.extractDateArray(row['Expiry Date']);

            if (!(type || number || issueDate || expiryDate)) {
              return undefined;
            }

            return {
              type: type ?? 'Unknown',
              number,
              issueDate,
              expiryDate
            } as IdentityRecord;
          })
          .filter((rec): rec is IdentityRecord => !!rec);

        const occupationRows = this.parseGenericResultSet(occupationDt);
        const employerName = this.extractOccupationEmployer(occupationRows);
        const addressList = this.mapAddresses(addresses);

        const mappedDocuments: DocumentInfo[] = Array.isArray(documents)
          ? documents.map((d: any) => ({
              category: this.deriveDocumentCategory(d),
              name: d.name ?? d.fileName ?? 'Document',
              uploaded: true
            }))
          : [];

        const summary: KycSummary = {
          personal: {
            fullName: client?.displayName ?? '',
            dateOfBirth: this.extractDateArray(client?.dateOfBirth),
            maritalStatus: undefined,
            gender: this.extractEnumValue(client?.gender),
            educationLevel: undefined,
            numberOfChildren: undefined
          },
          contact: {
            mobile: client?.mobileNo ?? undefined,
            email: client?.emailAddress ?? undefined,
            // Address API/datatable to be wired later
            address: undefined,
            monthsAtAddress: undefined
          },
          identity: {
            bvn: bvn ?? undefined,
            meansOfIdentity: primaryId?.documentType?.name ?? undefined,
            idNumber: primaryId?.documentKey ?? undefined,
            issueDate: bvn ? (bvnIssue ?? this.extractIssueDate(primaryId)) : this.extractIssueDate(primaryId),
            expiryDate: bvn ? (bvnExpiry ?? this.extractExpiryDate(primaryId)) : this.extractExpiryDate(primaryId)
          },
          identityRecords,
          account: {
            accountTier: this.extractEnumValue(client?.clientClassification)
          },
          employment: {
            employerName: employerName ?? undefined
          },
          addresses: addressList,
          nextOfKin: nokList,
          documents: mappedDocuments,
          familyMembers: Array.isArray(familyMembers) ? familyMembers : []
        };

        return summary;
      })
    );
  }

  private pickIdentifierByTypeName(identifiers: any, typeName: string): any | undefined {
    if (!identifiers || !Array.isArray(identifiers)) return undefined;
    return identifiers.find((i: any) => (i?.documentType?.name ?? '').toLowerCase() === typeName.toLowerCase());
  }

  private pickPrimaryGovernmentId(identifiers: any): any | undefined {
    if (!identifiers || !Array.isArray(identifiers)) return undefined;
    // Priority order: NIN > Driver's License > Passport > Voter's Card; exclude BVN for ID card
    const priorities = [
      'NIN',
      'National Identification Number',
      "Driver's License",
      'Drivers License',
      'Passport',
      'International Passport',
      "Voter's Card",
      'Voters Card'
    ].map((s) => s.toLowerCase());

    const normalized = identifiers.map((i: any) => ({
      src: i,
      name: (i?.documentType?.name ?? '').toLowerCase()
    }));

    // Remove BVN from candidates
    const candidates = normalized.filter((n: any) => n.name !== 'bvn');

    const byPriority = candidates.find((n: any) => priorities.includes(n.name));
    return (byPriority?.src ?? candidates[0]?.src) as any;
  }

  private extractIssueDate(identifier: any): string | undefined {
    if (!identifier) return undefined;
    return (
      identifier.issueDate || identifier.validFrom || identifier.documentValidFrom || identifier.issuedOn || undefined
    );
  }

  private extractExpiryDate(identifier: any): string | undefined {
    if (!identifier) return undefined;
    return (
      identifier.expiryDate || identifier.validTo || identifier.documentValidTo || identifier.expiresOn || undefined
    );
  }

  private deriveDocumentCategory(doc: any): string {
    const typeName = doc?.type ?? doc?.category ?? '';
    if (typeof typeName === 'string' && typeName.trim()) return typeName;
    // Try to infer from name or filename
    const source = (doc?.name ?? doc?.fileName ?? '').toString().toLowerCase();
    if (source.includes('id') || source.includes('passport') || source.includes('nin')) return 'Identity';
    if (source.includes('utility') || source.includes('bill') || source.includes('address')) return 'Address';
    return 'General';
  }

  private extractDateArray(dateArray: any): string | undefined {
    if (!Array.isArray(dateArray) || dateArray.length < 3) return undefined;
    const [
      y,
      m,
      d
    ] = dateArray as [number, number, number];
    // Fineract months are 1-based; Date expects 0-based
    const dt = new Date(y, m - 1, d);
    if (isNaN(dt.getTime())) return undefined;
    // Return ISO yyyy-MM-dd for consistency with date pipes
    return dt.toISOString().slice(0, 10);
  }

  private extractEnumValue(obj: any): string | undefined {
    // Fineract enums often shaped as { id, code, value }
    if (!obj || typeof obj !== 'object') return undefined;
    const candidate = obj.value ?? obj.code ?? obj.name ?? obj.label ?? undefined;
    return typeof candidate === 'string' && candidate.trim().length ? candidate : undefined;
  }

  private normalizeIdentityType(value: any): string | undefined {
    if (value == null) return undefined;
    if (typeof value === 'string') {
      const trimmed = value.trim();
      return trimmed.length ? trimmed : undefined;
    }
    if (typeof value === 'object') {
      return this.extractEnumValue(value);
    }
    const stringified = String(value).trim();
    return stringified.length ? stringified : undefined;
  }

  private normalizeOptionalString(value: any): string | undefined {
    if (value == null) return undefined;
    const str = String(value).trim();
    return str.length ? str : undefined;
  }

  private extractOccupationEmployer(rows: any[]): string | undefined {
    if (!Array.isArray(rows) || !rows.length) return undefined;
    const row = rows[0];
    if (!row) return undefined;
    const employer =
      row['Occupation and Employer Name'] ??
      row['Employer Name'] ??
      row['occupationAndEmployerName'] ??
      row['employerName'];
    return this.normalizeOptionalString(employer);
  }

  private mapAddresses(addressResponse: any): AddressInfo[] {
    if (!addressResponse) return [];
    const addresses = Array.isArray(addressResponse) ? addressResponse : addressResponse.addresses;
    if (!Array.isArray(addresses)) return [];

    return addresses
      .map((addr: any): AddressInfo | undefined => {
        const type = this.normalizeOptionalString(addr?.addressType) ?? 'Address';
        const line1 = this.normalizeOptionalString(addr?.addressLine1 ?? addr?.street);
        const line2 = this.normalizeOptionalString(addr?.addressLine2);
        const line3 = this.normalizeOptionalString(addr?.addressLine3);
        const city = this.normalizeOptionalString(addr?.city ?? addr?.townVillage);
        const state = this.normalizeOptionalString(addr?.stateName ?? addr?.stateProvince);
        const country = this.normalizeOptionalString(addr?.country ?? addr?.countryName);
        const postalCode = this.normalizeOptionalString(addr?.postalCode);

        const components = [
          line1,
          line2,
          line3,
          city,
          state,
          country
        ].filter(Boolean);
        const fullAddress = components.length ? components.join(', ') : undefined;

        if (!line1 && !line2 && !line3 && !city && !state && !country && !postalCode) {
          // Avoid rendering empty addresses
          return undefined;
        }

        return {
          type,
          addressLine1: line1,
          addressLine2: line2,
          addressLine3: line3,
          city,
          state,
          country,
          postalCode,
          fullAddress
        } as AddressInfo;
      })
      .filter((addr): addr is AddressInfo => !!addr);
  }

  private parseGenericResultSet(resp: any): any[] {
    if (!resp || !Array.isArray(resp.columnHeaders) || !Array.isArray(resp.data)) return [];
    const headers = resp.columnHeaders.map((h: any) => h.columnName);
    return resp.data
      .map((rowObj: any) => {
        const row = rowObj?.row;
        if (!Array.isArray(row)) return undefined;
        const mapped: any = {};
        for (let i = 0; i < headers.length; i++) {
          mapped[headers[i]] = row[i];
        }
        return mapped;
      })
      .filter(Boolean);
  }

  private pickNextOfKinList(familyMembers: any): PersonRef[] {
    if (!Array.isArray(familyMembers)) return [];
    const list = familyMembers.filter((m: any) => (m?.relationship ?? '').toString().toLowerCase().includes('next'));
    const chosen = list.length ? list : [];
    return chosen.map((member: any): PersonRef => {
      const name = [
        member.firstName,
        member.middleName,
        member.lastName
      ]
        .filter((x) => !!x && String(x).trim().length)
        .join(' ')
        .trim();
      return {
        name: name || undefined,
        relationship: member.relationship ?? undefined,
        address: undefined,
        mobile: member.mobileNumber ?? undefined,
        email: undefined
      };
    });
  }
}
