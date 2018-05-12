webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouzhengPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouzhengPage = (function () {
    function HouzhengPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HouzhengPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HouzhengPage');
    };
    HouzhengPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-houzheng',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\houzheng\houzheng.html"*/`<!--\n  Generated template for the HouzhengPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>候诊状态信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <!-- <ion-list-header style="text-align:center;color:brown;font-size:18px">\n        候诊状态\n      </ion-list-header> -->\n      <ion-item>\n        <ion-note>\n        就诊科室\n        </ion-note>\n        <ion-note item-end>\n        皮肤科（主）\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-note>\n        就诊医生\n        </ion-note>\n        <ion-note item-end>\n        单敏洁\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-note>\n        就诊日期\n        </ion-note>\n        <ion-note item-end>\n        2018-01-08\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-note>\n        预估就诊时间\n        </ion-note>\n        <ion-note item-end>\n        15：00-15：30\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-note>\n        前面候诊人数\n        </ion-note>\n        <ion-note item-end>\n        25人\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-note>\n        备注\n        </ion-note>\n        <ion-note item-end>\n        请及时查看候诊状态\n        </ion-note>\n      </ion-item>\n        \n      </ion-list>\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\houzheng\houzheng.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HouzhengPage);
    return HouzhengPage;
}());

//# sourceMappingURL=houzheng.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_index_patient_index__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logIn = function (username, identity, phone, medicalid) {
        if (username.value.length == 0) {
            alert("请输入姓名");
        }
        else if (identity.value.length == 0) {
            alert("请输入身份证号");
        }
        else if (phone.value.length == 0) {
            alert("请输入手机号");
        }
        else if (medicalid.value.length == 0) {
            alert("请输入就诊卡号");
        }
        else {
            // let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
            //alert(userinfo);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patient_index_patient_index__["a" /* PatientIndexPage */]);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\login\login.html"*/`<ion-header>\n    <ion-navbar>\n      <ion-title >用户基本信息绑定</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-item>\n        <ion-label fixed>姓名</ion-label>\n        <ion-input type="text" placeholder="请输入姓名" #username></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>身份证号</ion-label>\n        <ion-input type="text" placeholder="请输入身份证号" #identity></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>手机号</ion-label>\n        <ion-input type="text" placeholder="请输入手机号" #phone></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>就诊卡号</ion-label>\n        <ion-input type="text" placeholder="请输入就诊卡号" #medicalid></ion-input>\n      </ion-item>\n  \n    <div style="text-align: center; margin-left: 30px; margin-right: 30px;">\n        <button ion-button block color="default" (click)="logIn(username,identity,phone,medicalid)">\n        确认绑定\n      </button>\n    </div>\n  </ion-content>`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yuyue_yuyue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__houzheng_houzheng__ = __webpack_require__(100);
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
 * Generated class for the PatientIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientIndexPage = (function () {
    function PatientIndexPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PatientIndexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientIndexPage');
    };
    PatientIndexPage.prototype.yuYue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__yuyue_yuyue__["a" /* YuyuePage */]);
    };
    PatientIndexPage.prototype.houZheng = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__houzheng_houzheng__["a" /* HouzhengPage */]);
    };
    PatientIndexPage.prototype.f = function () {
    };
    PatientIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-index',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\patient-index\patient-index.html"*/`<ion-header>\n    <ion-navbar>\n      <ion-title class="top-title">\n        患者通道\n      </ion-title> \n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="person"></ion-icon>\n        </button>\n        <button ion-button clear item-end>任燕</button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="items">\n      <div class="item">\n        <button ion-button block (click)="yuYue()">预约挂号信息的查询</button>\n      </div>\n      <div class="item">\n        <button ion-button block (click)="houZheng()">候诊信息查询</button>\n      </div>\n  </div>\n  </ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\patient-index\patient-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PatientIndexPage);
    return PatientIndexPage;
}());

