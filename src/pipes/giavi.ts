import { Pipe, PipeTransform } from '@angular/core';
import { Giavi } from '../interfaces/giavi';
import { GiaviDataProvider } from '../providers/giavi-data';

/**
 * Generated class for the GiaviPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'giaviFullDetail',
})
export class GiaviPipe implements PipeTransform {
  
  constructor(private giaviDataProvider:GiaviDataProvider){}

  transform(value: Giavi[], ...args):Giavi[] {
    return value.map(item=>{
      let tempItem: Giavi = this.giaviDataProvider.getDetail(item.id);
      tempItem.amount = item.amount;
      return tempItem
    })
  }
}
