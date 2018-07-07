import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

export interface Daily{
  id: string,
  name: string, 
  province: string,
  address: string, 
  phone?: string, 
  distance?: number,
  type:string,
  lat: number,
  lng:number
}

@Injectable()
export class DailyProvider {

  private daily:Daily = {
    id: '100',
    name: 'Công ty TNHH Hà Tân Kỳ', 
    province: 'long-an',
    address: '20 Nguyễn Thông, P3, Tân An', 
    phone: '01663336669', 
    type:'cuahang',
    lat:  106.418913,
    lng: 10.532917
  }

  constructor(public http: Http) {
    
  }

  getDaily(id:string):Observable<Daily>{ 
      return of(this.daily)
  }


}
