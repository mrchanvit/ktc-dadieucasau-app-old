import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { MainPage } from '../pages/main/main';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//My pages
import {MonanListPage} from '../pages/monan-list/monan-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {MonanFavoritePage} from '../pages/monan-favorite/monan-favorite';
import {ThitListPage} from '../pages/thit-list/thit-list';
import {KhuyenmaiListPage} from '../pages/khuyenmai-list/khuyenmai-list';
import {CuahangTabsPage} from '../pages/cuahang-tabs/cuahang-tabs';
import { InitDataProvider } from '../providers/init-data/init-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private initDataProvider: InitDataProvider,

  ) {
    this.initializeApp();

    // Khởi tạo dữ liệu lần đầu tiên tải ứng dụng
    this.initDataProvider.initData();
    console.log("Khởi tạo dữ liệu");
    
    // set our app's pages
    this.pages = [
      { title: 'Nổi bật', component: MainPage },
      { title: 'Yêu thích', component: MonanFavoritePage },
      { title: 'Món ăn', component: MonanListPage },
      { title: 'Nguyên liệu', component: ThitListPage },
      { title: 'Cửa hàng', component: CuahangTabsPage },
      { title: 'Khuyến mãi', component: KhuyenmaiListPage },
      { title: 'Liên hệ', component: KhuyenmaiListPage },
      //+ Page Loại nguyên liệu
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("initializeApp finish");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  
 

}
