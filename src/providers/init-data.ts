import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';
import { CuahangDataProvider } from './cuahang-data';

@Injectable()
export class InitDataProvider {

  constructor(
    public http: Http,
    private cuahangDataProvider: CuahangDataProvider,
    private storage: NativeStorage) {
    console.log('Hello InitDataProvider Provider');
  }

  //Khởi tạo data
  public initData(){

      this.storage.getItem("isFirstLoad")
      .then((data)=>{
        console.log("Không cần khởi tạo"); 
             
      })
      .catch((error)=>{
        console.log(error); 
        this.storage.setItem("isFirstLoad",true);
        // Chưa khởi tạo dữ liệu, tiến hành khởi tạo
        // Cửa hàng
        this.cuahangDataProvider.initData().subscribe((data)=>{
          console.log('Load dữ liệu cửa hàng');
          this.storage.setItem("cuahangs",data);                
        },(error)=>{
          console.log(error); 
        });  
        
      })
      
  }   


}
