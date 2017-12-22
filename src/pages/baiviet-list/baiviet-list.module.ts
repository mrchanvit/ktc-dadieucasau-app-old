import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaivietListPage } from './baiviet-list';

@NgModule({
  declarations: [
    BaivietListPage,
  ],
  imports: [
    IonicPageModule.forChild(BaivietListPage),
  ],
})
export class BaivietListPageModule {}
