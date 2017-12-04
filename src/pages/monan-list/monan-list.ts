import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import {Monan} from '../../interfaces/monan';
import {MonanDataProvider} from '../../providers/monan-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard';
import { Loading } from 'ionic-angular/components/loading/loading';
import { Menu } from 'ionic-angular/components/app/menu-interface';



@IonicPage()
@Component({
  selector: 'page-monan-list',
  templateUrl: 'monan-list.html',
})

export class MonanListPage {

  formGroupMon: FormGroup;
  monans: Monan[] = [];
  viewModeMini: boolean = false; // TRUE dạng list thu nhỉ| FALSE dạng full
  isOpenSearch: boolean = false; // TRUE mở khung search| FALSE đóng
  searchMon: string;
  searchMonColor: string = "white";
 
  
  @ViewChild(Content) content: Content;  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private monanDataProvider: MonanDataProvider,
    private formBuilder: FormBuilder,
    private keyboard: Keyboard
    
  ) 
  {
    this.formGroupMon = this.formBuilder.group({
      formLoaiMon: ['all']
    })
    console.log(this.formGroupMon.value);
    
  }

  ionViewDidLoad() {
    this.monanDataProvider.getAllMonan().then((data) => {
      this.monans = data;
      let loading: Loading = this.navParams.get('loading');
      if(loading) {
        loading.dismiss();
        setTimeout(() => {
          let menu: Menu = this.navParams.get('menu');
          menu.close();
        }, 400);
      }   
    })
    
  }  

  onChangeMon(){
    if(this.isOpenSearch){
      this.fillMonansByType();
      this.searchMonan(this.searchMon);
    } else {
      this.fillMonansByType();
    }    
  }

  fillMonansByType(){
    let selectedType = this.formGroupMon.value.formLoaiMon;    
    this.monans = this.monanDataProvider.getMonansByThit(selectedType).slice();
  }

  onChangeView(){
    this.viewModeMini = !this.viewModeMini;
  }

  //Tìm kiếm
  onOpenSearch(){
    if(!this.isOpenSearch){
      this.isOpenSearch = !this.isOpenSearch;   
      this.searchMonColor = "yellow"; 
      this.content.resize(); 
    } else {
      this.isOpenSearch = !this.isOpenSearch;
      this.content.resize(); 
      this.searchMon = "";
      this.searchMonColor = "white";     
      this.monanDataProvider.getAllMonan()
      .then((data)=>{
        this.monans = data;
      });  
    }
    
  }  
  
  onInput($event){     
      let type = this.formGroupMon.value.formLoaiMon;
      console.log(type);
      
      // Lấy giá trị
      let val = $event.target.value; 
      //Lấy lại ds món theo loại thịt;
      this.fillMonansByType();
      this.searchMonan(val);
  }

  searchMonan(val:string){
    if (val && val.trim() != '') {
      this.monans = this.monans.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



  onCancel($event){
    this.isOpenSearch = false;
    this.searchMon="";
    this.searchMonColor = "white"; 
    this.content.resize(); 
    this.fillMonansByType();
  }

  onClear($event){
    
  }

  //Đóng khung tìm kiếm
  //Thêm: (keypress)="onEnter($event)"
  onSearch($event: any){
    this.keyboard.close();
    setTimeout(() => {
      this.focusOut();
    }, 300);          
  }

  focusOut() {
    let activeElement = <HTMLElement>document.activeElement;
    activeElement && activeElement.blur && activeElement.blur();
  }

}
