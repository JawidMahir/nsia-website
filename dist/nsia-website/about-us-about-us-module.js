(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-home/about-home.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-home/about-home.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-8 col-sm-8 col-lg-8 col-xs-9\">\r\n          <div class=\"content\">\r\n            <!-- <router-outlet></router-outlet> -->\r\n            <main [@fadeInOut]=\"getPage(o)\">\r\n              <router-outlet #o=\"outlet\"></router-outlet>\r\n            </main>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-11\">\r\n          <div class=\"news\" *ngIf=\"showNews; else showPromo\">\r\n            <app-news></app-news>\r\n          </div>\r\n          <ng-template #showPromo>\r\n            \r\n              <app-promotional-materials></app-promotional-materials>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-nsia/about-nsia.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-nsia/about-nsia.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us about-nsia content-justify\" *ngIf=\"aboutNSIA; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ aboutNSIA.title.rendered }}</h4>\r\n  </div>\r\n  <div class=\"vision-mission\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n        <div class=\"title\">\r\n          <h5>{{'label.vision' | translate }}</h5>\r\n        </div>\r\n        <div class=\"vision\">\r\n          <p>{{ aboutNSIA.acf?.vision }}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n        <div class=\"title\">\r\n          <h5>{{ 'label.mission' | translate }}</h5>\r\n        </div>\r\n        <div class=\"mission\">\r\n          <p>{{ aboutNSIA.acf?.mission }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"about-details\">\r\n    <div *ngIf=\"aboutNSIA.content\" class=\"details\" [innerHTML]=\"aboutNSIA.content.rendered\">\r\n    </div>\r\n    <div *ngIf=\"videoLink\"> \r\n      <iframe width=\"850\" height=\"500\" [src]=\"videoLink\" frameborder=\"0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/activity/activity.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/activity/activity.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us activity content-justify\" *ngIf=\"activity; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ activity.title.rendered }}</h4>\r\n  </div>\r\n  <div *ngIf=\"activity.content\" class=\"details\" [innerHTML]=\"activity.content.rendered\">\r\n  </div>\r\n  <div *ngIf=\"videoLink\">\r\n      <iframe width=\"850\" height=\"500\" [src]=\"videoLink\" frameborder=\"0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/bio/bio.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/bio/bio.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bio works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/biographies/biographies.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/biographies/biographies.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us bios content-justify\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ 'submenu.biographies' | translate }}</h4>\r\n  </div>\r\n  <div class=\"description\" *ngIf=\"bios.length; else nobios\">\r\n    <div class=\"bio\" *ngFor=\"let b of contents | paginate: { itemsPerPage: 5 , currentPage: p , totalItems: total }\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n          <div class=\"uni-logo\">\r\n            <img *ngIf=\"b.better_featured_image; else noimage\" [src]=\"b.better_featured_image.source_url\"\r\n              alt=\"university\" (error)=\"imageError($event.target);\">\r\n            <ng-template #noimage>\r\n              <img src=\"../../../assets/images/noimage.svg\" alt=\"\">\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-9 col-md-8 col-sm-6\">\r\n          <h4 class=\"bio-name\">{{ b.title.rendered }}</h4>\r\n          <div class=\"details\">\r\n            <p>{{ b.content.rendered }} </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <pagination-controls class=\"bios-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\" responsive=\"true\"\r\n        maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n        nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n  <ng-template #nobios>\r\n    <div class=\"jumbotron no-data\">\r\n      <div [class.dot-falling]=\"loading\"></div>\r\n      <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/policies/policies.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/policies/policies.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us policies content-justify\" *ngIf=\"policies; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ policies.title.rendered }}</h4>\r\n  </div>\r\n  <div *ngIf=\"policies.content\" class=\"details\" [innerHTML]=\"policies.content.rendered\">\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/structure/structure.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/structure/structure.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us structure content-justify\" *ngIf=\"structure; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ structure.title.rendered }}</h4>\r\n  </div>\r\n  <div *ngIf=\"structure.content.rendered\" class=\"description\" [innerHTML]=\"structure.content.rendered\">\r\n    <div class=\"org-str\">\r\n      <div class=\"download-btn\">\r\n        <i class=\"fas fa-file-pdf\"></i>\r\n        <span>{{ 'btn.download' | translate}}</span>\r\n      </div>\r\n      <div class=\"feature-image\">\r\n        <img [src]=\"structure.better_featured_image.source_url\" alt=\"Structure\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/about-us/about-home/about-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/about-us/about-home/about-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LWhvbWUvYWJvdXQtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-home/about-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/about-us/about-home/about-home.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHomeComponent", function() { return AboutHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");





var AboutHomeComponent = /** @class */ (function () {
    function AboutHomeComponent(router, aboutUs) {
        this.router = router;
        this.aboutUs = aboutUs;
        this.showNews = true;
    }
    AboutHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoute = location.pathname;
        this.toggleNews();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.currentRoute = _this.router.url.toString();
                _this.toggleNews();
            }
        });
    };
    AboutHomeComponent.prototype.toggleNews = function () {
        //console.log('current route: ', this.currentRoute);
        var url = this.currentRoute.split('/');
        // console.log('url length: ', url.length);
        // console.log('url: ', url);
        if (url.length === 2 && url.includes('about-us')) {
            // console.log('sure things');
            this.showNews = false;
        }
        else if (url.length > 2 && url.includes('about-nsia')) {
            //console.log('sure things');
            this.showNews = false;
        }
        else {
            //console.log('not so sure');
            this.showNews = true;
        }
    };
    AboutHomeComponent.prototype.getPage = function (outlet) {
        // tslint:disable-next-line: no-string-literal
        return outlet.activatedRouteData.state;
    };
    AboutHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-home',
            template: __webpack_require__(/*! raw-loader!./about-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-home/about-home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(100%)',
                        opacity: 0
                    })))
                ])
            ],
            styles: [__webpack_require__(/*! ./about-home.component.css */ "./src/app/about-us/about-home/about-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _about_us_service__WEBPACK_IMPORTED_MODULE_4__["AboutUsService"]])
    ], AboutHomeComponent);
    return AboutHomeComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-nsia/about-nsia.component.css":
