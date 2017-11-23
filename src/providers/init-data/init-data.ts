import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

import { CuahangDataProvider } from '../cuahang-data';

/*
  Generated class for the InitDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InitDataProvider {

  constructor(
    public http: Http,
    private cuahangDataProvider: CuahangDataProvider,
    private storage: NativeStorage) {
    console.log('Hello InitDataProvider Provider');
  }

  public initData(){
    //Khởi tạo data cửa hàng
    this.cuahangDataProvider.initData().subscribe((data)=>{
      console.log(data); 
      this.storage.setItem("cuahangs",data);
    },(error)=>{
      console.log(error); 
    });


  }


}
