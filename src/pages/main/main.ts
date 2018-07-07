import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';
import { InitDataProvider } from '../../providers/init-data';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { MonanDataProvider } from '../../providers/monan-data';
import { Monan } from '../../interfaces/monan';
import { StatusProvider } from '../../providers/status';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  monansRamdom: Monan[] = []

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtr: ViewController,
      public initDataProvider: InitDataProvider,
      private toastCtrl: ToastController,
      private monansDataProvider: MonanDataProvider,
      private statusProvider: StatusProvider) {
    
  }

  @ViewChild(Slides) slides: Slides;

  ionViewDidEnter(){
    //this.viewCtr.showBackButton(false);
    this.monansRamdom = this.monansDataProvider.getMonansRamdom(2);   
    console.log("Thử lấy");
    //console.log(this.monansDataProvider.getMonansRamdom(2));
    
    console.log(this.statusProvider.monans_is_loaded);
    
       
    this.slides.autoplay = 3000; 
    this.slides.loop = true;      
    this.slides.startAutoplay();
  }

  xoaData(){
    this.initDataProvider.clearData().then(data=>{
      let toast = this.toastCtrl.create({
        message: 'Đã làm sạch dữ liệu',
        duration: 3000,
        position: 'top'
        });
        toast.onDidDismiss(() => {      
        });
        toast.present();
    }).catch(error=>{
      let toast = this.toastCtrl.create({
      message: 'Có lỗi',
      duration: 3000,
      position: 'top'
      });
      toast.onDidDismiss(() => {      
      });
      toast.present();
    });
  }

  onToMonanDetail(monan:Monan){
    this.navCtrl.push("MonanDetailPage",{monan:monan});
  }

  onToMonansPage(){
    this.navCtrl.setRoot("MonanListPage");
  }

  onToThitsPage(){
    this.navCtrl.setRoot("ThitListPage");
  }

  onToNewsPage(){

  }

}