/*!**************************************************************!*\
  !*** ./src/app/about-us/about-nsia/about-nsia.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* First Primary: #01a79b green */\r\n/* Second Primary: #282560 blue */\r\n.about-nsia .vision-mission,\r\n.about-nsia .vision-mission .title {\r\n    border-bottom: 1px solid #282560;\r\n    margin-bottom: 15px;\r\n}\r\n.about-nsia .about-details .featured-video {\r\n    margin: 4% 0px;\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n.about-nsia .about-details .featured-video iframe,\r\n.about-nsia .about-details .featured-video img {\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtbnNpYS9hYm91dC1uc2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUdqQzs7SUFFSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LW5zaWEvYWJvdXQtbnNpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmlyc3QgUHJpbWFyeTogIzAxYTc5YiBncmVlbiAqL1xyXG4vKiBTZWNvbmQgUHJpbWFyeTogIzI4MjU2MCBibHVlICovXHJcblxyXG5cclxuLmFib3V0LW5zaWEgLnZpc2lvbi1taXNzaW9uLFxyXG4uYWJvdXQtbnNpYSAudmlzaW9uLW1pc3Npb24gLnRpdGxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyNTYwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi5hYm91dC1uc2lhIC5hYm91dC1kZXRhaWxzIC5mZWF0dXJlZC12aWRlbyB7XHJcbiAgICBtYXJnaW46IDQlIDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmFib3V0LW5zaWEgLmFib3V0LWRldGFpbHMgLmZlYXR1cmVkLXZpZGVvIGlmcmFtZSxcclxuLmFib3V0LW5zaWEgLmFib3V0LWRldGFpbHMgLmZlYXR1cmVkLXZpZGVvIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/about-us/about-nsia/about-nsia.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/about-us/about-nsia/about-nsia.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutNsiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutNsiaComponent", function() { return AboutNsiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var AboutNsiaComponent = /** @class */ (function () {
    function AboutNsiaComponent(aboutUs, router) {
        this.aboutUs = aboutUs;
        this.router = router;
        this.loading = true;
    }
    AboutNsiaComponent.prototype.ngOnInit = function () {
        this.getAboutNsia();
    };
    AboutNsiaComponent.prototype.getAboutNsia = function () {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title');
        customParams.push('content');
        customParams.push('acf');
        customParams.push('acf.link');
        this.aboutUs.getAboutNsia(customParams).subscribe(function (data) {
            // console.log('biodata: ', data);
            if (data) {
                _this.loading = false;
                // console.log(data[0].prototype.hasOwnProperty('acf.link'));
                // console.log('acf.link' in data[0])
                // console.log(this.objHasKeys(data[0], ['acf', 'link']));
                // if(data[0].hasOwnProperty('acf.link')){
                if (_this.aboutUs.objHasKeys(data[0], ['acf', 'link'])) {
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_4__["parseHTML"](data[0].acf.link);
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_4__(_this.videoLink).attr('src');
                    _this.videoLink = _this.aboutUs.videoURL(_this.videoLink);
                }
                _this.aboutNSIA = _this.aboutUs.styleDetailsLink(data[0]);
                //console.log('aboutNSIA: ', this.aboutNSIA);
                // if (this.aboutNSIA) {
                //   this.aboutNSIA.content.rendered = this.aboutUs.htmlToPlaintext(this.aboutNSIA.content.rendered);
                // }
            }
        });
    };
    AboutNsiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-nsia',
            template: __webpack_require__(/*! raw-loader!./about-nsia.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-nsia/about-nsia.component.html"),
            styles: [__webpack_require__(/*! ./about-nsia.component.css */ "./src/app/about-us/about-nsia/about-nsia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_about_us_service__WEBPACK_IMPORTED_MODULE_3__["AboutUsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutNsiaComponent);
    return AboutNsiaComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function() { return AboutUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-home/about-home.component */ "./src/app/about-us/about-home/about-home.component.ts");
/* harmony import */ var _about_nsia_about_nsia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-nsia/about-nsia.component */ "./src/app/about-us/about-nsia/about-nsia.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/about-us/activity/activity.component.ts");
/* harmony import */ var _structure_structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./structure/structure.component */ "./src/app/about-us/structure/structure.component.ts");
/* harmony import */ var _biographies_biographies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./biographies/biographies.component */ "./src/app/about-us/biographies/biographies.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/about-us/bio/bio.component.ts");
/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./policies/policies.component */ "./src/app/about-us/policies/policies.component.ts");










