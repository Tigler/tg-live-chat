import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLineReplace'
})
export class BreakLineReplacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(new RegExp('\n', 'g'), '<br/>');
  }
}
