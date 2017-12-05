import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Province } from '../../interfaces/province';
import { LocationProvider } from '../../providers/location';

@IonicPage()
@Component({
  selector: 'page-province-radio',
  templateUrl: 'province-radio.html',
})
export class ProvinceRadioPage {

  provinces: Province[];
  private formProvince: any;  
  selectedProvince: Province;
  isShowOkey: boolean = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private locationProv: LocationProvider,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {    
    this.locationProv.getAllProvinces().subscribe(data=>{
      this.provinces = data;
      this.selectedProvince = this.navParams.get('province');         
      if(this.selectedProvince) {
        this.formProvince = this.selectedProvince.slug;
        this.isShowOkey = true;
      }
    })    
  }

  onClose(){
    this.viewCtrl.dismiss();
  }
  onOkey(){     
    if(this.formProvince != 'all'){
      this.selectedProvince = this.locationProv.getProvinceBySlug(this.formProvince)
      this.viewCtrl.dismiss(this.selectedProvince);
    } else {
      this.viewCtrl.dismiss();
    }
    
  }

  onChange(){    
    this.isShowOkey = true;
  }

 

}