var aboutRoutes = [
    {
        path: '',
        component: _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_3__["AboutHomeComponent"],
        children: [
            {
                path: '',
                children: [
                    { path: 'about-nsia', component: _about_nsia_about_nsia_component__WEBPACK_IMPORTED_MODULE_4__["AboutNsiaComponent"] },
                    { path: 'activity-achievments', component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"] },
                    { path: 'structure', component: _structure_structure_component__WEBPACK_IMPORTED_MODULE_6__["StructureComponent"] },
                    { path: 'biographies', component: _biographies_biographies_component__WEBPACK_IMPORTED_MODULE_7__["BiographiesComponent"] },
                    { path: 'rules-policies', component: _policies_policies_component__WEBPACK_IMPORTED_MODULE_9__["PoliciesComponent"] },
                    { path: 'bio/:id', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_8__["BioComponent"] },
                    { path: '', component: _about_nsia_about_nsia_component__WEBPACK_IMPORTED_MODULE_4__["AboutNsiaComponent"] }
                ]
            }
        ]
    }
];
var AboutUsRoutingModule = /** @class */ (function () {
    function AboutUsRoutingModule() {
    }
    AboutUsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(aboutRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AboutUsRoutingModule);
    return AboutUsRoutingModule;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/about-us/about-us-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-home/about-home.component */ "./src/app/about-us/about-home/about-home.component.ts");
/* harmony import */ var _about_nsia_about_nsia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-nsia/about-nsia.component */ "./src/app/about-us/about-nsia/about-nsia.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/about-us/activity/activity.component.ts");
/* harmony import */ var _structure_structure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./structure/structure.component */ "./src/app/about-us/structure/structure.component.ts");
/* harmony import */ var _biographies_biographies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./biographies/biographies.component */ "./src/app/about-us/biographies/biographies.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/about-us/bio/bio.component.ts");
/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./policies/policies.component */ "./src/app/about-us/policies/policies.component.ts");








