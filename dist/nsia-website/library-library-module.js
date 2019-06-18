(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["library-library-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/library/library/library.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/library/library.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top content-justify\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\" lib\">\r\n        <div class=\" lib-btn active-libraray\" id=\"books\" (click)=\"showLibraries($event.target)\">\r\n          <p class=\"books\">{{'btn.books' | translate}}</p>\r\n        </div>\r\n        <div class=\" lib-btn\" id=\"quarterly\" (click)=\"showLibraries($event.target)\">\r\n          <p>{{'btn.quarterly' | translate}}</p>\r\n        </div>\r\n        <div class=\" lib-btn\" id=\"monthly\" (click)=\"showLibraries($event.target)\">\r\n          <p>{{'btn.monthly' | translate}}</p>\r\n        </div>\r\n        <div class=\" lib-btn\" id=\"surveys\" (click)=\"showLibraries($event.target)\">\r\n          <p>{{'btn.surveys' | translate}}</p>\r\n        </div>\r\n        <div class=\" lib-btn\" id=\"reports\" (click)=\"showLibraries($event.target)\">\r\n          <p>{{'btn.reports' | translate}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"search-wrapper\">\r\n        <div class=\"search-input\">\r\n          <div class=\"wrapper\">\r\n            <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" class=\"search-box\"\r\n              [(ngModel)]=\"filterText\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row content\" *ngIf=\"contents.length > 0 ; else nodata\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-6 lb-attachment\"\r\n          *ngFor=\"let content of contents | paginate: { itemsPerPage: pageLimit , currentPage: p , totalItems: total } |  libFilter:filterText \">\r\n          <!-- <a *ngIf=\"content.attachment\" href=\"{{content.attachment}}\"\r\n             target=\"_blank\"> -->\r\n          <a [href]=\"content.attachment\" target=\"_blank\">\r\n            <img [src]=\"content.better_featured_image?.source_url\" alt=\"{{ content.better_featured_image?.alt_text }}\"\r\n              (error)=\"imageError($event.target);\">\r\n          </a>\r\n          <!-- </a> -->\r\n          <h5 *ngIf=\"content.attachment\">\r\n            <a [href]=\"content.attachment\" target=\"_blank\">{{ content.title.rendered }}</a>\r\n          </h5>\r\n          <p>{{content.date}}</p>\r\n        </div>\r\n      </div>\r\n      <ng-template #nodata>\r\n        <div class=\"jumbotron no-data\">\r\n          <div [class.dot-falling]=\"loading\"></div>\r\n          <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n        </div>\r\n      </ng-template>\r\n      <div class=\"text-center paginator\">\r\n        <pagination-controls class=\"lib-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\" responsive=\"true\"\r\n          maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n          nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/library/lib-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/library/lib-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: LibFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibFilterPipe", function() { return LibFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibFilterPipe = /** @class */ (function () {
    function LibFilterPipe() {
    }
    LibFilterPipe.prototype.transform = function (list, filterText) {
        return list ? list.filter(function (item) { return item.title.rendered.search(new RegExp(filterText, 'i')) > -1; }) : [];
    };
    LibFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'libFilter'
        })
    ], LibFilterPipe);
    return LibFilterPipe;
}());



/***/ }),

/***/ "./src/app/library/library-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/library/library-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function() { return LibraryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library/library.component.ts");
/* harmony import */ var _services_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/can-deactivate.guard */ "./src/app/services/can-deactivate.guard.ts");





