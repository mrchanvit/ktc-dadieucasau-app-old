import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitDataProvider } from '../providers/init-data';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any ;
  pages: Array<{ title: string, component: any, icon: string, color: string, isShowLoading:boolean }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private initDataProvider: InitDataProvider,
    private storage: NativeStorage,
    private loadingCtrl: LoadingController

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Nóng sốt', component: "MainPage", icon: "flame", color: "tone01", isShowLoading: false},
      { title: 'Yêu thích', component: "MonanFavoritePage", icon: "heart", color: "tone02", isShowLoading: true},
      { title: 'Món ăn', component: "MonanListPage", icon: "restaurant", color: "primary", isShowLoading: true},
      { title: 'Sản phẩm', component: "ThitListPage", icon: "egg", color: "secondary", isShowLoading: false},
      { title: 'Cửa hàng', component: "CuahangTabsPage", icon: "basket", color: "tone15", isShowLoading: false},
      { title: 'Khám phá', component: "BaivietListPage", icon: "mi-khampha", color: "tone16", isShowLoading: false},
      { title: 'Liên hệ', component: "BaivietListPage", icon: "chatbubbles", color: "tone17", isShowLoading: false},
      //+ Page Loại nguyên liệu

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("initializeApp finish");
      

      // Khởi tạo dữ liệu lần đầu tiên tải ứng dụng
      this.storage.getItem("isFirstLoad")
        .then(data => {
          //Mỗi lần mở ứng dụng
          console.log('Chay BT');
          this.initDataProvider.initData().then(()=>{
            console.log("Xong");
            this.rootPage = "MainPage";
            this.statusBar.styleDefault();
            this.splashScreen.hide();
          });
        })
        .catch(error => {
          //Ứng dụng chạy lần đầu
          this.rootPage = "WelcomePage";
          this.initDataProvider.initDataFirstLoad();
          this.storage.setItem("isFirstLoad", false);
        })

    });
  }

  openPage(page) {    
    
    if(page.isShowLoading){
      let loading = this.loadingCtrl.create({
        content: 'Vui lòng chờ ...'
      });
      loading.present();  
      this.nav.setRoot(page.component, { loading: loading, menu: this.menu });
    } else {
      this.nav.setRoot(page.component);
      this.menu.close(); 
    }
    
  }




}
