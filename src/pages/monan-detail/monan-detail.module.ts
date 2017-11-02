import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanDetailPage } from './monan-detail';

@NgModule({
  declarations: [
    MonanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonanDetailPage),
  ],
})
export class MonanDetailPageModule {}
