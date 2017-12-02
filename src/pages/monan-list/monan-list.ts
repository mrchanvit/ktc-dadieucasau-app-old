import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Monan} from '../../interfaces/monan';
import {MonanDataProvider} from '../../providers/monan-data';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-monan-list',
  templateUrl: 'monan-list.html',
})

export class MonanListPage {

  formGroupMon: FormGroup;
  monans: Monan[] = [];  
  private isLoaded: boolean = false;
  viewModeMini: boolean = false; // TRUE dạng list thu nhỉ| FALSE dạng full

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private monanDataProvider: MonanDataProvider,
    private formBuilder: FormBuilder
  ) 
  {
    this.formGroupMon = this.formBuilder.group({
      formLoaiMon: []
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonanListPage');
    if(!this.isLoaded){
      this.monanDataProvider.getAllMonan().then(()=>{
        this.monans = this.monanDataProvider.monans;
        this.isLoaded =true; 
      })
    } else {
      this.monans = this.monanDataProvider.monans;
    }
    
  }

  toMonanDetail(event, monan) {
    this.navCtrl.push("MonanDetailPage", {
      monan: monan
    });
  }

  onChangeMon(loai: string){
    let selectedType = this.formGroupMon.value.formLoaiMon;
    console.log(selectedType);    
    this.monans = this.monanDataProvider.getMonansByThit(selectedType).slice();
  }

  onChangeView(){
    this.viewModeMini = !this.viewModeMini;    
  }
  
  onInput($event){
    console.log($event);
    
  }

  onCancel($event){
    console.log($event);
  }


}
