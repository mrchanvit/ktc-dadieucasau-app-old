import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { NativeStorage } from '@ionic-native/native-storage';

import { Monan } from '../interfaces/monan';

@Injectable()
export class MonanDataProvider {

  private monanInitPath = "/assets/data/monans.json";

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
