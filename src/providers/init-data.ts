import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';
import { CuahangDataProvider } from './cuahang-data';
import { GiaviDataProvider } from './giavi-data';
import { MonanDataProvider } from './monan-data';

@Injectable()
export class InitDataProvider {

  constructor(
    public http: Http,
    private cuahangDataProvider: CuahangDataProvider,
    private giaviDataProvider: GiaviDataProvider,
    private monanDataProvider: MonanDataProvider,
    private storage: NativeStorage) {
    console.log('Hello InitDataProvider Provider');
  }

  //Khởi tạo data
  public initData(){

      this.storage.getItem("isFirstLoad")
      .then((data)=>{
        console.log("Không cần khởi tạo");
        this.giaviDataProvider.initDataOnEnter();

      })
      .catch((error)=>{
        //Chỉ chạy khi mới cài đặt ứng dụng lần đầu tiên
        //++++++++++++++++++++++++++++++++++++++++++++++

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
        
        //Gia vị
        this.giaviDataProvider.initData().subscribe((data)=>{
          console.log('Load dữ liệu gia vi');
          this.storage.setItem("giavis",data);                
        },(error)=>{
          console.log(error); 
        });

        //Món ăn
        this.monanDataProvider.initData().subscribe((data)=>{
          console.log('Load dữ liệu món ăn');
          this.storage.setItem("monans",data);                
        },(error)=>{
          console.log(error); 
        });

        //+++++++++++++++++++++++++++++++++++++++++++++
        
      })
      
  }   


}
