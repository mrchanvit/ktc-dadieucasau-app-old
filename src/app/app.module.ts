import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Configs } from '../config';


//Ionic native
import { NativeStorage } from '@ionic-native/native-storage';
import { CallNumber } from '@ionic-native/call-number';

//My pages
import { ThitListPageModule } from '../pages/thit-list/thit-list.module';
import { MainPage } from '../pages/main/main';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { ThitDetailPageModule } from '../pages/thit-detail/thit-detail.module';
import { CuahangTabsPageModule } from '../pages/cuahang-tabs/cuahang-tabs.module';
import { CuahangMapPageModule } from '../pages/cuahang-map/cuahang-map.module';
import { KhuyenmaiListPageModule } from '../pages/khuyenmai-list/khuyenmai-list.module';
import { CuahangListPageModule } from '../pages/cuahang-list/cuahang-list.module';
import { MonanFavoritePageModule } from '../pages/monan-favorite/monan-favorite.module';
import { MonanDetailPageModule } from '../pages/monan-detail/monan-detail.module';
import { MonanListPageModule } from '../pages/monan-list/monan-list.module';


//My provider
import { InitDataProvider } from '../providers/init-data';
import { MonanDataProvider } from '../providers/monan-data';
import {CuahangDataProvider } from '../providers/cuahang-data';
import { GiaviDataProvider } from '../providers/giavi-data';
import { ThitDataProvider } from '../providers/thit-data';

//My pipe
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ItemDetailsPage,    
    MonanListPageModule,
    MonanDetailPageModule,
    WelcomePageModule,
    MonanFavoritePageModule,
    ThitListPageModule,
    CuahangListPageModule,
    KhuyenmaiListPageModule,
    CuahangMapPageModule,
    CuahangTabsPageModule,
    ThitDetailPageModule,    
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    PipesModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    MonanListPageModule,
    MonanDetailPageModule,
    WelcomePageModule,
    MonanFavoritePageModule,
    ThitListPageModule,
    CuahangListPageModule,
    KhuyenmaiListPageModule,
    CuahangMapPageModule,
    CuahangTabsPageModule,
    ThitDetailPageModule,   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    CallNumber,
    FormBuilder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonanDataProvider,
    CuahangDataProvider,
    InitDataProvider,
    Configs,
    GiaviDataProvider,
    ThitDataProvider 
  ]
})
export class AppModule {}
