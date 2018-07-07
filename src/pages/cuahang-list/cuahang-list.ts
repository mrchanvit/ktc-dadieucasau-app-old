import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import { Cuahang } from '../../interfaces/cuahang';
import { CuahangDataProvider } from '../../providers/cuahang-data';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Province } from '../../interfaces/province';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LocationProvider } from '../../providers/location';


@IonicPage()
@Component({
  selector: 'page-cuahang-list',
  templateUrl: 'cuahang-list.html',
})
export class CuahangListPage {
  
  cuahangs: Cuahang[] = [];  
  province: Province;
  
  @ViewChild(Content) content: Content; 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,    
    private cuahangDataProvider: CuahangDataProvider,
    private callNumber: CallNumber,
    public platform: Platform,
    private geolocation: Geolocation,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private locationProv: LocationProvider
    ) {
  }

  ionViewDidEnter() {
    this.locationProv.loadProvince().then(data=>{
      if(data.province) {  
        this.province = data.province;
        this.cuahangDataProvider.getCuaHangByProvince(this.province.name)
        .then(res => { 
          this.cuahangs = res;
          this.content.resize();        
        })
        .catch(error => {});
      } else {
        this.cuahangDataProvider.getAllCuahang()
        .then(res => { 
          this.cuahangs = res;
          this.content.resize(); 
        })
        .catch(error => {});            
      }
    })
    .catch(error=>{
      this.cuahangDataProvider.getAllCuahang()
      .then(res => { 
        this.cuahangs = res;
        this.content.resize();      
      })
      .catch(error => {});      
    })   
  }

  onCallNumber(number: string) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  locate(){
    this.geolocation.getCurrentPosition().then((position) => {  
      console.log(position);

    }).catch((error) => {
      let toast = this.toastCtrl.create({
        message: 'Không thể xác định vị trí!',
        duration: 3000,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {        
      });
      toast.present();
    });
  }

  openExMap(cuahang: Cuahang) {

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
      let toast = this.toastCtrl.create({
        message: 'Không thể xác định vị trí!',
        duration: 3000,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {        
      });
      toast.present();
    });
  }

  // Hiện modal chọn tỉnh
  presentProvinceModal() {
    let provinceModal = this.modalCtrl.create('ProvinceRadioPage', { province: this.province });
    provinceModal.onDidDismiss(data => {
      if (data) {  
        this.province = data;
        this.locationProv.saveProvince(this.province);
        this.ionViewDidEnter();
      } else {
        this.ionViewDidEnter();
      }
    });
    provinceModal.present();
  }

}
