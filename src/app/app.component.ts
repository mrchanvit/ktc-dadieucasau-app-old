import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitDataProvider } from '../providers/init-data';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage:any = "MainPage";
  pages: Array<{title: string, component: any, icon: string, color: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private initDataProvider: InitDataProvider,
    private storage: NativeStorage

  ) {
    this.initializeApp();      
    
    // set our app's pages
    this.pages = [
      { title: 'Nóng sốt', component: "MainPage", icon: "flame" ,color: "tone01"},
      { title: 'Yêu thích', component: "MonanFavoritePage", icon: "heart",color: "tone02"  },
      { title: 'Món ăn', component: "MonanListPage", icon: "restaurant", color: "primary" },
      { title: 'Sản phẩm', component: "ThitListPage", icon: "egg", color: "secondary" },
      { title: 'Cửa hàng', component: "CuahangTabsPage", icon: "basket", color: "tone15" },
      { title: 'Khuyến mãi', component: "KhuyenmaiListPage", icon: "pricetags", color: "tone16" },
      { title: 'Liên hệ', component: "KhuyenmaiListPage", icon: "chatbubbles", color: "tone17"  },
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
      
      // Khởi tạo dữ liệu lần đầu tiên tải ứng dụng
      
      this.storage.getItem("isFirstLoad")
      .then(data=>{

        //Mỗi lần mở ứng dụng
        console.log('Chay BT');
        
        this.initDataProvider.initData(); 
      })
      .catch(error=>{

        //Ứng dụng chạy lần đầu
        this.rootPage = "WelcomePage";
        this.initDataProvider.initDataFirstLoad();
        this.storage.setItem("isFirstLoad",false);

      })

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  
 

}
