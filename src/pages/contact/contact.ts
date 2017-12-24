import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { window } from 'rxjs/operator/window';
import { Device } from '@ionic-native/device';
import { AppAvailability } from '@ionic-native/app-availability';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private browserTab: BrowserTab,
    private iab: InAppBrowser,
    private device: Device,
    private aa: AppAvailability) {
  }

  ionViewDidLoad() {

  }

  onCallNumber(number: string) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  onEnterUrl(url:string){
   this.browserTab.isAvailable()
    .then((isAvailable: boolean) => {
      if (isAvailable) {
        this.browserTab.openUrl(url);
      } else {
        const browser = this.iab.create(url,"_self");
        // open URL with InAppBrowser instead or SafariViewController
      }
    });   
  }
  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.iab.create(httpUrl + username, '_system');
      return;
    }
  
    this.aa.check(app).then(
      () => { // success callback
        let browser = this.iab.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.iab.create(httpUrl + username, '_system');
      }
    );
  }
  
  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }

}
