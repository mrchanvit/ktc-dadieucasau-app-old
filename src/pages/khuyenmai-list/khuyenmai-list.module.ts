import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhuyenmaiListPage } from './khuyenmai-list';

@NgModule({
  declarations: [
    KhuyenmaiListPage,
  ],
  imports: [
    IonicPageModule.forChild(KhuyenmaiListPage),
  ],
})
export class KhuyenmaiListPageModule {}