// Import shared Module here








function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AboutUsModule = /** @class */ (function () {
    function AboutUsModule() {
    }
    AboutUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_9__["AboutHomeComponent"],
                _about_nsia_about_nsia_component__WEBPACK_IMPORTED_MODULE_10__["AboutNsiaComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"],
                _structure_structure_component__WEBPACK_IMPORTED_MODULE_12__["StructureComponent"],
                _biographies_biographies_component__WEBPACK_IMPORTED_MODULE_13__["BiographiesComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_14__["BioComponent"],
                _policies_policies_component__WEBPACK_IMPORTED_MODULE_15__["PoliciesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_us_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutUsRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                })
            ]
        })
    ], AboutUsModule);
    return AboutUsModule;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.service.ts":
/*!**********************************************!*\
  !*** ./src/app/about-us/about-us.service.ts ***!
  \**********************************************/
/*! exports provided: AboutUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsService", function() { return AboutUsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var AboutUsService = /** @class */ (function () {
    function AboutUsService(http, dataService, sanitizer) {
        this.http = http;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    }
    AboutUsService.prototype.fetchData = function (customParams, category) {
        var header = {
            'filter[category_name]': category,
            lang: this.dataService.language,
            fields: customParams.join(',')
        };
        return this.http.get(this.dataService.api + 'posts', {
            params: header
        });
    };
    AboutUsService.prototype.getBios = function (customParams, page) {
        return this.http.get(this.dataService.api + 'posts', {
            observe: 'response',
            params: {
                'filter[category_name]': 'biography',
                per_page: '5',
                page: page,
                lang: this.dataService.language,
                fields: customParams.join(','),
                order: 'asc'
            }
        });
    };
    AboutUsService.prototype.getActivityDetails = function (customParams) {
        return this.fetchData(customParams, 'activity_achievments');
    };
    AboutUsService.prototype.getNsiaStructure = function (customParams) {
        return this.fetchData(customParams, 'structure');
    };
    AboutUsService.prototype.getAboutNsia = function (customParams) {
        return this.fetchData(customParams, 'about_us');
    };
    AboutUsService.prototype.getNsiaPolicies = function (customParams) {
        return this.fetchData(customParams, 'policies');
    };
    AboutUsService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    AboutUsService.prototype.styleDetailsLink = function (data) {
        var contentRendered;
        if (data.hasOwnProperty('content')) {
            contentRendered = data.content.rendered;
            // wrap contents in a div first
            contentRendered = '<div>' + contentRendered + '</div>';
            var details = jquery__WEBPACK_IMPORTED_MODULE_5__["parseHTML"](contentRendered);
            //console.log('details before', $(details).html());
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(details).has('a')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__(details).find('a').attr('target', '_blank');
                jquery__WEBPACK_IMPORTED_MODULE_5__(details).find('a').wrap('<div class="attachment" ></div>');
                jquery__WEBPACK_IMPORTED_MODULE_5__(details).find('a').each(function (i, val) {
                    var fileExtArray = jquery__WEBPACK_IMPORTED_MODULE_5__(val).attr('href').split('.');
                    var fileExt = fileExtArray[fileExtArray.length - 1];
                    // console.log('extension is : ', fileExt);
                    var fileIcon = '<i class="fas fa-file-alt"></i>';
                    if (fileExt === 'xlsx' || fileExt === 'xls') {
                        fileIcon = '<i class="fas fa-file-excel"></i>';
                    }
                    if (fileExt === 'pdf') {
                        fileIcon = '<i class="fas fa-file-pdf"></i>';
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_5__(val).parent().prepend(fileIcon);
                });
            }
            data.content.rendered = jquery__WEBPACK_IMPORTED_MODULE_5__(details).html();
        }
        //console.log('details are done', data);
        return data;
    };
    AboutUsService.prototype.videoURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        //return this.sanitizer.bypassSecurityTrustHtml(url);
    };
    AboutUsService.prototype.objHasKeys = function (obj, keys) {
        var next = keys.shift();
        return obj[next] && (!keys.length || this.objHasKeys(obj[next], keys));
    };
    AboutUsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AboutUsService);
    return AboutUsService;
}());



