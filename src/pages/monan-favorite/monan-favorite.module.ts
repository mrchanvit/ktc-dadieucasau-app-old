import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanFavoritePage } from './monan-favorite';

@NgModule({
  declarations: [
    MonanFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(MonanFavoritePage),
  ],
})
export class MonanFavoritePageModule {}
