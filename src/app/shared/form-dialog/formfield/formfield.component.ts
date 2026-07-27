import { Component, Input } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormfieldBase } from './model/formfield-base';
import { MatCheckbox } from '@angular/material/checkbox';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { GlAccountSelectorComponent } from 'app/shared/accounting/gl-account-selector/gl-account-selector.component';

@Component({
  selector: 'mifosx-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    MatCheckbox,
    GlAccountSelectorComponent
  ]
})
export class FormfieldComponent {
  @Input() form: UntypedFormGroup;
  @Input() formfield: FormfieldBase;

  constructor() {}
}
