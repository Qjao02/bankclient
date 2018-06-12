import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableList'
})
export class TableListPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
