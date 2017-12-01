import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { NativeStorage } from '@ionic-native/native-storage';

import { Monan } from '../interfaces/monan';
import { ThitDataProvider } from './thit-data';

@Injectable()
export class MonanDataProvider {

  private monanInitPath = "./assets/data/monans.json"; 
  public monans:Monan[]=[];
  

  constructor(
    public http: Http,
    public storage: NativeStorage,
    private thitDataProvider: ThitDataProvider) {
    console.log('Hello MonanDataProvider Provider');
  }

  //Khởi tạo dữ liệu lần đầu tiên khởi động App
  initData() {
    return this.http.get(this.monanInitPath)
      .map((res) => {
        return res.json();
      });
  }

  getAllMonan(): Promise<any> {    
      return this.storage.getItem("monans")
      .then((data: Monan[])=>{
        this.monans = data;  
      })    
  }

  //Lọc danh sách món ăn
  getMonansByThit(type:string): Monan[]{
    if (type == 'all') return this.monans;
    return this.monans.filter(item=>{
      let chon = false;
      item.thits.forEach(element => {
        let ele = this.thitDataProvider.getThitDetail(element.id);                
        if(ele.type == type) chon=true;
      });
      if(chon) return item      
    })
  }

}
