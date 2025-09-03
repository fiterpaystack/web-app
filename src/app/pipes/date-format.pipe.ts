import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from 'app/settings/settings.service';
import moment from 'moment';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(value: any, dateFormat?: string): any {
    const defaultDateFormat = this.settingsService.dateFormat.replace('dd', 'DD');
    if (typeof value === 'undefined') {
      return '';
    }
    let dateVal;
    moment.locale(this.settingsService.language.code);
    if (value instanceof Array) {
      if (value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number') {
        const currentYear = new Date().getFullYear();
        dateVal = moment([
          currentYear,
          value[0] - 1,
          value[1]
        ]);
      } else {
        dateVal = moment(value.join('-'), 'YYYY-MM-DD');
      }
    } else {
      dateVal = moment(value);
    }
    if (dateFormat == null) {
      return dateVal.format(defaultDateFormat);
    }
    return dateVal.format(dateFormat);
  }
}
