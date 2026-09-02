/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { ReportsService } from 'app/reports/reports.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Export Client Savings Transactions Component
 */

@Component({
  selector: 'mifosx-export-transactions',
  templateUrl: './export-transactions.component.html',
  styleUrls: ['./export-transactions.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    FaIconComponent
  ]
})
export class ExportTransactionsComponent implements OnInit {
  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Transactions Report Form */
  transactionsReportForm: any;
  /** substitute for resolver */
  hideOutput = true;
  /** trusted resource url for pentaho output */
  pentahoUrl: any;
  /** Savings Account Id */
  savingsAccountId: any;
  accountId: any;
  transactions: any[];
  transactionSummary: any;

  /**
   * Fetches savings account data from grandparent's `resolve`
   * @param {DomSanitizer} sanitizer DOM Sanitizer
   * @param {ReportsService} reportsService Reports Service
   * @param {FormBuilder} formBuilder Form Builder
   * @param {Dates} dateUtils Date Utils
   * @param {ActivatedRoute} route Activated Route
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(
    private sanitizer: DomSanitizer,
    private reportsService: ReportsService,
    private formBuilder: UntypedFormBuilder,
    private dateUtils: Dates,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.route.parent?.parent?.data.subscribe((data: any) => {
      console.log(data);
      this.accountId = data.savingsAccountData.id;
      this.transactionSummary = data.savingsAccountData.summary;
      this.transactions = data.savingsAccountData.transactions;
      this.savingsAccountId = data.savingsAccountData.accountNo;
    });
  }

  ngOnInit() {
    this.maxDate = this.settingsService.businessDate;
    this.createTransactionsReportForm();
  }

  /**
   * Creates the transactions report form.
   */
  createTransactionsReportForm() {
    this.transactionsReportForm = this.formBuilder.group({
      fromDate: [
        '',
        Validators.required
      ],
      toDate: [
        '',
        Validators.required
      ]
    });
  }

  generate(outputType: string = 'PDF'): void {
    if (!this.transactionsReportForm.valid) {
      this.transactionsReportForm.markAllAsTouched();
      return;
    }

    const reportData = {
      'output-type': outputType,
      R_fromDate: this.dateUtils.formatDate(
        this.transactionsReportForm.value.fromDate,
        this.settingsService.dateFormat
      ),
      R_toDate: this.dateUtils.formatDate(this.transactionsReportForm.value.toDate, this.settingsService.dateFormat),
      R_accountNo: this.savingsAccountId
    };

    // PDF uses Pentaho
    if (outputType === 'PDF') {
      this.reportsService
        .getPentahoRunReportData(
          'Savings Transactions',
          reportData,
          'default',
          this.settingsService.language.code,
          this.settingsService.dateFormat
        )
        .subscribe((res: any) => {
          const contentType = res.headers.get('Content-Type');
          const file = new Blob([res.body], { type: contentType });

          const fileContent = URL.createObjectURL(file);
          this.pentahoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileContent);
          this.hideOutput = false;
        });

      return;
    }

