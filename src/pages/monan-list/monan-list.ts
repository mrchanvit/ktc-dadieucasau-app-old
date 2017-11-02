import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Monan} from '../../interfaces/monan';
import {MonanDataProvider} from '../../providers/monan-data';
import {MonanDetailPage} from '../../pages/monan-detail/monan-detail';

/**
 * Generated class for the MonanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monan-list',
  templateUrl: 'monan-list.html',
})

export class MonanListPage {

  monans:Monan[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private monanDataProvider: MonanDataProvider
  ) 
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonanListPage');
    this.monanDataProvider.getAllMonan().then(res => this.monans=res);
  }

  toMonanDetail(event, monan) {
    this.navCtrl.push(MonanDetailPage, {
      monan: monan
    });
  }
}
