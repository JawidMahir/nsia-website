(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about-us/about-us.module": [
		"./src/app/about-us/about-us.module.ts",
		"default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1",
		"common",
		"about-us-about-us-module"
	],
	"./access-to-info/access.module": [
		"./src/app/access-to-info/access.module.ts",
		"access-to-info-access-module"
	],
	"./library/library.module": [
		"./src/app/library/library.module.ts",
		"default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1",
		"common",
		"library-library-module"
	],
	"./media-room/media.module": [
		"./src/app/media-room/media.module.ts",
		"default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1",
		"common",
		"media-room-media-module"
	],
	"./opportunities/opportunities.module": [
		"./src/app/opportunities/opportunities.module.ts",
		"default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1",
		"common",
		"opportunities-opportunities-module"
	],
	"./services/services.module": [
		"./src/app/services/services.module.ts",
		"common",
		"services-services-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-lang/choose-lang.component */ "./src/app/choose-lang/choose-lang.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var routes = [
    {
        path: 'choose-lang',
        component: _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_6__["ChooseLangComponent"]
    }, {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
    }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    }, {
        path: 'about-us',
        loadChildren: './about-us/about-us.module#AboutUsModule'
    }, {
        path: 'services',
        loadChildren: './services/services.module#ServicesModule'
    }, {
        path: 'library',
        loadChildren: './library/library.module#LibraryModule'
    }, {
        path: 'access-info',
        loadChildren: './access-to-info/access.module#AccessModule'
    }, {
        path: 'media-room',
        loadChildren: './media-room/media.module#MediaModule'
    }, {
        path: 'opportunities',
        loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<ngx-loading-bar [color]=\"282560\"></ngx-loading-bar>\r\n<div *ngIf=\"!chooseLang\">\r\n    <app-navbar></app-navbar>\r\n</div>\r\n\r\n<div class=\"custom-container\"  *ngIf=\"!chooseLang\">\r\n  <div id=\"scroll\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"TOP\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </div>\r\n\r\n  <nav class=\"navigation\">\r\n    <div class=\"full-path\" *ngFor=\"let pt of currentPath; let i = index\">\r\n      <small class=\"fullpath\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\">{{ pt }}</small>\r\n      <i class=\"fas fa-chevron-right\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\"></i>\r\n      <small class=\"currentpath\" *ngIf=\"i == currentPath.length - 1\">{{ pt }}</small>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<main [@fadeInOut]=\"getPage(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n<!-- <router-outlet [@fadeInOut]='true'></router-outlet> -->\r\n<div  *ngIf=\"!chooseLang\">\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, dataService, translateService) {
        this.router = router;
        this.dataService = dataService;
        this.translateService = translateService;
        this.title = 'NSIA';
        this.chooseLang = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var that = this;
        //console.log('App Component');
        // tslint:disable-next-line: space-before-function-paren
        jquery__WEBPACK_IMPORTED_MODULE_4__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__(this).scrollTop() > 100) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').fadeIn();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').fadeOut();
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                that.createNavigationBreadPath();
                // console.log('Navigation ended: ', location.pathname);
                if (location.pathname === '/choose-lang') {
                    that.chooseLang = true;
                }
                else {
                    that.chooseLang = false;
                }
            }
        });
        if (location.pathname === '/') {
            this.router.navigate(['choose-lang']);
        }
        else {
            this.checkDefaultLanguage();
        }
        // this.checkDefaultLanguage();
    };
    AppComponent.prototype.checkDefaultLanguage = function () {
        //console.log('detect language called');
        var lang = localStorage.getItem('lang');
        if (lang) {
            this.dataService.language = lang;
            this.translateService.use(lang);
            if (lang !== 'en') {
                jquery__WEBPACK_IMPORTED_MODULE_4__('body').toggleClass('rtl');
            }
            this.chooseLang = false;
            this.router.navigate([this.dataService.redirectPath]);
        }
        else {
            this.dataService.redirectPath = location.pathname;
            this.chooseLang = true;
            this.router.navigate(['choose-lang']);
        }
    };
    AppComponent.prototype.createNavigationBreadPath = function () {
        this.currentPath = this.router.url.toString().split('/');
        if (this.currentPath.includes('home')) {
            this.currentPath = [];
        }
    };
    AppComponent.prototype.getPage = function (outlet) {
        // tslint:disable-next-line: no-string-literal
        return outlet.activatedRouteData.state;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void <=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/fesm5/ngx-loading-bar-http-client.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./choose-lang/choose-lang.component */ "./src/app/choose-lang/choose-lang.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");










// Import shared Module here













