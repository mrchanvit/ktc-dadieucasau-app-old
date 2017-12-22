import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaivietDetailPage } from './baiviet-detail';

@NgModule({
  declarations: [
    BaivietDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BaivietDetailPage),
  ],
})
export class BaivietDetailPageModule {}
