import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cuahang} from '../../interfaces/cuahang';
import {CuahangDataProvider} from '../../providers/cuahang-data'

/**
 * Generated class for the CuahangListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuahang-list',
  templateUrl: 'cuahang-list.html',
})
export class CuahangListPage {
  cuahangs:Cuahang[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private cuahangDataProvider: CuahangDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuahangListPage');
    this.cuahangDataProvider.getAllCuahang()
    .then(res=>{this.cuahangs=res})
    .catch(error =>{ console.log("Error")});
  }

}
