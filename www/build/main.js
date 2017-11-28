webpackJsonp([11],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonanDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_giavi_data__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MonanDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonanDetailPage = (function () {
    function MonanDetailPage(navCtrl, navParams, giaviDataController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.giaviDataController = giaviDataController;
        this.monan = navParams.get('monan');
    }
    MonanDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MonanDetailPage');
    };
    /* getGiaviDetail:Giavi(giavi:Giavi){
      giavi.color = this.
    } */
    MonanDetailPage.prototype.getGiaviIcon = function (giavi) {
        console.log(this.giaviDataController.getIcon(giavi.id));
        return this.giaviDataController.getIcon(giavi.id);
    };
    MonanDetailPage.prototype.getGiaviName = function (giavi) {
        return this.giaviDataController.getName(giavi.id);
    };
    MonanDetailPage.prototype.getGiaviColor = function (giavi) {
        return this.giaviDataController.getColor(giavi.id);
    };
    return MonanDetailPage;
}());
MonanDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-monan-detail',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-detail\monan-detail.html"*/'<!--\n\n  Generated template for the MonanDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{monan.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="monan">\n\n\n\n  <img src="{{monan.imageUrl}}">\n\n  <ion-grid padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h1 text-center class="tenmonan">{{monan.name}}</h1>\n\n        <p class="mota">{{monan.description}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n      <ion-list-header>\n\n        <h3 class="tieudecon">Nguyên liệu</h3>\n\n      </ion-list-header>\n\n      <ion-item class="buoc" text-wrap *ngFor="let thit of monan.thits | thitFullDetail">\n\n        <ion-icon item-start name="book"></ion-icon>\n\n          <h4>{{thit.id}} - {{thit.amount}} -  {{thit.name}}</h4>\n\n      </ion-item>   \n\n    </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h3 class="tieudecon">Gia vị</h3>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col class="giavi" text-center col-3 *ngFor="let giavi of monan.giavis">\n\n            <ion-icon text-center [name]="getGiaviIcon(giavi)" [style.color]="getGiaviColor(giavi)" ></ion-icon>\n\n            <p text-center class="giavi-amount" >{{giavi.amount}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h3 class="tieudecon">Chế biến</h3>\n\n    </ion-list-header>       \n\n      <ion-item class="buoc" text-wrap *ngFor="let step of monan.steps; let i = index">\n\n        <ion-chip item-start><h4><span>{{i+1}}</span></h4></ion-chip>        \n\n        <p>{{step}}</p>        \n\n      </ion-item>    \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-detail\monan-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_giavi_data__["a" /* GiaviDataProvider */]])
], MonanDetailPage);

//# sourceMappingURL=monan-detail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonanListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_monan_data__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_monan_detail_monan_detail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MonanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonanListPage = (function () {
    function MonanListPage(navCtrl, navParams, monanDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.monanDataProvider = monanDataProvider;
        this.monans = [];
    }
    MonanListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MonanListPage');
        this.monanDataProvider.getAllMonan().then(function (res) { return _this.monans = res; });
    };
    MonanListPage.prototype.toMonanDetail = function (event, monan) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_monan_detail_monan_detail__["a" /* MonanDetailPage */], {
            monan: monan
        });
    };
    return MonanListPage;
}());
MonanListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-monan-list',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-list\monan-list.html"*/'<!--\n\n  Generated template for the MonanListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Món ăn</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let monan of monans" (click)="toMonanDetail($event, monan)">\n\n    <img src="{{monan.imageUrl}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{monan.name}}\n\n        </ion-card-title>\n\n      <p>\n\n        {{monan.description}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-list\monan-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_monan_data__["a" /* MonanDataProvider */]])
], MonanListPage);

//# sourceMappingURL=monan-list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_main__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, menuController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.slides = [
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
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.toApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_main_main__["a" /* MainPage */]).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_main_main__["a" /* MainPage */]);
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>WELCOME</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-welcome">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary" (click)="toApp()">Bỏ qua</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img src="{{slide.image}}" class="slide-image" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <!-- <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n\n      <h2 class="slide-title">Ready to Play?</h2> -->\n\n      <button ion-button large clear icon-end color="primary" (click)="toApp()">\n\n        Vào ứng dụng\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonanFavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MonanFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonanFavoritePage = (function () {
    function MonanFavoritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MonanFavoritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MonanFavoritePage');
    };
    return MonanFavoritePage;
}());
MonanFavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-monan-favorite',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-favorite\monan-favorite.html"*/'<!--\n\n  Generated template for the MonanFavoritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Món ăn yêu thích</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\monan-favorite\monan-favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MonanFavoritePage);

