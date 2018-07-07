import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';


@IonicPage({
  priority: 'high', segment: 'tab'
})
@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html'
})
export class DailyPage {
  @ViewChild('tabdaily') tabRef: Tabs;
  

  thongtinRoot = 'ThongtinPage';
  donhangRoot = 'DonhangPage';
  thanhtoanRoot = 'ThanhtoanPage';

  
  constructor(public navCtrl: NavController) {}
  ionViewWillEnter() {
		this.tabRef.select(0);
	}

	ionViewDidEnter() {
		this.tabRef.select(0); 
	}
   
  

}