    // CSV export
    const fromDate = new Date(this.transactionsReportForm.value.fromDate);
    const toDate = new Date(this.transactionsReportForm.value.toDate);

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 999);

    const filteredTransactions = this.transactions.filter((t: any) => {
      const txDate = new Date(t.date[0], t.date[1] - 1, t.date[2]);

      return txDate >= fromDate && txDate <= toDate;
    });

    if (!filteredTransactions.length) {
      alert('No transactions found for the selected date range.');
      return;
    }

    this.exportCsv(filteredTransactions);
  }

  private exportCsv(transactions: any[]): void {
    const fromDate = this.dateUtils.formatDate(this.transactionsReportForm.value.fromDate, 'dd-MMM-yyyy');

    const toDate = this.dateUtils.formatDate(this.transactionsReportForm.value.toDate, 'dd-MMM-yyyy');

    const today = this.dateUtils.formatDate(new Date(), 'dd-MMM-yyyy');

    const totalDeposits = Number(this.transactionSummary?.totalDeposits ?? 0);
    const totalWithdrawals = Number(this.transactionSummary?.totalWithdrawals ?? 0);

    const openingBalance =
      transactions.length > 0
        ? Number(transactions[0].runningBalance ?? 0) +
          (transactions[0].entryType === 'DEBIT'
            ? Number(transactions[0].amount ?? 0)
            : -Number(transactions[0].amount ?? 0))
        : 0;

    const closingBalance = Number(this.transactionSummary?.accountBalance ?? 0);

    const rows: string[] = [];

    // ===== Statement Header =====
    rows.push('CUSTOMER NAME,');
    rows.push('CUSTOMER ADDRESS,');
    rows.push('');

    rows.push(`SUMMARY STATEMENT FOR:,${this.escapeCsv(`${fromDate} to ${toDate}`)}`);
    rows.push(`STATEMENT GENERATED ON:,${today}`);
    rows.push('');

    rows.push(`ACCOUNT NUMBER,${this.escapeCsv(this.savingsAccountId)}`);
    rows.push('ACCOUNT CLASS (TIER),');
    rows.push('CURRENCY,USD');
    rows.push('');

    rows.push(`TOTAL WITHDRAWALS,${this.formatCsvAmount(totalWithdrawals)}`);
    rows.push(`TOTAL DEPOSITS,${this.formatCsvAmount(totalDeposits)}`);
    rows.push(`ACCOUNT BALANCE,${this.formatCsvAmount(closingBalance)}`);
    rows.push(`LEDGER BALANCE,${this.formatCsvAmount(closingBalance)}`);
    rows.push(`CLEARED BALANCE,${this.formatCsvAmount(closingBalance)}`);
    rows.push('UNCLEARED BALANCE,0.00');
    rows.push('');

    rows.push('BRANCH ADDRESS,');
    rows.push('');

    rows.push(`OPENING BALANCE,${this.formatCsvAmount(openingBalance)}`);
    rows.push('');

    // ===== Transaction Header =====
    rows.push('Trans. Date,Value Date,Remarks,Trans. Type,Debits,Credits,Balance');

    // ===== Transactions =====
    transactions.forEach((t: any) => {
      const transactionDate = new Date(t.date[0], t.date[1] - 1, t.date[2]);

      const txDate = this.dateUtils.formatDate(transactionDate, 'dd-MMM-yyyy');

      const debit = t.entryType === 'DEBIT' ? this.formatCsvAmount(t.amount) : this.formatCsvAmount(0);

      const credit = t.entryType === 'CREDIT' ? this.formatCsvAmount(t.amount) : this.formatCsvAmount(0);

      const balance = this.formatCsvAmount(t.runningBalance);

      rows.push(
        [
          txDate,
          txDate,
          this.escapeCsv(t.narration),
          this.escapeCsv(t.transactionType?.value),
          debit,
          credit,
          balance
        ].join(',')
      );
    });

    const csvContent = rows.join('\r\n');

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `SavingsStatement_${this.savingsAccountId}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  private formatCsvAmount(value: any): string {
    return this.escapeCsv(this.formatAmount(value));
  }

  private formatAmount(value: any): string {
    if (value === null || value === undefined || value === '') {
      return '0.00';
    }

    const normalizedValue = typeof value === 'string' ? value.replace(/\s+/g, '').replace(/,/g, '') : value;

    const amount = Number(normalizedValue);

    if (!Number.isFinite(amount)) {
      return '0.00';
    }

    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    });
  }

  /**
   * Escapes values safely for CSV.
   */
  private escapeCsv(value: any): string {
    const text = String(value ?? '')
      .replace(/\r?\n|\r/g, ' ')
      .replace(/"/g, '""');

    return `"${text}"`;
  }

  private downloadCsv(rows: any[]): void {
    const headers = Object.keys(rows[0]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '').replace(/"/g, '""')}"`).join(','))
    ].join('\r\n');

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `savings-transactions-${this.savingsAccountId}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  }

  /**
   * Downloads the generated file.
   * @param blob File blob
   * @param outputType Output format type
   */
  downloadFile(blob: Blob, outputType: string) {
    const extension = outputType.toLowerCase();
    const fileName = `savings-statement-${this.savingsAccountId}-${this.dateUtils.formatDate(new Date(), 'yyyyMMdd')}.${extension}`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }
}
