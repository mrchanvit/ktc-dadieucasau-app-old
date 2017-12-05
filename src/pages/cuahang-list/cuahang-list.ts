import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cuahang } from '../../interfaces/cuahang';
import { CuahangDataProvider } from '../../providers/cuahang-data';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ProvinceRadioPage } from '../province-radio/province-radio';


@IonicPage()
@Component({
  selector: 'page-cuahang-list',
  templateUrl: 'cuahang-list.html',
})
export class CuahangListPage {
  cuahangs: Cuahang[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cuahangDataProvider: CuahangDataProvider,
    private callNumber: CallNumber,
    public platform: Platform,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.cuahangDataProvider.getAllCuahang()
      .then(res => { this.cuahangs = res })
      .catch(error => { console.log("Error") });
  }

  onCallNumber(number: string) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  openExMap(cuahang: Cuahang) {
    //Lấy vị trí của mềnh
    /* let position = {
      coords: {
        longitude: 12.284815,
        latitude: 109.203389
      }
    }; */

    this.geolocation.getCurrentPosition().then((position) => {

      // ios
      if (this.platform.is('ios')) {
        window.open('maps://?q=' + cuahang.name + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + cuahang.lat + ',' + cuahang.lng, '_system');
      };
      // android
      if (this.platform.is('android')) {
        window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + cuahang.lat + ',' + cuahang.lng + '(' + cuahang.name + ')', '_system');
      };
      console.log(position);

    }).catch((error) => {
      // Import the AlertController from ionic package 
      // Consume it in the constructor as 'alertCtrl' 
      let alert = this.alertCtrl.create({
        title: 'Vị trí của bạn',
        message: 'Không thể định vị vị trí của bạn!',
        buttons: [
          {
            text: 'Ok ',
            handler: () => {            
          }
          }
        ]
      });
      alert.present();
    });
  }

  presentProvinceModal() {
    let profileModal = this.modalCtrl.create('ProvinceRadioPage');
    profileModal.present();
  } 

}
