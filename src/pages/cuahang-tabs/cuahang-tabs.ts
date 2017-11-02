import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {CuahangListPage} from '../cuahang-list/cuahang-list';
import {CuahangMapPage} from '../cuahang-map/cuahang-map';

/**
 * Generated class for the CuahangTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuahang-tabs',
  templateUrl: 'cuahang-tabs.html'
})
export class CuahangTabsPage {

  tab1Root = CuahangListPage;
  tab2Root = CuahangMapPage;


  constructor(public navCtrl: NavController) {}

}
