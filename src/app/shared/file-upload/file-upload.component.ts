/** Angular Imports */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

/**
 * Custom file upload component based on angular material.
 */
@Component({
  selector: 'mifosx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    NgStyle,
    FaIconComponent
  ]
})
export class FileUploadComponent implements OnInit {
  /** Form field flex dimension */
  @Input() flex: any;
  @Input() acceptFilter: string;

  /** Selected file name */
  fileName: File;

  constructor() {}

  ngOnInit() {
    if (!this.acceptFilter) {
      this.acceptFilter = '.xls,.xlsx,.pdf,.doc,.docx,.png,.jpeg,.jpg';
    }
  }

  /**
   * Sets the file name.
   * @param {any} event File input change event.
   */
  onFileSelect($event: any) {
    this.fileName = $event.target.files[0].name;
  }
}
