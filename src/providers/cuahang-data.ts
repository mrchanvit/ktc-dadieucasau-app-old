import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cuahang } from '../interfaces/cuahang';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';



/*
  Generated class for the CuahangDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CuahangDataProvider {
 
  //private dataServerUrl = "http://59b3c01195ddb9001143e96a.mockapi.io/"

  //Đường dẫn JSON khởi tạo dữ liệu
  private cuahangInitPath = "/data/cuahangs.json";
  
  constructor(
    public http: Http,
    public storage: NativeStorage) {
    console.log('Hello CuahangDataProvider Provider');
  }

  /* getAllCuahang():Promise<Cuahang[]> {
    return this.http.get(`${this.dataServerUrl}/cuahang`)
    .toPromise()
    .then(res=>res.json() as Cuahang[])
    .catch(this.handleError)
  } */

  //Lấy giữ liệu cửa hàng từ storage
  getAllCuahang():Promise<Cuahang[]>{
    return this.storage.getItem("cuahangs");
  }

  //Khởi tạo dữ liệu lần đầu tiên khởi động App
  initData(){      
    return this.http.get(this.cuahangInitPath) 
    .map((res) => {        
        return res.json();
    });
  }

 /*  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } */


}
