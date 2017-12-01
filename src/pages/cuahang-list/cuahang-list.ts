import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cuahang} from '../../interfaces/cuahang';
import {CuahangDataProvider} from '../../providers/cuahang-data';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-cuahang-list',
  templateUrl: 'cuahang-list.html',
})
export class CuahangListPage {
  cuahangs:Cuahang[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cuahangDataProvider: CuahangDataProvider,
    private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuahangListPage');
    this.cuahangDataProvider.getAllCuahang()
    .then(res=>{this.cuahangs=res})
    .catch(error =>{ console.log("Error")});
  }

  onCallNumber(number: string){
    this.callNumber.callNumber(number, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

}
