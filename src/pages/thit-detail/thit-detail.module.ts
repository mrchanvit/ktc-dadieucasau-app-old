import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThitDetailPage } from './thit-detail';
import { MonanListPageModule } from '../monan-list/monan-list.module';

@NgModule({
  declarations: [
    ThitDetailPage,
  ],
  imports: [
    MonanListPageModule,
    IonicPageModule.forChild(ThitDetailPage),
  ],
})
export class ThitDetailPageModule {}
