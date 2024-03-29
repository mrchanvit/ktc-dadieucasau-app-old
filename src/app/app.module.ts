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
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { AppAvailability } from '@ionic-native/app-availability';



//My provider
import { InitDataProvider } from '../providers/init-data';
import { ThitDataProvider } from '../providers/thit-data';
import { MonanDataProvider } from '../providers/monan-data';
import { CuahangDataProvider } from '../providers/cuahang-data';
import { GiaviDataProvider } from '../providers/giavi-data';
import { StatusProvider } from '../providers/status';
import { LocationProvider } from '../providers/location';
import { DailyProvider } from '../providers/daily/daily';


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
    Geolocation,
    InAppBrowser,
    Device,
    AppAvailability,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    ThitDataProvider,
    MonanDataProvider,
    CuahangDataProvider,
    InitDataProvider,
    Configs,
    GiaviDataProvider,    
    StatusProvider,
    LocationProvider,
    DailyProvider,
     
  ]
})
export class AppModule {}
