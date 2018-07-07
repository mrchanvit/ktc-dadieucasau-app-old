import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyPage } from './daily';
import { DonhangPageModule } from './donhang/donhang.module';
import { ThongtinPageModule } from './thongtin/thongtin.module';
import { ThanhtoanPageModule } from './thanhtoan/thanhtoan.module';

@NgModule({
  declarations: [
    DailyPage,
  ],
  imports: [
    DonhangPageModule,
    ThongtinPageModule,
    ThanhtoanPageModule,
    IonicPageModule.forChild(DailyPage),
  ]
})
export class DailyPageModule {}
