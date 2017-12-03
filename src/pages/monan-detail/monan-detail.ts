import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Monan } from '../../interfaces/monan'
import { GiaviDataProvider } from '../../providers/giavi-data';
import { Thit } from '../../interfaces/thit';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MonanDataProvider } from '../../providers/monan-data';

@IonicPage()
@Component({
  selector: 'page-monan-detail',
  templateUrl: 'monan-detail.html',
})
export class MonanDetailPage {

  monan: Monan;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public giaviDataController: GiaviDataProvider,
    private monanDataProvider: MonanDataProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonanDetailPage');
    this.monan = this.navParams.get('monan');
  }

  //Món ăn yêu thích
  onOffFavorites() {    
    if (!this.monan.favorite) {
      //Thêm vào yêu thích
      this.monanDataProvider.addToFavorites(this.monan)
      .then(()=>{
        this.monan.favorite = true;
        let toast = this.toastCtrl.create({
          message: 'Đã thêm vào danh sách yêu thích!',
          duration: 2000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {        
        });
        toast.present();
      })
      .catch(()=>{});      
    } else {
      //Bỏ khỏi danh sách yêu thích 
      let alert = this.alertCtrl.create({
        title: 'Món ăn yêu thích',
        message: 'Bạn thật sự muốn xóa khỏi danh sách yêu thích ?',
        buttons: [
          {
          text: 'Bỏ qua', role: 'cancel',
          handler: () => {}
          }, {
            text: 'Đồng ý',
            handler: () => {
              this.monanDataProvider.removeFromFavorites(this.monan)
              .then(()=>{
                this.monan.favorite = false;
                let toast = this.toastCtrl.create({
                  message: 'Đã xóa khỏi danh sách yêu thích!',
                  duration: 2000,
                  position: 'bottom'
                });
                toast.onDidDismiss(() => {        
                });
                toast.present();
              })
              .catch(()=>{})
            }
          }
        ]
      });
      alert.present();  
    }
  }
  
  onToThit(thit: Thit) {
    this.navCtrl.push("ThitDetailPage", { thit: thit })
  }
}
