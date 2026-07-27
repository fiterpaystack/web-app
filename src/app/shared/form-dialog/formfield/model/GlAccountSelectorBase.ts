import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';

export class GlAccountSelectorBase extends FormfieldBase {
  override controlType = 'glAccount';

  glAccountList: any[];

  constructor(options: any = {}) {
    super(options);
    this.glAccountList = options.glAccountList || [];
  }
}