//# sourceMappingURL=monan-favorite.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThitDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThitDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThitDetailPage = (function () {
    function ThitDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.thit = this.navParams.get("thit");
    }
    ThitDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThitDetailPage');
    };
    return ThitDetailPage;
}());
ThitDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-thit-detail',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\thit-detail\thit-detail.html"*/'<!--\n\n  Generated template for the ThitDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sản phẩm</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n      <h2 text-center color="primary" class="tenthit">{{thit.name}}</h2>\n\n      <ion-row>\n\n          \n\n          <ion-col>\n\n            <img src="./assets/img/cncl/01.jpg">\n\n          </ion-col>\n\n          <ion-col>\n\n            <img src="./assets/img/cncl/02.jpg">\n\n          </ion-col>\n\n          <ion-col>\n\n            <img src="./assets/img/cncl/03.jpg">\n\n          </ion-col>\n\n          <ion-col>\n\n            <img src="./assets/img/cncl/04.jpg">\n\n          </ion-col>\n\n          \n\n        </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        \n\n        <img src="{{thit.imageUrl}}">\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button outline block icon-left color="secondary">\n\n          <ion-icon name="information-circle"></ion-icon>\n\n          Tìm hiểu thêm\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button outline block icon-left color="primary">\n\n          <ion-icon name="basket"></ion-icon>\n\n          Tìm cửa hàng\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h3 class="tieudecon">Món ăn từ {{thit.name}}</h3>\n\n    </ion-list-header>\n\n    <button ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="./assets/img/mon1.jpg">\n\n      </ion-thumbnail>\n\n      <h3 text-wrap>Cánh đà điểu nướng muốt ớt tiêu chanh xả hành</h3>\n\n      <ion-icon name="arrow-dropright" color="secondary" item-right></ion-icon>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="./assets/img/mon2.jpg">\n\n      </ion-thumbnail>\n\n      <h3 text-wrap>Cánh đà điểu xốt cà chua</h3>\n\n      <ion-icon name="arrow-dropright" color="secondary" item-right></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\thit-detail\thit-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ThitDetailPage);

