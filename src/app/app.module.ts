import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Configs } from '../config';


//Ionic native
import { NativeStorage } from '@ionic-native/native-storage';
import { CallNumber } from '@ionic-native/call-number';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Keyboard } from '@ionic-native/keyboard';



//My provider
import { InitDataProvider } from '../providers/init-data';
import { MonanDataProvider } from '../providers/monan-data';
import { CuahangDataProvider } from '../providers/cuahang-data';
import { GiaviDataProvider } from '../providers/giavi-data';
import { ThitDataProvider } from '../providers/thit-data';
import { StatusProvider } from '../providers/status';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,    
    CallNumber,
    FormBuilder,
    GoogleMaps,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonanDataProvider,
    CuahangDataProvider,
    InitDataProvider,
    Configs,
    GiaviDataProvider,
    ThitDataProvider,
    StatusProvider 
  ]
})
export class AppModule {}
