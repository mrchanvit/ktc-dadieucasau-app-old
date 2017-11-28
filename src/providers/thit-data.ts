import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Thit } from '../interfaces/thit';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the ThitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThitDataProvider {

  private thitInitPath = "./assets/data/thits.json";
  private thits: Thit[] = [];

  constructor(
    public http: Http,    
    private storage: NativeStorage
  ) {
    console.log('Hello ThitProvider Provider');
  }

  //Khởi tạo dữ liệu lần đầu tiên khởi động App
  initData() {
    return this.http.get(this.thitInitPath)
      .map((res) => {
        return res.json();
      });
  }

  //Tải danh sách thịt vào RAM mỗi khi mở áp
  initDataOnEnter(key:string) {
    this.storage.getItem(key)
      .then(data => {
        this.thits = data;
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
  }

  getAllThits():Thit[]{
    return this.thits;
  }

  getOnLoaiThit(loaithit: string): Thit[]{    
    return this.thits.filter(item=>{
      if (item.type == loaithit) return item;
    }); 
  }

  getThitDetail(id: number): Thit{
    return this.thits.filter(item=>{
      if (item.id == id) return item;
    })[0]; 
  }

  

}
