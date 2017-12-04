import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Thit } from '../../interfaces/thit';
import { Monan } from '../../interfaces/monan';
import { MonanDataProvider } from '../../providers/monan-data';

@IonicPage()
@Component({
  selector: 'page-thit-detail',
  templateUrl: 'thit-detail.html',
})
export class ThitDetailPage {
  
  public thit:Thit;
  public monansCanCook: Monan[] = [];
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private monanDataProvider: MonanDataProvider) {
      this.thit = this.navParams.get("thit");
     
  }

   ionViewDidLoad() {
    if(this.thit) {
      this.monanDataProvider.getMonansCanCook(this.thit.id)
      .then(data=>{                 
        this.monansCanCook = data
      })
    }
    
  } 

  
}
