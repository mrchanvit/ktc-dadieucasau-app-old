import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanListPage } from './monan-list';

@NgModule({
  declarations: [
    MonanListPage,
  ],
  imports: [
    IonicPageModule.forChild(MonanListPage),
  ],
})
export class MonanListPageModule {}
