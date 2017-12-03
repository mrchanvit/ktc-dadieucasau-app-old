import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanFavoritePage } from './monan-favorite';
import { MonanListPageModule } from '../monan-list/monan-list.module';

@NgModule({
  declarations: [
    MonanFavoritePage,
    
  ],
  imports: [
    MonanListPageModule,   
    IonicPageModule.forChild(MonanFavoritePage),
  ],
})
export class MonanFavoritePageModule {}
