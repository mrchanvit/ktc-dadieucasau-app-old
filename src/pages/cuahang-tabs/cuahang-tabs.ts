import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';

@IonicPage({
  priority: 'high', segment: 'tab'
})
@Component({
  selector: 'page-cuahang-tabs',
  templateUrl: 'cuahang-tabs.html'
})
export class CuahangTabsPage {

  @ViewChild('tabcuahang') tabRef: Tabs;

  tab1Root = "CuahangListPage";
  tab2Root = "CuahangMapPage";
  
  constructor(public navCtrl: NavController) {}
  
  ionViewWillEnter() {
		this.tabRef.select(0);
	}

	ionViewDidEnter() {
		this.tabRef.select(0); 
	}

}
