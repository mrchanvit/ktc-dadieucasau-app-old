import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyProvider, Daily } from '../../../providers/daily/daily';
import { LocationProvider } from '../../../providers/location';
import { Province } from '../../../interfaces/province';

@IonicPage()
@Component({
  selector: 'page-thongtin',
  templateUrl: 'thongtin.html',
})
export class ThongtinPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dailyProv:DailyProvider,
    public locattionProv: LocationProvider) {
  }

  public daily:Daily = null;
  public province:Province = null;

  ionViewDidLoad() {    
    this.dailyProv.getDaily('100').subscribe(
      item => {
        this.daily = item;           
        this.province = this.locattionProv.getProvinceBySlug(item.province); 
        console.log(this.province);
        

      }
    );
  }

}
