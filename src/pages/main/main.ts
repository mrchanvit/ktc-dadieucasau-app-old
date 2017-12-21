import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InitDataProvider } from '../../providers/init-data';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { MonanDataProvider } from '../../providers/monan-data';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtr: ViewController,
      public initDataProvider: InitDataProvider,
      private toastCtrl: ToastController,
      private monansDataProvider: MonanDataProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewDidEnter(){
    //this.viewCtr.showBackButton(false);
    this.monansDataProvider.getMonansRamdom(2)
    .then(data=>{
      console.log(data);      
    })
    .catch(error=>{
      console.log("Co loi");      
    })    
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

}