var libraryRoutes = [
    {
        path: '',
        component: _library_library_component__WEBPACK_IMPORTED_MODULE_3__["LibraryComponent"],
        canDeactivate: [_services_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateGuard"]],
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(libraryRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());



/***/ }),

/***/ "./src/app/library/library-services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/library/library-services.service.ts ***!
  \*****************************************************/
/*! exports provided: LibraryServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryServicesService", function() { return LibraryServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var LibraryServicesService = /** @class */ (function () {
    function LibraryServicesService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    LibraryServicesService.prototype.getLibraryData = function (customP, catName, page) {
        return this.http.get(this.dataService.api + 'posts', {
            observe: 'response',
            params: {
                'filter[category_name]': catName,
                per_page: '8',
                page: page,
                lang: this.dataService.language,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    LibraryServicesService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    LibraryServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LibraryServicesService);
    return LibraryServicesService;
}());



/***/ }),

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: createTranslateLoader, LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library-routing.module */ "./src/app/library/library-routing.module.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library/library.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _lib_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib-filter.pipe */ "./src/app/library/lib-filter.pipe.ts");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _library_library_component__WEBPACK_IMPORTED_MODULE_8__["LibraryComponent"],
                _lib_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["LibFilterPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _library_routing_module__WEBPACK_IMPORTED_MODULE_7__["LibraryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                    }
                })
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/library/library.component.css":
/*!*******************************************************!*\
  !*** ./src/app/library/library/library.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lib-btn {\r\n  display: inline;\r\n  text-align: center;\r\n  font-weight: bold !important;\r\n  border: 1px solid #282560;\r\n  margin: 5px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  padding: 10px 5px;\r\n  flex: auto;\r\n}\r\n\r\n.lib-btn:hover {\r\n  border-color: #282560;\r\n  background-color: #282560;\r\n  color: #fff;\r\n}\r\n\r\n.lib-btn p {\r\n  margin: 0px !important;\r\n}\r\n\r\n.lib {\r\n  margin: 3% 8%;\r\n  display: flex;\r\n}\r\n\r\n.search-wrapper {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.active-libraray {\r\n  background-color: #282560;\r\n  color: #fff;\r\n}\r\n\r\nimg {\r\n  height: 75%;\r\n  width: 70%;\r\n}\r\n\r\nh5 {\r\n  font-weight: bold !important;\r\n  margin-top: 20px;\r\n}\r\n\r\n.content {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  color: #282560;\r\n}\r\n\r\n.lib-pagination /deep/ .ngx-pagination .current {\r\n  background: #01a79b;\r\n}\r\n\r\n.lb-attachment {\r\n  margin-bottom: 2rem;\r\n  min-height: 280px;\r\n}\r\n\r\n.paginator {\r\n  margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWItYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MjU2MDtcclxuICBtYXJnaW46IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4ubGliLWJ0bjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjgyNTYwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI1NjA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5saWItYnRuIHAge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saWIge1xyXG4gIG1hcmdpbjogMyUgOCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG4uYWN0aXZlLWxpYnJhcmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogNzUlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMjgyNTYwO1xyXG59XHJcbi5saWItcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMDFhNzliO1xyXG59XHJcblxyXG4ubGItYXR0YWNobWVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBtaW4taGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/library/library/library.component.ts":
/*!******************************************************!*\
  !*** ./src/app/library/library/library.component.ts ***!
  \******************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library-services.service */ "./src/app/library/library-services.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(libraryService) {
        this.libraryService = libraryService;
        this.loading = true;
        this.p = 1;
        this.total = 1;
        this.customParams = [];
        this.contents = [];
        this.pageLimit = 8;
        this.libraryContents = {
            books: [],
            surveys: [],
            reports: [],
            quarterly: [],
            monthly: []
        };
        this.totalPosts = {
            books: 1,
            surveys: 1,
            reports: 1,
            quarterly: 1,
            monthly: 1,
        };
    }
    LibraryComponent.prototype.ngOnInit = function () {
        var element;
        if (localStorage.getItem('library-type')) {
            var libType = localStorage.getItem('library-type');
            switch (libType) {
                case 'books':
                    element = document.getElementById('books');
                    break;
                case 'surveys':
                    element = document.getElementById('surveys');
                    break;
                case 'reports':
                    element = document.getElementById('reports');
                    break;
                case 'quarterly':
                    element = document.getElementById('quarterly');
                    break;
                case 'monthly':
                    element = document.getElementById('monthly');
                    break;
            }
        }
        else {
            element = document.getElementById('books');
            // console.log('not there');
        }
        this.customParams.push('title.rendered');
        this.customParams.push('date');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('content');
        this.customParams.push('acf.library_attachment.filename');
        // const element: HTMLElement = document.getElementById('books') as HTMLElement;
        // element.click();
        element.click();
    };
    LibraryComponent.prototype.showLibraries = function (el) {
        this.p = 1;
        this.id = jquery__WEBPACK_IMPORTED_MODULE_4__(el).closest('.lib-btn').attr('id');
        localStorage.setItem('library-type', this.id);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.lib-btn').removeClass('active-libraray');
        jquery__WEBPACK_IMPORTED_MODULE_4__(el).closest('.lib-btn').addClass('active-libraray');
        this.getData(this.customParams, this.p);
    };
    LibraryComponent.prototype.getData = function (customParams, page) {
        var _this = this;
        if ((this.libraryContents[this.id].length < 1) || (this.libraryContents[this.id].filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.loading = true;
            this.libraryService.getLibraryData(customParams, this.id, page).subscribe((function (libraryData) {
                _this.loading = false;
                // console.log('full response: ', libraryData);
                _this.totalPosts[_this.id] = Number(libraryData.headers.get('X-WP-Total'));
                _this.total = _this.totalPosts[_this.id];
                // console.log('total posts: ', this.total);
                var cb = _this.getAttachments(libraryData.body);
                // console.log('library contents: ', cb);
                // adding new data object
                var newData = {
                    page: _this.p,
                    data: _this.refineData(cb)
                };
                // this.libraryContents[this.id] = this.libraryContents[this.id].concat(this.refineData(cb));
                _this.libraryContents[_this.id].push(newData);
                // console.log('Data : ', (this.libraryContents[this.id].filter(d => d.page === this.p))[0].data);
                // console.log('Library all contents: ', this.libraryContents);
                // const begin = ((page - 1) * this.pageLimit);
                // const end = begin + this.pageLimit;
                // this.contents = this.libraryContents[this.id].slice(begin, end);
                _this.contents = newData.data;
            }));
        }
        else {
            // console.log('local');
            // const begin = ((page - 1) * this.pageLimit);
            // const end = begin + this.pageLimit;
            // this.contents = this.libraryContents[this.id].slice(begin, end);
            this.total = this.totalPosts[this.id];
            this.contents = (this.libraryContents[this.id].filter(function (d) { return d.page === _this.p; }))[0].data;
            // console.log('Library all contents: ', this.libraryContents);
            // console.log('Current page contents: ', this.contents);
        }
    };
    LibraryComponent.prototype.getAttachments = function (data) {
        var tempLinksArray;
        // const pattern = /\"[A-Za-z0-9_@./#&\s>"=\-:]*\"/g;
        var pattern = /\".*\"/g;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var ps = data_1[_i];
            if (ps.hasOwnProperty('content')) {
                tempLinksArray = [];
                tempLinksArray = ps.content.rendered.match(pattern);
                if (tempLinksArray) {
                    tempLinksArray[0] = tempLinksArray[0].replace(new RegExp('"', 'g'), '');
                    // console.log('pattern result: ', tempLinksArray[0]);
                    ps.attachment = tempLinksArray[0];
                }
            }
        }
        return data;
    };
    LibraryComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        // console.log(el);
        return true;
    };
    LibraryComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var el = data_2[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
            }
        }
        return data;
    };
    LibraryComponent.prototype.canDeactivate = function () {
        return true;
    };
    LibraryComponent.prototype.pageChanged = function (page) {
        this.contents = [];
        this.p = page;
        this.getData(this.customParams, page);
        // console.log('current page: ', this.p);
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_library_services_service__WEBPACK_IMPORTED_MODULE_3__["LibraryServicesService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=library-library-module.js.map