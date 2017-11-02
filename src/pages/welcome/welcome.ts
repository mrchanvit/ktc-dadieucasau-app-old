import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {MainPage} from '../../pages/main/main'

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  slides = [
    {
      title: "Ứng dụng đà điểu vui KHATOCO",
      description: "Ứng dụng cung cấp cho khách hàng một số tích năng hữu ích và tiện lợi trong việc sử dụng thịt đà điểu",
      image: "assets/img/welcome-page-1.png",
    },
    {
      title: "Công thức chế biến",
      description: "<b>Ứng dụng đà điểu vui Khatoco</b> cung cấp các công thức chế biến thịt đà điểu - cá sấu để bạn có thể thực hiện những món ăn ngon, độc đáo phục vụ gia đình và bạn bè.",
      image: "assets/img/welcome-page-4.png",
    },
    {
      title: "Mua hàng dễ dàng hơn",
      description: "Ứng dụng <b>Đà điểu vui Khatoco</b> giúp bạn dễ dàng tìm được cửa hàng cung cấp sản phẩm gần bạn nhất. Đầy đủ danh sách hàng trăm cửa hàng, đại lý trên toàn quốc.",
      image: "assets/img/welcome-page-3.png",
    },
    {
      title: "Nhận thông tin khuyến mãi tức thời",
      description: "Ứng dụng <b>Đà điểu vui Khatoco</b> giúp cho bạn không bỏ lỡ bất cứ ưu đãi hot nào của chúng tôi.",
      image: "assets/img/welcome-page-2.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuController: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  toApp():void {
    this.navCtrl.push(MainPage).then(()=>{
      this.navCtrl.setRoot(MainPage);
    });
    
  }
}
