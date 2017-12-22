import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';
import { CuahangDataProvider } from './cuahang-data';
import { GiaviDataProvider } from './giavi-data';
import { MonanDataProvider } from './monan-data';
import { ThitDataProvider } from './thit-data';
import { Monan } from '../interfaces/monan';


@Injectable()
export class InitDataProvider {

  constructor(
    public http: Http,
    private cuahangDataProvider: CuahangDataProvider,
    private giaviDataProvider: GiaviDataProvider,
    private monanDataProvider: MonanDataProvider,
    private thitDataProvider: ThitDataProvider,    
    private storage: NativeStorage
    ) {
    console.log('Hello InitDataProvider Provider');
  }

  //Khởi tạo data
  public initDataFirstLoad() {

    //Chỉ chạy khi mới cài đặt ứng dụng lần đầu tiên
    //++++++++++++++++++++++++++++++++++++++++++++++

    this.storage.setItem("isFirstLoad", true);
    // Chưa khởi tạo dữ liệu, tiến hành khởi tạo
    // Cửa hàng
    this.cuahangDataProvider.initData().subscribe((data) => {      
      this.storage.setItem("cuahangs", data);
    }, (error) => {      
    });

    //Gia vị
    this.giaviDataProvider.initData().subscribe((data) => {      
      this.storage.setItem("giavis", data).then(()=>{
        this.giaviDataProvider.initDataOnEnter("giavis");
      });
    }, (error) => {
      
    });

    //Món ăn
    this.monanDataProvider.initData().subscribe((data) => {      
      this.storage.setItem("monans", data);
    }, (error) => {      
    });

    //Thịt
    this.thitDataProvider.initData().subscribe((data) => {      
      this.storage.setItem("thits", data).then(()=>{
        this.thitDataProvider.initDataOnEnter("thits");
      });
    }, (error) => {      
    });

    //+++++++++++++++++++++++++++++++++++++++++++++
  }

  initData():Promise<Monan[]> {
    //Lưu danh sách gia vị vào ram
    this.giaviDataProvider.initDataOnEnter("giavis");
    //Lưu danh sách sản phẩm
    this.thitDataProvider.initDataOnEnter("thits");
    //Lưu danh sách thịt
    return this.monanDataProvider.initDataFavoriteOnEnter()
    .then(()=>{  
      console.log("Lấy món ăn");    
      return this.monanDataProvider.getAllMonan();
    })
    .catch(()=>{
      console.log("Lỗi khi lấy món ăn yêu thích!");      
    });    
  }

  clearData(){
    return this.storage.clear();
  }


}
