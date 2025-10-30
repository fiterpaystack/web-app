import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class KycExportService {
  async exportDomToPdf(elementSelector: string, fileName: string): Promise<void> {
    const element = document.querySelector(elementSelector) as HTMLElement | null;
    if (!element) {
      window.print();
      return;
    }

    // Ensure element is fully visible for capture
    const originalScroll = { x: window.scrollX, y: window.scrollY };
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    // A4 in jsPDF uses mm; portrait A4 is 210 x 297mm
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const pxPerMm = canvas.width / pageWidth; // approximate scaling
    const imgWidth = pageWidth;
    const imgHeight = canvas.height / pxPerMm;

    let position = 0;
    let remaining = imgHeight;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, Math.min(imgHeight, pageHeight));
    remaining -= pageHeight;
    position = -pageHeight;

    while (remaining > 0) {
      pdf.addPage();
      position += pageHeight;
      pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
      remaining -= pageHeight;
    }

    pdf.save(fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`);
    window.scrollTo(originalScroll.x, originalScroll.y);
  }
}
