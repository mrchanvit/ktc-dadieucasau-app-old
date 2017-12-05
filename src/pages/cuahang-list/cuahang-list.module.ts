import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuahangListPage } from './cuahang-list';
import { ProvinceRadioPageModule } from '../province-radio/province-radio.module';

@NgModule({
  declarations: [
    CuahangListPage,
  ],
  imports: [
    ProvinceRadioPageModule,
    IonicPageModule.forChild(CuahangListPage),
  ],
})
export class CuahangListPageModule {}