//# sourceMappingURL=thit-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThitListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_thit_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thit_detail_thit_detail__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ThitListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThitListPage = (function () {
    function ThitListPage(navCtrl, navParams, thitDataProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.thitDataProvider = thitDataProvider;
        this.formBuilder = formBuilder;
        this.thits = [];
        this.formGroupLoaiThit = this.formBuilder.group({
            formLoaiThit: ['all']
        });
    }
    ThitListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThitListPage');
        this.thits = this.thitDataProvider.getAllThits();
    };
    ThitListPage.prototype.onChangeLoaiThit = function () {
        var selectedLoaiThit = this.formGroupLoaiThit.value.formLoaiThit;
        if (selectedLoaiThit == 'all') {
            this.thits = this.thitDataProvider.getAllThits();
        }
        else {
            this.thits = this.thitDataProvider.getOnLoaiThit(selectedLoaiThit);
        }
    };
    ThitListPage.prototype.onToThitDetail = function (thit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__thit_detail_thit_detail__["a" /* ThitDetailPage */], { thit: thit });
    };
    return ThitListPage;
}());
ThitListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-thit-list',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\thit-list\thit-list.html"*/'<!--\n\n  Generated template for the ThitListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sản phẩm</ion-title>    \n\n  </ion-navbar>\n\n  <ion-toolbar color="white">    \n\n    <form [formGroup]="formGroupLoaiThit" (click)="onChangeLoaiThit()">\n\n      <ion-segment formControlName="formLoaiThit">\n\n          <ion-segment-button value="all" type="submit">\n\n            <ion-icon name="list-box" icon-left></ion-icon> Tất cả\n\n          </ion-segment-button>\n\n          <ion-segment-button value="dadieu" type="submit">\n\n            <ion-icon name="mi-dadieu-round" icon-left></ion-icon> Đà điểu\n\n          </ion-segment-button>\n\n          <ion-segment-button value="casau" type="submit">\n\n              <ion-icon name="mi-casau-round" icon-left></ion-icon> Cá sấu\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n    </form>      \n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col class="thit" text-center col-6 *ngFor="let thit of thits" (click)="onToThitDetail(thit)">\n\n        <h5 text-center class="tieude">{{thit.name}}</h5>  \n\n        <img [src]="thit.imageUrl"/>             \n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\thit-list\thit-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_thit_data__["a" /* ThitDataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], ThitListPage);

//# sourceMappingURL=thit-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KhuyenmaiListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KhuyenmaiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KhuyenmaiListPage = (function () {
    function KhuyenmaiListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KhuyenmaiListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KhuyenmaiListPage');
    };
    return KhuyenmaiListPage;
}());
KhuyenmaiListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-khuyenmai-list',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\khuyenmai-list\khuyenmai-list.html"*/'<!--\n\n  Generated template for the KhuyenmaiListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Khuyến mãi</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\khuyenmai-list\khuyenmai-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], KhuyenmaiListPage);

//# sourceMappingURL=khuyenmai-list.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuahangListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cuahang_data__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CuahangListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuahangListPage = (function () {
    function CuahangListPage(navCtrl, navParams, cuahangDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cuahangDataProvider = cuahangDataProvider;
        this.cuahangs = [];
    }
    CuahangListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CuahangListPage');
        this.cuahangDataProvider.getAllCuahang()
            .then(function (res) { _this.cuahangs = res; })
            .catch(function (error) { console.log("Error"); });
    };
    return CuahangListPage;
}());
CuahangListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cuahang-list',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-list\cuahang-list.html"*/'<!--\n\n  Generated template for the CuahangListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cửa hàng</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let cuahang of cuahangs" (click)="toCuahangDetail($event, monan)">\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{cuahang.name}}\n\n        </ion-card-title>\n\n      <p>\n\n        {{cuahang.address}}\n\n      </p>\n\n      <p>\n\n        {{cuahang.phone}}\n\n      </p>\n\n      <p text-right>\n\n        {{cuahang.distance}}m\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-list\cuahang-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cuahang_data__["a" /* CuahangDataProvider */]])
], CuahangListPage);

//# sourceMappingURL=cuahang-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuahangMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CuahangMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuahangMapPage = (function () {
    function CuahangMapPage() {
    }
    CuahangMapPage.prototype.ionViewDidLoad = function () {
    };
    return CuahangMapPage;
}());
CuahangMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cuahang-map',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-map\cuahang-map.html"*/'<!--\n\n  Generated template for the CuahangMapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Bản đồ 3</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="">\n\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-map\cuahang-map.html"*/,
    }),
    __metadata("design:paramtypes", [])
], CuahangMapPage);

//# sourceMappingURL=cuahang-map.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuahangTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuahang_list_cuahang_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuahang_map_cuahang_map__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CuahangTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuahangTabsPage = (function () {
    function CuahangTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__cuahang_list_cuahang_list__["a" /* CuahangListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cuahang_map_cuahang_map__["a" /* CuahangMapPage */];
    }
    return CuahangTabsPage;
}());
CuahangTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cuahang-tabs',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-tabs\cuahang-tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Thông tin" tabIcon="list"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Bản đồ" tabIcon="map"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\cuahang-tabs\cuahang-tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CuahangTabsPage);

//# sourceMappingURL=cuahang-tabs.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cuahang-list/cuahang-list.module": [
		293,
		10
	],
	"../pages/cuahang-map/cuahang-map.module": [
		294,
		9
	],
	"../pages/cuahang-tabs/cuahang-tabs.module": [
		295,
		8
	],
	"../pages/khuyenmai-list/khuyenmai-list.module": [
		292,
		7
	],
	"../pages/main/main.module": [
		285,
		6
	],
	"../pages/monan-detail/monan-detail.module": [
		286,
		5
	],
	"../pages/monan-favorite/monan-favorite.module": [
		289,
		4
	],
	"../pages/monan-list/monan-list.module": [
		287,
		3
	],
	"../pages/thit-detail/thit-detail.module": [
		290,
		2
	],
	"../pages/thit-list/thit-list.module": [
		291,
		1
	],
	"../pages/welcome/welcome.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-details',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\item-details\item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_monan_list_monan_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_monan_data__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_cuahang_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_monan_detail_monan_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_monan_favorite_monan_favorite__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_thit_list_thit_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cuahang_list_cuahang_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_khuyenmai_list_khuyenmai_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cuahang_map_cuahang_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cuahang_tabs_cuahang_tabs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_init_data__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_giavi_data__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_thit_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_thit_detail_thit_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_thit__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//Ionic native

