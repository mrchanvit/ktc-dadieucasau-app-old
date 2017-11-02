import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuahangListPage } from './cuahang-list';

@NgModule({
  declarations: [
    CuahangListPage,
  ],
  imports: [
    IonicPageModule.forChild(CuahangListPage),
  ],
})
export class CuahangListPageModule {}
