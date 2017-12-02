import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cuahang-tabs',
  templateUrl: 'cuahang-tabs.html'
})
export class CuahangTabsPage {

  tab1Root = "CuahangListPage";
  tab2Root = "CuahangMapPage";
  
  constructor(public navCtrl: NavController) {}

}
