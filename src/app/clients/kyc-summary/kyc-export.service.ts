import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KycExportService {
  exportDomToPdf(elementSelector: string, fileName: string): void {
    // Placeholder for jsPDF/autoTable integration; for now rely on print.
    // Implement later if server export isn't preferred.
    window.print();
  }
}
