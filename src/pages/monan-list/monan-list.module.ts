import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanListPage } from './monan-list';
import { MonanFullBoxComponent } from '../../components/monan-full-box/monan-full-box';
import { MonanListBoxComponent } from '../../components/monan-list-box/monan-list-box';



@NgModule({
  declarations: [
    MonanListPage,
    MonanFullBoxComponent,
    MonanListBoxComponent
  ],
  imports: [    
    IonicPageModule.forChild(MonanListPage),
  ],
  exports: [   
    MonanListBoxComponent
  ]

})
export class MonanListPageModule {}