function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"],
                _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_18__["ChooseLangComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_7__["LoadingBarHttpClientModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__["LoadingBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/choose-lang/choose-lang.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choose-lang/choose-lang.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    background-image: url('lang.jpg');\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-size:100% 100%;\r\n\r\n}\r\n\r\n.content {\r\n    width: 55vw;\r\n    height: 50vh;\r\n    background-color: rgba(255, 255, 255, 0.61);\r\n\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n\r\n    /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n    max-width:100%;\r\n    max-height:100%;\r\n    overflow:auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 3%\r\n}\r\n\r\n.nsia-log {\r\n    width: 46%;\r\n    margin: 20px auto;\r\n}\r\n\r\n.nsia-log img{\r\n    width: 100%;\r\n}\r\n\r\n.lang-buttons {\r\n    flex: auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto;\r\n    display: table;\r\n}\r\n\r\n/* First Primary: #01a79b green */\r\n\r\n/* Second Primary: #282560 blue */\r\n\r\n.lang-buttons button {\r\n    margin: 0px 12px;\r\n    width: 112px;\r\n    background-color: transparent;\r\n    border: 1.5px solid #282560;\r\n    color: #282560;\r\n    padding: 10px;\r\n}\r\n\r\n.lang-buttons button:hover {\r\n    background-color: #282560;\r\n    color: #fff;\r\n\r\n}\r\n\r\n.cp-right {\r\n    position: absolute;\r\n    bottom: 40px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    color: #282560;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWxhbmcvY2hvb3NlLWxhbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFxRDtJQUNyRCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJDQUEyQzs7SUFFM0MsaUJBQWlCLEVBQUUsc0JBQXNCO0lBQ3pDLE1BQU0sRUFBRSxPQUFPO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixXQUFXOztJQUVYLDRGQUE0RjtJQUM1RixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtBQUNKOztBQUdBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDViwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQSxpQ0FBaUM7O0FBQ2pDLGlDQUFpQzs7QUFHakM7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixjQUFjO0lBQ2QsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1sYW5nL2Nob29zZS1sYW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZy5qcGcnKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogNTV2dztcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XHJcblxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7IC8qaXQgY2FuIGJlIGZpeGVkIHRvbyovXHJcbiAgICBsZWZ0OjA7IHJpZ2h0OjA7XHJcbiAgICB0b3A6MDsgYm90dG9tOjA7XHJcbiAgICBtYXJnaW46YXV0bztcclxuXHJcbiAgICAvKnRoaXMgdG8gc29sdmUgXCJ0aGUgY29udGVudCB3aWxsIG5vdCBiZSBjdXQgd2hlbiB0aGUgd2luZG93IGlzIHNtYWxsZXIgdGhhbiB0aGUgY29udGVudFwiOiAqL1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMyVcclxufVxyXG5cclxuXHJcbi5uc2lhLWxvZyB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5uc2lhLWxvZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxhbmctYnV0dG9ucyB7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn0gICBcclxuXHJcbi8qIEZpcnN0IFByaW1hcnk6ICMwMWE3OWIgZ3JlZW4gKi9cclxuLyogU2Vjb25kIFByaW1hcnk6ICMyODI1NjAgYmx1ZSAqL1xyXG5cclxuXHJcbi5sYW5nLWJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICB3aWR0aDogMTEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzI4MjU2MDtcclxuICAgIGNvbG9yOiAjMjgyNTYwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmxhbmctYnV0dG9ucyBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxufVxyXG5cclxuLmNwLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6ICMyODI1NjA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/choose-lang/choose-lang.component.html":
/*!********************************************************!*\
  !*** ./src/app/choose-lang/choose-lang.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"content\">\r\n    <div class=\"nsia-log\">\r\n      <img src=\"../../assets/logo/amended-logo final final-01.svg\" alt=\"Logo\">\r\n    </div>\r\n    <div class=\"lang-buttons\">\r\n      <button (click)=\"detectLanguage('en')\">English</button>\r\n      <button (click)=\"detectLanguage('fa')\">دري</button>\r\n      <button (click)=\"detectLanguage('ps')\">پښتو</button>\r\n    </div>\r\n   \r\n  </div>\r\n  <div class=\"cp-right\">\r\n      <span>© {{ year }}, All rights reserved, National Statistics and Information Authority</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/choose-lang/choose-lang.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choose-lang/choose-lang.component.ts ***!
  \******************************************************/
/*! exports provided: ChooseLangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLangComponent", function() { return ChooseLangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var ChooseLangComponent = /** @class */ (function () {
    function ChooseLangComponent(dataService, router, trs) {
        this.dataService = dataService;
        this.router = router;
        this.trs = trs;
    }
    ChooseLangComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
        localStorage.removeItem('lang');
    };
    ChooseLangComponent.prototype.detectLanguage = function (lang) {
        this.dataService.language = lang;
        if (lang === 'en') {
            this.dataService.sliderDirection = 'ltr_slider';
        }
        else {
            this.dataService.sliderDirection = 'rtl_slider';
        }
        this.trs.use(lang);
        localStorage.setItem('lang', lang);
        this.router.navigate([this.dataService.redirectPath]);
    };
    ChooseLangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-lang',
            template: __webpack_require__(/*! ./choose-lang.component.html */ "./src/app/choose-lang/choose-lang.component.html"),
            styles: [__webpack_require__(/*! ./choose-lang.component.css */ "./src/app/choose-lang/choose-lang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ChooseLangComponent);
    return ChooseLangComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n    font-weight: bold !important;\r\n}\r\ninput,textarea{\r\n    border: none;\r\n    border-bottom: 1px solid #282560;\r\n    display: block;\r\n    background: transparent;\r\n    width: 100%;\r\n    padding: 4px;\r\n    margin-bottom: 2%;\r\n}\r\n.subscribe-btn {\r\n    padding: 6px 16px;\r\n    background-color: #282560;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n.subscribe-btn:disabled {\r\n    cursor: not-allowed;\r\n    background-color: #636183;\r\n    color: #fff;\r\n}\r\nstrong{\r\n    font-size: 17px;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\ntextarea.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n.margin-top{\r\n    margin-top:30px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQsdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjU2MDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5zdWJzY3JpYmUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWJ0bjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjE4MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnN0cm9uZ3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbi5tYXJnaW4tdG9we1xyXG4gICAgbWFyZ2luLXRvcDozMHB4OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-8 col-lg-8 col-xs-11\">\r\n          <h4>{{ 'label.contact-us' | translate }}</h4>\r\n          <div class=\"contact-us\">\r\n            <table class=\"table text-blue\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <span><strong>{{ 'label.cs-number' | translate }}</strong></span>\r\n                  </td>\r\n                  <td style=\"direction: ltr !important\">\r\n                    <span> +93 20 2211 708</span>\r\n                  </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>Working Hours:</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>Saturday - Wednesday from 8:00 a.m. to 5:00 p.m. Kabul Time</span>\r\n                  </td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>{{ 'label.email' | translate }}</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>info@nsia.gov.af</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>{{ 'label.address' | translate }}</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>{{ 'label.nsia-address' | translate }}</span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\"><br>\r\n                <h4>{{'label.feedback-form' | translate}}</h4><br>\r\n                <input type=\"text\" id=\"name\" formControlName='name' placeholder=\"{{ 'input.name' | translate }}\"\r\n                  autofocus>\r\n                <span *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\" class=\"help-block\">{{\r\n                  'error.name' | translate }}</span><br>\r\n\r\n                <input type=\"email\" id=\"email\" formControlName='email' placeholder=\"{{ 'input.email' | translate }}\">\r\n                <span *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\" class=\"help-block\">{{\r\n                  'error.email' | translate }}</span><br>\r\n\r\n                <input type=\"text\" id=\"phone\" formControlName='phone' placeholder=\"{{ 'input.phone' | translate }}\">\r\n                <br>\r\n\r\n                <input type=\"text\" id=\"organization\" formControlName='organization'\r\n                  placeholder=\"{{ 'input.organization' | translate }}\">\r\n\r\n              </div>\r\n              <div class=\"col-md-6\"><br><br><br><br>\r\n                <textarea id=\"message\" formControlName='message' placeholder=\"{{ 'input.message' | translate }}\"\r\n                  rows=\"6\">\r\n                        </textarea>\r\n                <span *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\"\r\n                  class=\"help-block\">{{\r\n                  'error.message' | translate }}</span><br>\r\n\r\n                <button class=\"subscribe-btn float-right\" [disabled]=\"contactForm.invalid\">\r\n                  {{ 'input.submit' | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-11\">\r\n          <app-news></app-news>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(dataService) {
        this.dataService = dataService;
        this.newsBriefs = {
            news: ''
        };
        this.newsReadMore = '/media-room/news-updates';
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.addContactData(this.contactForm.value).subscribe(function (contactData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Submit', 'You send successfully your feedback', 'success');
            // console.log('data: ', contactData);
            _this.contactForm.reset();
        }, function (error) {
            // tslint:disable-next-line: no-string-literal
            // console.log('Error: ', error['status']);
            // tslint:disable-next-line: no-string-literal
            if (error['status'] === 400) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Opps', 'Form data does not completed!', 'warning');
            }
            // tslint:disable-next-line: no-string-literal
            if (error['status'] === 500) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Opps', 'Cannot make request at this moment', 'warning');
            }
        });
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // api = 'http://172.16.222.114/nsia/wp-json/wp/v2/';
        this.nodeapi = 'http://172.16.222.81:6001/api/';
        // For accessing the real server
        this.api = 'https://nsia.gov.af:8080/index.php/wp-json/wp/v2/';
        // nodeapi = 'http://www.nsia.gov.af:6001/api/';
        this.language = 'en';
        this.serviceType = 'stats';
        this.redirectPath = 'home';
        /**
         * The following code establishes a connection between navbar component and service-home component
         * i.e the changes in navbar cmp are detected in service home cmp
         */
        this.callToServiceMethodSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.serviceCmpMethodCalled$ = this.callToServiceMethodSource.asObservable();
    }
    DataService.prototype.callServiceCmpMethod = function () {
        this.callToServiceMethodSource.next();
    };
    DataService.prototype.getNsiaText = function () {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': 'nsia_services',
                lang: this.language,
                fields: 'content.rendered'
            }
        });
    };
    DataService.prototype.getPosts = function () {
        return this.http.get(this.api, {
            params: {
                lang: this.language,
                per_page: '1'
            }
        });
    };
    DataService.prototype.getInitialStats = function (customP, catName) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.language,
                per_page: '4',
                orderby: 'date',
                fields: customP.join(',')
            }
        });
    };
    DataService.prototype.getCarouselSlides = function (customP, catName) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.language,
                fields: customP.join(','),
            }
        });
    };
    DataService.prototype.getBusinessData = function (customP) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': 'business',
                lang: this.language,
                fields: customP.join(','),
            }
        });
    };
    DataService.prototype.getCardsData = function (customP, catName, perPage) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.language,
                per_page: perPage,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    DataService.prototype.registerUserEmail = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'users/register', user, httpOptions);
    };
    DataService.prototype.addContactData = function (contactData) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.nodeapi + 'contacts/add', contactData, httpOptions);
    };
    DataService.prototype.getPostDetails = function (id, customP) {
        return this.http.get(this.api + 'posts', {
            params: {
                lang: this.language,
                'filter[p]': id,
                fields: customP.join(',')
            }
        });
    };
    /**
     * The following two methods are related to the promotional materials
     */
    DataService.prototype.getMediaData = function (customP, catName) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.language,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    DataService.prototype.getNewsData = function (customP, catName, perPage) {
        return this.http.get(this.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.language,
                per_page: perPage,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    DataService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel .carousel-item img {\r\n  height: 80vh;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.c-gradient {\r\n  position: absolute;\r\n  height: 100%;\r\n  background-image: linear-gradient(180deg, #fffffffd 0%, rgba(255, 255, 255, 0) 13%);\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n\r\n.service-card .nsia-main {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n  .carousel .carousel-item img {\r\n    height: 50vh;\r\n  }\r\n\r\n  .service-wrapper {\r\n    background-color: red;\r\n    width: 100vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n  .customers-wrapper {\r\n    margin: auto;\r\n  }\r\n\r\n}\r\n\r\n.carousel a {\r\n  z-index: 15;\r\n}\r\n\r\n.carousel-indicators li {\r\n  background-clip: unset !important;\r\n  border-top: none !important;\r\n  border-bottom: none !important;\r\n  border-radius: 30px !important;\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.caption {\r\n  color: #fff;\r\n  height: 80vh;\r\n  padding: 7% 0px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 8%;\r\n}\r\n\r\n/* .caption .custom-container {\r\n  padding: 16px;\r\n} */\r\n\r\n.caption .service-details {\r\n  width: 45%;\r\n}\r\n\r\n.caption .service-details h1 {\r\n  line-height: 1.4;\r\n  text-align: initial;\r\n}\r\n\r\n.caption .service-details h5 {\r\n  margin: 2rem 0px;\r\n  line-height: 1.5;\r\n\r\n}\r\n\r\n.caption h1 {\r\n  word-break: break-word;\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.section-wrapper {\r\n  margin-top: 4rem;\r\n}\r\n\r\n.stat-card {\r\n  max-height: 200px;\r\n  margin-bottom: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.stat-card img,\r\n.billboard img {\r\n  width: 100%;\r\n  /* height: 150px; */\r\n  position: static;\r\n}\r\n\r\n.stat-card .stats,\r\n.billboard .billboard-contents {\r\n  padding: 18px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.service-card {\r\n  color: #282560;\r\n  text-align: justify;\r\n}\r\n\r\n.service-card .service-title h1 {\r\n  text-transform: uppercase;\r\n  margin: 0px;\r\n  font-weight: 600;\r\n  text-align: initial;\r\n}\r\n\r\n.service-card .service-title {\r\n  padding-right: 20%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-bottom: 1px solid #fff;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.service-card .service-desc {\r\n  padding-top: 2rem;\r\n}\r\n\r\n/* .nsia-services [class^='col'] {\r\n  margin-bottom: 8%;\r\n\r\n} */\r\n\r\n.nsia-services .sr-item {\r\n  margin-top: 5%;\r\n  margin-bottom: 10%;\r\n  padding: 24px;\r\n  border: 4px solid #282560;\r\n  background-repeat: no-repeat;\r\n  height: 86%;\r\n}\r\n\r\n.nsia-services .sr-item .service-icon {\r\n  padding: 0px 5%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-top: -60px;\r\n  background-color: #fff;\r\n\r\n}\r\n\r\n.nsia-services .sr-item .service-icon img {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.nsia-services .sr-brief {\r\n  margin-top: 5%;\r\n}\r\n\r\n.nsia-services .sr-brief h5 {\r\n  font-weight: 600;\r\n  margin-bottom: 26px;\r\n  text-align: initial;\r\n}\r\n\r\n.latest-section-lg {\r\n  display: block;\r\n}\r\n\r\n.latest-section-res {\r\n  display: none;\r\n}\r\n\r\n.latest-section-res .section-title {\r\n  display: flex;\r\n  border-bottom: 1px solid #282560;\r\n  margin: 1rem 0px;\r\n}\r\n\r\n.latest-section-res .section-title .info-section {\r\n  flex: auto;\r\n  color: #d2d0d0;\r\n  /* margin-bottom: 0px !important; */\r\n}\r\n\r\n.latest-section-res .section-title i {\r\n  margin: 12px;\r\n  margin-bottom: 8px;\r\n  font-size: 1.2rem;\r\n\r\n}\r\n\r\n.latest-section-res .section-title.active-section {\r\n  color: #01a79b;\r\n  border-bottom: 2px solid #01a79b !important;\r\n}\r\n\r\n.latest-section-res .section-title.active-section .info-section {\r\n  color: #282560;\r\n}\r\n\r\n.latest-section .navigator-line {\r\n  border-bottom: 2px solid #282560;\r\n  margin-bottom: 10px;\r\n  margin-top: -3px;\r\n}\r\n\r\n.latest-section .news-category {\r\n  height: 100%;\r\n  color: #9797a7;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n}\r\n\r\n.latest-section .news-category.active-news {\r\n  border-bottom: 5px solid #01a79b;\r\n  color: #282560;\r\n}\r\n\r\n.latest-section .news-category.active-news h4 {\r\n  font-weight: 600;\r\n}\r\n\r\n.latest-section .news-item-wrapper {\r\n  margin-bottom: 10px;\r\n  height: 250px;\r\n}\r\n\r\n.latest-section .news-item {\r\n  width: 100%;\r\n  height: 100%;\r\n  /* max-height: 250px; */\r\n  margin-bottom: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.latest-section .news-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: -webkit-fit-content;\r\n  max-height: -moz-fit-content;\r\n  max-height: fit-content;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.latest-section .news-item .contents {\r\n  position: absolute;\r\n  height: 50%;\r\n  color: #fff;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0px 15px;\r\n  padding: 16px;\r\n  width: calc(100% - 30px);\r\n  overflow: hidden;\r\n}\r\n\r\n.latest-section .news-date {\r\n  top: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  margin-right: 15px;\r\n  background-color: #01a79b;\r\n  color: #fff;\r\n  padding: 1% 4%;\r\n  text-align: center;\r\n}\r\n\r\n.latest-section .news-date h4 {\r\n  margin: 0px;\r\n  font-weight: 600;\r\n}\r\n\r\n.latest-section .news-date p {\r\n  margin: 0px;\r\n  margin-top: -5px;\r\n}\r\n\r\n.latest-section button {\r\n  margin-top: 8px;\r\n}\r\n\r\n.news-read-more:disabled,\r\n#events-read-more:disabled {\r\n  cursor: not-allowed;\r\n  color: #667a79;\r\n  border-color: #667a79;\r\n}\r\n\r\n.bussiness-card,\r\n.latest-section-card {\r\n  box-shadow: none !important;\r\n  background-color: transparent;\r\n}\r\n\r\n.bussiness-carousel {\r\n  width: 100%;\r\n}\r\n\r\n.bussiness-carousel .bs-item {\r\n  display: inline-block;\r\n  width: 33%;\r\n}\r\n\r\n.bussiness .title {\r\n  display: flex;\r\n}\r\n\r\n.bussiness .title h4 {\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n  flex: auto;\r\n}\r\n\r\n.bussiness .title .t-icon {\r\n  flex: auto;\r\n}\r\n\r\n.bussiness .title .t-icon i {\r\n  margin-left: 2px;\r\n}\r\n\r\n.bussiness .title .t-icon>div {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  float: right;\r\n\r\n}\r\n\r\n.bussiness .title:nth-child(odd) {\r\n  border-bottom: 1px solid #01a79b;\r\n}\r\n\r\n.bussiness .title.donor-title {\r\n  border-bottom: 1px solid #282560;\r\n}\r\n\r\n.bussiness .b-category {\r\n  display: flex;\r\n  margin-top: 4%;\r\n}\r\n\r\n.bussiness .bs-item {\r\n  flex: auto;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.bussiness .bs-item img {\r\n  height: 75px;\r\n  width: 75px;\r\n  cursor: pointer;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.bussiness .bs-item h6 {\r\n  cursor: pointer;\r\n}\r\n\r\n.portals {\r\n  width: 100%;\r\n}\r\n\r\n.portals-body {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n.portal {\r\n  margin: 0px 12px;\r\n}\r\n\r\n.billboard {\r\n  direction: ltr !important;\r\n  background: linear-gradient(to right, rgb(39, 35, 97), rgba(39, 35, 97, 0) 100%);\r\n}\r\n\r\n.billboard img {\r\n  height: 400px;\r\n}\r\n\r\n.billboard .billboard-contents {\r\n  padding: 7rem;\r\n  display: flex;\r\n}\r\n\r\n.billboard-contents .event-date {\r\n  display: block;\r\n  text-align: center;\r\n  max-width: 170px;\r\n\r\n}\r\n\r\n.billboard-contents .event-date .b-date {\r\n  background-color: #3932b9;\r\n  color: #fff;\r\n  padding: 24px;\r\n\r\n}\r\n\r\n.billboard-contents .event-date .b-date h1 {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.billboard-contents .event-date .b-date p {\r\n  margin-top: -10px;\r\n}\r\n\r\n.billboard-contents .event-date .b-register {\r\n  background-color: #fff;\r\n  color: #282560;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.billboard-contents .event-desc {\r\n  margin-left: 25px;\r\n  padding: 15px;\r\n  text-align: justify;\r\n}\r\n\r\n.billboard-contents .event-desc p {\r\n  max-width: 400px;\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUZBQW1GO0VBQ25GLFdBQVc7RUFDWCxNQUFNO0FBQ1I7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBS0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztBQUVGOztBQUdBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7O0FBRWI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnRkFBZ0Y7QUFDbEY7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYy1ncmFkaWVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmZmQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTMlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcblxyXG4uc2VydmljZS1jYXJkIC5uc2lhLW1haW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gaW1nIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAuY3VzdG9tZXJzLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwgYSB7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHBhZGRpbmc6IDclIDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiA4JTtcclxufVxyXG5cclxuLyogLmNhcHRpb24gLmN1c3RvbS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn0gKi9cclxuXHJcbi5jYXB0aW9uIC5zZXJ2aWNlLWRldGFpbHMge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5jYXB0aW9uIC5zZXJ2aWNlLWRldGFpbHMgaDEge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxufVxyXG5cclxuLmNhcHRpb24gLnNlcnZpY2UtZGV0YWlscyBoNSB7XHJcbiAgbWFyZ2luOiAycmVtIDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxufVxyXG5cclxuLmNhcHRpb24gaDEge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNlY3Rpb24td3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQgaW1nLFxyXG4uYmlsbGJvYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiAxNTBweDsgKi9cclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIC5zdGF0cyxcclxuLmJpbGxib2FyZCAuYmlsbGJvYXJkLWNvbnRlbnRzIHtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcblxyXG5cclxuLnNlcnZpY2UtY2FyZCB7XHJcbiAgY29sb3I6ICMyODI1NjA7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtdGl0bGUgaDEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG59XHJcblxyXG4uc2VydmljZS1jYXJkIC5zZXJ2aWNlLXRpdGxlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtZGVzYyB7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuXHJcbi8qIC5uc2lhLXNlcnZpY2VzIFtjbGFzc149J2NvbCddIHtcclxuICBtYXJnaW4tYm90dG9tOiA4JTtcclxuXHJcbn0gKi9cclxuXHJcbi5uc2lhLXNlcnZpY2VzIC5zci1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjMjgyNTYwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA4NiU7XHJcbn1cclxuXHJcbi5uc2lhLXNlcnZpY2VzIC5zci1pdGVtIC5zZXJ2aWNlLWljb24ge1xyXG4gIHBhZGRpbmc6IDBweCA1JTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbn1cclxuXHJcbi5uc2lhLXNlcnZpY2VzIC5zci1pdGVtIC5zZXJ2aWNlLWljb24gaW1nIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5uc2lhLXNlcnZpY2VzIC5zci1icmllZiB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5uc2lhLXNlcnZpY2VzIC5zci1icmllZiBoNSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbn1cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbi1sZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbi1yZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ubGF0ZXN0LXNlY3Rpb24tcmVzIC5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyNTYwO1xyXG4gIG1hcmdpbjogMXJlbSAwcHg7XHJcbn1cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbi1yZXMgLnNlY3Rpb24tdGl0bGUgLmluZm8tc2VjdGlvbiB7XHJcbiAgZmxleDogYXV0bztcclxuICBjb2xvcjogI2QyZDBkMDtcclxuICAvKiBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uLXJlcyAuc2VjdGlvbi10aXRsZSBpIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uLXJlcyAuc2VjdGlvbi10aXRsZS5hY3RpdmUtc2VjdGlvbiB7XHJcbiAgY29sb3I6ICMwMWE3OWI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMWE3OWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uLXJlcyAuc2VjdGlvbi10aXRsZS5hY3RpdmUtc2VjdGlvbiAuaW5mby1zZWN0aW9uIHtcclxuICBjb2xvcjogIzI4MjU2MDtcclxufVxyXG5cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbiAubmF2aWdhdG9yLWxpbmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjgyNTYwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWNhdGVnb3J5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICM5Nzk3YTc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWNhdGVnb3J5LmFjdGl2ZS1uZXdzIHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAxYTc5YjtcclxuICBjb2xvcjogIzI4MjU2MDtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWNhdGVnb3J5LmFjdGl2ZS1uZXdzIGg0IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXNlY3Rpb24gLm5ld3MtaXRlbS13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbiAubmV3cy1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogbWF4LWhlaWdodDogMjUwcHg7ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWl0ZW0gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5sYXRlc3Qtc2VjdGlvbiAubmV3cy1pdGVtIC5jb250ZW50cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWRhdGUge1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMSUgNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGF0ZXN0LXNlY3Rpb24gLm5ld3MtZGF0ZSBoNCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIC5uZXdzLWRhdGUgcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmxhdGVzdC1zZWN0aW9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubmV3cy1yZWFkLW1vcmU6ZGlzYWJsZWQsXHJcbiNldmVudHMtcmVhZC1tb3JlOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGNvbG9yOiAjNjY3YTc5O1xyXG4gIGJvcmRlci1jb2xvcjogIzY2N2E3OTtcclxufVxyXG5cclxuLmJ1c3NpbmVzcy1jYXJkLFxyXG4ubGF0ZXN0LXNlY3Rpb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnVzc2luZXNzLWNhcm91c2VsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1c3NpbmVzcy1jYXJvdXNlbCAuYnMtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMyU7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnVzc2luZXNzIC50aXRsZSBoNCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uYnVzc2luZXNzIC50aXRsZSAudC1pY29uIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uYnVzc2luZXNzIC50aXRsZSAudC1pY29uIGkge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLnRpdGxlIC50LWljb24+ZGl2IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuLmJ1c3NpbmVzcyAudGl0bGU6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDFhNzliO1xyXG59XHJcblxyXG4uYnVzc2luZXNzIC50aXRsZS5kb25vci10aXRsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI1NjA7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLmItY2F0ZWdvcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLmJzLWl0ZW0ge1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLmJzLWl0ZW0gaW1nIHtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5idXNzaW5lc3MgLmJzLWl0ZW0gaDYge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcnRhbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucG9ydGFscy1ib2R5IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3J0YWwge1xyXG4gIG1hcmdpbjogMHB4IDEycHg7XHJcbn1cclxuXHJcbi5iaWxsYm9hcmQge1xyXG4gIGRpcmVjdGlvbjogbHRyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMzksIDM1LCA5NyksIHJnYmEoMzksIDM1LCA5NywgMCkgMTAwJSk7XHJcbn1cclxuXHJcblxyXG4uYmlsbGJvYXJkIGltZyB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmJpbGxib2FyZCAuYmlsbGJvYXJkLWNvbnRlbnRzIHtcclxuICBwYWRkaW5nOiA3cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iaWxsYm9hcmQtY29udGVudHMgLmV2ZW50LWRhdGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDE3MHB4O1xyXG5cclxufVxyXG5cclxuLmJpbGxib2FyZC1jb250ZW50cyAuZXZlbnQtZGF0ZSAuYi1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzMmI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcblxyXG59XHJcblxyXG4uYmlsbGJvYXJkLWNvbnRlbnRzIC5ldmVudC1kYXRlIC5iLWRhdGUgaDEge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJpbGxib2FyZC1jb250ZW50cyAuZXZlbnQtZGF0ZSAuYi1kYXRlIHAge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4uYmlsbGJvYXJkLWNvbnRlbnRzIC5ldmVudC1kYXRlIC5iLXJlZ2lzdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMjgyNTYwO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iaWxsYm9hcmQtY29udGVudHMgLmV2ZW50LWRlc2Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmJpbGxib2FyZC1jb250ZW50cyAuZXZlbnQtZGVzYyBwIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-justify\">\r\n  <div id=\"nsiaCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#nsiaCarousel\" data-slide-to=\"0\" class=\"active\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n        title=\"NSIA\"></li>\r\n      <li data-target=\"#nsiaCarousel\" data-slide-to=\"1\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n        title=\"Information Systems\"></li>\r\n      <li data-target=\"#nsiaCarousel\" data-slide-to=\"2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Statistics\">\r\n      </li>\r\n      <li data-target=\"#nsiaCarousel\" data-slide-to=\"3\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n        title=\"Geographic Information System\"></li>\r\n      <li data-target=\"#nsiaCarousel\" data-slide-to=\"4\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"NID\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\" *ngIf=\"carousel.nsia\">\r\n        <img class=\"d-block w-100\" [src]=\"carousel.nsia.acf[sliderDirection].url\"\r\n          [alt]=\"carousel.nsia.acf[sliderDirection].alt\">\r\n        <div class=\"caption w-100 d-block\">\r\n          <div class=\"custom-container\">\r\n            <div class=\"service-details\">\r\n              <h1>{{ carousel.nsia.title?.rendered }}</h1>\r\n              <h5 *ngIf=\"carousel.nsia.content\">{{ getBrief(carousel.nsia.content?.rendered) }}</h5>\r\n              <button routerLink=\"/about-us/about-nsia\"\r\n                class=\"c-btn-outline-blue\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"c-gradient\"></div>\r\n      </div>\r\n      <div class=\"carousel-item\" *ngIf=\"carousel.stats\">\r\n        <img class=\"d-block w-100\" [src]=\"carousel.stats.acf[sliderDirection].url\"\r\n          [alt]=\"carousel.stats.acf[sliderDirection].alt\">\r\n\r\n        <div class=\"caption w-100 d-block\">\r\n          <div class=\"custom-container\">\r\n            <div class=\"service-details\">\r\n              <h1>{{ carousel.stats.title?.rendered }}</h1>\r\n              <h5 *ngIf=\"carousel.stats.content\">{{ getBrief(carousel.stats.content?.rendered) }}</h5>\r\n              <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('stats')\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"c-gradient\"></div>\r\n      </div>\r\n      <div class=\"carousel-item\" *ngIf=\"carousel.gis\">\r\n        <img class=\"d-block w-100\" [src]=\"carousel.gis.acf[sliderDirection].url\"\r\n          [alt]=\"carousel.gis.acf[sliderDirection].alt\">\r\n        <div class=\"caption w-100 d-block\">\r\n          <div class=\"custom-container\">\r\n            <div class=\"service-details\">\r\n              <h1>{{ carousel.gis.title?.rendered }}</h1>\r\n              <h5 *ngIf=\"carousel.gis.content\">{{ getBrief(carousel.gis.content?.rendered) }}</h5>\r\n              <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('gis')\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"c-gradient\"></div>\r\n      </div>\r\n      <div class=\"carousel-item\" *ngIf=\"carousel.isd\">\r\n        <img class=\"d-block w-100\" [src]=\"carousel.isd.acf[sliderDirection].url\"\r\n          [alt]=\"carousel.isd.acf[sliderDirection].alt\">\r\n        <div class=\"caption w-100 d-block\">\r\n          <div class=\"custom-container\">\r\n            <div class=\"service-details\">\r\n              <h1>{{ carousel.isd.title?.rendered }}</h1>\r\n              <h5 *ngIf=\"carousel.isd.content\">{{ getBrief(carousel.isd.content?.rendered) }}</h5>\r\n              <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('sdu')\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"c-gradient\"></div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\" *ngIf=\"carousel.nid\">\r\n        <img class=\"d-block w-100\" [src]=\"carousel.nid.acf[sliderDirection].url\"\r\n          [alt]=\"carousel.nid.acf[sliderDirection].alt\">\r\n        <div class=\"caption w-100 d-block\">\r\n          <div class=\"custom-container\">\r\n            <div class=\"service-details\">\r\n              <h1>{{ carousel.nid.title?.rendered }}</h1>\r\n              <h5 *ngIf=\"carousel.nid.content\">{{ getBrief(carousel.nid.content?.rendered) }}</h5>\r\n              <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('nid')\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"c-gradient\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- <a class=\"carousel-control-prev\" href=\"#nsiaCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#nsiaCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"custom-container\">\r\n  <div class=\"section-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 news-item-wrapper\">\r\n        <div class=\"stat-card card\">\r\n          <img src=\"../../assets/images/population.png\" alt=\"Population\">\r\n          <div class=\"stats bg-gradient\">\r\n            <h6>{{ 'label.population' | translate }}</h6>\r\n            <h3 *ngIf=\"population\">{{ population.acf.statistics }} </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 news-item-wrapper\">\r\n        <div class=\"stat-card card\">\r\n          <img src=\"../../assets/images/gdp.png\" alt=\"gdp\">\r\n          <div class=\"stats \">\r\n            <h6>{{ 'label.gdp' | translate }}</h6>\r\n            <h3 *ngIf=\"gdp\">{{ gdp.acf.statistics }} </h3>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 news-item-wrapper\">\r\n        <div class=\"stat-card card\">\r\n          <img src=\"../../assets/images/cpi.png\" alt=\"cpi\">\r\n          <div class=\"stats bg-gradient\">\r\n            <h6>{{ 'label.cpi' | translate }}</h6>\r\n            <h3 *ngIf=\"cpi\">{{ cpi.acf.statistics }} </h3>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 news-item-wrapper\">\r\n        <div class=\"stat-card card\">\r\n          <img src=\"../../assets/images/gender.png\" alt=\"Population\">\r\n          <div class=\"stats bg-gradient\">\r\n            <h6>{{ 'label.eg' | translate }}</h6>\r\n            <h3 *ngIf=\"eg\">{{ eg.acf.statistics}}</h3>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"section-wrapper service-section service-custom-container\">\r\n  <div class=\"service-card custom-container\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"nsia-main\">\r\n          <div class=\"service-title\">\r\n            <!-- <h1 class=\"text-green\">{{ 'label.nsia' | translate}}</h1> -->\r\n            <h1>{{ 'label.nsia-service' | translate}}</h1>\r\n          </div>\r\n          <div class=\"service-desc\" *ngIf=\"carousel.nsia\">\r\n            <p>{{ carousel.nsia.content?.rendered }}</p>\r\n          </div>\r\n          <div class=\"read-more\">\r\n            <button class=\"c-btn-outline-blue\" routerLink=\"/about-us\">{{ 'btn.read-more' | translate }}</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <div class=\"nsia-services row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\" *ngIf=\"carousel.stats\">\r\n              <div class=\"sr-item \">\r\n                <div class=\"service-icon\">\r\n                  <img [src]=\"carousel.stats.acf.icon.url\" alt=\"\">\r\n                </div>\r\n                <div class=\"sr-brief\">\r\n                  <h5>{{ carousel.stats.title?.rendered }}</h5>\r\n                  <p>{{ carousel.stats.content?.rendered }}</p>\r\n                </div>\r\n                <div class=\"read-more\">\r\n                  <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                    (click)=\"updateServiceType('stats')\">{{ 'btn.read-more' | translate }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\" *ngIf=\"carousel.gis\">\r\n              <div class=\"sr-item \">\r\n                <div class=\"service-icon\">\r\n                  <img [src]=\"carousel.gis.acf.icon.url\" alt=\"\">\r\n                </div>\r\n                <div class=\"sr-brief\">\r\n                  <h5>{{ carousel.gis.title?.rendered }}</h5>\r\n                  <p>{{ carousel.gis.content?.rendered }}</p>\r\n                </div>\r\n                <div class=\"read-more\">\r\n                  <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                    (click)=\"updateServiceType('gis')\">{{ 'btn.read-more' | translate }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\" *ngIf=\"carousel.isd\">\r\n              <div class=\"sr-item \">\r\n                <!-- <img src=\"../../assets/logo/Div.svg\" alt=\"\"> -->\r\n                <div class=\"service-icon\">\r\n                  <img [src]=\"carousel.isd.acf.icon.url\" alt=\"\">\r\n                </div>\r\n                <div class=\"sr-brief\">\r\n                  <h5>{{ carousel.isd.title?.rendered }}</h5>\r\n                  <p>{{ carousel.isd.content?.rendered }}</p>\r\n                </div>\r\n                <div class=\"read-more\">\r\n                  <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                    (click)=\"updateServiceType('sdu')\">{{ 'btn.read-more' | translate }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\" *ngIf=\"carousel.nid\">\r\n              <div class=\"sr-item \">\r\n                <div class=\"service-icon\">\r\n                  <img [src]=\"carousel.nid.acf.icon.url\" alt=\"\">\r\n                </div>\r\n                <div class=\"sr-brief\">\r\n                  <h5>{{ carousel.nid.title?.rendered }}</h5>\r\n                  <p>{{ carousel.nid.content?.rendered }}</p>\r\n                </div>\r\n                <div class=\"read-more\">\r\n                  <button class=\"c-btn-outline-blue\" routerLink=\"/services\"\r\n                    (click)=\"updateServiceType('nid')\">{{ 'btn.read-more' | translate }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"custom-container\">\r\n\r\n  <div class=\"latest-section-res latest-section\">\r\n    <div class=\"accordion\" id=\"newsAccordion\">\r\n      <div class=\"ls-res-item\">\r\n        <div class=\"section-title active-section ls-btn\" data-toggle=\"collapse\" data-target=\"#res-latest-news\"\r\n          aria-expanded=\"true\" aria-controls=\"#res-latest-news\" redirect-url=\"/media-room/news-updates\" category=\"news\">\r\n          <h5 class=\"info-section \">{{ 'label.latest-news' | translate}}</h5>\r\n          <i class=\"fas fa-chevron-down\"></i>\r\n        </div>\r\n        <div id=\"res-latest-news\" class=\"collapse show\" data-parent=\"#newsAccordion\">\r\n          <div class=\"row\" *ngIf=\"newsBriefs.news != ''; else nonews\">\r\n            <div class=\"col-md-4 col-sm-4 news-item-wrapper\" *ngFor=\"let nw of newsBriefs.news | slice:0:2\">\r\n              <div class=\"news-item\" [routerLink]=\"['/media-room/media', nw.id]\">\r\n                <img src=\"{{ nw.better_featured_image.source_url }}\" alt=\"{{ nw.better_featured_image.alt_text }}\"\r\n                  (error)=\"imageError($event.target);\">\r\n                <div class=\"contents bg-gradient\">\r\n                  <h4>{{ getTitleBrief(nw.title.rendered) }}</h4>\r\n                  <p>{{ nw.acf.brief }}</p>\r\n                </div>\r\n                <div class=\"news-date\">\r\n                  <h4>{{ nw.day }}</h4>\r\n                  <p>{{ nw.month }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 text-center\">\r\n              <button class=\"btn btn-lg btn-outline-info news-read-more\"\r\n                (click)=\"readMoreRedirect($event.target)\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n          <ng-template #nonews>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{ 'label.no-data' | translate }}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"ls-res-item\">\r\n        <div class=\"section-title active-section ls-btn\" data-toggle=\"collapse\" data-target=\"#res-latest-pubs\"\r\n          aria-expanded=\"true\" aria-controls=\"#res-latest-pubs\" redirect-url=\"/media-room/news-updates\"\r\n          category=\"publications\">\r\n          <h5 class=\"info-section \">{{ 'label.latest-pubs' | translate}}</h5>\r\n          <i class=\"fas fa-chevron-down\"></i>\r\n        </div>\r\n        <div id=\"res-latest-pubs\" class=\"collapse\" data-parent=\"#newsAccordion\">\r\n          <div class=\"row\" *ngIf=\"newsBriefs.publications != ''; else nopublications\">\r\n            <div class=\"col-md-4 col-sm-4 news-item-wrapper\" *ngFor=\"let pb of newsBriefs.publications | slice:1\">\r\n              <div class=\"news-item\" [routerLink]=\"['/media-room/media', pb.id]\">\r\n                <img src=\"{{ pb.better_featured_image.source_url }}\" alt=\"{{ pb.better_featured_image.alt_text }}\"\r\n                  (error)=\"imageError($event.target);\">\r\n                <div class=\"contents bg-gradient\">\r\n                  <h4>{{ getTitleBrief(pb.title.rendered) }}</h4>\r\n                  <p>{{ pb.acf.brief }}</p>\r\n                </div>\r\n                <div class=\"news-date\">\r\n                  <h4>{{ pb.day }}</h4>\r\n                  <p>{{ pb.month }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 text-center\">\r\n              <button class=\"btn btn-lg btn-outline-info news-read-more\"\r\n                (click)=\"readMoreRedirect($event.target)\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n          <ng-template #nopublications>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{ 'label.no-data' | translate }}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"ls-res-item\">\r\n        <div class=\"section-title active-section ls-btn\" data-toggle=\"collapse\" data-target=\"#res-latest-prs\"\r\n          aria-expanded=\"true\" aria-controls=\"#res-latest-prs\" redirect-url=\"/media-room/press-release\"\r\n          category=\"press\">\r\n          <h5 class=\"info-section \">{{ 'label.press-release' | translate}}</h5>\r\n          <i class=\"fas fa-chevron-down\"></i>\r\n        </div>\r\n\r\n        <div id=\"res-latest-prs\" class=\"collapse\" data-parent=\"#newsAccordion\">\r\n          <div class=\"row\" *ngIf=\"newsBriefs.press != ''; else nopress\">\r\n            <div class=\"col-md-4 col-sm-4 news-item-wrapper\" *ngFor=\"let pr of newsBriefs.press | slice:1\">\r\n              <div class=\"news-item\" [routerLink]=\"['/media-room/media', pr.id]\">\r\n                <img src=\"{{ pr.better_featured_image?.source_url }}\" alt=\"{{ pr.better_featured_image.alt_text }}\"\r\n                  (error)=\"imageError($event.target);\">\r\n                <div class=\"contents bg-gradient\">\r\n                  <h4>{{ getTitleBrief(pr.title.rendered) }}</h4>\r\n                  <p>{{ pr.acf.brief }}</p>\r\n                </div>\r\n                <div class=\"news-date\">\r\n                  <h4>{{ pr.day }}</h4>\r\n                  <p>{{ pr.month }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 text-center\">\r\n              <button class=\"btn btn-lg btn-outline-info news-read-more\"\r\n                (click)=\"readMoreRedirect($event.target)\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n          <ng-template #nopress>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{ 'label.no-data' | translate }}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"ls-res-item\">\r\n        <div class=\"section-title active-section ls-btn\" data-toggle=\"collapse\" data-target=\"#res-important-anc\"\r\n          aria-expanded=\"true\" aria-controls=\"#res-important-anc\" redirect-url=\"/opportunities/jobs\"\r\n          category=\"announcements\">\r\n          <h5 class=\"info-section \">{{ 'label.important-announce' | translate}}</h5>\r\n          <i class=\"fas fa-chevron-down\"></i>\r\n        </div>\r\n        <div id=\"res-important-anc\" class=\"collapse\" data-parent=\"#newsAccordion\">\r\n          <div class=\"row\" *ngIf=\"newsBriefs.announcements != ''; else noannouncements\">\r\n            <div class=\"col-md-4 col-sm-4 news-item-wrapper\" *ngFor=\"let an of newsBriefs.announcements | slice:1\">\r\n              <div class=\"news-item\">\r\n                <img src=\"{{ an.better_featured_image.source_url }}\" alt=\"{{ an.better_featured_image.alt_text }}\"\r\n                  (error)=\"imageError($event.target);\">\r\n                <div class=\"contents bg-gradient\">\r\n                  <h4>{{ getTitleBrief(an.title.rendered) }}</h4>\r\n                  <p>{{ an.acf.brief }}</p>\r\n                </div>\r\n                <div class=\"news-date\">\r\n                  <h4>{{ an.day }}</h4>\r\n                  <p>{{ an.month }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 text-center\">\r\n              <button class=\"btn btn-lg btn-outline-info news-read-more\"\r\n                (click)=\"readMoreRedirect($event.target)\">{{ 'btn.read-more' | translate }}</button>\r\n            </div>\r\n          </div>\r\n          <ng-template #noannouncements>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{ 'label.no-data' | translate }}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section-wrapper latest-section latest-section-lg\">\r\n    <div class=\"nav row\" id=\"nav-tab\" role=\"tablist\">\r\n      <div class=\"col-md-3 col-sm-6 active ls-btn\" id=\"nav-news-tab\" data-toggle=\"tab\" data-target=\"#nav-news\"\r\n        role=\"tab\" aria-controls=\"nav-news\" aria-selected=\"true\" redirect-url=\"/media-room/news-updates\"\r\n        category=\"news\">\r\n        <div class=\"news-category active-news news-cat\">\r\n          <h5>{{ 'label.latest-news' | translate}}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 ls-btn\" id=\"nav-publications-tab\" data-toggle=\"tab\" data-target=\"#nav-publications\"\r\n        role=\"tab\" aria-controls=\"nav-publications\" aria-selected=\"false\" redirect-url=\"/media-room/news-updates\"\r\n        category=\"publications\">\r\n        <div class=\"news-category news-cat\">\r\n          <h5>{{ 'label.latest-pubs' | translate }}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 ls-btn\" id=\"nav-press-tab\" data-toggle=\"tab\" data-target=\"#nav-press\" role=\"tab\"\r\n        aria-controls=\"nav-press\" aria-selected=\"false\" redirect-url=\"/media-room/press-release\" category=\"press\">\r\n        <div class=\"news-category news-cat\">\r\n          <h5>{{ 'label.press-release' | translate}}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 ls-btn\" id=\"nav-announcements-tab\" data-toggle=\"tab\"\r\n        data-target=\"#nav-announcements\" role=\"tab\" aria-controls=\"nav-announcements\" aria-selected=\"false\"\r\n        redirect-url=\"/opportunities/jobs\" category=\"announcements\">\r\n        <div class=\"news-category news-cat\">\r\n          <h5>{{ 'label.important-announce' | translate }}</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"navigator-line\"></div>\r\n    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"nav-news\" role=\"tabpanel\" aria-labelledby=\"nav-news-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.news != ''; else nonews\">\r\n          <div class=\"col-lg-3 col-md-6 news-item-wrapper\" *ngFor=\"let nw of newsBriefs.news\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          [title]=\"nw.title.rendered\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', nw.id]\">\r\n              <img src=\"{{ nw.better_featured_image.source_url }}\" alt=\"{{ nw.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(nw.title.rendered) }}</h4>\r\n                <p>{{ nw.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ nw.day }}</h4>\r\n                <p>{{ nw.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nonews>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"nav-publications\" role=\"tabpanel\" aria-labelledby=\"nav-publications-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.publications != ''; else nopublications\">\r\n          <div class=\"col-lg-3 col-md-6 news-item-wrapper\" *ngFor=\"let pb of newsBriefs.publications\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          [title]=\"pb.title.rendered\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', pb.id]\">\r\n              <img src=\"{{ pb.better_featured_image.source_url }}\" alt=\"{{ pb.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(pb.title.rendered) }}</h4>\r\n                <p>{{ pb.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ pb.day }}</h4>\r\n                <p>{{ pb.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nopublications>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"nav-press\" role=\"tabpanel\" aria-labelledby=\"nav-press-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.press != ''; else nopress\">\r\n          <div class=\"col-lg-3 col-md-6 news-item-wrapper\" *ngFor=\"let pr of newsBriefs.press\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          [title]=\"pr.title.rendered\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', pr.id]\">\r\n              <img src=\"{{ pr.better_featured_image?.source_url }}\" alt=\"{{ pr.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(pr.title.rendered) }}</h4>\r\n                <p>{{ pr.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ pr.day }}</h4>\r\n                <p>{{ pr.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nopress>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"nav-announcements\" role=\"tabpanel\" aria-labelledby=\"nav-announcements-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.announcements != ''; else noannouncements\">\r\n          <div class=\"col-lg-3 col-md-6 news-item-wrapper\" *ngFor=\"let an of newsBriefs.announcements\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          [title]=\"an.title.rendered\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', an.id]\">\r\n              <img src=\"{{ an.better_featured_image.source_url }}\" alt=\"{{ an.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(an.title.rendered) }}</h4>\r\n                <p>{{ an.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ an.day }}</h4>\r\n                <p>{{ an.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #noannouncements>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 text-center\">\r\n        <button class=\"btn btn-lg btn-outline-info news-read-more\"\r\n          (click)=\"readMoreRedirect($event.target)\">{{ 'btn.read-more' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section-wrapper bussiness\">\r\n    <div class=\" bussiness-card\">\r\n      <div class=\"row\">\r\n        <div class=\"portals text-center\">\r\n          <div class=\"title\">\r\n            <h4>{{ 'label.portal' | translate }}</h4>\r\n          </div>\r\n          <div class=\"portals-body b-category\">\r\n            <div class=\"portal\">\r\n              <div class=\"p-image bs-item\">\r\n                <img src=\"../../assets/logo/favicon.png\" alt=\"portal\">\r\n              </div>\r\n              <div class=\"p-name text-center\">\r\n                <h6>Stat</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"portal\">\r\n              <div class=\"p-image bs-item\">\r\n                <img src=\"../../assets/logo/favicon.png\" alt=\"portal\">\r\n              </div>\r\n              <div class=\"p-name text-center\">\r\n                <h6>Stat</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"portal\">\r\n              <div class=\"p-image bs-item\">\r\n                <img src=\"../../assets/logo/favicon.png\" alt=\"portal\">\r\n              </div>\r\n              <div class=\"p-name text-center\">\r\n                <h6>Stat</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"portal\">\r\n              <div class=\"p-image bs-item\">\r\n                <img src=\"../../assets/logo/favicon.png\" alt=\"portal\">\r\n              </div>\r\n              <div class=\"p-name text-center\">\r\n                <h6>Stat</h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- \r\n        <div class=\"col-lg-4 col-md-6  col-sm-6\">\r\n          <div class=\"title donor-title\">\r\n            <h4>{{ 'label.donors' | translate }}</h4>\r\n            <div class=\"t-icon\">\r\n              <div>\r\n                <i class=\"fas fa-chevron-left\" href=\"#donors-carousel\" role=\"button\" data-slide=\"prev\"></i>\r\n                <i class=\"fas fa-chevron-right\" href=\"#donors-carousel\" role=\"button\" data-slide=\"next\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"donors b-category\">\r\n            <div id=\"donors-carousel\" class=\"carousel slide bussiness-carousel\" data-ride=\"carousel\"\r\n              *ngIf=\"businessMainData.donors\">\r\n              <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                  <div class=\"bs-item\" *ngFor=\"let dn of businessMainData.donors[0]\">\r\n                    <img [src]=\"dn.better_featured_image?.source_url\" alt=\"stakeholder\">\r\n                    <h6>{{ dn.title.rendered }}</h6>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\" *ngFor=\"let dnr of businessMainData.donors | slice:1\">\r\n                  <div class=\"bs-item\" *ngFor=\"let dn of dnr\">\r\n                    <img [src]=\"dn.better_featured_image?.source_url\" alt=\"donors\">\r\n                    <h6>{{ dn.title.rendered }}</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-4 col-md-6  col-sm-6 customers-wrapper\">\r\n          <div class=\"title\">\r\n            <h4>{{ 'label.customers' | translate }}</h4>\r\n            <div class=\"t-icon\">\r\n              <div>\r\n                <i class=\"fas fa-chevron-left\" href=\"#customers-carousel\" role=\"button\" data-slide=\"prev\"></i>\r\n                <i class=\"fas fa-chevron-right\" href=\"#customers-carousel\" role=\"button\" data-slide=\"next\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"customers b-category\">\r\n            <div id=\"customers-carousel\" class=\"carousel slide bussiness-carousel\" data-ride=\"carousel\"\r\n              *ngIf=\"businessMainData.customers\">\r\n              <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                  <div class=\"bs-item\" *ngFor=\"let cs of businessMainData.customers[0]\">\r\n                    <img [src]=\"cs.better_featured_image?.source_url\" alt=\"cutomer\">\r\n                    <h6>{{ cs.title.rendered }}</h6>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\" *ngFor=\"let cst of businessMainData.customers | slice:1\">\r\n                  <div class=\"bs-item\" *ngFor=\"let cs of cst\">\r\n                    <img [src]=\"cs.better_featured_image?.source_url\" alt=\"customers\">\r\n                    <h6>{{ cs.title.rendered }}</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"section-wrapper billboard\">\r\n    <div class=\"card\">\r\n      <img src=\"../../assets/images/billboard.png\" alt=\"\">\r\n      <div class=\"billboard-contents\">\r\n        <div class=\"event-date\">\r\n          <div class=\"b-date\">\r\n            <h1 id=\"day\">24th</h1>\r\n            <p id=\"month\">December</p>\r\n          </div>\r\n          <div class=\"b-register\">\r\n            <span>Register</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"event-desc\">\r\n          <h1><b>\r\n              Remote Sensing Discovery Day\r\n            </b> </h1>\r\n\r\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n            Voluptatum odio omnis est voluptatibus? </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <!-- <div class=\"section-wrapper latest-section\">\r\n    <div class=\"nav row\" id=\"nav-tab\" role=\"tablist\">\r\n      <div class=\"col-md-4 col-sm-6 ls ls-btn\" id=\"nav-events-tab\" data-toggle=\"tab\" data-target=\"#nav-events\"\r\n        role=\"tab\" aria-controls=\"nav-events\" aria-selected=\"true\" category=\"events\" redirect-url=\"/media-room/event\">\r\n        <div class=\"news-category active-news events-cat\">\r\n          <h5>{{ 'label.upcoming-events' | translate }}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 ls-btn\" id=\"nav-upcoming_publications-tab\" data-toggle=\"tab\"\r\n        data-target=\"#nav-upcoming_publications\" role=\"tab\" aria-controls=\"nav-upcoming_publications\"\r\n        aria-selected=\"false\" category=\"upcoming_publications\" redirect-url=\"/media-room/news-updates\">\r\n        <div class=\"news-category events-cat\">\r\n          <h5>{{ 'label.upcoming-pubs' | translate }}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 ls-btn\" id=\"nav-surveys-tab\" data-toggle=\"tab\" data-target=\"#nav-surveys\" role=\"tab\"\r\n        aria-controls=\"nav-surveys\" aria-selected=\"false\" category=\"surveys\" redirect-url=\"/library\">\r\n        <div class=\"news-category events-cat\">\r\n          <h5>{{ 'label.surveys' | translate }}</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"navigator-line\"></div>\r\n    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"nav-events\" role=\"tabpanel\" aria-labelledby=\"nav-events-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.events != ''; else noevents\">\r\n          <div class=\"col-md-4 col-sm-6 news-item-wrapper\" *ngFor=\"let ev of newsBriefs.events\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', ev.id]\">\r\n              <img src=\"{{ ev.better_featured_image?.source_url }}\" alt=\"{{ ev.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(ev.title.rendered) }}</h4>\r\n                <p>{{ ev.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ ev.day }}</h4>\r\n                <p>{{ ev.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #noevents>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"nav-upcoming_publications\" role=\"tabpanel\"\r\n        aria-labelledby=\"nav-upcoming_publications-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.upcoming_publications != ''; else nouPubs\">\r\n          <div class=\"col-md-4 col-sm-6 news-item-wrapper\" *ngFor=\"let upb of newsBriefs.upcoming_publications\">\r\n            <div class=\"news-item\" [routerLink]=\"['/media-room/media', upb.id]\">\r\n              <img src=\"{{ upb.better_featured_image?.source_url }}\" alt=\"{{ upb.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(upb.title.rendered) }}</h4>\r\n                <p>{{ upb.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ upb.day }}</h4>\r\n                <p>{{ upb.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nouPubs>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"nav-surveys\" role=\"tabpanel\" aria-labelledby=\"nav-surveys-tab\">\r\n        <div class=\"row\" *ngIf=\"newsBriefs.surveys != ''; else nousurveys\">\r\n          <div class=\"col-md-4 col-sm-6 news-item-wrapper\" *ngFor=\"let srv of newsBriefs.surveys\">\r\n            <div class=\"news-item\">\r\n              <img src=\"{{ srv.better_featured_image?.source_url }}\" alt=\"{{ srv.better_featured_image.alt_text }}\"\r\n                (error)=\"imageError($event.target);\">\r\n              <div class=\"contents bg-gradient\">\r\n                <h4>{{ getTitleBrief(srv.title.rendered) }}</h4>\r\n                <p>{{ srv.acf.brief }}</p>\r\n              </div>\r\n              <div class=\"news-date\">\r\n                <h4>{{ srv.day }}</h4>\r\n                <p>{{ srv.month }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nousurveys>\r\n          <div class=\"jumbotron text-center no-data\">\r\n            <h4>{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 text-center\">\r\n        <button class=\"btn btn-lg btn-outline-info\" (click)=\"readMoreRedirect($event.target)\"\r\n          id=\"events-read-more\">{{ 'btn.read-more' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- \r\n  <h1> {{ 'demo.title' | translate:{'name': 'NSIA'} }}</h1>\r\n\r\n  <h1>{{ title }}</h1> -->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, cdref, router, trs) {
        this.dataService = dataService;
        this.cdref = cdref;
        this.router = router;
        this.trs = trs;
        this.contents = {
            contents: null,
            image: {
                url: '',
                alt: ''
            }
        };
        this.carousel = {
            nsia: null,
            isd: null,
            gis: null,
            stats: null,
            nid: null
        };
        this.businessMainData = {
            stakeholders: [],
            donors: [],
            customers: []
        };
        this.newsReadMore = '/media-room/news-updates';
        this.eventsReadMore = '/media-room/event';
        // News and events Briefs
        this.newsBriefs = {
            news: '',
            press: '',
            publications: '',
            announcements: '',
            upcoming_publications: '',
            events: '',
            surveys: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.x = location.pathname;
        var that = this;
        jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel').carousel({
            interval: 4000,
            ride: 'carousel'
        });
        if (this.trs.currentLang === 'en') {
            this.sliderDirection = 'ltr_slider';
        }
        else {
            this.sliderDirection = 'rtl_slider';
        }
        // const test = 'abscsf3434fjayyyyyfsadaahmads';
        // const pat = /a[a-z]*s/g;
        // const my = test.match(pat);
        // console.log('regex result: ', my);
        // stakeholder-carousel
        // this.reArrangeBusinessData();
        this.getNsiaText();
        /**
         * Get carousel slides data from server
         */
        this.getCarouselSlides();
        this.getInitialStats();
        this.getBusinessData();
        // disable the read more buttons in the begining
        jquery__WEBPACK_IMPORTED_MODULE_6__('.news-read-more').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_6__('#events-read-more').prop('disabled', true);
        // instantiate the first news category on page load
        this.getCardsData('news', 4);
        this.getCardsData('events', 3);
        /** Listeners */
        // tslint:disable-next-line: space-before-function-paren
        jquery__WEBPACK_IMPORTED_MODULE_6__('.ls-btn').click(function () {
            var categoryType = jquery__WEBPACK_IMPORTED_MODULE_6__(this).attr('category');
            var redirecUrl = jquery__WEBPACK_IMPORTED_MODULE_6__(this).attr('redirect-url');
            var perPage = 4;
            console.log('categoryType: ', categoryType);
            console.log('redirect URL: ', redirecUrl);
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).hasClass('col-md-3')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.news-cat').removeClass('active-news');
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).find('.news-cat').addClass('active-news');
                jquery__WEBPACK_IMPORTED_MODULE_6__('.news-read-more').prop('disabled', true);
                that.newsReadMore = redirecUrl;
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).hasClass('col-md-4')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.events-cat').removeClass('active-news');
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).find('.events-cat').addClass('active-news');
                jquery__WEBPACK_IMPORTED_MODULE_6__('#events-read-more').prop('disabled', true);
                that.eventsReadMore = redirecUrl;
                perPage = 3;
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.news-read-more').prop('disabled', true);
                that.newsReadMore = redirecUrl;
            }
            that.getCardsData(categoryType, perPage);
        });
    };
    HomeComponent.prototype.reArrangeBusinessData = function () {
        var arrangeDataOf = function (dArray) {
            var threeArray = [];
            var tempArray = [];
            if (dArray.length > 0) {
                for (var i = 0, j = 0; i < dArray.length; i++) {
                    if (i % 3 === 0 && i !== 0) {
                        tempArray.push(threeArray);
                        threeArray = [];
                        threeArray.push(dArray[i]);
                    }
                    else {
                        threeArray.push(dArray[i]);
                    }
                }
                if (threeArray.length > 0) {
                    tempArray.push(threeArray);
                }
                return tempArray;
            }
            else {
                return dArray;
            }
        };
        this.businessMainData.donors = arrangeDataOf(this.businessMainData.donors);
        this.businessMainData.stakeholders = arrangeDataOf(this.businessMainData.stakeholders);
        this.businessMainData.customers = arrangeDataOf(this.businessMainData.customers);
        //console.log('After refinment the data is: ', this.businessMainData);
    };
    HomeComponent.prototype.getNsiaText = function () {
        var _this = this;
        this.dataService.getNsiaText().subscribe(function (data) {
            if (data[0]) {
                _this.nsiaServiceText = _this.dataService.htmlToPlaintext(data[0].content.rendered);
            }
        });
    };
    HomeComponent.prototype.getCardsData = function (type, perPage) {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('title.rendered');
        customParams.push('date');
        customParams.push('content.rendered');
        customParams.push('acf.brief');
        customParams.push('better_featured_image.source_url');
        customParams.push('better_featured_image.alt_text');
        customParams.push('better_featured_image.caption.rendered');
        // this is to prevent another call for existing data
        if (this.newsBriefs[type] === '') {
            this.dataService.getCardsData(customParams, type, perPage).subscribe(function (cardsData) {
                //console.log('news data: ', cardsData);
                _this.generateCards(type, cardsData);
            });
        }
        else {
            var newsCategories = ['news', 'publications', 'press', 'announcements'];
            if (newsCategories.includes(type)) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.news-read-more').prop('disabled', false);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('#events-read-more').prop('disabled', false);
            }
        }
    };
    HomeComponent.prototype.generateCards = function (sectionId, data) {
        var newsCategories = ['news', 'publications', 'press', 'announcements'];
        if (data.length > 0) {
            if (newsCategories.includes(sectionId)) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.news-read-more').prop('disabled', false);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('#events-read-more').prop('disabled', false);
            }
            this.newsBriefs[sectionId] = this.refineData(data);
        }
        // Broadcast the change so that all related directives update their data
        // this.cdref.detectChanges();
    };
    HomeComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.day = '00';
                el.month = 'MNT';
            }
            else {
                var dateString = el.date;
                el.day = this.extractDay(dateString);
                el.month = this.extractMonth(dateString);
            }
            if (!el.hasOwnProperty('acf')) {
                var acf = {
                    brief: 'No Briefing'
                };
                el.acf = acf;
            }
            else {
                // extract html tags from strings
                el.acf.brief = this.dataService.htmlToPlaintext(el.acf.brief);
                el.acf.brief = this.getCardsBrief(el.acf.brief);
            }
            if (!el.hasOwnProperty('better_featured_image')) {
                var bf = {
                    source_url: '../../assets/images/noimage.png',
                    alt_text: 'image'
                };
                el.better_featured_image = bf;
            }
            else {
                if (!el.better_featured_image.hasOwnProperty('source_url')) {
                    el.better_featured_image.source_url = '../../assets/images/noimage.png';
                }
                if (!el.better_featured_image.hasOwnProperty('alt_text')) {
                    el.better_featured_image.alt_text = 'image';
                }
            }
        }
        return data;
    };
    // Helper functions
    HomeComponent.prototype.extractDay = function (dateString) {
        return dateString.split('-')[2].substr(0, 2);
    };
    HomeComponent.prototype.extractMonth = function (dateString) {
        var date = new Date(dateString);
        return date.toLocaleString('en-us', { month: 'long' }).substr(0, 3);
    };
    HomeComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.png';
        //console.log(el);
        return true;
    };
    HomeComponent.prototype.readMoreRedirect = function (el) {
        if (jquery__WEBPACK_IMPORTED_MODULE_6__(el).hasClass('news-read-more')) {
            //console.log('before redirectNews: ', this.newsReadMore);
            this.router.navigate([this.newsReadMore]);
        }
        else {
            if (this.eventsReadMore.split('/').includes('library')) {
                localStorage.setItem('library-type', 'surveys');
            }
            //console.log('before redirectEvents: ', this.eventsReadMore);
            this.router.navigate([this.eventsReadMore]);
        }
    };
    HomeComponent.prototype.getBrief = function (ds) {
        if (ds.length > 200) {
            return ds.substring(0, 199) + '...';
        }
        return ds;
    };
    HomeComponent.prototype.getCardsBrief = function (ds) {
        if (ds.length > 70) {
            return ds.substring(0, 69) + '...';
        }
        return ds;
    };
    HomeComponent.prototype.getTitleBrief = function (title) {
        if (title.length > 20) {
            return title.substring(0, 19) + '...';
        }
        return title;
    };
    HomeComponent.prototype.getCarouselSlides = function () {
        var _this = this;
        var that = this;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('slug');
        customParams.push('better_featured_image.source_url');
        customParams.push('better_featured_image.alt_text');
        customParams.push('better_featured_image.caption.rendered');
        customParams.push('acf.order');
        customParams.push('acf.icon');
        if (this.sliderDirection.includes('ltr')) {
            customParams.push('acf.ltr_slider.url');
            customParams.push('acf.ltr_slider.alt');
        }
        else {
            customParams.push('acf.rtl_slider.url');
            customParams.push('acf.rtl_slider.alt');
        }
        this.dataService.getCarouselSlides(customParams, 'Slider').subscribe(function (data) {
            //console.log('Carousel Data(Before): ', data);
            data.sort(that.orderResultAscending);
            _this.prepareCarouselSlides(data);
        });
    };
    HomeComponent.prototype.orderResultAscending = function (a, b) {
        if (a.acf.order < b.acf.order) {
            return -1;
        }
        else {
            return 1;
        }
    };
    HomeComponent.prototype.prepareCarouselSlides = function (data) {
        this.carousel.nsia = data[0];
        this.carousel.stats = data[1];
        this.carousel.gis = data[2];
        this.carousel.isd = data[3];
        this.carousel.nid = data[4];
        // Strip HTML tags from the contents
        if (this.carousel.nsia.content) {
            this.carousel.nsia.content.rendered = this.dataService.htmlToPlaintext(this.carousel.nsia.content.rendered);
        }
        if (this.carousel.isd.content) {
            this.carousel.isd.content.rendered = this.dataService.htmlToPlaintext(this.carousel.isd.content.rendered);
        }
        if (this.carousel.gis.content) {
            this.carousel.gis.content.rendered = this.dataService.htmlToPlaintext(this.carousel.gis.content.rendered);
        }
        if (this.carousel.stats.content) {
            this.carousel.stats.content.rendered = this.dataService.htmlToPlaintext(this.carousel.stats.content.rendered);
        }
        if (this.carousel.nid.content) {
            this.carousel.nid.content.rendered = this.dataService.htmlToPlaintext(this.carousel.nid.content.rendered);
        }
    };
    HomeComponent.prototype.getBusinessData = function () {
        var _this = this;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('acf');
        customParams.push('better_featured_image.source_url');
        this.dataService.getBusinessData(customParams).subscribe(function (data) {
            //console.log('business data: ', data);
            if (data) {
                _this.categorizeBusinessData(data);
            }
        });
    };
    HomeComponent.prototype.categorizeBusinessData = function (data) {
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var bs = data_2[_i];
            switch (bs.acf.business_type) {
                case 'stakeholders':
                    this.businessMainData.stakeholders.push(bs);
                    break;
                case 'donors':
                    this.businessMainData.donors.push(bs);
                    break;
                case 'customers':
                    this.businessMainData.customers.push(bs);
                    break;
            }
        }
        this.reArrangeBusinessData();
    };
    HomeComponent.prototype.getInitialStats = function () {
        var _this = this;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('acf');
        customParams.push('better_featured_image.source_url');
        this.dataService.getInitialStats(customParams, 'statistics').subscribe(function (data) {
            if (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var st = data_3[_i];
                    switch (st['acf'].statistics_type) {
                        case 'eg':
                            _this.eg = st;
                            break;
                        case 'cpi':
                            _this.cpi = st;
                            break;
                        case 'gdp':
                            _this.gdp = st;
                            break;
                        case 'population':
                            _this.population = st;
                            break;
                    }
                }
                //console.log('stats data', data);
            }
        }, function (error) {
            //console.log('Data error: ', error);
        });
    };
    HomeComponent.prototype.updateServiceType = function (sType) {
        sessionStorage.setItem('serviceType', sType);
        sessionStorage.removeItem('department');
        sessionStorage.removeItem('sub-menu.type');
        sessionStorage.removeItem('sub-menu.id');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<ngx-loading-bar [color]=\"282560\"></ngx-loading-bar>\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"custom-container\">\r\n  <div id=\"scroll\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"TOP\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </div>\r\n\r\n  <nav class=\"navigation\">\r\n    <div class=\"full-path\" *ngFor=\"let pt of currentPath; let i = index\">\r\n      <small class=\"fullpath\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\">{{ pt }}</small>\r\n      <i class=\"fas fa-chevron-right\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\"></i>\r\n      <small class=\"currentpath\" *ngIf=\"i == currentPath.length - 1\">{{ pt }}</small>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<main [@fadeInOut]=\"getPage(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n<!-- <router-outlet [@fadeInOut]='true'></router-outlet> -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");







