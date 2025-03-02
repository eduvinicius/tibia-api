import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatList',
  standalone: true
})
export class FormatListPipe implements PipeTransform {

  transform(list: string[]): string  {
    if (!list.length) return '--';
    if ( list !== null) {
      const formattedList: string[] = list.map(string => string.charAt(0).toUpperCase() + string.slice(1));
      return formattedList.join(', ');
    }
    return list
  }
}
