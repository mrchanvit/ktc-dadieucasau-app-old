import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Thit } from '../../interfaces/thit';

/**
 * Generated class for the ThitDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thit-detail',
  templateUrl: 'thit-detail.html',
})
export class ThitDetailPage {
  
  public thit:Thit;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.thit = this.navParams.get("thit");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThitDetailPage');    
  }



}
