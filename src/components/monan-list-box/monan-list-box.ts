import { Component, Input } from '@angular/core';
import { Monan } from '../../interfaces/monan';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'monan-list-box',
  templateUrl: 'monan-list-box.html'
})
export class MonanListBoxComponent {

  @Input() monan: Monan;
  constructor(private navCtrl: NavController) {}

  toMonanDetail(event, monan) {
    this.navCtrl.push("MonanDetailPage", {
      monan: monan
    });
  }
}