//My pages


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_monan_list_monan_list__["a" /* MonanListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_monan_detail_monan_detail__["a" /* MonanDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_monan_favorite_monan_favorite__["a" /* MonanFavoritePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_thit_list_thit_list__["a" /* ThitListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cuahang_list_cuahang_list__["a" /* CuahangListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_khuyenmai_list_khuyenmai_list__["a" /* KhuyenmaiListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cuahang_map_cuahang_map__["a" /* CuahangMapPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cuahang_tabs_cuahang_tabs__["a" /* CuahangTabsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_thit_detail_thit_detail__["a" /* ThitDetailPage */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_thit__["a" /* ThitPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/monan-detail/monan-detail.module#MonanDetailPageModule', name: 'MonanDetailPage', segment: 'monan-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/monan-list/monan-list.module#MonanListPageModule', name: 'MonanListPage', segment: 'monan-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/monan-favorite/monan-favorite.module#MonanFavoritePageModule', name: 'MonanFavoritePage', segment: 'monan-favorite', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thit-detail/thit-detail.module#ThitDetailPageModule', name: 'ThitDetailPage', segment: 'thit-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thit-list/thit-list.module#ThitListPageModule', name: 'ThitListPage', segment: 'thit-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/khuyenmai-list/khuyenmai-list.module#KhuyenmaiListPageModule', name: 'KhuyenmaiListPage', segment: 'khuyenmai-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuahang-list/cuahang-list.module#CuahangListPageModule', name: 'CuahangListPage', segment: 'cuahang-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuahang-map/cuahang-map.module#CuahangMapPageModule', name: 'CuahangMapPage', segment: 'cuahang-map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuahang-tabs/cuahang-tabs.module#CuahangTabsPageModule', name: 'CuahangTabsPage', segment: 'cuahang-tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_monan_list_monan_list__["a" /* MonanListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_monan_detail_monan_detail__["a" /* MonanDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_monan_favorite_monan_favorite__["a" /* MonanFavoritePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_thit_list_thit_list__["a" /* ThitListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cuahang_list_cuahang_list__["a" /* CuahangListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_khuyenmai_list_khuyenmai_list__["a" /* KhuyenmaiListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cuahang_map_cuahang_map__["a" /* CuahangMapPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cuahang_tabs_cuahang_tabs__["a" /* CuahangTabsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_thit_detail_thit_detail__["a" /* ThitDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_26__angular_forms__["a" /* FormBuilder */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_monan_data__["a" /* MonanDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_cuahang_data__["a" /* CuahangDataProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_init_data__["a" /* InitDataProvider */],
            __WEBPACK_IMPORTED_MODULE_23__config__["a" /* Configs */],
            __WEBPACK_IMPORTED_MODULE_24__providers_giavi_data__["a" /* GiaviDataProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_thit_data__["a" /* ThitDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_monan_list_monan_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_monan_favorite_monan_favorite__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_thit_list_thit_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_khuyenmai_list_khuyenmai_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cuahang_tabs_cuahang_tabs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_init_data__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//My pages









var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, initDataProvider, storage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initDataProvider = initDataProvider;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Nóng sốt', component: __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */], icon: "flame", color: "tone01" },
            { title: 'Yêu thích', component: __WEBPACK_IMPORTED_MODULE_7__pages_monan_favorite_monan_favorite__["a" /* MonanFavoritePage */], icon: "heart", color: "tone02" },
            { title: 'Món ăn', component: __WEBPACK_IMPORTED_MODULE_5__pages_monan_list_monan_list__["a" /* MonanListPage */], icon: "restaurant", color: "primary" },
            { title: 'Sản phẩm', component: __WEBPACK_IMPORTED_MODULE_8__pages_thit_list_thit_list__["a" /* ThitListPage */], icon: "egg", color: "secondary" },
            { title: 'Cửa hàng', component: __WEBPACK_IMPORTED_MODULE_10__pages_cuahang_tabs_cuahang_tabs__["a" /* CuahangTabsPage */], icon: "basket", color: "tone15" },
            { title: 'Khuyến mãi', component: __WEBPACK_IMPORTED_MODULE_9__pages_khuyenmai_list_khuyenmai_list__["a" /* KhuyenmaiListPage */], icon: "pricetags", color: "tone16" },
            { title: 'Liên hệ', component: __WEBPACK_IMPORTED_MODULE_9__pages_khuyenmai_list_khuyenmai_list__["a" /* KhuyenmaiListPage */], icon: "chatbubbles", color: "tone17" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log("initializeApp finish");
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Khởi tạo dữ liệu lần đầu tiên tải ứng dụng
            _this.storage.getItem("isFirstLoad")
                .then(function (data) {
                //Mỗi lần mở ứng dụng
                console.log('Chay BT');
                _this.initDataProvider.initData();
            })
                .catch(function (error) {
                //Ứng dụng chạy lần đầu
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
                _this.initDataProvider.initDataFirstLoad();
                _this.storage.setItem("isFirstLoad", false);
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Thực đơn</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n        <ion-icon [name]="p.icon" [color]="p.color" item-left></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_11__providers_init_data__["a" /* InitDataProvider */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__["a" /* NativeStorage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configs; });
var Configs = (function () {
    function Configs() {
        this.SERVERURL = "";
        this.MODE = "mobile"; // web or mobile
    }
    return Configs;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_thit_data__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThitPipe = (function () {
    function ThitPipe(thitDataProvider) {
        this.thitDataProvider = thitDataProvider;
    }
    ThitPipe.prototype.transform = function (value) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.map(function (item) {
            var temp_item = _this.thitDataProvider.getThitDetail(item.id);
            temp_item.amount = item.amount;
            return temp_item;
        });
    };
    return ThitPipe;
}());
ThitPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'thitFullDetail',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_thit_data__["a" /* ThitDataProvider */]])
], ThitPipe);

//# sourceMappingURL=thit.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThitDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ThitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ThitDataProvider = (function () {
    function ThitDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.thitInitPath = "./assets/data/thits.json";
        this.thits = [];
        console.log('Hello ThitProvider Provider');
    }
    //Khởi tạo dữ liệu lần đầu tiên khởi động App
    ThitDataProvider.prototype.initData = function () {
        return this.http.get(this.thitInitPath)
            .map(function (res) {
            return res.json();
        });
    };
    //Tải danh sách thịt vào RAM mỗi khi mở áp
    ThitDataProvider.prototype.initDataOnEnter = function (key) {
        var _this = this;
        this.storage.getItem(key)
            .then(function (data) {
            _this.thits = data;
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ThitDataProvider.prototype.getAllThits = function () {
        return this.thits;
    };
    ThitDataProvider.prototype.getOnLoaiThit = function (loaithit) {
        return this.thits.filter(function (item) {
            if (item.type == loaithit)
                return item;
        });
    };
    ThitDataProvider.prototype.getThitDetail = function (id) {
        return this.thits.filter(function (item) {
            if (item.id == id)
                return item;
        })[0];
    };
    return ThitDataProvider;
}());
ThitDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], ThitDataProvider);

