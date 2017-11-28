import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Monan} from '../../interfaces/monan'
import { GiaviDataProvider } from '../../providers/giavi-data';
import { Giavi } from '../../interfaces/giavi';
import { Thit } from '../../interfaces/thit';
import { ThitDetailPage } from '../thit-detail/thit-detail';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public giaviDataController: GiaviDataProvider    
    ) {
    this.monan = navParams.get('monan');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonanDetailPage');
  }

  //Thêm vào danh sách yêu thích
  onAddFavorites(){
  }

  //Thêm vào danh sách yêu thích
  onToThit(thit:Thit){
    this.navCtrl.push(ThitDetailPage,{thit:thit})
  }
}
