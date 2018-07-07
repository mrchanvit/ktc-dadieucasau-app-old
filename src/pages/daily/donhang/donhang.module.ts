import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonhangPage } from './donhang';

@NgModule({
  declarations: [
    DonhangPage,
  ],
  imports: [
    IonicPageModule.forChild(DonhangPage),
  ],
})
export class DonhangPageModule {}