//# sourceMappingURL=thit-data.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_init_data__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, viewCtr, initDataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtr = viewCtr;
        this.initDataProvider = initDataProvider;
        this.toastCtrl = toastCtrl;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.ionViewDidEnter = function () {
        //this.viewCtr.showBackButton(false);
    };
    MainPage.prototype.xoaData = function () {
        var _this = this;
        this.initDataProvider.clearData().then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Đã làm sạch dữ liệu',
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Có lỗi',
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        });
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"D:\GitHub\ktc-dadieucasau-app\src\pages\main\main.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Nội dung nổi bật</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h3 class="dadieu">Đà điểu Khatoco</h3>\n\n  <ion-icon name="mi-duong"></ion-icon>\n\n  <ion-icon name="mi-muoi"></ion-icon>\n\n  <ion-icon name="mi-botngot"></ion-icon>\n\n  <ion-icon name="mi-tieu"></ion-icon>\n\n  <ion-icon name="mi-caphe"></ion-icon>\n\n  <ion-icon large name="mi-chung"></ion-icon>\n\n  <ion-icon large name="book"></ion-icon>\n\n  <ion-icon name="add"></ion-icon>\n\n  <i primary class="fa fa-heart fa-lg"></i>\n\n  <img src="assets/img/dadieuvui.png" class="logo" />\n\n  <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>\n\n  <p>\n\n    Thịt đà điểu là loại thịt có giá trị dinh dưỡng cao chứa nhiều vi lượng và khoáng chất nhưng lại ít mỡ. Đặc biệt thịt Đà điểu có hàm lượng cholesterol thấp nên không gây thừa cân béo phì và các bệnh tim mạch, rất phù hợp với xu hướng ẩm thực chung hiện nay.Với đặc tính lành và ngon, thịt đà điểu được nhiều người ưa chuộng để làm những món ăn có hương vị độc đáo, hấp dẫn và rất tốt cho sức khỏe. Bên cạnh đó, vị ngon của thịt đà điểu rất đặc trưng, mềm nhưng không bở, ngọt vị. Được coi là thức ăn lành và sạch nhờ không nhiễm các vi rút gây bệnh cúm gia cầm. Trong thời gian qua, không có chú đà điểu nào tại Việt Nam bị nhiễm cúm.\n\n  </p>\n\n  <p>\n\n    Hơn nữa, thịt đà điểu Khatoco nhiều năm liền là Hàng Việt Nam Chất lượng cao do người tiêu dùng bình chọn; Danh hiệu Sao Vàng Đất Việt do Hội Doanh Nghiệp Việt Nam trao tặng.\n\n  </p>\n\n  <h3>Đà điểu Khatoco</h3>\n\n  <p>\n\n    Thịt cá sấu màu trắng hồng, hàm lượng protein cao, năng lượng và chất béo thấp. Theo đông y thịt cá sấu có tác dụng tăng cường sinh lực, bồi bổ sức khỏe, chống dị ứng, hen suyễn … Thịt cá sấu dễ dàng chế biến thành các món ăn thơm ngon, độc đáo: Nướng, nấu măng, nhúng mẻ, om chuối …\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="xoaData()">Xóa data</button>\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\ktc-dadieucasau-app\src\pages\main\main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_init_data__["a" /* InitDataProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cuahang_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__giavi_data__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__monan_data__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__thit_data__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InitDataProvider = (function () {
    function InitDataProvider(http, cuahangDataProvider, giaviDataProvider, monanDataProvider, thitDataProvider, storage) {
        this.http = http;
        this.cuahangDataProvider = cuahangDataProvider;
        this.giaviDataProvider = giaviDataProvider;
        this.monanDataProvider = monanDataProvider;
        this.thitDataProvider = thitDataProvider;
        this.storage = storage;
        console.log('Hello InitDataProvider Provider');
    }
    //Khởi tạo data
    InitDataProvider.prototype.initDataFirstLoad = function () {
        var _this = this;
        console.log("Khởi tạo dữ liệu ứng dụng lần đầu");
        //Chỉ chạy khi mới cài đặt ứng dụng lần đầu tiên
        //++++++++++++++++++++++++++++++++++++++++++++++
        this.storage.setItem("isFirstLoad", true);
        // Chưa khởi tạo dữ liệu, tiến hành khởi tạo
        // Cửa hàng
        this.cuahangDataProvider.initData().subscribe(function (data) {
            console.log('Load dữ liệu cửa hàng');
            _this.storage.setItem("cuahangs", data);
        }, function (error) {
            console.log(error);
        });
        //Gia vị
        this.giaviDataProvider.initData().subscribe(function (data) {
            console.log('Load dữ liệu gia vi');
            _this.storage.setItem("giavis", data).then(function () {
                _this.giaviDataProvider.initDataOnEnter("giavis");
            });
        }, function (error) {
            console.log(error);
        });
        //Món ăn
        this.monanDataProvider.initData().subscribe(function (data) {
            console.log('Load dữ liệu món ăn');
            _this.storage.setItem("monans", data);
        }, function (error) {
            console.log(error);
        });
        //Thịt
        this.thitDataProvider.initData().subscribe(function (data) {
            console.log('Load dữ liệu thịt');
            _this.storage.setItem("thits", data).then(function () {
                _this.thitDataProvider.initDataOnEnter("thits");
            });
        }, function (error) {
            console.log(error);
        });
        //+++++++++++++++++++++++++++++++++++++++++++++
    };
    InitDataProvider.prototype.initData = function () {
        //Lưu danh sách gia vị vào ram
        this.giaviDataProvider.initDataOnEnter("giavis");
        this.thitDataProvider.initDataOnEnter("thits");
    };
    InitDataProvider.prototype.clearData = function () {
        return this.storage.clear();
    };
    return InitDataProvider;
}());
InitDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__cuahang_data__["a" /* CuahangDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__giavi_data__["a" /* GiaviDataProvider */],
        __WEBPACK_IMPORTED_MODULE_6__monan_data__["a" /* MonanDataProvider */],
        __WEBPACK_IMPORTED_MODULE_7__thit_data__["a" /* ThitDataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], InitDataProvider);

//# sourceMappingURL=init-data.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuahangDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CuahangDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CuahangDataProvider = (function () {
    function CuahangDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        //private dataServerUrl = "http://59b3c01195ddb9001143e96a.mockapi.io/"
        //Đường dẫn JSON khởi tạo dữ liệu
        this.cuahangInitPath = "./assets/data/cuahangs.json";
        console.log('Hello CuahangDataProvider Provider');
    }
    //Khởi tạo dữ liệu lần đầu tiên khởi động App
    CuahangDataProvider.prototype.initData = function () {
        return this.http.get(this.cuahangInitPath)
            .map(function (res) {
            return res.json();
        });
    };
    /* getAllCuahang():Promise<Cuahang[]> {
      return this.http.get(`${this.dataServerUrl}/cuahang`)
      .toPromise()
      .then(res=>res.json() as Cuahang[])
      .catch(this.handleError)
    } */
    //Lấy giữ liệu cửa hàng từ storage
    CuahangDataProvider.prototype.getAllCuahang = function () {
        return this.storage.getItem("cuahangs");
    };
    return CuahangDataProvider;
}());
CuahangDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
], CuahangDataProvider);

