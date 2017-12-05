import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Province } from '../interfaces/province';
import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class LocationProvider {

  private locationDataPath = "./assets/data/provinces.json"; 
  private isLoaded = false;
  private provinces: Province[] = [];

  constructor(
    public http: Http,
    private storage: NativeStorage
  ) {
    
  }

  getAllProvinces():Observable<Province[]>{
    if(!this.isLoaded) {
      return this.http.get(this.locationDataPath)
      .map((res) => {
        console.log("load lan dau");
        
        this.isLoaded = true;
        this.provinces = res.json();
        return this.provinces
      })
    } else {
      console.log("again");
      return Observable.of(this.provinces)
    }
    
  }

  getProvinceBySlug(slug:string):Province{
    return this.provinces.filter(item=>item.slug == slug)[0]
  }

  loadProvince():Promise<any>{
    return this.storage.getItem("province")
  }

  saveProvince(province:Province){
    this.storage.setItem("province", {province}).then(res=>{}).catch(()=>{})
  }

}
