import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cuahang } from '../interfaces/cuahang';
import 'rxjs/add/operator/toPromise'
 
//Đường dẫn server dữ liệu
const dataServerUrl = "http://59b3c01195ddb9001143e96a.mockapi.io/"


/*
  Generated class for the CuahangDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CuahangDataProvider {
  constructor(public http: Http) {
    console.log('Hello CuahangDataProvider Provider');
  }

  getAllCuahang():Promise<Cuahang[]> {
    return this.http.get(`${dataServerUrl}/cuahang`)
    .toPromise()
    .then(res=>res.json() as Cuahang[])
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
