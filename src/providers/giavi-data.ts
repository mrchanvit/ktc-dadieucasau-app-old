import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Giavi } from '../interfaces/giavi';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the GiaviDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GiaviDataProvider {

  private giaviInitPath = "./assets/data/giavis.json"; 
  private giavis: Giavi[] = []; 

  constructor(
    public http: Http,
    private storage: NativeStorage
    ) {
    console.log('Hello GiaviDataProvider Provider');
  }

  //Khởi tạo dữ liệu lần đầu tiên khởi động App
  initData() {
    return this.http.get(this.giaviInitPath)
      .map((res) => {
        return res.json();
      });
  }

  //Tải danh sách gia vị vào RAM mỗi khi mở áp
  initDataOnEnter(key:string){
    this.storage.getItem(key)
    .then(data=>{
      this.giavis = data;    
      console.log(data);   
    }).catch(error=>{
      console.log(error);      
    });
  }

  public getIcon(id:string){
    if(this.giavis.length>0){
      return this.giavis.find(item => item.id == id).icon;
    }    
  }

  public getColor(id:string){
    if(this.giavis.length>0){
      console.log(this.giavis.find(item => item.id == id).color);      
      return this.giavis.find(item => item.id == id).color;
    }
  }

  public getName(id:string){
    if(this.giavis.length>0){
      return this.giavis.find(item => item.id == id).name;
    }
  }

  public setDetail(giavi:Giavi){
    if(this.giavis.length>0){
      let giaviSaved = this.giavis.find(item => item.id == giavi.id);
      giavi.color = giaviSaved.color;
      giavi.icon = giaviSaved.icon;
      giavi.name = giaviSaved.name;
    }
  }


}