//# sourceMappingURL=cuahang-data.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiaviDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GiaviDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GiaviDataProvider = (function () {
    function GiaviDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.giaviInitPath = "./assets/data/giavis.json";
        this.giavis = [];
        console.log('Hello GiaviDataProvider Provider');
    }
    //Khởi tạo dữ liệu lần đầu tiên khởi động App
    GiaviDataProvider.prototype.initData = function () {
        return this.http.get(this.giaviInitPath)
            .map(function (res) {
            return res.json();
        });
    };
    //Tải danh sách gia vị vào RAM mỗi khi mở áp
    GiaviDataProvider.prototype.initDataOnEnter = function (key) {
        var _this = this;
        this.storage.getItem(key)
            .then(function (data) {
            _this.giavis = data;
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    GiaviDataProvider.prototype.getIcon = function (id) {
        if (this.giavis.length > 0) {
            return this.giavis.find(function (item) { return item.id == id; }).icon;
        }
    };
    GiaviDataProvider.prototype.getColor = function (id) {
        if (this.giavis.length > 0) {
            console.log(this.giavis.find(function (item) { return item.id == id; }).color);
            return this.giavis.find(function (item) { return item.id == id; }).color;
        }
    };
    GiaviDataProvider.prototype.getName = function (id) {
        if (this.giavis.length > 0) {
            return this.giavis.find(function (item) { return item.id == id; }).name;
        }
    };
    GiaviDataProvider.prototype.setDetail = function (giavi) {
        if (this.giavis.length > 0) {
            var giaviSaved = this.giavis.find(function (item) { return item.id == giavi.id; });
            giavi.color = giaviSaved.color;
            giavi.icon = giaviSaved.icon;
            giavi.name = giaviSaved.name;
        }
    };
    return GiaviDataProvider;
}());
GiaviDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], GiaviDataProvider);

//# sourceMappingURL=giavi-data.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonanDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonanDataProvider = (function () {
    function MonanDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.monanInitPath = "./assets/data/monans.json";
        console.log('Hello MonanDataProvider Provider');
    }
    //Khởi tạo dữ liệu lần đầu tiên khởi động App
    MonanDataProvider.prototype.initData = function () {
        return this.http.get(this.monanInitPath)
            .map(function (res) {
            return res.json();
        });
    };
    MonanDataProvider.prototype.getAllMonan = function () {
        return this.storage.getItem("monans");
    };
    return MonanDataProvider;
}());
MonanDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
], MonanDataProvider);

//# sourceMappingURL=monan-data.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map