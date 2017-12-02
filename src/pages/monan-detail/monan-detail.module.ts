import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonanDetailPage } from './monan-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MonanDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(MonanDetailPage),
  ],
})
export class MonanDetailPageModule {}
