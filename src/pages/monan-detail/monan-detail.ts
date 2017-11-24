import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Monan} from '../../interfaces/monan'
import { GiaviDataProvider } from '../../providers/giavi-data';
import { Giavi } from '../../interfaces/giavi';

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

  /* getGiaviDetail:Giavi(giavi:Giavi){
    giavi.color = this.
  } */
  getGiaviIcon(giavi:Giavi){
    console.log(this.giaviDataController.getIcon(giavi.id));
    
    return this.giaviDataController.getIcon(giavi.id);
  }
  getGiaviName(giavi:Giavi){       
    return this.giaviDataController.getName(giavi.id);
  }
  getGiaviColor(giavi:Giavi){       
    return this.giaviDataController.getColor(giavi.id);
  }
  
 

}
