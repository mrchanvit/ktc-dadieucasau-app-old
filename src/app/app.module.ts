import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

//Ionic native
import { NativeStorage } from '@ionic-native/native-storage';

//My pages
import {MonanListPage} from '../pages/monan-list/monan-list';
import {MonanDataProvider } from '../providers/monan-data';
import {CuahangDataProvider } from '../providers/cuahang-data';
import {MonanDetailPage} from '../pages/monan-detail/monan-detail';
import {WelcomePage} from '../pages/welcome/welcome';
import {MonanFavoritePage} from '../pages/monan-favorite/monan-favorite';
import {ThitListPage} from '../pages/thit-list/thit-list';
import {CuahangListPage} from '../pages/cuahang-list/cuahang-list';
import {KhuyenmaiListPage} from '../pages/khuyenmai-list/khuyenmai-list';
import {CuahangMapPage} from '../pages/cuahang-map/cuahang-map';
import {CuahangTabsPage} from '../pages/cuahang-tabs/cuahang-tabs'
import { InitDataProvider } from '../providers/init-data';
import { Configs } from '../config';
import { GiaviDataProvider } from '../providers/giavi-data';
import { ThitDataProvider } from '../providers/thit-data';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ItemDetailsPage,
    ListPage,
    MonanListPage,
    MonanDetailPage,
    WelcomePage,
    MonanFavoritePage,
    ThitListPage,
    CuahangListPage,
    KhuyenmaiListPage,
    CuahangMapPage,
    CuahangTabsPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ItemDetailsPage,
    ListPage,
    MonanListPage,
    MonanDetailPage,
    WelcomePage,
    MonanFavoritePage,
    ThitListPage,
    CuahangListPage,
    KhuyenmaiListPage,
    CuahangMapPage,
    CuahangTabsPage,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
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