/***/ }),

/***/ "./src/app/about-us/activity/activity.component.css":
/*!**********************************************************!*\
  !*** ./src/app/about-us/activity/activity.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/activity/activity.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/about-us/activity/activity.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(aboutUs) {
        this.aboutUs = aboutUs;
        this.loading = true;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.getActivityDetails();
    };
    ActivityComponent.prototype.getActivityDetails = function () {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title');
        customParams.push('content');
        customParams.push('acf.link');
        this.aboutUs.getActivityDetails(customParams).subscribe(function (data) {
            if (data) {
                console.log(data[0]);
                _this.loading = false;
                if (_this.aboutUs.objHasKeys(data[0], ['acf', 'link'])) {
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_3__["parseHTML"](data[0].acf.link);
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_3__(_this.videoLink).attr('src');
                    _this.videoLink = _this.aboutUs.videoURL(_this.videoLink);
                }
                _this.activity = _this.aboutUs.styleDetailsLink(data[0]);
                // if (this.activity) { 
                //   this.activity.content.rendered = this.aboutUs.htmlToPlaintext(this.activity.content.rendered);
                // }
            }
        });
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/about-us/activity/activity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/about-us/bio/bio.component.css":
/*!************************************************!*\
  !*** ./src/app/about-us/bio/bio.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Jpby9iaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/about-us/bio/bio.component.ts":
/*!***********************************************!*\
  !*** ./src/app/about-us/bio/bio.component.ts ***!
  \***********************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/about-us/bio/bio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/about-us/biographies/biographies.component.css":
/*!****************************************************************!*\
  !*** ./src/app/about-us/biographies/biographies.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bios .uni-logo img {\r\n  width: 75%;\r\n}\r\n\r\n.bios .bio {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.bios .bio-name {\r\n    text-transform: capitalize;\r\n    font-weight: 500;\r\n}\r\n\r\n.bios .details {\r\n    color: gray;\r\n    text-align: justify;\r\n}\r\n\r\n.bios-pagination /deep/ .ngx-pagination .current {\r\n  background: #01a79b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYmlvZ3JhcGhpZXMvYmlvZ3JhcGhpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYmlvZ3JhcGhpZXMvYmlvZ3JhcGhpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaW9zIC51bmktbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5iaW9zIC5iaW8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG4uYmlvcyAuYmlvLW5hbWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYmlvcyAuZGV0YWlscyB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5iaW9zLXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogIzAxYTc5YjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/biographies/biographies.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/about-us/biographies/biographies.component.ts ***!
  \***************************************************************/
/*! exports provided: BiographiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographiesComponent", function() { return BiographiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");



var BiographiesComponent = /** @class */ (function () {
    function BiographiesComponent(aboutUs) {
        this.aboutUs = aboutUs;
        this.p = 1;
        this.total = 1;
        this.bios = [];
        this.contents = [];
        this.loading = true;
    }
    BiographiesComponent.prototype.ngOnInit = function () {
        this.getBios(this.p);
    };
    BiographiesComponent.prototype.getBios = function (page) {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title');
        customParams.push('content');
        customParams.push('better_featured_image.source_url');
        if ((this.bios.length < 1) || (this.bios.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.aboutUs.getBios(customParams, page).subscribe(function (biosData) {
                // console.log(biosData.body);
                _this.loading = false;
                _this.total = Number(biosData.headers.get('X-WP-Total'));
                var newData = {
                    page: page,
                    data: _this.refineData(biosData.body)
                };
                if (newData.data.length > 0) {
                    _this.bios.push(newData);
                }
                console.log('New data: ', newData.data);
                console.log('Bios: ', _this.bios.length);
                _this.contents = newData.data;
            });
        }
        else {
            this.contents = (this.bios.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    BiographiesComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            el.content.rendered = this.aboutUs.htmlToPlaintext(el.content.rendered);
        }
        return data;
    };
    BiographiesComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../../assets/images/noimage.svg';
        // console.log(el);
        return true;
    };
    BiographiesComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getBios(page);
    };
    BiographiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-biographies',
            template: __webpack_require__(/*! raw-loader!./biographies.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/biographies/biographies.component.html"),
            styles: [__webpack_require__(/*! ./biographies.component.css */ "./src/app/about-us/biographies/biographies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsService"]])
    ], BiographiesComponent);
    return BiographiesComponent;
}());



