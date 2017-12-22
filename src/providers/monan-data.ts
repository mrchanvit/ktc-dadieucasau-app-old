import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { NativeStorage } from '@ionic-native/native-storage';

import { Monan } from '../interfaces/monan';
import { ThitDataProvider } from './thit-data';
import { StatusProvider } from './status';

@Injectable()
export class MonanDataProvider {

  private monanInitPath = "./assets/data/monans.json"; 
  private monans:Monan[]=[];
  private favorites: number[] = [];  
  

  constructor(
    public http: Http,
    public storage: NativeStorage,
    private thitDataProvider: ThitDataProvider,
    private statusProvider: StatusProvider) {
    
  }

  //Khởi tạo dữ liệu lần đầu tiên cài App
  initData() {    
    return this.http.get(this.monanInitPath)
      .map((res) => {
        let data_result = res.json().map((item:Monan)=>{
          item.favorite = false;
          return item;
        })
        return data_result;     
      });
  }

  initDataFavoriteOnEnter():Promise<void>{    
      return this.storage.getItem("favoriteMonans")
      .then(data=>{
        this.favorites = data;
      }).catch((error)=>{
        this.favorites = [];
      });    
  }

  //Lấy DS món ăn + lấy data favorite
  getAllMonan(): Promise<any> {    
    if(!this.statusProvider.monans_is_loaded){      
      return this.storage.getItem("monans")
      .then((data: Monan[])=>{
        let data_result = data.map(item=>{          
          let index_result = this.favorites.findIndex(ele => ele == item.id); 
          if( index_result > -1) 
          {                        
            item.favorite = true
          };
          return item
        })            
        this.statusProvider.monans_is_loaded = true;
        this.monans = data_result; 
        console.log("Lấy món ăn xong");
        
        return data_result;
      }) 
    } else {     
      return Promise.all(this.monans)    
    }         
  }
  
  //Lọc danh sách món ăn theo loại thịt
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

  //Thêm món ăn vào ds yêu thích
  addToFavorites(monan:Monan):Promise<void> {    
    let index = this.monans.findIndex((item)=>item.id==monan.id);
    this.monans[index].favorite = true;
    this.favorites.push(monan.id);
    return this.storage.setItem("favoriteMonans",this.favorites); 
  }

  //Xóa món ăn khỏi danh sách yêu thích
  removeFromFavorites(monan:Monan):Promise<void> {    
    let index = this.monans.findIndex((item)=>item.id==monan.id);
    this.monans[index].favorite = false;
    let new_favorite = this.favorites.filter(item=>item!=monan.id);
    this.favorites = new_favorite;
    return this.storage.setItem("favoriteMonans",this.favorites); 
  }

  //Lấy danh sách món ăn yêu thích
  getFavorites(): Promise<Monan[]> {  
    if(this.monans.length == 0){
      return this.getAllMonan().then((data)=>{            
        return this.monans.filter(item=>item.favorite)
      })
    } else {
      return Promise.all(this.monans.filter(item=>item.favorite))
    }
  }

  //Lấy món ăn có thể chế biến theo thịt ID
  getMonansCanCook(thitId:number):Promise<Monan[]>{    
    return this.getAllMonan()
    .then(data=>{          
      return data.filter((monan:Monan)=>{
        let result = monan.thits.findIndex(ele=>thitId==ele.id)
        if(result > -1 ) return monan        
      })
    }) 
  } 

  //Lấy món ăn ngẫu nhiên | chỉ thực thi khi đã có ds món ăn
  getMonansRamdom(soluong: number): Monan[] {
    if(this.monans.length>0){
      let i = 0;
      let seleted_ramdom: number[] = [];
      let monans_ramdom: Monan[] = [];
      while (i < soluong) {
        var ramdom_monan = Math.floor(Math.random() * this.monans.length);
        if (seleted_ramdom.findIndex(item => item == ramdom_monan) == -1) {
          monans_ramdom.push(this.monans[ramdom_monan]);
          seleted_ramdom.push(ramdom_monan);
          i++;
        }
      }   
      return monans_ramdom;
    } else return []  
  }
}
