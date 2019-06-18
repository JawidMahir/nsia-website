(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/services/services-home/services-home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services/services-home/services-home.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\r\n\r\n  <div class=\"services\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"m-service active-service\" id=\"stats\" (click)=\"toggleServices($event.target)\">\r\n          <div class=\"m-contents\">\r\n            <div class=\"sr-icon\">\r\n              <img src=\"../../../assets/logo/stats.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"sr-name sp\">\r\n              <p>{{'submenu.statistics' | translate }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"m-service\" id=\"sdu\" (click)=\"toggleServices($event.target)\">\r\n          <div class=\"m-contents\">\r\n            <div class=\"sr-icon\">\r\n              <img src=\"../../../assets/logo/sys-dev.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"sr-name sp\">\r\n              <p>{{'submenu.isd' | translate}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"m-service \" id=\"gis\" (click)=\"toggleServices($event.target)\">\r\n          <div class=\"m-contents\">\r\n            <div class=\"sr-icon\">\r\n              <img src=\"../../../assets/logo/gis.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"sr-name sp\">\r\n              <p>{{'submenu.gis' | translate}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"m-service \" id=\"nid\" (click)=\"toggleServices($event.target)\">\r\n          <div class=\"m-contents\">\r\n            <div class=\"sr-icon\">\r\n              <img src=\"../../../assets/logo/nid.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"sr-name sp\">\r\n              <p>{{'submenu.nid' | translate}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-wrapper\">\r\n\r\n    <nav class=\"sidebar-nav\">\r\n      <div class=\"sidebar-title menu-item active-item\" id=\"sidebar-title\" (click)=\"activeMenu($event.target)\"\r\n        *ngIf=\"!provincialServices\">\r\n        <span> <i class=\"fas fa-chevron-right\"></i>\r\n          {{'label.about-service' | translate:{'sr':serviceName} }}</span>\r\n      </div>\r\n      <div class=\"sidebar-title pr-services\" *ngIf=\"provincialServices\">\r\n        <span>{{'submenu.provincial-s' | translate }}</span>\r\n      </div>\r\n      <div class=\"sidebar\">\r\n        <div class=\"sidebar-menu\" *ngIf=\"deputyDepartments.length > 0 && !provincialServices\">\r\n          <div class=\"accordion menu-item\" id=\"{{ 'id' + dp.id }}\" *ngFor=\"let dp of deputyDepartments\"\r\n            (click)=\"activeMenu($event.target)\">\r\n            <div class=\"m-item-c\" data-toggle=\"collapse\" [attr.data-target]=\"'#sub-' + 'id' + dp.id\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{ dp.title.rendered }}</span>\r\n              <i class=\"fas fa-chevron-down\" *ngIf=\"dp.headships\"></i>\r\n            </div>\r\n\r\n            <div id=\"{{ 'sub-' + 'id' + dp.id }}\" class=\"collapse sub-menu\" [attr.data-parent]=\"'#' + 'id' + dp.id\">\r\n              <!-- sub menus go here -->\r\n              <div class=\"sub-menu-item\" [class.active-sub-menu]=\"activeSubMenu === dp.id\"\r\n                (click)=\"getDepartmentDetails(dp.id, $event.target, 'department')\" id=\"{{ dp.id }}\">\r\n                <!-- <p>{{ 'about ' + dp.title.rendered }}</p> -->\r\n                <p>{{ 'label.about-rs' | translate:{'title': dp.title.rendered} }}</p>\r\n              </div>\r\n              <div *ngIf=\"dp.headships\">\r\n                <div class=\"sub-menu-item\" [class.active-sub-menu]=\"activeSubMenu === subDp.id\"\r\n                  *ngFor=\"let subDp of dp.headships\" id=\"{{ subDp.id }}\"\r\n                  (click)=\"getDepartmentDetails(subDp.id, $event.target, 'headship')\">\r\n                  <p>{{ subDp.title.rendered }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"provincial-services\" *ngIf=\"provincialServices && provinces\">\r\n          <ul class=\"provinces\">\r\n            <!-- <li class=\"province active-province\" (click)=\"provinceData($event.target, provinces[0].id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>\r\n                {{ provinces[0].acf.province }}\r\n              </span>\r\n            </li> -->\r\n            <li class=\"province\" [class.active-provice]=\"i===0\" *ngFor=\"let pr of provinces; let i = index\"\r\n              (click)=\"provinceData($event.target, pr.id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>\r\n                {{ pr.acf.province }}\r\n              </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"sidebar-toggler\">\r\n      <div class=\"t-btn\" (click)=\"toggleNavbar()\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"contents\" *ngIf=\"contents;else nodata\"> \r\n\r\n      <!-- <router-outlet></router-outlet> -->\r\n      <div>\r\n        <!-- <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"deputy-image\">\r\n            <img [src]=\"contents.better_featured_image?.source_url\" alt=\"image\" (error)=\"imageError($event.target)\">\r\n          </div>\r\n          <div class=\"deputy-info\" *ngIf=\"contents.acf\">\r\n            <strong>{{ contents.acf.name }}</strong>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-9 col-sm-6\"> -->\r\n        <div class=\"details-title\">\r\n          <h5> <strong> {{ contents.title.rendered}} </strong></h5>\r\n        </div>\r\n        <div *ngIf=\"contents.content\" class=\"details\" [innerHTML]=\"contents.content.rendered\"></div>\r\n        <div *ngIf=\"contents.acf?.link\" >\r\n            <iframe width=\"850\" height=\"500\" [src]=\"contents.acf.link\" frameborder=\"0\"\r\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n    <ng-template #nodata>\r\n      <div class=\"contents\"> \r\n        <div class=\"jumbotron no-data\">\r\n          <div [class.dot-falling]=\"loading\"></div>\r\n          <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/services/nsia-services.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/nsia-services.service.ts ***!
  \***************************************************/
/*! exports provided: NsiaServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NsiaServicesService", function() { return NsiaServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var NsiaServicesService = /** @class */ (function () {
    function NsiaServicesService(http, dataService, sanitizer) {
        this.http = http;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    }
    NsiaServicesService.prototype.getDuptyDetails = function (deputyType, tag, customP) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[category_name]': deputyType,
                'filter[tag]': tag,
                fields: customP.join(',')
            }
        });
    };
    NsiaServicesService.prototype.getDepartmentDetails = function (id, customP) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[p]': id,
                fields: customP.join(',')
            }
        });
    };
    NsiaServicesService.prototype.getProvinces = function () {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[category_name]': 'provincial_services',
                'filter[posts_per_page]': '100',
                fields: 'acf.province,id'
            }
        });
    };
    NsiaServicesService.prototype.getProvinceDetails = function (id, customP) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[category_name]': 'provincial_services',
                'filter[p]': id,
                fields: customP.join(',')
            }
        });
    };
    NsiaServicesService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    NsiaServicesService.prototype.videoURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        //return this.sanitizer.bypassSecurityTrustHtml(url); 
    };
    NsiaServicesService.prototype.objHasKeys = function (obj, keys) {
        var next = keys.shift();
        return obj[next] && (!keys.length || this.objHasKeys(obj[next], keys));
    };
    NsiaServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], NsiaServicesService);
    return NsiaServicesService;
}());



