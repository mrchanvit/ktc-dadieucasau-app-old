import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Monan } from '../interfaces/monan';
import 'rxjs/add/operator/toPromise'
 
//Đường dẫn server dữ liệu
const dataServerUrl = "http://59b3c01195ddb9001143e96a.mockapi.io/"


/*
  Generated class for the MonanDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonanDataProvider {
  

  constructor(public http: Http) {
    console.log('Hello MonanDataProvider Provider');
  }

  getAllMonan():Promise<Monan[]> {
    return this.http.get(`${dataServerUrl}/monan`)
    .toPromise()
    .then(res=>res.json() as Monan[])
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
