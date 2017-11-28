import { Pipe, PipeTransform } from '@angular/core';
import { Thit } from '../interfaces/thit';
import { ThitDataProvider } from '../providers/thit-data';

@Pipe({
  name: 'thitFullDetail',
})
export class ThitPipe implements PipeTransform {
 
  constructor(private thitDataProvider: ThitDataProvider){}

  transform(value: Thit[], ...args):Thit[] {    
    return value.map(item=>{
      let temp_item = this.thitDataProvider.getThitDetail(item.id);
      temp_item.amount = item.amount;
      return temp_item
    })  
  }
}
