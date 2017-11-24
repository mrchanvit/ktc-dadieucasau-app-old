import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { NativeStorage } from '@ionic-native/native-storage';

import { Monan } from '../interfaces/monan';

//Đường dẫn server dữ liệu
const dataServerUrl = "http://59b3c01195ddb9001143e96a.mockapi.io/"


/*
  Generated class for the MonanDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonanDataProvider {

  private monanInitPath = "/data/monans.json";

  constructor(
    public http: Http,
    public storage: NativeStorage) {
    console.log('Hello MonanDataProvider Provider');
  }

  //Khởi tạo dữ liệu lần đầu tiên khởi động App
  initData() {
    return this.http.get(this.monanInitPath)
      .map((res) => {
        return res.json();
      });
  }

  getAllMonan(): Promise<Monan[]> {
    return this.storage.getItem("monans");
  }
}
