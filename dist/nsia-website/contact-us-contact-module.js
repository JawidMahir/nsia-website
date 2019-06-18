(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-8 col-lg-8 col-xs-11\">\r\n          <h4>{{ 'label.contact-us' | translate }}</h4>\r\n          <div class=\"contact-us\">\r\n            <table class=\"table text-blue\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <span><strong>{{ 'label.cs-number' | translate }}</strong></span>\r\n                  </td>\r\n                  <td style=\"direction: ltr !important\">\r\n                    <span> +93 20 2211 708</span>\r\n                  </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>Working Hours:</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>Saturday - Wednesday from 8:00 a.m. to 5:00 p.m. Kabul Time</span>\r\n                  </td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>{{ 'label.email' | translate }}</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>info@nsia.gov.af</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <span>\r\n                      <strong>{{ 'label.address' | translate }}</strong>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span>{{ 'label.nsia-address' | translate }}</span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\"><br>\r\n                <h4>{{'label.feedback-form' | translate}}</h4><br>\r\n                <input type=\"text\" id=\"name\" formControlName='name' placeholder=\"{{ 'input.name' | translate }}\"\r\n                  autofocus>\r\n                <span *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\" class=\"help-block\">{{\r\n                  'error.name' | translate }}</span><br>\r\n\r\n                <input type=\"email\" id=\"email\" formControlName='email' placeholder=\"{{ 'input.email' | translate }}\">\r\n                <span *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\" class=\"help-block\">{{\r\n                  'error.email' | translate }}</span><br>\r\n\r\n                <input type=\"text\" id=\"phone\" formControlName='phone' placeholder=\"{{ 'input.phone' | translate }}\">\r\n                <br>\r\n\r\n                <input type=\"text\" id=\"organization\" formControlName='organization'\r\n                  placeholder=\"{{ 'input.organization' | translate }}\">\r\n\r\n              </div>\r\n              <div class=\"col-md-6\"><br><br><br><br>\r\n                <textarea id=\"message\" formControlName='message' placeholder=\"{{ 'input.message' | translate }}\"\r\n                  rows=\"6\">\r\n                        </textarea>\r\n                <span *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\"\r\n                  class=\"help-block\">{{\r\n                  'error.message' | translate }}</span><br>\r\n\r\n                <button class=\"subscribe-btn float-right\" [disabled]=\"contactForm.invalid\">\r\n                  {{ 'input.submit' | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-11\">\r\n          <app-news></app-news>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n    font-weight: bold !important;\r\n}\r\ninput,textarea{\r\n    border: none;\r\n    border-bottom: 1px solid #282560;\r\n    display: block;\r\n    background: transparent;\r\n    width: 100%;\r\n    padding: 4px;\r\n    margin-bottom: 2%;\r\n}\r\n.subscribe-btn {\r\n    padding: 6px 16px;\r\n    background-color: #282560;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n.subscribe-btn:disabled {\r\n    cursor: not-allowed;\r\n    background-color: #636183;\r\n    color: #fff;\r\n}\r\nstrong{\r\n    font-size: 17px;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\ntextarea.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n.margin-top{\r\n    margin-top:30px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQsdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjU2MDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5zdWJzY3JpYmUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjU2MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWJ0bjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjE4MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnN0cm9uZ3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbi5tYXJnaW4tdG9we1xyXG4gICAgbWFyZ2luLXRvcDozMHB4OyBcclxufSJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact.module.ts":
/*!**********************************************!*\
  !*** ./src/app/contact-us/contact.module.ts ***!
  \**********************************************/
/*! exports provided: createTranslateLoader, ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact.routing.module */ "./src/app/contact-us/contact.routing.module.ts");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_9__["ContactRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                })
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact.routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact.routing.module.ts ***!
  \******************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");




var contactRoutes = [
    {
        path: '',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contactRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-module.js.map