/***/ }),

/***/ "./src/app/services/services-home/services-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/services/services-home/services-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLWhvbWUvc2VydmljZXMtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services-home/services-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/services-home/services-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServicesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesHomeComponent", function() { return ServicesHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nsia_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nsia-services.service */ "./src/app/services/nsia-services.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var ServicesHomeComponent = /** @class */ (function () {
    function ServicesHomeComponent(router, cdref, route, dataService, nsiaServices) {
        this.router = router;
        this.cdref = cdref;
        this.route = route;
        this.dataService = dataService;
        this.nsiaServices = nsiaServices;
        // dummy data for menus
        this.menus = [];
        this.srName = 'foo';
        this.loading = true;
        this.firstLoad = true;
        // A global variable used to determine the type of service
        this.serviceType = 'stats';
        this.provincialServices = false;
        this.serviceContents = {
            sdu: Object,
            stats: Object,
            gis: Object,
            nid: Object
        };
        this.departmentsFullDetails = [];
        this.deputyDepartments = [];
        this.deputyHeadships = [];
    }
    ServicesHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.serviceName = 'statistics';
        // window.onresize = this.windowResize;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        /**
         * Change service on dropdown click, if the route is pointing to service component itself
         */
        this.dataService.callToServiceMethodSource.subscribe(function () {
            //console.log('Service Component is called');
            _this.showServiceDetails();
        });
    };
    ServicesHomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showServiceDetails();
        });
    };
    ServicesHomeComponent.prototype.showServiceDetails = function () {
        var sType;
        if (sessionStorage.getItem('serviceType')) {
            sType = sessionStorage.getItem('serviceType');
        }
        else {
            sType = this.dataService.serviceType;
        }
        sessionStorage.setItem('serviceType', sType);
        //console.log('showServiceMethod: sType: ', sType);
        if (sType === 'prs') {
            this.provincialServices = true;
            this.contents = null;
            this.getProvinces();
            jquery__WEBPACK_IMPORTED_MODULE_5__('.m-service').removeClass('active-service');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.provinces li:first-child').addClass('active-province');
        }
        else {
            this.provincialServices = false;
            switch (sType) {
                case 'sdu':
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#sdu').trigger('click');
                    break;
                case 'gis':
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#gis').trigger('click');
                    break;
                case 'stats':
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#stats').trigger('click');
                    break;
                case 'nid':
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#nid').trigger('click');
                    break;
            }
            this.clearStorage = true;
            // this.trackDepartments();
        }
        // this.dataService.serviceType = 'stats';
    };
    ServicesHomeComponent.prototype.trackDepartments = function () {
        if (sessionStorage.getItem('department')) {
            // console.log('there is department');
            var depId = sessionStorage.getItem('department');
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + depId).trigger('click');
            jquery__WEBPACK_IMPORTED_MODULE_5__("#sub-" + depId).collapse('show');
            if (depId !== 'sidebar-title') {
            }
            if (sessionStorage.getItem('sub-menu.type')) {
                // console.log('there is headship');
                var subMenuId = sessionStorage.getItem('sub-menu.id');
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + subMenuId).trigger('click');
            }
        }
    };
    ServicesHomeComponent.prototype.keepContentsLocal = function (deputyType) {
        switch (deputyType) {
            case 'statistics_services':
                this.serviceContents.stats = this.contents;
                break;
            case 'gis_services':
                this.serviceContents.gis = this.contents;
                break;
            case 'nid_services':
                this.serviceContents.nid = this.contents;
                break;
            case 'sdu_services':
                this.serviceContents.sdu = this.contents;
                break;
        }
    };
    ServicesHomeComponent.prototype.assignDepartmentsToDeputy = function (deputyType) {
        switch (deputyType) {
            case 'statistics_services':
                // tslint:disable-next-line: no-string-literal
                this.serviceContents.stats['departments'] = this.deputyDepartments;
                break;
            case 'gis_services':
                // tslint:disable-next-line: no-string-literal
                this.serviceContents.gis['departments'] = this.deputyDepartments;
                break;
            case 'nid_services':
                // tslint:disable-next-line: no-string-literal
                this.serviceContents.nid['departments'] = this.deputyDepartments;
                break;
            case 'sdu_services':
                // tslint:disable-next-line: no-string-literal
                this.serviceContents.sdu['departments'] = this.deputyDepartments;
                break;
        }
        // console.log('departments assigned', this.serviceContents);
    };
    ServicesHomeComponent.prototype.getDeputyDetails = function (deputyType, tag) {
        var _this = this;
        // console.log('getting service data');
        this.loading = true;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('acf.name');
        customParams.push('acf.link');
        customParams.push('better_featured_image.source_url');
        this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe(function (data) {
            if (data[0]) {
                // this.contents = data[0];
                _this.loading = false;
                if (_this.nsiaServices.objHasKeys(data[0], ['acf', 'link'])) {
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__["parseHTML"](data[0].acf.link);
                    _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__(_this.videoLink).attr('src');
                    _this.videoLink = _this.nsiaServices.videoURL(_this.videoLink);
                    data[0].acf.link = _this.videoLink;
                }
                _this.contents = _this.styleDetailsLink(data[0]);
                //console.log('Service data: ', this.contents);
                _this.keepContentsLocal(deputyType);
                // strip html tags
                // this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
            }
        });
    };
    ServicesHomeComponent.prototype.styleDetailsLink = function (data) {
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
        // console.log('details are done', data);
        return data;
    };
    ServicesHomeComponent.prototype.getProvinces = function () {
        var _this = this;
        this.loading = true;
        this.nsiaServices.getProvinces().subscribe(function (data) {
            //  console.log('Provinces: ', data);
            if (data.length > 0) {
                _this.loading = false;
                _this.provinces = data;
                _this.getProvinceDetails(_this.provinces[0].id);
            }
        });
    };
    /**
     *
     * @param deputyType is either department or headship
     * @param tag is department
     */
    ServicesHomeComponent.prototype.getDeputyDepartments = function (deputyType, tag) {
        var _this = this;
        var customParams = [];
        this.loading = true;
        customParams.push('id');
        customParams.push('tags');
        customParams.push('title.rendered');
        customParams.push('acf');
        this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe(function (data) {
            _this.loading = false;
            if (tag === 'department') {
                _this.deputyDepartments = data;
                _this.departmentsFetched = true;
                //console.log('Departments data: ', this.deputyDepartments);
            }
            else {
                _this.deputyHeadships = data;
                _this.headshipsFetched = true;
                //  console.log('Headships data: ', this.deputyHeadships);
            }
            // this.styleDetailsLink();
            _this.arrangeDepartments(deputyType);
        });
    };
    ServicesHomeComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.png';
        //console.log(el);
        return true;
    };
    ServicesHomeComponent.prototype.getDepartmentDetails = function (id, el, depType) {
        var _this = this;
        //  console.log('Department details is called');
        this.loading = true;
        this.contents = null;
        // console.log('ID is: ', id);
        //  console.log($(el).closest('.m-item-c').attr('aria-expanded'));
        var customParams = [];
        var flag = false;
        var depId = jquery__WEBPACK_IMPORTED_MODULE_5__(el).closest('.menu-item').attr('id');
        sessionStorage.setItem('department', depId);
        this.activeSubMenu = id;
        // for (const dep of this.departmentsFullDetails) {
        //   if (dep.id === id) {
        //     this.contents = dep;
        //     console.log('local se: ', dep);
        //     flag = true;
        //     break;
        //   }
        // }
        if (!flag) {
            customParams.push('id');
            customParams.push('title.rendered');
            customParams.push('content.rendered');
            customParams.push('acf.name');
            customParams.push('acf.link');
            customParams.push('better_featured_image.source_url');
            this.nsiaServices.getDepartmentDetails(id, customParams).subscribe(function (data) {
                //console.log('Department full data: ', data);
                if (data[0]) {
                    _this.loading = false;
                    sessionStorage.setItem('sub-menu.type', depType);
                    if (depType === 'department') {
                        sessionStorage.setItem('sub-menu.id', data[0].id);
                    }
                    else {
                        sessionStorage.setItem('sub-menu.id', data[0].id);
                    }
                    if (_this.nsiaServices.objHasKeys(data[0], ['acf', 'link'])) {
                        _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__["parseHTML"](data[0].acf.link);
                        _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__(_this.videoLink).attr('src');
                        _this.videoLink = _this.nsiaServices.videoURL(_this.videoLink);
                        data[0].acf.link = _this.videoLink;
                    }
                    _this.contents = _this.styleDetailsLink(data[0]);
                    // this.contents = data[0];
                    //  this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
                    _this.departmentsFullDetails.push(_this.contents);
                }
            });
        }
        // this.styleDetailsLink('department');
    };
    ServicesHomeComponent.prototype.arrangeDepartments = function (deputyType) {
        var _this = this;
        var tempHeadships = [];
        this.dept = deputyType.split('_')[0] + '_department';
        //console.log('deputy related department: ', this.dept);
        if (this.departmentsFetched && this.headshipsFetched) {
            // console.log('I am called ', this.deputyDepartments, this.deputyHeadships);
            for (var _i = 0, _a = this.deputyDepartments; _i < _a.length; _i++) {
                var dep = _a[_i];
                tempHeadships = [];
                for (var _b = 0, _c = this.deputyHeadships; _b < _c.length; _b++) {
                    var hdShip = _c[_b];
                    if (dep.acf[this.dept] === hdShip.acf[this.dept]) {
                        tempHeadships.push(hdShip);
                    }
                }
                dep.headships = tempHeadships;
            }
            this.assignDepartmentsToDeputy(deputyType);
            //console.log('after arrangement', this.deputyDepartments);
            if (this.firstLoad) {
                setTimeout(function () {
                    _this.trackDepartments();
                });
                this.firstLoad = false;
            }
        }
    };
    ServicesHomeComponent.prototype.provinceData = function (pItem, province) {
        //console.log('Province: ', province);
        jquery__WEBPACK_IMPORTED_MODULE_5__('.province').removeClass('active-province');
        jquery__WEBPACK_IMPORTED_MODULE_5__(pItem).closest('.province').addClass('active-province');
        this.getProvinceDetails(province);
    };
    ServicesHomeComponent.prototype.getProvinceDetails = function (id) {
        var _this = this;
        this.loading = true;
        this.contents = null;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('acf.name');
        customParams.push('acf.province');
        customParams.push('acf.link');
        customParams.push('better_featured_image.source_url');
        this.nsiaServices.getProvinceDetails(id, customParams).subscribe(function (data) {
            _this.loading = false;
            if (_this.nsiaServices.objHasKeys(data[0], ['acf', 'link'])) {
                _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__["parseHTML"](data[0].acf.link);
                _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_5__(_this.videoLink).attr('src');
                _this.videoLink = _this.nsiaServices.videoURL(_this.videoLink);
                data[0].acf.link = _this.videoLink;
            }
            _this.contents = _this.styleDetailsLink(data[0]);
            // this.styleDetailsLink('province');
            _this.contents.title.rendered = _this.nsiaServices.htmlToPlaintext(_this.contents.title.rendered);
            // this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
            //console.log(id + ' data:', this.contents);
            //console.log(this.contents.acf.link) 
        });
    };
    ServicesHomeComponent.prototype.activeMenu = function (menuItem) {
        // console.log('Active menu called');
        var that = this;
        var id = jquery__WEBPACK_IMPORTED_MODULE_5__(menuItem).closest('.menu-item').attr('id');
        // console.log(id);
        // sessionStorage.setItem('department', id);
        jquery__WEBPACK_IMPORTED_MODULE_5__('.m-item-c').removeClass('active-item');
        jquery__WEBPACK_IMPORTED_MODULE_5__('.menu-item').removeClass('active-item');
        if (id === 'sidebar-title') {
            sessionStorage.removeItem('department');
            sessionStorage.removeItem('sub-menu.type');
            sessionStorage.removeItem('sub-menu.id');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.collapse').collapse('hide');
            jquery__WEBPACK_IMPORTED_MODULE_5__(menuItem).closest('.menu-item').addClass('active-item');
        }
        // this.contents = null;
        jquery__WEBPACK_IMPORTED_MODULE_5__(menuItem).closest('.menu-item').find('.m-item-c').addClass('active-item');
        if (jquery__WEBPACK_IMPORTED_MODULE_5__(menuItem).closest('.menu-item').hasClass('sidebar-title')) {
            this.activeSubMenu = 0;
            if (this.serviceContents[this.serviceType].title) {
                this.contents = this.serviceContents[this.serviceType];
                //console.log('from this click ', this.serviceContents);
            }
            else {
                this.contents = null;
                var serviceType = sessionStorage.getItem('serviceType');
                this.getDeputyDetails(serviceType, 'service');
            }
        }
    };
    ServicesHomeComponent.prototype.toggleNavbar = function () {
        var navWidth = document.getElementsByClassName('sidebar-nav')[0].style.width;
        // console.log('navWidth: ', navWidth);
        var rtl = false;
        if (jquery__WEBPACK_IMPORTED_MODULE_5__('body').hasClass('rtl')) {
            rtl = true;
        }
        if (navWidth === '0px') {
            document.getElementsByClassName('sidebar-nav')[0].style.width = '19vw';
            if (rtl) {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginRight = '19vw';
            }
            else {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginLeft = '19vw';
            }
            jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar-toggler i').removeClass('fa-chevron-right').addClass('fa-chevron-left');
        }
        else {
            document.getElementsByClassName('sidebar-nav')[0].style.width = '0px';
            if (rtl) {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginRight = '0px';
            }
            else {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginLeft = '0px';
            }
            jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar-toggler i').removeClass('fa-chevron-left').addClass('fa-chevron-right');
        }
    };
    ServicesHomeComponent.prototype.toggleServices = function (el) {
        //console.log('ToggleService Called');
        // clear catche for department and headship
        if (this.clearStorage) {
            sessionStorage.removeItem('department');
            sessionStorage.removeItem('sub-menu.type');
            sessionStorage.removeItem('sub-menu.id');
            this.activeMenu(jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar-title'));
        }
        this.departmentsFetched = false;
        this.headshipsFetched = false;
        this.provincialServices = false;
        var id = jquery__WEBPACK_IMPORTED_MODULE_5__(el).closest('.m-service').attr('id');
        this.serviceType = id;
        // The departments in each service has a different key name, so we have to change it
        this.dept = id + '_department';
        //console.log('department type: ', this.dept);
        sessionStorage.setItem('serviceType', id);
        this.serviceName = jquery__WEBPACK_IMPORTED_MODULE_5__(el).closest('.m-service').find('.sr-name p').html();
        //console.log('service name: ', this.serviceName);
        // console.log('service id: ', id);
        jquery__WEBPACK_IMPORTED_MODULE_5__('.m-service').removeClass('active-service');
        jquery__WEBPACK_IMPORTED_MODULE_5__(el).closest('.m-service').addClass('active-service');
        // reset the menu highlights
        // this.activeMenu($('.sidebar-title'));
        /**
         * The following commented code is used to fetch data from already fetched data
         * but due to asynchronous behaviour of it, we cannot predict the order of data coming and hence
         * some bugs and errors occure
         * -- I will check this in the next version, for now let it be commented
         */
        // if (this.serviceContents[id].title) {
        //   console.log('from local ', this.serviceContents[id]);
        //   this.contents = this.serviceContents[id];
        //   this.deputyDepartments = this.serviceContents[id].departments;
        //   this.cdref.detectChanges();
        //   console.log('local departments: ', this.deputyDepartments);
        //   console.log('departments type : ', this.deputyDepartments instanceof Array);
        // } else {
        var serviceType;
        this.contents = null;
        this.deputyDepartments = [];
        switch (id) {
            case 'sdu':
                serviceType = 'sdu_services';
                if (!sessionStorage.getItem('department')) {
                    this.getDeputyDetails(serviceType, 'service');
                }
                this.getDeputyDepartments(serviceType, 'department');
                this.getDeputyDepartments(serviceType, 'headship');
                break;
            case 'stats':
                serviceType = 'statistics_services';
                if (!sessionStorage.getItem('department')) {
                    this.getDeputyDetails(serviceType, 'service');
                }
                this.getDeputyDepartments(serviceType, 'department');
                this.getDeputyDepartments(serviceType, 'headship');
                break;
            case 'gis':
                serviceType = 'gis_services';
                if (!sessionStorage.getItem('department')) {
                    this.getDeputyDetails(serviceType, 'service');
                }
                this.getDeputyDepartments(serviceType, 'department');
                this.getDeputyDepartments(serviceType, 'headship');
                break;
            case 'nid':
                serviceType = 'nid_services';
                if (!sessionStorage.getItem('department')) {
                    this.getDeputyDetails(serviceType, 'service');
                }
                this.getDeputyDepartments(serviceType, 'department');
                this.getDeputyDepartments(serviceType, 'headship');
                break;
        }
        // }
    };
    ServicesHomeComponent.prototype.canDeactivate = function () {
        // sessionStorage.removeItem('serviceType');
        // sessionStorage.removeItem('sub-menu.type');
        // sessionStorage.removeItem('sub-menu.id');
        // sessionStorage.removeItem('department');
        return true;
    };
    ServicesHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-home',
            template: __webpack_require__(/*! raw-loader!./services-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/services/services-home/services-home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./services-home.component.css */ "./src/app/services/services-home/services-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _nsia_services_service__WEBPACK_IMPORTED_MODULE_3__["NsiaServicesService"]])
    ], ServicesHomeComponent);
    return ServicesHomeComponent;
}());



/***/ }),

/***/ "./src/app/services/services-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-home/services-home.component */ "./src/app/services/services-home/services-home.component.ts");
/* harmony import */ var _can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./can-deactivate.guard */ "./src/app/services/can-deactivate.guard.ts");





var servicesRoutes = [
    {
        path: '',
        canDeactivate: [_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateGuard"]],
        component: _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_3__["ServicesHomeComponent"]
    }
];
var ServicesRoutingModule = /** @class */ (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(servicesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/services/services-routing.module.ts");
/* harmony import */ var _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services-home/services-home.component */ "./src/app/services/services-home/services-home.component.ts");








function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_7__["ServicesHomeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _services_routing_module__WEBPACK_IMPORTED_MODULE_6__["ServicesRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                })
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map