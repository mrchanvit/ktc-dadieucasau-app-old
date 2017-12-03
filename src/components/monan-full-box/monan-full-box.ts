import { Component, Input } from '@angular/core';
import { Monan } from '../../interfaces/monan';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MonanDataProvider } from '../../providers/monan-data';

@Component({
  selector: 'monan-full-box',
  templateUrl: 'monan-full-box.html'
})
export class MonanFullBoxComponent {
  
  @Input() monan: Monan;
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private monanDataProvider: MonanDataProvider) {}

  toMonanDetail(event, monan) {
    this.navCtrl.push("MonanDetailPage", {
      monan: monan
    });
  }

  //Thêm vào danh sách yêu thích
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

}
