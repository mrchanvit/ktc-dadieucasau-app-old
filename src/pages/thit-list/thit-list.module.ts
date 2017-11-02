import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThitListPage } from './thit-list';

@NgModule({
  declarations: [
    ThitListPage,
  ],
  imports: [
    IonicPageModule.forChild(ThitListPage),
  ],
})
export class ThitListPageModule {}