//# sourceMappingURL=patient-index.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YuyuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guahao_guahao__ = __webpack_require__(99);
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
 * Generated class for the YuyuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YuyuePage = (function () {
    function YuyuePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    YuyuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YuyuePage');
    };
    YuyuePage.prototype.guaHao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__guahao_guahao__["a" /* GuahaoPage */]);
    };
    YuyuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yuyue',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\yuyue\yuyue.html"*/`<!--\n  Generated template for the YuyuePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的预约</ion-title>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-border>\n\n        <ion-list-header>\n          单敏洁\n        <button ion-button clear item-end (click)="guaHao()">查看详情</button>\n        </ion-list-header>\n        <ion-item>\n          <ion-icon name=\'planet\' item-start></ion-icon>\n          医院:\n          <ion-note>\n          中国医科大学第一附属医院\n          </ion-note>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\'body\' item-start></ion-icon>\n            科室:\n            <ion-note>\n            皮肤科（主）\n            </ion-note>\n        </ion-item>\n        \n        <ion-item>\n            <ion-icon name=\'flask\' item-start></ion-icon>\n            时间:\n            <ion-note>\n            2018-01-08 15:00-15.30\n            </ion-note>\n        </ion-item>\n      </ion-list>\n    <ion-list no-border>\n      <ion-list-header>\n          单敏洁\n          <button ion-button clear item-end (click)="guaHao()">查看详情</button>\n        </ion-list-header>\n        <ion-item>\n          <ion-icon name=\'planet\' item-start></ion-icon>\n          医院:\n          <ion-note>\n          中国医科大学第一附属医院\n          </ion-note>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\'body\' item-start></ion-icon>\n            科室:\n            <ion-note>\n            皮肤科（主）\n            </ion-note>\n        </ion-item>\n        \n        <ion-item>\n            <ion-icon name=\'flask\' item-start></ion-icon>\n            时间:\n            <ion-note>\n            2018-01-08 15:00-15.30\n            </ion-note>\n        </ion-item>\n      </ion-list>\n    <ion-list no-border>\n      <ion-list-header>\n          单敏洁\n          <button ion-button clear item-end (click)="guaHao()">查看详情</button>\n        </ion-list-header>\n        <ion-item>\n          <ion-icon name=\'planet\' item-start></ion-icon>\n          医院:\n          <ion-note>\n          中国医科大学第一附属医院\n          </ion-note>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\'body\' item-start></ion-icon>\n            科室:\n            <ion-note>\n            皮肤科（主）\n            </ion-note>\n        </ion-item>\n        \n        <ion-item>\n            <ion-icon name=\'flask\' item-start></ion-icon>\n            时间:\n            <ion-note>\n            2018-01-08 15:00-15.30\n            </ion-note>\n        </ion-item>\n      </ion-list>\n    <!-- <div class="item">\n      <ion-item>\n        <ion-label fixed>单敏捷</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <span>医院:</span>\n          <span>江西省儿童医院</span>\n        </ion-label>\n        <ion-label>\n          <span>科室:</span>\n          <span>皮肤科（主）</span>\n        </ion-label>  \n      </ion-item>\n    </div>\n    <div class="item">\n        <ion-item>\n          <ion-label fixed>单敏捷</ion-label>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>\n            <span>医院:</span>\n            <span>江西省儿童医院</span>\n          </ion-label>   \n        </ion-item>\n    </div>\n    <div class="item">\n        <ion-item>\n          <ion-label fixed>单敏捷</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <span>医院:</span>\n            <span>江西省儿童医院</span>\n          </ion-label>   \n        </ion-item>\n    </div> -->\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\yuyue\yuyue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], YuyuePage);
    return YuyuePage;
}());

//# sourceMappingURL=yuyue.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/guahao/guahao.module": [
		279,
		4
	],
	"../pages/houzheng/houzheng.module": [
		280,
		3
	],
	"../pages/login/login.module": [
		281,
		2
	],
	"../pages/patient-index/patient-index.module": [
		282,
		1
	],
	"../pages/yuyue/yuyue.module": [
		283,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\about\about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\contact\contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_patient_index_patient_index__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_yuyue_yuyue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_guahao_guahao__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_houzheng_houzheng__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_patient_index_patient_index__["a" /* PatientIndexPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_yuyue_yuyue__["a" /* YuyuePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_guahao_guahao__["a" /* GuahaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_houzheng_houzheng__["a" /* HouzhengPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/guahao/guahao.module#GuahaoPageModule', name: 'GuahaoPage', segment: 'guahao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/houzheng/houzheng.module#HouzhengPageModule', name: 'HouzhengPage', segment: 'houzheng', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-index/patient-index.module#PatientIndexPageModule', name: 'PatientIndexPage', segment: 'patient-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yuyue/yuyue.module#YuyuePageModule', name: 'YuyuePage', segment: 'yuyue', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_patient_index_patient_index__["a" /* PatientIndexPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_yuyue_yuyue__["a" /* YuyuePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_guahao_guahao__["a" /* GuahaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_houzheng_houzheng__["a" /* HouzhengPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

// import { PatientIndexPage } from '../pages/patient-index/patient-index';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tabRoots = [
            {
                root: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */],
                tabTitle: 'Home',
                tabIcon: 'home'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */],
                tabTitle: 'Contact',
                tabIcon: 'notifications'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */],
                tabTitle: 'About',
                tabIcon: 'document'
            }
        ];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\tabs\tabs.html"*/`<ion-tabs>\n    <ion-tab *ngFor="let tabRoot of tabRoots" [root]="tabRoot.root" tabTitle="{{tabRoot.tabTitle}}" tabIcon="{{tabRoot.tabIcon}}"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuahaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the GuahaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuahaoPage = (function () {
    function GuahaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuahaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuahaoPage');
    };
    GuahaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guahao',template:/*ion-inline-start:"F:\ionic-prj\WXsicker\src\pages\guahao\guahao.html"*/`<!--\n  Generated template for the GuahaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>挂号单详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<ion-list>\n\n    \n    <ion-item>\n      <ion-note>\n      就诊科室\n      </ion-note>\n      <ion-note item-end>\n      皮肤科（主）\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      就诊医生\n      </ion-note>\n      <ion-note item-end>\n      单敏洁\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      就诊日期\n      </ion-note>\n      <ion-note item-end>\n      2018-01-08\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      预估就诊时间\n      </ion-note>\n      <ion-note item-end>\n      15：00-15：30\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      就诊序号\n      </ion-note>\n      <ion-note item-end>\n      25\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      就诊地点\n      </ion-note>\n      <ion-note item-end>\n      六楼西\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      就诊人\n      </ion-note>\n      <ion-note item-end>\n      任燕\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      门诊号\n      </ion-note>\n      <ion-note item-end>\n      ZZJ20970855\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      手机号\n      </ion-note>\n      <ion-note item-end>\n      18752000106\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      挂号费用\n      </ion-note>\n      <ion-note item-end>\n      38\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note>\n      挂号日期\n      </ion-note>\n      <ion-note item-end>\n      2018-01-06 19：28\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"F:\ionic-prj\WXsicker\src\pages\guahao\guahao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GuahaoPage);
    return GuahaoPage;
}());

//# sourceMappingURL=guahao.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map