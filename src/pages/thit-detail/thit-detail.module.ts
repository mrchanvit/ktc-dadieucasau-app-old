import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThitDetailPage } from './thit-detail';

@NgModule({
  declarations: [
    ThitDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ThitDetailPage),
  ],
})
export class ThitDetailPageModule {}
