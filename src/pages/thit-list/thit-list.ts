import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Thit } from '../../interfaces/thit';
import { ThitDataProvider } from '../../providers/thit-data';
import { FormBuilder,FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-thit-list',
  templateUrl: 'thit-list.html',
})
export class ThitListPage {

  public thits: Thit[] = [];
  public formGroupLoaiThit: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private thitDataProvider: ThitDataProvider,
      private formBuilder: FormBuilder){
    this.formGroupLoaiThit = this.formBuilder.group({
      formLoaiThit: ['all']      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThitListPage');
    this.thits = this.thitDataProvider.getAllThits();
    
  }

  onChangeLoaiThit(){   
    let selectedLoaiThit = this.formGroupLoaiThit.value.formLoaiThit;
    if (selectedLoaiThit == 'all'){
      this.thits = this.thitDataProvider.getAllThits();
    } else {
      this.thits = this.thitDataProvider.getOnLoaiThit(selectedLoaiThit);
    }
  }

  onToThitDetail(thit:Thit){
    this.navCtrl.push("ThitDetailPage",{thit:thit})
  }
  

}