/***/ }),

/***/ "./src/app/about-us/policies/policies.component.css":
/*!**********************************************************!*\
  !*** ./src/app/about-us/policies/policies.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL3BvbGljaWVzL3BvbGljaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/policies/policies.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/about-us/policies/policies.component.ts ***!
  \*********************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");



var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent(aboutUs) {
        this.aboutUs = aboutUs;
        this.loading = true;
    }
    PoliciesComponent.prototype.ngOnInit = function () {
        this.getPolicyDetails();
    };
    PoliciesComponent.prototype.getPolicyDetails = function () {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title');
        customParams.push('content');
        this.aboutUs.getNsiaPolicies(customParams).subscribe(function (data) {
            // console.log('policies: ', data);
            if (data) {
                _this.loading = false;
                _this.policies = _this.aboutUs.styleDetailsLink(data[0]);
                // if (this.gender) {
                //   this.gender.content.rendered = this.aboutUs.htmlToPlaintext(this.gender.content.rendered);
                // }
            }
        });
    };
    PoliciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policies',
            template: __webpack_require__(/*! raw-loader!./policies.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/policies/policies.component.html"),
            styles: [__webpack_require__(/*! ./policies.component.css */ "./src/app/about-us/policies/policies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsService"]])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



/***/ }),

/***/ "./src/app/about-us/structure/structure.component.css":
/*!************************************************************!*\
  !*** ./src/app/about-us/structure/structure.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* First Primary: #01a79b green */\r\n/* Second Primary: #282560 blue */\r\n.download-btn {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    background-color: #01a79b;\r\n    color: #fff;\r\n    position: absolute;\r\n}\r\n.download-btn span {\r\n    margin: 0px 4px;\r\n    text-transform: capitalize;\r\n}\r\n.download-btn i {\r\n    color: #282560;\r\n}\r\n.org-str {\r\n    margin-top: 3rem; \r\n}\r\n.feature-image img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBR2pDO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9zdHJ1Y3R1cmUvc3RydWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogRmlyc3QgUHJpbWFyeTogIzAxYTc5YiBncmVlbiAqL1xyXG4vKiBTZWNvbmQgUHJpbWFyeTogIzI4MjU2MCBibHVlICovXHJcblxyXG5cclxuLmRvd25sb2FkLWJ0biB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmRvd25sb2FkLWJ0biBzcGFuIHtcclxuICAgIG1hcmdpbjogMHB4IDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uZG93bmxvYWQtYnRuIGkge1xyXG4gICAgY29sb3I6ICMyODI1NjA7XHJcbn1cclxuXHJcbi5vcmctc3RyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07IFxyXG59XHJcbi5mZWF0dXJlLWltYWdlIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about-us/structure/structure.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/about-us/structure/structure.component.ts ***!
  \***********************************************************/
/*! exports provided: StructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureComponent", function() { return StructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-us.service */ "./src/app/about-us/about-us.service.ts");



var StructureComponent = /** @class */ (function () {
    function StructureComponent(aboutUs) {
        this.aboutUs = aboutUs;
        this.loading = true;
    }
    StructureComponent.prototype.ngOnInit = function () {
        this.getNsiaStructure();
    };
    StructureComponent.prototype.getNsiaStructure = function () {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title');
        customParams.push('content');
        customParams.push('better_featured_image.source_url');
        this.aboutUs.getNsiaStructure(customParams).subscribe(function (data) {
            // console.log('biodata: ', data);
            if (data) {
                _this.loading = false;
                _this.structure = data[0];
                // if (this.structure) {
                //   this.structure.content.rendered = this.aboutUs.htmlToPlaintext(this.structure.content.rendered);
                // }
            }
        });
    };
    StructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-structure',
            template: __webpack_require__(/*! raw-loader!./structure.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/structure/structure.component.html"),
            styles: [__webpack_require__(/*! ./structure.component.css */ "./src/app/about-us/structure/structure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsService"]])
    ], StructureComponent);
    return StructureComponent;
}());



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module.js.map