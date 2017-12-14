webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__ = __webpack_require__(271);
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
    function HomePage(navCtrl, _cardHelper) {
        this.navCtrl = navCtrl;
        this._cardHelper = _cardHelper;
        this.repartirCartaInitial();
    }
    HomePage.prototype.repartirCartaInitial = function () {
        var sortida = ['oros', 'espasses', 'copes', 'bastos'], cartaDeSortida = this._cardHelper.pilot.slice(Math.floor(Math.random() * 48))[0];
        this._cardHelper.shuffle(sortida);
        this.jugador_1_tu = sortida[0];
        this.jugador_2_esquerra = sortida[1];
        this.jugador_3_dreta = sortida[2];
        this.jugador_4_dalt = sortida[3];
        this._cardHelper.shuffle(this._cardHelper.pilot);
        cartaDeSortida = cartaDeSortida.pal;
        console.log('cartaDeSortida: ', cartaDeSortida);
        this.sortidaInitial(cartaDeSortida);
    };
    HomePage.prototype.sortidaInitial = function (pal) {
        switch (pal) {
            case this.jugador_1_tu: {
                this.initGame(1);
                break;
            }
            case this.jugador_2_esquerra: {
                this.initGame(2);
                break;
            }
            case this.jugador_3_dreta: {
                this.initGame(3);
                break;
            }
            case this.jugador_4_dalt: {
                this.initGame(4);
                break;
            }
        }
    };
    HomePage.prototype.initGame = function (numb) {
        this.jugadorSortida = 'jugador numero ' + numb;
        console.log('NUMERO: ', numb);
        this._cardHelper.shuffle(this._cardHelper.pilot);
        //Distribueix cartes
        this.jugador_1_tu = this._cardHelper.pilot.slice(0, 12);
        this._cardHelper.ordenarCartesPerValor(this.jugador_1_tu);
        console.log('USER1 : ', this.jugador_1_tu);
        this.jugador_2_esquerra = this._cardHelper.pilot.slice(12, 24);
        this._cardHelper.ordenarCartesPerValor(this.jugador_2_esquerra);
        console.log('USER2 : ', this.jugador_2_esquerra);
        this.jugador_3_dreta = this._cardHelper.pilot.slice(24, 36);
        this._cardHelper.ordenarCartesPerValor(this.jugador_3_dreta);
        console.log('USER3 : ', this.jugador_3_dreta);
        this.jugador_4_dalt = this._cardHelper.pilot.slice(36, 48);
        this._cardHelper.ordenarCartesPerValor(this.jugador_4_dalt);
        console.log('USER4 : ', this.jugador_4_dalt);
        // if (numb == 1) repartirAndEscollir(user1, 'tu')
        // if (numb == 2) repartirAndEscollir(user2, 'esquerra')
        // if (numb == 3) repartirAndEscollir(user3, 'dreta')
        // if (numb == 4) repartirAndEscollir(user4, 'dalt')
        //  setTimeout(function(){
        //    myCards();
        //  },4000)
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\butifarra_app\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    {{jugadorSortida}}\n\n  </p>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ce9\Documents\personal\butifarra_app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\butifarra_app\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\ce9\Documents\personal\butifarra_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardHelper = (function () {
    function CardHelper() {
        //Baralla
        this.pilot = [
            { valor: 1, pal: 'oros', puntuacio: 4 }, { valor: 2, pal: 'oros', puntuacio: 0 }, { valor: 3, pal: 'oros', puntuacio: 0 },
            { valor: 4, pal: 'oros', puntuacio: 0 }, { valor: 5, pal: 'oros', puntuacio: 0 }, { valor: 6, pal: 'oros', puntuacio: 0 },
            { valor: 7, pal: 'oros', puntuacio: 0 }, { valor: 8, pal: 'oros', puntuacio: 0 }, { valor: 9, pal: 'oros', puntuacio: 5 },
            { valor: 10, pal: 'oros', puntuacio: 1 }, { valor: 11, pal: 'oros', puntuacio: 2 }, { valor: 12, pal: 'oros', puntuacio: 3 },
            { valor: 1, pal: 'copes', puntuacio: 4 }, { valor: 2, pal: 'copes', puntuacio: 0 }, { valor: 3, pal: 'copes', puntuacio: 0 },
            { valor: 4, pal: 'copes', puntuacio: 0 }, { valor: 5, pal: 'copes', puntuacio: 0 }, { valor: 6, pal: 'copes', puntuacio: 0 },
            { valor: 7, pal: 'copes', puntuacio: 0 }, { valor: 8, pal: 'copes', puntuacio: 0 }, { valor: 9, pal: 'copes', puntuacio: 5 },
            { valor: 10, pal: 'copes', puntuacio: 1 }, { valor: 11, pal: 'copes', puntuacio: 2 }, { valor: 12, pal: 'copes', puntuacio: 3 },
            { valor: 1, pal: 'bastos', puntuacio: 4 }, { valor: 2, pal: 'bastos', puntuacio: 0 }, { valor: 3, pal: 'bastos', puntuacio: 0 },
            { valor: 4, pal: 'bastos', puntuacio: 0 }, { valor: 5, pal: 'bastos', puntuacio: 0 }, { valor: 6, pal: 'bastos', puntuacio: 0 },
            { valor: 7, pal: 'bastos', puntuacio: 0 }, { valor: 8, pal: 'bastos', puntuacio: 0 }, { valor: 9, pal: 'bastos', puntuacio: 5 },
            { valor: 10, pal: 'bastos', puntuacio: 1 }, { valor: 11, pal: 'bastos', puntuacio: 2 }, { valor: 12, pal: 'bastos', puntuacio: 3 },
            { valor: 1, pal: 'espasses', puntuacio: 4 }, { valor: 2, pal: 'espasses', puntuacio: 0 }, { valor: 3, pal: 'espasses', puntuacio: 0 },
            { valor: 4, pal: 'espasses', puntuacio: 0 }, { valor: 5, pal: 'espasses', puntuacio: 0 }, { valor: 6, pal: 'espasses', puntuacio: 0 },
            { valor: 7, pal: 'espasses', puntuacio: 0 }, { valor: 8, pal: 'espasses', puntuacio: 0 }, { valor: 9, pal: 'espasses', puntuacio: 5 },
            { valor: 10, pal: 'espasses', puntuacio: 1 }, { valor: 11, pal: 'espasses', puntuacio: 2 }, { valor: 12, pal: 'espasses', puntuacio: 3 },
        ];
    }
    //Barreixa cartes
    CardHelper.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    //Ordenar cartes per pal
    CardHelper.prototype.ordenarCartesPerValor = function (user) {
        user.sort(function (a, b) {
            if (a.pal < b.pal)
                return -1;
            if (a.pal > b.pal)
                return 1;
            return 0;
        });
    };
    //Setting attributes helper
    CardHelper.prototype.setAttributes = function (el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    };
    CardHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardHelper);
    return CardHelper;
}());

//# sourceMappingURL=card.helper.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map