var MainComponent = /** @class */ (function () {
    function MainComponent(router, dataService, translateService) {
        this.router = router;
        this.dataService = dataService;
        this.translateService = translateService;
        this.title = 'NSIA';
    }
    MainComponent.prototype.ngOnInit = function () {
        var that = this;
        this.checkDefaultLanguage();
        // If the page is refreshed then this is called
        this.createNavigationBreadPath();
        // tslint:disable-next-line: space-before-function-paren
        jquery__WEBPACK_IMPORTED_MODULE_4__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__(this).scrollTop() > 100) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').fadeIn();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').fadeOut();
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__('#scroll').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                that.createNavigationBreadPath();
            }
        });
    };
    MainComponent.prototype.createNavigationBreadPath = function () {
        this.currentPath = this.router.url.toString().split('/');
        if (this.currentPath.includes('home')) {
            this.currentPath = [];
        }
    };
    MainComponent.prototype.getPage = function (outlet) {
        // tslint:disable-next-line: no-string-literal
        return outlet.activatedRouteData.state;
    };
    MainComponent.prototype.checkDefaultLanguage = function () {
        var lang = localStorage.getItem('lang');
        if (lang) {
            this.dataService.language = lang;
            this.translateService.use(lang);
            this.router.navigate([location.pathname]);
            // // this.dataService.callNavbarCmpMethod();
            // if (lang !== 'en') {
            //   $('body').addClass('rtl');
            // }
        }
        else {
            this.translateService.setDefaultLang('en');
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void <=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found {\r\n    min-height: 600px;\r\n}\r\n.not-found-wrapper .error-message{\r\n font-size: 7rem;\r\n}\r\n.not-found-wrapper .details p {\r\n    font-size: 20px;\r\n}\r\n.not-found-wrapper  {\r\n    max-width: 28vw;\r\n    margin: 1rem auto;\r\n    text-align: center;\r\n}\r\n.not-found-wrapper button {\r\n    margin: 0px 8px\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQge1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbn1cclxuLm5vdC1mb3VuZC13cmFwcGVyIC5lcnJvci1tZXNzYWdle1xyXG4gZm9udC1zaXplOiA3cmVtO1xyXG59XHJcblxyXG4ubm90LWZvdW5kLXdyYXBwZXIgLmRldGFpbHMgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3QtZm91bmQtd3JhcHBlciAge1xyXG4gICAgbWF4LXdpZHRoOiAyOHZ3O1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm90LWZvdW5kLXdyYXBwZXIgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IDhweFxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\r\n  <div class=\"not-found\">\r\n    <div class=\"not-found-wrapper\">\r\n      <div class=\"icon-wrapper\">\r\n        <img src=\"../../assets/images/404.svg\" alt=\"\">\r\n      </div>\r\n      <div class=\"details\">\r\n        <h1 class=\"error-message\">404</h1>\r\n        <p>Requested page not found</p>\r\n      </div>\r\n      <div class=\"btns\">\r\n        <button class=\"go-back c-btn-outline-blue\" (click)=\"goBack()\">GO BACK</button>\r\n        <button class=\"go-home c-btn-outline-blue\" (click)=\"goHome()\">HOME</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goBack = function () {
        this.location.back();
    };
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quick-links {\r\n  margin-top: 2rem;\r\n  background-color: #f2f2f2;\r\n  padding: 4% 0%;\r\n  z-index: 20;\r\n\r\n}\r\n\r\n.quick-links .link-title {\r\n  border-bottom: 1px solid #282560;\r\n}\r\n\r\n.quick-links .links {\r\n  padding: 4px;\r\n}\r\n\r\n.quick-links ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.quick-links li {\r\n  cursor: pointer;\r\n}\r\n\r\n.quick-links li:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.quick-links a {\r\n  text-decoration: none;\r\n  color: rgb(63, 63, 63);\r\n}\r\n\r\n.quick-links i {\r\n  font-size: 8px;\r\n  position: relative;\r\n  top: -2px;\r\n  margin-right: 2%;\r\n}\r\n\r\n.quick-links #email {\r\n  border: none;\r\n  border-bottom: 1px solid #282560;\r\n  display: block;\r\n  background: transparent;\r\n  width: 100%;\r\n  padding: 4px;\r\n  margin-bottom: 8%;\r\n}\r\n\r\n.quick-links .subscribe-btn {\r\n  padding: 6px 16px;\r\n  background-color: #282560;\r\n  color: #fff;\r\n  border: none;\r\n}\r\n\r\n.quick-links .subscribe-btn:disabled {\r\n  background-color: #636183;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.quick-links .alert {\r\n  display: none;\r\n}\r\n\r\n.footer {\r\n  background-color: #282560;\r\n  color: #fff;\r\n  text-align: center;\r\n  left: 0;\r\n  bottom: 0;\r\n  min-height: 100px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  z-index: 20;\r\n\r\n}\r\n\r\n.footer .contents-wrapper {\r\n  padding: 16px 0px;\r\n}\r\n\r\n.footer .contents {\r\n  display: flex;\r\n}\r\n\r\n.footer .copy-right,\r\n.footer .social-media {\r\n  flex: 45%;\r\n}\r\n\r\n.footer-logo img {\r\n  height: 60px;\r\n  width: 60px;\r\n  float: left;\r\n}\r\n\r\n.footer .copy-right span {\r\n  float: left;\r\n}\r\n\r\n.footer .social-media>div {\r\n  float: right;\r\n}\r\n\r\n.footer .social-media i {\r\n  margin: 8px;\r\n  cursor: pointer;\r\n  font-size: 160%;\r\n}\r\n\r\n.footer .copy-right,\r\n.footer .social-media {\r\n  margin-bottom: auto;\r\n  margin-top: auto;\r\n  padding: 8px;\r\n}\r\n\r\n.footer .social-media {\r\n  float: right;\r\n}\r\n\r\n.footer .social-media .s-media {\r\n  display: inline-block;\r\n  background-color: #01a79b;\r\n  margin: 1px;\r\n  min-width: 45px;\r\n}\r\n\r\n.footer .social-media a {\r\n  color: #fff;\r\n  transition: color .1s ease-in-out;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.footer .social-media a:hover {\r\n  color: #282560;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXOztBQUViOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVpY2stbGlua3Mge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiA0JSAwJTtcclxuICB6LWluZGV4OiAyMDtcclxuXHJcbn1cclxuXHJcbi5xdWljay1saW5rcyAubGluay10aXRsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI1NjA7XHJcbn1cclxuXHJcbi5xdWljay1saW5rcyAubGlua3Mge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5xdWljay1saW5rcyBsaTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5xdWljay1saW5rcyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHJnYig2MywgNjMsIDYzKTtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzIGkge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzICNlbWFpbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyNTYwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiA4JTtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzIC5zdWJzY3JpYmUtYnRuIHtcclxuICBwYWRkaW5nOiA2cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzIC5zdWJzY3JpYmUtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MTgzO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5xdWljay1saW5rcyAuYWxlcnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI1NjA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjA7XHJcblxyXG59XHJcblxyXG4uZm9vdGVyIC5jb250ZW50cy13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxNnB4IDBweDtcclxufVxyXG5cclxuLmZvb3RlciAuY29udGVudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvcHktcmlnaHQsXHJcbi5mb290ZXIgLnNvY2lhbC1tZWRpYSB7XHJcbiAgZmxleDogNDUlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28gaW1nIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvcHktcmlnaHQgc3BhbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mb290ZXIgLnNvY2lhbC1tZWRpYT5kaXYge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZvb3RlciAuc29jaWFsLW1lZGlhIGkge1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2MCU7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvcHktcmlnaHQsXHJcbi5mb290ZXIgLnNvY2lhbC1tZWRpYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmZvb3RlciAuc29jaWFsLW1lZGlhIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5mb290ZXIgLnNvY2lhbC1tZWRpYSAucy1tZWRpYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgbWluLXdpZHRoOiA0NXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5zb2NpYWwtbWVkaWEgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvb3RlciAuc29jaWFsLW1lZGlhIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjgyNTYwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quick-links\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'label.newsletter' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <p>{{'label.news-letter-subscribe' | translate}}</p>\r\n          <input type=\"email\" name=\"email\" id=\"email\" [placeholder]=\"'label.email-address' | translate\" #useremail required\r\n            [(ngModel)]=\"email\" (input)=\"checkEmail()\">\r\n          <button [disabled]=\"!validEmail\" (click)=\"subscribe(useremail.value)\"\r\n            class=\"subscribe-btn\">{{'label.subscribe' | translate}}</button>\r\n        </div>\r\n        <!-- <div class=\"alert alert-success alert-dismissible fade show\" id=\"success-subscribe\" role=\"alert\">\r\n          <strong>Thank You,</strong> You will receive our regular publications to your inbox.\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"alert alert-danger alert-dismissible fade show\" id=\"failure-subscribe\" role=\"alert\">\r\n          <strong>Thank You,</strong> You will receive our regular publications to your inbox.\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'menu.about-us' | translate}}</h4>\r\n        </div>\r\n\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink='/about-us'>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'submenu.about-nsia' | translate}} </a>\r\n            </li>\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.history' | translate}}</a></li> -->\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.vision-mission'| translate }}</a></li> -->\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.authority-functions' | translate}}</a></li> -->\r\n            <li routerLink='/about-us/structure'>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.organization-structure' | translate}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'label.quick-links' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.tazkira-enrollement' | translate}}</a></li>\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.laws' | translate}}</a></li> -->\r\n            <li routerLink=\"/access-info\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.guidelines' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\" ></i>\r\n              <a>{{'label.stats' | translate}}</a></li>\r\n            <li routerLink=\"/opportunities/procurements\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'submenu.procurement' | translate}}</a></li>\r\n            <li routerLink=\"/opportunities/jobs\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.jobs' | translate}}</a></li>\r\n            <li routerLink=\"/contact-us\">\r\n              <i class=\"fas fa-chevron-right\" ></i>\r\n              <a>{{'label.contact-us' | translate}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'menu.services' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.etazkira' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.paper-tazkira' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.birth-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.death-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.marriage-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.divorce-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.foreign-registration' | translate}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"contents-wrapper\">\r\n\r\n      <div class=\"contents\">\r\n        <div class=\"footer-logo\">\r\n          <img src=\"../../../assets/logo/flag-design.png\" alt=\"flat logo\">\r\n        </div>\r\n\r\n        <div class=\"copy-right\">\r\n          <span>\r\n            <b>\r\n              {{ 'label.copy-right' | translate:{'year':year } }}\r\n            </b>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"social-media\">\r\n          <div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.instagram.com/nsia_afghanistan/\" target=\"_blank\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.youtube.com/channel/UCO4p9zdLgTJrYHHd-3M3hjQ?view_as=subscriber\" target=\"_blank\">\r\n                <i class=\"fab fa-youtube\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.linkedin.com/company/19090359/\" target=\"_blank\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://twitter.com/NSIAGOVAF1397\" target=\"_blank\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.facebook.com/NSIA.GOV.AF\" target=\"_blank\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);




var FooterComponent = /** @class */ (function () {
    function FooterComponent(dataService) {
        this.dataService = dataService;
        this.validEmail = false;
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.subscribe = function (email) {
        var _this = this;
        // console.log('user email: ', email);
        var user = {
            email: email,
            username: email,
            password: '1234546'
        };
        this.dataService.registerUserEmail(user).subscribe(function (data) {
            // tslint:disable-next-line: no-string-literal
            if (data['code'] === 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Subscribed', 'You will receive our publications', 'success');
                _this.email = '';
                _this.validEmail = false;
            }
        }, function (error) {
            // tslint:disable-next-line: no-string-literal
            // console.log('Error: ', error['status']);
            // tslint:disable-next-line: no-string-literal
            if (error['status'] === 400) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Opps', 'Email address already exist', 'warning');
            }
            // tslint:disable-next-line: no-string-literal
            if (error['status'] === 500) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Opps', 'Cannot make request at this moment', 'warning');
            }
        });
    };
    FooterComponent.prototype.checkEmail = function () {
        // tslint:disable-next-line: max-line-length
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(this.email)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    FooterComponent.prototype.updateServiceType = function (sType) {
        this.dataService.serviceType = sType;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: #fff;\r\n  padding: 16px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.align-center {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.header .logos img {\r\n  height: 90px;\r\n  margin-right: 3%;\r\n  float: left;\r\n}\r\n\r\n.header .header-details {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  float: right;\r\n}\r\n\r\n.header .website-tools .tools-wrapper {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  float: right;\r\n}\r\n\r\n.header .contact-details,\r\n.website-tools {\r\n  display: block;\r\n}\r\n\r\n.header .contact-details .c-item {\r\n  cursor: pointer;\r\n  float: right; \r\n}\r\n\r\n.header .c-item {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-right: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.navbar {\r\n  padding: 0px !important;\r\n}\r\n\r\n.header select,\r\n#navbar select {\r\n  padding: 5px;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.change-language {\r\n  background-color: #282560;\r\n  position: relative;\r\n  width: 55px;\r\n}\r\n\r\n.change-language i {\r\n  color: #fff;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 15px;\r\n  font-size: 12px !important;\r\n  z-index: 1;\r\n  text-align: center;\r\n  width: 10%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  margin-top: 0px !important;\r\n}\r\n\r\n.search-result-wrapper {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 0vh;\r\n  z-index: 90;\r\n  background-color: #282560;\r\n  overflow: scroll;\r\n  color: #fff;\r\n  transition: height .3s ease-in-out;\r\n}\r\n\r\n.search-result-wrapper.show {\r\n  height: 50vh;\r\n}\r\n\r\n.search-results {\r\n  background-color: transparent;\r\n  margin: 2rem;\r\n  display: flex\r\n}\r\n\r\n.search-result-wrapper i.fa-times {\r\n  position: absolute;\r\n  padding: 1rem;\r\n  left: 0;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pd-top {\r\n  padding-top: 3rem;\r\n}\r\n\r\n.search-results ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.search-results li {\r\n  cursor: pointer;\r\n}\r\n\r\n.search-results li:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.search-results li span {\r\n  margin: 0px 4px;\r\n}\r\n\r\n.search-results .result {\r\n  margin: 0px 2rem;\r\n}\r\n\r\n.search-results .search-item-title {\r\n  border-bottom: 1px solid #fff;\r\n}\r\n\r\n#mapModal .modal-body {\r\n  padding: 0px;\r\n  min-height: 70vh;\r\n}\r\n\r\n#map {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#mapModal .address {\r\n  background-color: #fff;\r\n  z-index: 123;\r\n  position: absolute;\r\n  left: 5px;\r\n  bottom: 5px;\r\n  padding: 1rem;\r\n}\r\n\r\n#navbar {\r\n  /* overflow: hidden; */\r\n  background-color: #fff;\r\n  z-index: 1000;\r\n  transition: background-color 100ms linear;\r\n}\r\n\r\n.navbar-collapse {\r\n  border-top: 1px solid rgb(197, 195, 195);\r\n}\r\n\r\n#navbar .nav-item {\r\n  padding: 0px 20px;\r\n}\r\n\r\n#navbar .seperator {\r\n  padding: 0px 2px;\r\n}\r\n\r\n#navbar .seperator>div {\r\n  height: 33%;\r\n  position: absolute;\r\n  top: 33%;\r\n  border: .5px solid #282560;\r\n  border-radius: 3px;\r\n}\r\n\r\n#navbar li,\r\n#navbar a {\r\n  transition: background-color 100ms linear;\r\n}\r\n\r\n#navbar a {\r\n  float: left;\r\n  display: block;\r\n  text-align: center;\r\n  color: #282560;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\n#navbar a::after {\r\n  content: none;\r\n}\r\n\r\n#navbar .fa-chevron-down {\r\n  font-size: 7px;\r\n  margin-top: 21px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n#navbar .nav-item.active .fas {\r\n  color: #01a79b !important;\r\n}\r\n\r\n#navbar .nav-item.active .fa-chevron-down {\r\n  margin-top: 18px !important;\r\n  color: #01a79b !important;\r\n}\r\n\r\n#navbar .dropdown-menu {\r\n  padding: 0px !important;\r\n  margin: 0px !important;\r\n  border-radius: 0px !important;\r\n}\r\n\r\n#navbar .dropdown-menu a {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n#navbar .dropdown-item {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar .dropdown:hover .dropdown-menu {\r\n  display: table;\r\n}\r\n\r\n#navbar li:hover,\r\n#navbar .dropdown-item:hover {\r\n  background-color: #ddd;\r\n  /* color: black; */\r\n}\r\n\r\n#navbar .nav-item.active {\r\n  border-top: 4px solid #01a79b;\r\n  margin-top: -2px;\r\n  line-height: 1;\r\n}\r\n\r\n#navbar .nav-item.active>a {\r\n  color: #01a79b !important;\r\n\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: #282560 !important;\r\n}\r\n\r\n.resp-toggler,\r\n.responsive-nav {\r\n  display: none;\r\n\r\n}\r\n\r\n.resp-toggler {\r\n  background-color: #fff;\r\n  padding: 8px 17px\r\n}\r\n\r\n.resp-toggler i {\r\n  font-size: 24px;\r\n}\r\n\r\n.responsive-nav {\r\n  height: 0px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  z-index: 120;\r\n  transition: height .2s ease-in-out;\r\n}\r\n\r\n.responsive-navbar {\r\n  display: none;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.responsive-nav .r-menu {\r\n  display: flex;\r\n  margin: 25px;\r\n}\r\n\r\n.r-show {\r\n  border: 1px solid #282560;\r\n  height: 400px;\r\n  width: inherit;\r\n  overflow-x: auto;\r\n}\r\n\r\n.responsive-nav .r-menu-item {\r\n  display: inline-block;\r\n  margin-right: 14px;\r\n}\r\n\r\n.responsive-nav .r-menu-item p {\r\n  font-weight: 600;\r\n  border-bottom: 1px solid #282560;\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n}\r\n\r\n.responsive-nav .r-menu-item ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.responsive-nav .r-menu-item ul li {\r\n  margin-bottom: 8px\r\n}\r\n\r\n.content {\r\n  padding: 16px;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.sticky+.content {\r\n  padding-top: 60px;\r\n}\r\n\r\n#navbar.active-bar {\r\n  background-color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar a,\r\n#navbar.active-bar li i {\r\n  color: #fff !important;\r\n  background-color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar li:hover,\r\n#navbar.active-bar li:hover a,\r\n#navbar.active-bar li:hover i {\r\n  background-color: #01a79b !important;\r\n  color: #fff !important;\r\n}\r\n\r\n#navbar.active-bar li:hover.active i {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar .nav-item .dropdown-item:hover {\r\n  color: #282560 !important;\r\n  background-color: #ddd !important;\r\n}\r\n\r\n#navbar.active-bar .seperator>div {\r\n  border-color: #fff;\r\n}\r\n\r\n#navbar .tls {\r\n  display: none;\r\n  float: right;\r\n  margin-top: 5px;\r\n}\r\n\r\n#navbar .web-tls {\r\n  display: flex;\r\n}\r\n\r\n#navbar .web-tls .wrapper {\r\n  height: 100%;\r\n  margin-right: 27px;\r\n  padding: 0px 5px;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper {\r\n  height: 100%;\r\n  margin-right: 27px;\r\n  padding: 0px 5px;\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper:focus-within {\r\n  border-bottom: 1px solid #01a79b;\r\n  color: #01a79b;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper input {\r\n  color: #fff;\r\n}\r\n\r\n#navbar .web-tls .wrapper input {\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n  .seperator {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.contact {\r\n  color: #282560;\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 1390px) {\r\n  #navbar .nav-item {\r\n    padding: 0px 8px;\r\n  }\r\n\r\n  #navbar a {\r\n    padding: 14px 11px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  #navbar .nav-item {\r\n    padding: 0px 6px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n\r\n\r\n\r\n  .logo-wrapper,\r\n  .header-details {\r\n    display: inline-flex;\r\n    margin: auto;\r\n  }\r\n\r\n  .logos {\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .logo-wrapper .nsia-logo {\r\n    margin: 0px 8px;\r\n  }\r\n\r\n  .header-details {\r\n    float: none !important;\r\n\r\n  }\r\n\r\n  .resp-toggler,\r\n  .responsive-nav {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .website-tools {\r\n    display: none;\r\n  }\r\n\r\n  #navbar .tls {\r\n    display: block;\r\n  }\r\n\r\n  .responsive-navbar {\r\n    display: block;\r\n  }\r\n\r\n  .resp-toggler {\r\n    background-color: #282560;\r\n    color: #fff;\r\n    border: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUdBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWix3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFHYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUlFLHlDQUF5QztBQUMzQzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTs7RUFFRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxhQUFhOztBQUVmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCO0FBQ0Y7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBOzs7RUFHRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBO0VBQ0UsNkJBQTZCO0FBQy9COztBQU9BO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7OztFQUlFOztJQUVFLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCOztFQUV4Qjs7RUFFQTs7SUFFRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNnB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIgLmxvZ29zIGltZyB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmhlYWRlci1kZXRhaWxzIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLmhlYWRlciAud2Vic2l0ZS10b29scyAudG9vbHMtd3JhcHBlciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhlYWRlciAuY29udGFjdC1kZXRhaWxzLFxyXG4ud2Vic2l0ZS10b29scyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmNvbnRhY3QtZGV0YWlscyAuYy1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0OyBcclxufVxyXG5cclxuLmhlYWRlciAuYy1pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyIHNlbGVjdCxcclxuI25hdmJhciBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNoYW5nZS1sYW5ndWFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5jaGFuZ2UtbGFuZ3VhZ2UgaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwdmg7XHJcbiAgei1pbmRleDogOTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXdyYXBwZXIuc2hvdyB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXdyYXBwZXIgaS5mYS10aW1lcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbGVmdDogMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLnBkLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMgbGk6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMgbGkgc3BhbiB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHQge1xyXG4gIG1hcmdpbjogMHB4IDJyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyAuc2VhcmNoLWl0ZW0tdGl0bGUge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4jbWFwTW9kYWwgLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtaW4taGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG4jbWFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNtYXBNb2RhbCAuYWRkcmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMjM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDVweDtcclxuICBib3R0b206IDVweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxuI25hdmJhciB7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTUsIDE5NSk7XHJcbn1cclxuXHJcbiNuYXZiYXIgLm5hdi1pdGVtIHtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG5cclxuI25hdmJhciAuc2VwZXJhdG9yIHtcclxuICBwYWRkaW5nOiAwcHggMnB4O1xyXG59XHJcblxyXG4jbmF2YmFyIC5zZXBlcmF0b3I+ZGl2IHtcclxuICBoZWlnaHQ6IDMzJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMyU7XHJcbiAgYm9yZGVyOiAuNXB4IHNvbGlkICMyODI1NjA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4jbmF2YmFyIGxpLFxyXG4jbmF2YmFyIGEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG59XHJcblxyXG5cclxuI25hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyODI1NjA7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxufVxyXG5cclxuI25hdmJhciBhOjphZnRlciB7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxuI25hdmJhciAuZmEtY2hldnJvbi1kb3duIHtcclxuICBmb250LXNpemU6IDdweDtcclxuICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZSAuZmFzIHtcclxuICBjb2xvcjogIzAxYTc5YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2YmFyIC5uYXYtaXRlbS5hY3RpdmUgLmZhLWNoZXZyb24tZG93biB7XHJcbiAgbWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDFhNzliICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIgLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI25hdmJhciAuZHJvcGRvd24taXRlbSB7XHJcbiAgY29sb3I6ICMyODI1NjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhciAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5cclxuI25hdmJhciBsaTpob3ZlcixcclxuI25hdmJhciAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbn1cclxuXHJcbiNuYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMWE3OWI7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuI25hdmJhciAubmF2LWl0ZW0uYWN0aXZlPmEge1xyXG4gIGNvbG9yOiAjMDFhNzliICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMyODI1NjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc3AtdG9nZ2xlcixcclxuLnJlc3BvbnNpdmUtbmF2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG5cclxuLnJlc3AtdG9nZ2xlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA4cHggMTdweFxyXG59XHJcblxyXG5cclxuLnJlc3AtdG9nZ2xlciBpIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW5hdiB7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMjA7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXYgLnItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbi5yLXNob3cge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyODI1NjA7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXYgLnItbWVudS1pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXYgLnItbWVudS1pdGVtIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI1NjA7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXYgLnItbWVudS1pdGVtIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbmF2IC5yLW1lbnUtaXRlbSB1bCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RpY2t5Ky5jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciBhLFxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgbGkgaSB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciBsaTpob3ZlcixcclxuI25hdmJhci5hY3RpdmUtYmFyIGxpOmhvdmVyIGEsXHJcbiNuYXZiYXIuYWN0aXZlLWJhciBsaTpob3ZlciBpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhNzliICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIGxpOmhvdmVyLmFjdGl2ZSBpIHtcclxuICBjb2xvcjogIzI4MjU2MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogIzI4MjU2MCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIC5zZXBlcmF0b3I+ZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNuYXZiYXIgLnRscyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jbmF2YmFyIC53ZWItdGxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jbmF2YmFyIC53ZWItdGxzIC53cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAud2ViLXRscyAud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjdweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAud2ViLXRscyAud3JhcHBlcjpmb2N1cy13aXRoaW4ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDFhNzliO1xyXG4gIGNvbG9yOiAjMDFhNzliO1xyXG59XHJcblxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgLndlYi10bHMgLndyYXBwZXIgaW5wdXQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiNuYXZiYXIgLndlYi10bHMgLndyYXBwZXIgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLnNlcGVyYXRvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIGNvbG9yOiAjMjgyNTYwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzkwcHgpIHtcclxuICAjbmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gIH1cclxuXHJcbiAgI25hdmJhciBhIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgI25hdmJhciAubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMHB4IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuXHJcblxyXG5cclxuICAubG9nby13cmFwcGVyLFxyXG4gIC5oZWFkZXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5sb2dvcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28td3JhcHBlciAubnNpYS1sb2dvIHtcclxuICAgIG1hcmdpbjogMHB4IDhweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItZGV0YWlscyB7XHJcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG4gIC5yZXNwLXRvZ2dsZXIsXHJcbiAgLnJlc3BvbnNpdmUtbmF2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLndlYnNpdGUtdG9vbHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNuYXZiYXIgLnRscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yZXNwb25zaXZlLW5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yZXNwLXRvZ2dsZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\r\n\r\n  <div class=\"header\">\r\n    <div class=\"custom-container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12 logos\">\r\n          <div class=\"logo-wrapper\">\r\n            <!-- <div class=\"gov-logo\">\r\n              <img src=\"../../../assets/logo/national-emblem.svg\" alt=\"\">\r\n            </div> -->\r\n            <div class=\"nsia-logo\">\r\n              <img src=\"../../../assets/logo/amended-logo final final-01.svg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12\">\r\n          <div class=\"header-details\">\r\n\r\n            <div class=\"contact-details\">\r\n              <div class=\"c-item\">\r\n                <p routerLink=\"/contact-us\"> <i class=\"fas fa-phone contact\"></i> {{ 'label.contact-us' | translate }}\r\n                </p>\r\n              </div>\r\n              <!-- <div class=\"c-item\">\r\n                <p> <i class=\"fas fa-clock\"></i> {{ 'label.working-hours' | translate }}</p>\r\n              </div> -->\r\n              <div class=\"c-item\" data-toggle=\"modal\" data-target=\"#mapModal\">\r\n                <p> <i class=\"fas fa-map-marker-alt\"></i> {{'label.head-office' | translate}}</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"website-tools\">\r\n              <div class=\"tools-wrapper\">\r\n                <div class=\"search-input c-item\">\r\n                  <div class=\"wrapper\">\r\n                    <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" [(ngModel)]=\"sText\"\r\n                      class=\"search-box\" #searchText (keyup)=\"showSearchResults($event, searchText.value)\"\r\n                      (focus)=\"showSearchDiv(searchText.value)\">\r\n                    <!-- <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" \r\n                    class=\"search-box\" #searchText > -->\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"change-language c-item\">\r\n                  <select name=\"lang-change\" id=\"lang-change\" class=\"form-control custom-form-control\" #languageChange1\r\n                    (change)='useLanguage(languageChange1)'>\r\n                    <option value=\"en\">{{ 'lang.english' | translate }}</option>\r\n                    <option value=\"fa\">{{ 'lang.dari' | translate }}</option>\r\n                    <option value=\"ps\">{{ 'lang.pashto' | translate }}</option>\r\n                  </select>\r\n                  <i class=\"fas fa-chevron-down\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\" id=\"navbar\">\r\n    <div class=\"custom-container\">\r\n\r\n\r\n      <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsable-nav\" aria-controls=\"collapsable-nav\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button> -->\r\n      <!-- Custom Responsive navbar -->\r\n      <div class=\"responsive-navbar\">\r\n        <button class=\"resp-toggler\" (click)=\"toggleRespNav()\">\r\n          <i class=\"fas fa-bars\"></i>\r\n        </button>\r\n        <div class=\"tls\">\r\n          <div class=\"web-tls\">\r\n\r\n            <div class=\"search-input c-item\">\r\n              <div class=\"wrapper\">\r\n                <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" [(ngModel)]=\"sText\"\r\n                  class=\"search-box\" #searchTextRes (keyup)=\"showSearchResults($event, searchTextRes.value)\"\r\n                  (focus)=\"showSearchDiv(searchText.value)\">\r\n\r\n                <!-- <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" class=\"search-box\"> -->\r\n                <i class=\"fas fa-search\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"change-language c-item\">\r\n              <select name=\"lang-change\" id=\"lang-change2\" class=\"form-control custom-form-control\" #languageChange2\r\n                (change)='useLanguage(languageChange2)'>\r\n                <option value=\"en\">{{ 'lang.english' | translate }}</option>\r\n                <option value=\"fa\">{{ 'lang.dari' | translate }}</option>\r\n                <option value=\"ps\">{{ 'lang.pashto' | translate }}</option>\r\n              </select>\r\n              <i class=\"fas fa-chevron-down\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"responsive-nav\" id=\"responsive-nav\">\r\n        <div class=\"r-menu\">\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/home\"><i class=\"fas fa-home\"></i></p>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/about-us\">\r\n              {{ 'menu.about-us' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/about-us/about-nsia\">{{'submenu.about-nsia' | translate}}</li>\r\n              <li routerLink=\"/about-us/biographies\">{{'submenu.biographies' | translate}}</li>\r\n              <!-- <li routerLink=\"about-us/finance\">Finance</li> -->\r\n              <li routerLink=\"/about-us/activity-achievments\">{{'submenu.achievments' | translate}}</li>\r\n              <li routerLink=\"/about-us/structure\">{{'submenu.structure' | translate}}</li>\r\n              <!-- <li routerLink=\"about-us/vision-mission\">Vision & Mission</li> -->\r\n            </ul>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/services\">\r\n              {{ 'menu.services' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('stats')\">{{'submenu.statistics' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">{{'submenu.nid' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('gis')\">{{'submenu.gis' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('sdu')\">{{'submenu.isd' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('prs')\">{{'submenu.provincial-s' | translate}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/library\">\r\n              {{ 'menu.library' | translate }}</p>\r\n            <!-- <ul>\r\n              <li routerLink=\"library/reports\">{{'submenu.reports' | translate}}</li>\r\n              <li routerLink=\"library/articles\">{{'submenu.articles' | translate}}</li>\r\n            </ul> -->\r\n          </div>\r\n          <!-- <div class=\"r-menu-item\">\r\n            <p routerLink=\"/access-info\">\r\n              {{ 'menu.access-info' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"access-info/guidelines\">Guidelines</li>\r\n              <li routerLink=\"access-info/statistics\">Statistics</li>\r\n              <li routerLink=\"access-info/nid\">National Identity</li>\r\n              <li routerLink=\"access-info/regualtions\">Regulations</li>\r\n              <li routerLink=\"access-info/policies\">Policies</li>\r\n            </ul>\r\n          </div> -->\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/media-room\">\r\n              {{ 'menu.media-room' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/media-room/event\">{{'submenu.events' | translate}}</li>\r\n              <li routerLink=\"/media-room/news-updates\">{{'submenu.news-updates' | translate}}</li>\r\n              <li routerLink=\"/media-room/press-release\">{{'submenu.press-release' | translate}}</li>\r\n              <!-- <li routerLink=\"media-room/magazine\">Magazine</li>\r\n              <li routerLink=\"media-room/newsletters\">Newsletters</li>\r\n              <li routerLink=\"media-room/poster\">Poster</li>\r\n              <li routerLink=\"media-room/booklet\">Booklet</li>\r\n              <li routerLink=\"media-room/brochures\">Brochures</li> -->\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/opportunities\">\r\n              {{ 'menu.opportunities' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/opportunities/jobs\">{{'submenu.jobs' | translate}}</li>\r\n              <li routerLink=\"/opportunities/procurements\">{{'submenu.procurement' | translate}}</li>\r\n              <!-- <li routerLink=\"opportunities/tenders\">Tenders</li> -->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"collapsable-nav\">\r\n        <ul class=\"navbar-nav mt-2 mt-lg-0\">\r\n          <li class=\"nav-item\" id=\"home\">\r\n            <a href=\"\" routerLink=\"/home\">\r\n              <i class=\"fas fa-home\"></i>\r\n            </a>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/about-us\">\r\n              {{ 'menu.about-us' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/about-us/about-nsia\">{{'submenu.about-nsia' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/about-us/biographies\">{{'submenu.biographies' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/finance\">Finance</a> -->\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/activity-achievments\">{{'submenu.achievments' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/structure\">{{'submenu.structure' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/vision-mission\">Vision And Mission</a> -->\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/services\">\r\n              {{ 'menu.services' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('stats')\">{{'submenu.statistics' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('nid')\">{{'submenu.nid' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('gis')\">{{'submenu.gis' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('sdu')\">{{'submenu.isd' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('prs')\">{{'submenu.provincial-s' | translate}}</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/library\">\r\n              {{ 'menu.library' | translate }}\r\n            </a>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/library/reports\">{{'submenu.reports' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/library/articles\">{{'submenu.articles' | translate}}</a>\r\n            </div> -->\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <!-- <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/access-info\">\r\n              {{ 'menu.access-info' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/guidelines\">Guidelines</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/statistics\">Statistics</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/nid\">National Identity</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/regualtions\">Regulations</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/policies\">Policies</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">  \r\n            <div></div>\r\n          </div> -->\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/media-room\">\r\n              {{ 'menu.media-room' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/event\">{{'submenu.events' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/media-room/news-updates\">{{'submenu.news-updates' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/media-room/press-release\">{{'submenu.press-release' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/magazine\">Promoting materials</a> -->\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/newsletters\">Newsletters</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/poster\">Poster</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/booklet\">Booklet</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/brochures\">Brochures</a> -->\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/opportunities/jobs\">\r\n              {{ 'menu.opportunities' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/opportunities/jobs\">{{'submenu.jobs' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/opportunities/procurements\">Procurements</a> -->\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/opportunities/procurements\">{{'submenu.procurement' | translate}}</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n        </ul>\r\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form> -->\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"search-result-wrapper\" id=\"search-result-wrapper\">\r\n    <i class=\"fas fa-times\" (click)=\"hideSearchResults()\"></i>\r\n    <div class=\"search-results\">\r\n      <div class=\"result-links result\">\r\n        <h4 class=\"search-item-title\">Links</h4>\r\n        <ul>\r\n          <li *ngFor=\"let ln of quickLinks | searchFilter:sText\" (click)=\"gotoLink(ln)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            {{ln[linkTitle]}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.services.length > 0\">\r\n        <h4 class=\"search-item-title\">Services</h4>\r\n        <ul>\r\n          <li *ngFor=\"let sr of searchCategories.services\" (click)=\"showServiceDetails(sr)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"sr.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.news.length > 0\">\r\n        <h4 class=\"search-item-title\">News and Updates</h4>\r\n        <ul>\r\n          <li *ngFor=\"let nw of searchCategories.news\" (click)=\"followLink('/media-room/media', nw.id)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"nw.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.biographies.length > 0\">\r\n        <h4 class=\"search-item-title\">Biographies</h4>\r\n        <ul>\r\n          <li *ngFor=\"let bi of searchCategories.biographies\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"bi.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-attachments result\" *ngIf=\"searchCategories.attachments.length > 0\">\r\n        <h4 class=\"search-item-title\">Attachments</h4>\r\n        <ul *ngIf=\"linksArray\">\r\n          <li *ngFor=\"let at of searchCategories.attachments\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"at\"></span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-attachments result\"\r\n        *ngIf=\"searchCategories.procurements.length > 0 || searchCategories.jobs.length > 0\">\r\n        <h4 class=\"search-item-title\">Opportunities</h4>\r\n        <div class=\"sr-jobs\" *ngIf=\"searchCategories.jobs.length > 0\">\r\n          <h5>Jobs</h5>\r\n          <ul>\r\n            <li *ngFor=\"let jb of searchCategories.jobs\" (click)=\"followLink('/opportunities/job', jb.id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span [innerHTML]=\"jb.title.rendered\"></span></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"sr-procurements\" *ngIf=\"searchCategories.procurements.length > 0\">\r\n          <h5>Procurements</h5>\r\n          <ul>\r\n            <li *ngFor=\"let prc of searchCategories.procurements\" (click)=\"followLink('/opportunities/tender', prc.id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span [innerHTML]=\"prc.title.rendered\"></span></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- Modal for google map -->\r\n<!-- Button trigger modal -->\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade \" id=\"mapModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mapModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=map #map></div>\r\n        <div class=\"address\">\r\n          <h6>7th District, Chahel saton street, beside of bagh babar</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal  -->\r\n<div class=\"modal fade \" id=\"serviceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"serviceModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"service-details\" [innerHTML]=\"serviceDetails\"></div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- // My location 34.498340, 69.157875 -->\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _quickLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quickLinks */ "./src/app/shared/quickLinks.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search.service */ "./src/app/shared/search.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, router, dataService, searchService) {
        // translate.setDefaultLang('en');
        // this.langeuageChangeListener();
        this.translate = translate;
        this.router = router;
        this.dataService = dataService;
        this.searchService = searchService;
        this.searchPostsResult = [];
        this.linksArray = [];
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.searchCategories = {
            services: [],
            biographies: [],
            news: [],
            jobs: [],
            procurements: [],
            attachments: []
        };
        this.webLinks = [
            'home',
            'services',
            'about-us',
            'statistics',
            'GIS',
            'access-info',
            'library',
            'media-room',
            'opportunities'
        ];
        this.quickLinks = _quickLinks__WEBPACK_IMPORTED_MODULE_6__["quickLinks"];
        this.linkTitle = 'engTitle';
        this.dummyLinksTwo = [
            'service',
            'tools',
            '.pdf',
            'some thing',
            'of course'
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        var currentRoute = '';
        jquery__WEBPACK_IMPORTED_MODULE_7__(window).resize(function () {
            _this.map.resize();
        });
        var mapToken = 'pk.eyJ1IjoibWlyd2Fpc2FrcmFtaSIsImEiOiJjanR3bGZwaWswcTdrNDRwbHdzZjR4bGMwIn0.kN5s8PNjviEhk50vK3pHuA';
        //console.log('QuickLinks : ', this.quickLinks);
        mapbox_gl__WEBPACK_IMPORTED_MODULE_4___default.a.accessToken = mapToken;
        window.onload = this.showActiveTab;
        this.getSearchResults();
        // fetch all categories for search purpose
        this.getCategoriesInfo();
        this.getTags();
        this.navbar = document.getElementById('navbar');
        this.searchWrapper = document.getElementById('search-result-wrapper');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.nav-item').removeClass('active');
                currentRoute = _this.router.url.toString();
                // console.log('current route: ', currentRoute);
                if (currentRoute === '/home') {
                    jquery__WEBPACK_IMPORTED_MODULE_7__('#home').addClass('active');
                }
                else {
                    var url = currentRoute.split('/')[1];
                    jquery__WEBPACK_IMPORTED_MODULE_7__('[routerLink="/' + url + '"]').closest('.nav-item').addClass('active');
                }
            }
        });
        /**
         * Collapse the search results on search item clicked
         */
        jquery__WEBPACK_IMPORTED_MODULE_7__('.search-results').on('click', 'li', function () {
            //console.log('I am clicked');
            jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').removeClass('show');
        });
        /**
         * Listener for responsive navbar collapse on item click
         */
        jquery__WEBPACK_IMPORTED_MODULE_7__('#responsive-nav li').click(function () {
            that.toggleRespNav();
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('#responsive-nav p').click(function () {
            that.toggleRespNav();
        });
        this.langeuageChangeListener();
        var sticky = this.navbar.offsetTop;
        window.onscroll = function () {
            that.makeNavbarSticky(sticky);
        };
        jquery__WEBPACK_IMPORTED_MODULE_7__('#mapModal').on('shown.bs.modal', function () {
            _this.map.resize();
        });
        /**
         * Detecte language change on reload
         */
        jquery__WEBPACK_IMPORTED_MODULE_7__('#lang-change').val(this.dataService.language);
        jquery__WEBPACK_IMPORTED_MODULE_7__('#lang-change2').val(this.dataService.language);
    };
    NavbarComponent.prototype.createMap = function () {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_4___default.a.Map({
            container: this.mapElement.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 15.27,
            center: [69.1575, 34.4992]
        });
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.createMap();
        this.map.on('load', function () {
            /* Image: An image is loaded and added to the map. */
            _this.map.loadImage('https://i.imgur.com/MK4NUzI.png', function (error, image) {
                if (error) {
                    throw error;
                }
                _this.map.addImage('custom-marker', image);
                /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
                _this.map.addLayer({
                    id: 'markers',
                    type: 'symbol',
                    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [
                                {
                                    type: 'Feature',
                                    properties: {},
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [69.1579, 34.4985]
                                    }
                                }
                            ]
                        }
                    },
                    layout: {
                        'icon-image': 'custom-marker',
                    }
                });
            });
        });
    };
    NavbarComponent.prototype.toggleRespNav = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#responsive-nav').toggleClass('r-show');
        // console.log('I am clicked');
    };
    NavbarComponent.prototype.showActiveTab = function () {
        var currentRoute = '';
        jquery__WEBPACK_IMPORTED_MODULE_7__('.nav-item').removeClass('active');
        currentRoute = location.pathname.toString();
        if (currentRoute === '/home') {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#home').addClass('active');
        }
        else {
            var url = currentRoute.split('/')[1];
            jquery__WEBPACK_IMPORTED_MODULE_7__('[routerLink="/' + url + '"]').closest('.nav-item').addClass('active');
        }
    };
    NavbarComponent.prototype.langeuageChangeListener = function () {
        var _this = this;
        // When the language changes, refresh the component to fetch the
        // language specific contents
        this.translate.onLangChange.subscribe(function (event) {
            _this.dataService.language = event.lang;
            // Save the language into localstorage for future reference
            localStorage.setItem('lang', event.lang);
            if (event.lang !== 'en') {
                _this.linkTitle = 'engTitle';
                jquery__WEBPACK_IMPORTED_MODULE_7__('body').addClass('rtl');
                _this.dataService.sliderDirection = 'rtl_slider';
                if (event.lang === 'ps') {
                    _this.linkTitle = 'psTitle';
                }
                else {
                    _this.linkTitle = 'faTitle';
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_7__('body').removeClass('rtl');
                _this.linkTitle = 'engTitle';
                _this.dataService.sliderDirection = 'ltr_slider';
            }
            jquery__WEBPACK_IMPORTED_MODULE_7__('#lang-change').val(event.lang);
            jquery__WEBPACK_IMPORTED_MODULE_7__('#lang-change2').val(event.lang);
            // console.log('the path is :', location.pathname);
            var pt = location.pathname;
            _this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
                return _this.router.navigate([pt]);
            });
        });
    };
    NavbarComponent.prototype.useLanguage = function (language) {
        //console.log(language.id);
        if (jquery__WEBPACK_IMPORTED_MODULE_7__(language).is(':visible')) {
            this.translate.use(language.value);
            this.hideSearchResults();
        }
    };
    NavbarComponent.prototype.updateServiceType = function (sType) {
        this.dataService.serviceType = sType;
        sessionStorage.setItem('serviceType', sType);
        sessionStorage.removeItem('sub-menu.type');
        sessionStorage.removeItem('sub-menu.id');
        sessionStorage.removeItem('department');
        this.dataService.callServiceCmpMethod();
    };
    NavbarComponent.prototype.getTags = function () {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('name');
        this.searchService.getTags(customParams).subscribe(function (data) {
            _this.tags = data;
            // console.log('tags: ', this.tags);
        });
    };
    NavbarComponent.prototype.getCategoriesInfo = function () {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('name');
        this.searchService.getCategories(customParams).subscribe(function (data) {
            if (data) {
                //console.log('categories: ', data);
                _this.categories = data;
            }
        });
    };
    NavbarComponent.prototype.getCategoryName = function (catId) {
        var name = this.categories.filter(function (cat) { return cat.id === catId; });
        return name[0].name;
    };
    NavbarComponent.prototype.getTagName = function (tagId) {
        var name = this.tags.filter(function (cat) { return cat.id === tagId; });
        return name[0].name;
    };
    // hideSearchResult(el) {
    //   console.log('ID is:', el);
    //   if ($('#search-result-wrapper').children(':focus').length === 0) {
    //     $('.search-result-wrapper').removeClass('show');
    //   }
    //   this.sText = '';
    // }
    NavbarComponent.prototype.hideSearchResults = function () {
        this.sText = '';
        jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').removeClass('show');
        // this.searchCategories.attachments = [];
        // this.searchCategories.biographies = [];
        // this.searchCategories.jobs = [];
        // this.searchCategories.news = [];
        // this.searchCategories.procurements = [];
        // this.searchCategories.services = [];
        // this.searchPostsResult = [];
        // this.searchPattern = '';
    };
    NavbarComponent.prototype.showSearchResults = function (e, val) {
        //console.log(e);
        if (!jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').hasClass('show')) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').addClass('show');
        }
        this.searchPattern = val;
        if (val.length > 2) {
            // this.getSearchResults(val);
            this.searchTerm.next(val);
        }
        if (val.length < 1 || e.key === 'Escape') {
            this.hideSearchResults();
        }
    };
    NavbarComponent.prototype.showSearchDiv = function (val) {
        if (val.length > 2) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').hasClass('show')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').addClass('show');
            }
        }
    };
    NavbarComponent.prototype.followLink = function (link, id) {
        var _this = this;
        this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([link, id]);
        });
    };
    NavbarComponent.prototype.gotoLink = function (link) {
        // console.log(link);
        var _this = this;
        if (link.hasOwnProperty('data')) {
            if (link.data.flag === 'service') {
                this.dataService.serviceType = link.data.value;
            }
            if (link.data.flag === 'library') {
                localStorage.setItem('library-type', link.data.value);
            }
        }
        this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([link.url]);
        });
    };
    NavbarComponent.prototype.searchFocusOut = function () {
        var el;
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).click(function (e) {
            el = e.target;
            // console.log('focused element', $(el).html());
        });
        console.log('parent: ', jquery__WEBPACK_IMPORTED_MODULE_7__(el).parents('#search-result-wrapper').length);
        if (jquery__WEBPACK_IMPORTED_MODULE_7__(el).parents('#search-result-wrapper').length < 1) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('.search-result-wrapper').removeClass('show');
        }
    };
    NavbarComponent.prototype.groupSearchResults = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var dt = data_1[_i];
            //  console.log('Post Category', this.getCategoryName(dt.categories[0]));
            var catType = this.getCategoryName(dt.categories[0]);
            var ct = catType.split('_');
            var c = ct[ct.length - 1];
            // console.log('category type: ', c);
            switch (c.toLowerCase()) {
                case 'biography':
                    this.searchCategories.biographies.push(dt);
                    break;
                case 'services':
                case 'slider':
                    this.searchCategories.services.push(dt);
                    this.getAttachments(dt);
                    break;
                case 'events':
                case 'news':
                case 'press':
                case 'publications':
                    this.searchCategories.news.push(dt);
                    break;
                case 'job':
                    this.searchCategories.jobs.push(dt);
                    break;
                case 'tender':
                    this.searchCategories.procurements.push(dt);
                    break;
                case 'books':
                case 'surveys':
                case 'reports':
                case 'magazine':
                case 'article':
                case 'newsletter':
                case 'policies':
                    this.getAttachments(dt);
                    break;
            }
        }
        // console.log('categorized data: ', this.searchCategories);
        this.boldMatchedText();
    };
    NavbarComponent.prototype.boldMatchedText = function () {
        // tslint:disable-next-line: forin
        for (var item in this.searchCategories) {
            //  console.log('Type of Item : ', typeof item);
            var catArray = this.searchCategories[item];
            for (var _i = 0, catArray_1 = catArray; _i < catArray_1.length; _i++) {
                var cat = catArray_1[_i];
                if (cat.hasOwnProperty('title')) {
                    // first find all the matches
                    var matches = cat.title.rendered.match(new RegExp(this.searchPattern, 'gi'));
                    //   console.log('Matches are: ', matches);
                    if (matches) {
                        for (var _a = 0, matches_1 = matches; _a < matches_1.length; _a++) {
                            var mt = matches_1[_a];
                            var str = cat.title.rendered.replace(mt, "<b class=\"text-green\">" + mt + "</b>");
                            cat.title.rendered = str;
                        }
                    }
                }
            }
        }
    };
    NavbarComponent.prototype.getSearchResults = function () {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('title');
        customParams.push('content.rendered');
        customParams.push('acf');
        customParams.push('tags');
        customParams.push('categories');
        this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (val) {
            return _this.searchService.getSearchResults(val, customParams);
        })).subscribe(function (data) {
            _this.searchCategories.attachments = [];
            _this.searchCategories.biographies = [];
            _this.searchCategories.jobs = [];
            _this.searchCategories.news = [];
            _this.searchCategories.procurements = [];
            _this.searchCategories.services = [];
            _this.searchPostsResult = [];
            if (data) {
                _this.searchPostsResult = data;
                //  console.log('search results first: ', this.searchPostsResult);
                /**
                 * This is to check if the @searchPattern is matching any category name
                 */
                var matchedCategories = _this.matchCategoryNames(_this.searchPattern);
                //  console.log('matched categories: ', matchedCategories);
                if (matchedCategories.length > 0) {
                    _this.searchService.getCategoriesData(matchedCategories, customParams).subscribe(function (catData) {
                        if (catData) {
                            //  console.log('category dataa: ', catData);
                            catData.map(function (d) {
                                if ((_this.searchPostsResult.filter(function (sr) { return d.id === sr.id; })).length < 1) {
                                    _this.searchPostsResult.push(d);
                                }
                                else {
                                    //     console.log('ID matched');
                                }
                            });
                            // this.searchPostsResult.concat(catData);
                            //  console.log('search results amended: ', this.searchPostsResult);
                            _this.groupSearchResults(_this.searchPostsResult);
                        }
                    });
                }
                else {
                    // console.log('search results: ', this.searchPostsResult);
                    _this.groupSearchResults(_this.searchPostsResult);
                }
                //  this.getAttachments(data);
            }
        });
    };
    NavbarComponent.prototype.matchCategoryNames = function (searchPattern) {
        var matchedCatTypes = [];
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var ct = _a[_i];
            if (ct.name.toLowerCase().includes(searchPattern)) {
                matchedCatTypes.push(ct.name);
            }
        }
        return matchedCatTypes;
    };
    NavbarComponent.prototype.getAttachments = function (ps) {
        var _this = this;
        var tempLinksArray;
        this.linksArray = [];
        var pattern = /<a[A-Za-z0-9_@./#&\s>"=\-:]*<\/a>/g;
        if (ps.hasOwnProperty('content')) {
            tempLinksArray = [];
            tempLinksArray = ps.content.rendered.match(pattern);
            // console.log('pattern result: ', tempLinksArray);
            if (tempLinksArray) {
                tempLinksArray.map(function (vl) {
                    vl = vl.replace('">', '" target="_blank">');
                    // this.linksArray.push(vl);
                    _this.searchCategories.attachments.push(vl);
                });
                // console.log('links result: ', tempLinksArray);
            }
        }
        //  console.log('the final links array is: ', this.linksArray);
    };
    NavbarComponent.prototype.showServiceDetails = function (service) {
        var _this = this;
        var serviceType = this.getCategoryName(service.categories[0]);
        var serviceShortName = serviceType.split('_')[0].toLowerCase();
        if (serviceType.toLowerCase().includes('stat')) {
            serviceShortName = 'stats';
        }
        var depType = serviceShortName + "_department";
        // console.log('service type: ', serviceType);
        // console.log('service short: ', serviceShortName);
        if (serviceType.toLowerCase().includes('service')) {
            var tagName = this.getTagName(service.tags[0]).toLowerCase();
            if (tagName !== 'service') {
                if (tagName === 'headship') {
                    var customParams = [];
                    customParams.push('id');
                    customParams.push('acf');
                    var departmentName_1 = service.acf[depType];
                    var depId_1;
                    //   console.log('department: ', departmentName);
                    // first check if department is already fetched as well
                    depId_1 = this.getAvailableDepartmentID(depType, departmentName_1, service.id, service.tags[0]);
                    if (depId_1) {
                        // console.log('available locally', depId);
                        sessionStorage.setItem('serviceType', serviceShortName);
                        sessionStorage.setItem('department', "id" + depId_1);
                        sessionStorage.setItem('sub-menu.type', 'headship');
                        sessionStorage.setItem('sub-menu.id', service.id);
                        this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
                            return _this.router.navigate(['/services']);
                        });
                    }
                    else {
                        this.searchService.getRelatedDepartmentId(serviceType, 'department', customParams).subscribe(function (data) {
                            //   console.log('related department: ', data);
                            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                                var dp = data_2[_i];
                                if (dp.acf[depType] === departmentName_1) {
                                    depId_1 = "id" + dp.id;
                                    //   console.log('Matched');
                                    break;
                                }
                            }
                            sessionStorage.setItem('serviceType', serviceShortName);
                            sessionStorage.setItem('department', depId_1);
                            sessionStorage.setItem('sub-menu.type', 'headship');
                            sessionStorage.setItem('sub-menu.id', service.id);
                            _this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
                                return _this.router.navigate(['/services']);
                            });
                        });
                    }
                }
                else {
                    sessionStorage.setItem('serviceType', serviceShortName);
                    sessionStorage.setItem('department', "id" + service.id);
                    sessionStorage.setItem('sub-menu.type', 'department');
                    sessionStorage.setItem('sub-menu.id', service.id);
                    this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(function () {
                        return _this.router.navigate(['/services']);
                    });
                }
            }
        }
        else {
            this.serviceDetails = service.content.rendered;
            jquery__WEBPACK_IMPORTED_MODULE_7__('#serviceModal').modal('show');
        }
    };
    NavbarComponent.prototype.getAvailableDepartmentID = function (depType, depName, sID, tag) {
        for (var _i = 0, _a = this.searchCategories.services; _i < _a.length; _i++) {
            var sr = _a[_i];
            if (sr.acf[depType] === depName && sr.id !== sID && sr.tags[0] !== tag) {
                //  console.log('matched id is : ', sr.acf[depType]);
                //  console.log(depName);
                //  console.log('id is ', sr.id);
                return sr.id;
            }
        }
        return false;
    };
    NavbarComponent.prototype.makeNavbarSticky = function (sticky) {
        if (window.pageYOffset >= sticky) {
            this.navbar.classList.add('sticky');
            this.searchWrapper.classList.add('sticky');
            this.searchWrapper.classList.add('pd-top');
            this.navbar.classList.add('active-bar');
        }
        else {
            this.navbar.classList.remove('sticky');
            this.searchWrapper.classList.remove('sticky');
            this.searchWrapper.classList.remove('pd-top');
            this.navbar.classList.remove('active-bar');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "mapElement", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/news/news.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/news/news.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".globalsidebar {\r\n    height: 100%;\r\n    overflow-wrap: break-word;\r\n    padding:15px; \r\n    font-weight: bold !important;\r\n    border-left : 1px solid #282560; \r\n    padding-left:30px \r\n}\r\n.globalsidebar a {\r\n    display: block;\r\n    color:#282560;\r\n}\r\n.globalsidebar a:hover:not(.active) {\r\n    color: #01a79b;\r\n}\r\n.margin-top{\r\n    margin-top: 30px;\r\n}\r\n.globalsidebar p{\r\n    color: gray;\r\n    font-size: small;\r\n    font-weight: normal;\r\n}\r\nh4{\r\n    font-weight: bold !important;\r\n}\r\nimg {\r\n    width: 100%;\r\n    height: 100% ;\r\n}\r\n.newsside{\r\n    margin-bottom: 10px;\r\n    margin-left: -13px;\r\n    height: 40%;\r\n    width: 40%;\r\n}\r\n#news-read-more:disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQjtBQUNKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2xvYmFsc2lkZWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgcGFkZGluZzoxNXB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdCA6IDFweCBzb2xpZCAjMjgyNTYwOyBcclxuICAgIHBhZGRpbmctbGVmdDozMHB4IFxyXG59XHJcbi5nbG9iYWxzaWRlYmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjojMjgyNTYwO1xyXG59XHJcbi5nbG9iYWxzaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGNvbG9yOiAjMDFhNzliO1xyXG59XHJcbi5tYXJnaW4tdG9we1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZ2xvYmFsc2lkZWJhciBwe1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlIDtcclxufVxyXG4ubmV3c3NpZGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4jbmV3cy1yZWFkLW1vcmU6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/news/news.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/news/news.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"globalsidebar\">\r\n  <h4>{{ 'label.news' | translate }}</h4>\r\n  <hr>\r\n  <div *ngIf=\"newsBriefs.news != ''; else nonews\">\r\n    <div class=\"row\" *ngFor=\"let nw of newsBriefs.news\">\r\n      <div class=\"col-md-4 col-sm-5 col-xs-3 newsside\">\r\n        <img src=\"../../assets/images/newsIcon.png\" alt=\"News\">\r\n      </div>\r\n      <div class=\"col-md-8 col-sm-7 col-xs-4 display newsside\">\r\n        <a [routerLink]=\"['/media-room/media', nw.id]\">\r\n          {{ getBrief(nw.title.rendered) }}\r\n        </a>\r\n        <p>{{ nw.date }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #nonews>\r\n    <div class=\"jumbotron text-center no-data\">\r\n      <h4>{{'label.no-data' | translate}}</h4>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-outline-info\" (click)=\"readMoreRedirect($event.target)\"\r\n      id=\"news-read-more\" [disabled]=\"newsBriefs.news === ''\">{{'btn.view-all-news' | translate}}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/news/news.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/news/news.component.ts ***!
  \***********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");





var NewsComponent = /** @class */ (function () {
    function NewsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newsBriefs = {
            news: ''
        };
        this.newsReadMore = '/media-room/news-updates';
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNewsData('news', 4);
    };
    NewsComponent.prototype.getNewsData = function (type, perPage) {
        var _this = this;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('date');
        customParams.push('id');
        this.dataService.getCardsData(customParams, type, perPage).subscribe(function (newsData) {
            // tslint:disable-next-line: no-string-literal
            _this.newsBriefs['news'] = _this.refineData(newsData);
        });
    };
    NewsComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(el.date, 'dd MMM yyyy', 'en-US', '+0530');
            }
        }
        return data;
    };
    NewsComponent.prototype.readMoreRedirect = function (el) {
        if (el.id === 'news-read-more') {
            //console.log('before redirectNews: ', this.newsReadMore);
            this.router.navigate([this.newsReadMore]);
        }
    };
    NewsComponent.prototype.getBrief = function (ds) {
        if (ds.length > 60) {
            return ds.substring(0, 65) + '...';
        }
        return ds;
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/shared/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/shared/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/shared/promotional-materials/promotional-materials.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/promotional-materials/promotional-materials.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9tb3Rpb25hbC1tYXRlcmlhbHMvcHJvbW90aW9uYWwtbWF0ZXJpYWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/promotional-materials/promotional-materials.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/promotional-materials/promotional-materials.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"promote-material globalsidebar\">\r\n  <div class=\"title\">\r\n    <h5>{{'label.promoting-material' | translate }}</h5>\r\n  </div>\r\n\r\n\r\n  <div class=\"materials\" *ngIf=\"promoMaterialFlag; else nodata\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"orgs.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{orgs[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Org Profile.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Org Profile</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"brochures.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{brochures[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Brochure.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Brochure</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"posters.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{posters[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Poster.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Poster</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"flyers.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{flyers[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Flyer.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Flyer</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"booklets.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{booklets[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Booklet.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Booklet</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"newsletters.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a [href]=\"newsletters[0].attachment\" download=\"Newsletter.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Newsletter</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #nodata>\r\n    <div class=\"jumbotron text-center no-data\">\r\n      <h4>{{'label.no-data' | translate}}</h4>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/promotional-materials/promotional-materials.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/promotional-materials/promotional-materials.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PromotionalMaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionalMaterialsComponent", function() { return PromotionalMaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");



var PromotionalMaterialsComponent = /** @class */ (function () {
    function PromotionalMaterialsComponent(dataService) {
        this.dataService = dataService;
        this.orgs = [];
        this.brochures = [];
        this.posters = [];
        this.flyers = [];
        this.booklets = [];
        this.newsletters = [];
        this.promoMaterialFlag = false;
    }
    PromotionalMaterialsComponent.prototype.ngOnInit = function () {
        this.getPromotingMaterial('Promotional_Materials');
        this.getNewsMaterial('Newsletter', 1);
    };
    PromotionalMaterialsComponent.prototype.getNewsMaterial = function (type, perPage) {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('content');
        this.dataService.getNewsData(customParams, type, perPage).subscribe(function (newsData) {
            //  console.log('Newsletter data: ', this.newsletters);
            if (newsData[0]) {
                newsData[0] = _this.getAttachments(newsData[0]);
                _this.newsletters.push(newsData[0]);
                //  console.log('Newsletter data: ', newsData[0]);
                _this.promoMaterialFlag = true;
            }
        });
    };
    PromotionalMaterialsComponent.prototype.getAttachments = function (ps) {
        //  console.log('It has data', ps);
        var tempLinksArray;
        var pattern = /\"[A-Za-z0-9_@./#&\s>"=\-:]*\"/g;
        if (ps.hasOwnProperty('content')) {
            tempLinksArray = [];
            tempLinksArray = ps.content.rendered.match(pattern);
            if (tempLinksArray) {
                tempLinksArray[0] = tempLinksArray[0].replace(new RegExp('"', 'g'), '');
                //  console.log('pattern result: ', tempLinksArray[0]);
                ps.attachment = tempLinksArray[0];
            }
        }
        return ps;
    };
    PromotionalMaterialsComponent.prototype.getPromotingMaterial = function (type) {
        var _this = this;
        var customParams = [];
        customParams.push('acf.promotional_materials_attachment.url');
        customParams.push('acf.promotional_materials_type');
        this.dataService.getMediaData(customParams, type).subscribe(function (promotingMaterialData) {
            // console.log('Prmotional materials: ', promotingMaterialData);
            if (promotingMaterialData.length > 0) {
                _this.promoMaterialFlag = true;
                // tslint:disable-next-line: forin
                for (var key in promotingMaterialData) {
                    switch (promotingMaterialData[key].acf.promotional_materials_type) {
                        case 'booklet': {
                            _this.booklets.push(promotingMaterialData[key]);
                            break;
                        }
                        case 'flyer': {
                            _this.flyers.push(promotingMaterialData[key]);
                            break;
                        }
                        case 'poster': {
                            _this.posters.push(promotingMaterialData[key]);
                            break;
                        }
                        case 'brochure': {
                            _this.brochures.push(promotingMaterialData[key]);
                            break;
                        }
                        case 'org_proﬁle': {
                            _this.orgs.push(promotingMaterialData[key]);
                            break;
                        }
                    }
                }
            }
        });
    };
    PromotionalMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotional-materials',
            template: __webpack_require__(/*! ./promotional-materials.component.html */ "./src/app/shared/promotional-materials/promotional-materials.component.html"),
            styles: [__webpack_require__(/*! ./promotional-materials.component.css */ "./src/app/shared/promotional-materials/promotional-materials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PromotionalMaterialsComponent);
    return PromotionalMaterialsComponent;
}());



/***/ }),

/***/ "./src/app/shared/quickLinks.ts":
/*!**************************************!*\
  !*** ./src/app/shared/quickLinks.ts ***!
  \**************************************/
/*! exports provided: quickLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickLinks", function() { return quickLinks; });
var quickLinks = [
    {
        engTitle: 'home',
        faTitle: 'صفحه اصلي',
        psTitle: 'اصلي صفحه',
        url: ''
    }, {
        engTitle: 'services',
        faTitle: 'خدمات',
        psTitle: 'خدمتونه',
        url: '/services'
    }, {
        engTitle: 'library',
        faTitle: 'کتابخانه',
        psTitle: 'کتابتون',
        url: '/library'
    }, {
        engTitle: 'about us',
        faTitle: 'درباره ما',
        psTitle: 'زموږ په اړه',
        url: '/about-us'
    }, {
        engTitle: 'access to info',
        faTitle: 'دسترسی به اطلاعات',
        psTitle: 'اطلاعاتو ته لاسرسی',
        url: '/access-info'
    }, {
        engTitle: 'Media room',
        faTitle: 'اتاق رسانه',
        psTitle: 'رسنیزه خونه',
        url: '/media-room'
    }, {
        engTitle: 'opportunities',
        faTitle: 'فرصت ها',
        psTitle: 'فرصتونه',
        url: '/opportunities'
    },
    {
        engTitle: 'Geographical Information Systems',
        faTitle: 'انسجام معلومات جغرافیایی',
        psTitle: 'د جغرافیایي معلوماتو انسجام',
        slug: 'service gis',
        url: '/services',
        data: {
            flag: 'service',
            value: 'gis'
        }
    }, {
        engTitle: 'Statistics Services',
        faTitle: 'احصائیه',
        psTitle: 'احصاییه',
        slug: 'service stat statistic',
        url: '/services',
        data: {
            flag: 'service',
            value: 'stat'
        }
    }, {
        engTitle: 'Information Systems Development',
        faTitle: 'انسجام و انکشاف سیستم های معلوماتی',
        psTitle: 'د معلوماتي سیستمونو انسجام او پراختیا',
        slug: 'service sdu',
        url: '/services',
        data: {
            flag: 'service',
            value: 'sdu'
        }
    }, {
        engTitle: 'National Identity',
        slug: 'service nid tazkira',
        faTitle: 'ثبت احوال نفوس',
        psTitle: 'د نفوس د احوال ثبت',
        url: '/services',
        data: {
            flag: 'service',
            value: 'nid'
        }
    }, {
        engTitle: 'Books',
        faTitle: 'کتاب ها',
        psTitle: 'کتابونه',
        slug: 'library kitab',
        url: '/library',
        data: {
            flag: 'library',
            value: 'books'
        }
    }, {
        engTitle: 'Surveys',
        faTitle: 'سروی ها',
        psTitle: 'سروې',
        slug: 'library',
        url: '/library',
        data: {
            flag: 'library',
            value: 'surveys'
        }
    }, {
        engTitle: 'Reports',
        faTitle: 'گزارش ها',
        psTitle: 'راپورونه',
        slug: 'library rapor',
        url: '/library',
        data: {
            flag: 'library',
            value: 'reports'
        }
    }, {
        engTitle: 'magazine',
        faTitle: 'مجلات',
        psTitle: 'مجلې',
        slug: 'library',
        url: '/library',
        data: {
            flag: 'library',
            value: 'magazines'
        }
    }, {
        engTitle: 'Articles',
        faTitle: 'مقالات',
        psTitle: 'مقالې',
        slug: 'library',
        url: '/library',
        data: {
            flag: 'library',
            value: 'articles'
        }
    }, {
        engTitle: 'Newsletter',
        faTitle: 'خبرنامه',
        psTitle: 'خبرپاڼه',
        slug: 'library',
        url: '/library',
        data: {
            flag: 'library',
            value: 'newsletters'
        }
    }, {
        engTitle: 'Policies',
        faTitle: 'پالسی ها',
        psTitle: 'پالیسۍ',
        slug: 'library',
        url: '/library',
        data: {
            flag: 'library',
            value: 'policies'
        }
    }
];


/***/ }),

/***/ "./src/app/shared/search.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
        var _this = this;
        this.filterContents = function (item) {
            if (item.hasOwnProperty('slug')) {
                if ((item.engTitle.search(new RegExp(_this.fText, 'i')) > -1) ||
                    (item.faTitle.search(new RegExp(_this.fText, 'i')) > -1) ||
                    (item.psTitle.search(new RegExp(_this.fText, 'i')) > -1) ||
                    (item.slug.search(new RegExp(_this.fText, 'i')) > -1)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                if ((item.engTitle.search(new RegExp(_this.fText, 'i')) > -1) ||
                    (item.faTitle.search(new RegExp(_this.fText, 'i')) > -1) ||
                    (item.psTitle.search(new RegExp(_this.fText, 'i')) > -1)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
    }
    SearchFilterPipe.prototype.transform = function (list, filterText) {
        this.fText = filterText;
        return list ? list.filter(this.filterContents) : [];
    };
    SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchFilter'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var SearchService = /** @class */ (function () {
    function SearchService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    SearchService.prototype.getSearchResults = function (val, fields) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                search: val,
                fields: fields.join(',')
            }
        });
    };
    SearchService.prototype.getCategories = function (customParams) {
        return this.http.get(this.dataService.api + 'categories', {
            params: {
                per_page: '50',
                fields: customParams.join(',')
            }
        });
    };
    SearchService.prototype.getTags = function (customParams) {
        return this.http.get(this.dataService.api + 'tags', {
            params: {
                fields: customParams.join(',')
            }
        });
    };
    SearchService.prototype.getCategoriesData = function (categories, customParams) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[category_name]': categories.join(','),
                fields: customParams.join(',')
            }
        });
    };
    SearchService.prototype.getRelatedDepartmentId = function (sType, tag, customParams) {
        //console.log('Data variables');
        // console.log('service type: ', sType);
        // console.log('tag: ', tag);
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                'filter[category_name]': sType,
                'filter[tag]': tag,
                fields: customParams.join(',')
            }
        });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: createTranslateLoader, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/shared/news/news.component.ts");
/* harmony import */ var _promotional_materials_promotional_materials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./promotional-materials/promotional-materials.component */ "./src/app/shared/promotional-materials/promotional-materials.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.pipe */ "./src/app/shared/search.pipe.ts");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _promotional_materials_promotional_materials_component__WEBPACK_IMPORTED_MODULE_9__["PromotionalMaterialsComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchFilterPipe"]
            ],
            exports: [
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _promotional_materials_promotional_materials_component__WEBPACK_IMPORTED_MODULE_9__["PromotionalMaterialsComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchFilterPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
                    }
                }),
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sediqa\Desktop\nsia-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map