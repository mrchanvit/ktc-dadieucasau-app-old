import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Monan} from '../../interfaces/monan'

/**
 * Generated class for the MonanDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monan-detail',
  templateUrl: 'monan-detail.html',
})
export class MonanDetailPage {

  monan:Monan;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.monan = navParams.get('monan');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonanDetailPage');
  }

}
