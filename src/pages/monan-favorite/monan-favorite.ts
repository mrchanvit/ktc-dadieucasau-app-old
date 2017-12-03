import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { Monan } from '../../interfaces/monan';
import { MonanDataProvider } from '../../providers/monan-data';
import { Menu } from 'ionic-angular/components/app/menu-interface';

@IonicPage()
@Component({
  selector: 'page-monan-favorite',
  templateUrl: 'monan-favorite.html',
})
export class MonanFavoritePage {

  monans: Monan[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private monanDataProvider: MonanDataProvider) {
  }

  ionViewDidEnter() {
    this.monanDataProvider.getFavorites().then(data=>{
      this.monans = data;
      let loading: Loading = this.navParams.get('loading');
      if(loading) {
        loading.dismiss();
        setTimeout(() => {
          let menu: Menu = this.navParams.get('menu');
          menu.close();
        }, 400);        
      }      
    })
    .catch();
  }

}
