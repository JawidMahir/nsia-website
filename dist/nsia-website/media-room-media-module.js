(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-room-media-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/access-info/access-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/access-info/access-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"about-us accessInfo content-justify\" *ngIf=\"accessInfo; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <h4 class=\"title\">{{ accessInfo.title.rendered }}</h4>\r\n  </div>\r\n  <div *ngIf=\"accessInfo.content\" class=\"details\" [innerHTML]=\"accessInfo.content.rendered\">\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>   -->\r\n<div class=\"news-section\">\r\n  <div class=\"margin-top\">\r\n    <div class=\"custom-container\">\r\n      <div class=\"section-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-7 col-xs-11\">\r\n            <div *ngIf=\"accessInfo.length > 0; else nonews\">\r\n              <h4>{{'label.access-info' | translate}}</h4><br>\r\n              <div class=\"row news\"\r\n                *ngFor=\"let af of contents | paginate: { itemsPerPage: 4 , currentPage: p , totalItems: total }\">\r\n                <div class=\"col-md-4 col-sm-7 featured-video\">\r\n                  <img class=\"fit-cover\" [src]=\"af.better_featured_image?.source_url\"\r\n                    [alt]=\"af.better_featured_image?.source_url.alt_text\" (error)=\"imageError($event.target);\">\r\n                  <!-- <ng-template #showvedio>\r\n                      <iframe [src]=\"videoURL(af?.acf.link)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> \r\n                  </ng-template>  -->\r\n                  <div class=\"attachment-type\">\r\n                    <p *ngIf=\"af.acf.attachment_type == 'image' else video;\">{{'label.image' | translate}}</p>\r\n                    <ng-template #video> \r\n                      <p>{{ 'label.video' | translate }}</p>\r\n                    </ng-template>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-sm-5\">\r\n                  <div>\r\n                    <h5>{{ getBrief(af.title.rendered) }}</h5>\r\n                    <p class=\"content\" *ngIf=\"af.content\">{{ getBrief(af.content.rendered) }}</p>\r\n                    <a [routerLink]=\"['/media-room/media', af.id]\">{{'btn.read-more' | translate}}</a><br>\r\n                    <span>{{ af.date }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <pagination-controls class=\"news-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\"\r\n                  responsive=\"true\" maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n                  nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ng-template #nonews>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{'label.no-data' | translate}}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/events/events.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/events/events.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-7 col-xs-11\">\r\n          <div *ngIf=\"events.length > 0; else noevents\">\r\n            <h4>{{'submenu.events' | translate}}</h4><br>\r\n            <div class=\"row news\"\r\n              *ngFor=\"let event of contents | paginate: { itemsPerPage: 5 , currentPage: p , totalItems: total }\">\r\n              <div class=\"col-md-4 col-sm-7 featured-video\">\r\n                <img [src]=\"event.better_featured_image?.source_url\"\r\n                  [alt]=\"event.better_featured_image?.source_url.alt_text\" (error)=\"imageError($event.target);\">\r\n                <!-- <ng-template #showvedio>\r\n                      <iframe [src]=\"videoURL(event?.acf.link)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> \r\n                  </ng-template> -->\r\n                <div class=\"attachment-type\" *ngIf=\"event.acf\">\r\n                  <p *ngIf=\"event.acf.attachment_type == 'image' else vedio;\">{{'label.image' | translate}}</p>\r\n                  <ng-template #vedio>\r\n                    <p>{{ 'label.video' | translate }}</p>\r\n                  </ng-template>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7 col-sm-5\">\r\n                <div>\r\n                  <h5>{{ event.title.rendered }}</h5>\r\n                  <p class=\"content\">{{ getBrief(event.content.rendered) }}</p>\r\n                  <a [routerLink]=\"['/media-room/media', event.id]\">{{'btn.read-more' | translate}}</a><br>\r\n                  <span>{{ event.date }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <pagination-controls class=\"events-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\"\r\n                responsive=\"true\" maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n                nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #noevents>\r\n          <div class=\"jumbotron no-data\">\r\n            <div [class.dot-falling]=\"loading\"></div>\r\n            <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/media-general-template/media-general-template.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/media-general-template/media-general-template.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top content-justify\">\r\n  <div class=\"section-wrapper\" *ngIf=\"news\">\r\n    <div class=\"row\" *ngIf=\"news.acf; else noimage\">\r\n      <img class=\"fit-cover\" *ngIf=\"news.acf.attachment_type == 'image' else vedio;\"\r\n        [src]=\"news.better_featured_image?.source_url\" [alt]=\"news.better_featured_image?.source_url.alt_text\"\r\n        (error)=\"imageError($event.target);\">\r\n      <ng-template #vedio>\r\n        <div class=\"col-md-12\">\r\n            <iframe width=\"850\" height=\"500\" [src]=\"videoLink\" frameborder=\"0\"\r\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n    <ng-template #noimage> \r\n      <img class=\"fit-cover\" [src]=\"news.better_featured_image?.source_url\"\r\n        [alt]=\"news.better_featured_image?.source_url.alt_text\" (error)=\"imageError($event.target);\"> \r\n    </ng-template>\r\n    <div class=\"row\">\r\n      <div class=\"content\">\r\n        <h2>{{ news.title?.rendered }}</h2>\r\n        <h6>{{ news.date }}</h6>\r\n        <p *ngIf=\"news.content; else nocontent\">{{ news.content?.rendered }}</p>\r\n        <ng-template #nocontent>\r\n          <div class=\"jumbotron no-data\">\r\n            <div [class.dot-falling]=\"loading\"></div>\r\n            <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/media-room-home/media-room-home.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/media-room-home/media-room-home.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container media-room\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 col-sm-8\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4\">\r\n      <app-promotional-materials></app-promotional-materials>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/media-room/media-room.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/media-room/media-room.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  media-room works!\r\n</p>\r\n\r\n\r\n\r\n<div>\r\n    <a href=\"\" routerLink=\"./event\">Events</a><br>\r\n    <a href=\"\" routerLink=\"./news-updates\">News and updates</a><br>\r\n    <a href=\"\" routerLink=\"./press-release\">Press release</a><br>\r\n    <a href=\"\" routerLink=\"./magazine\">Magazine</a><br>\r\n    <a href=\"\" routerLink=\"./newsletters\">Newsletters</a><br>\r\n    <a href=\"\" routerLink=\"./poster\">Poster</a><br>\r\n    <a href=\"\" routerLink=\"./booklet\">Booklet</a><br>\r\n    <a href=\"\" routerLink=\"./brochures\">Brochures</a><br>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/news-letter/news-letter.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/news-letter/news-letter.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-section\">\r\n  <div class=\"margin-top\">\r\n    <div class=\"custom-container\">\r\n      <div class=\"section-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-7 col-xs-11\">\r\n            <div *ngIf=\"newsLetter.length > 0; else nonews\">\r\n              <h4>{{'label.news' | translate}}</h4><br>\r\n              <div class=\"row news\"\r\n                *ngFor=\"let nw of contents | paginate: { itemsPerPage: 4 , currentPage: p , totalItems: total }\">\r\n                <div class=\"col-md-4 col-sm-7 featured-video\">\r\n                  <img class=\"fit-cover\" [src]=\"nw.better_featured_image?.source_url\"\r\n                    [alt]=\"nw.better_featured_image?.source_url.alt_text\" (error)=\"imageError($event.target);\">\r\n                  <!-- <ng-template #showvedio>\r\n                      <iframe [src]=\"videoURL(nw?.acf.link)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> \r\n                  </ng-template>  -->\r\n                  <div class=\"attachment-type\">\r\n                    <p *ngIf=\"nw.acf.attachment_type == 'image' else video;\">{{'label.image' | translate}}</p>\r\n                    <ng-template #video>\r\n                      <p>{{ 'label.video' | translate }}</p>\r\n                    </ng-template>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-sm-5\">\r\n                  <div>\r\n                    <h5>{{ getBrief(nw.title.rendered) }}</h5>\r\n                    <p class=\"content\" *ngIf=\"nw.content\">{{ getBrief(nw.content.rendered) }}</p>\r\n                    <a [routerLink]=\"['/media-room/media', nw.id]\">{{'btn.read-more' | translate}}</a><br>\r\n                    <span>{{ nw.date }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <pagination-controls class=\"news-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\"\r\n                  responsive=\"true\" maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n                  nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ng-template #nonews>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{'label.no-data' | translate}}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/news-updates/news-updates.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/news-updates/news-updates.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-section\">\r\n  <div class=\"margin-top\">\r\n    <div class=\"custom-container\">\r\n      <div class=\"section-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-7 col-xs-11\">\r\n            <div *ngIf=\"news.length > 0; else nonews\">\r\n              <h4>{{'label.news' | translate}}</h4><br>\r\n              <div class=\"row news\"\r\n                *ngFor=\"let nw of contents | paginate: { itemsPerPage: 4 , currentPage: p , totalItems: total }\">\r\n                <div class=\"col-md-4 col-sm-7 featured-video\">\r\n                  <img class=\"fit-cover\" [src]=\"nw.better_featured_image?.source_url\"\r\n                    [alt]=\"nw.better_featured_image?.source_url.alt_text\" (error)=\"imageError($event.target);\">\r\n                  <!-- <ng-template #showvedio>\r\n                      <iframe [src]=\"videoURL(nw?.acf.link)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> \r\n                  </ng-template>  -->\r\n                  <div class=\"attachment-type\">\r\n                    <p *ngIf=\"nw.acf.attachment_type == 'image' else video;\">{{'label.image' | translate}}</p>\r\n                    <ng-template #video> \r\n                      <p>{{ 'label.video' | translate }}</p>\r\n                    </ng-template>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-sm-5\">\r\n                  <div>\r\n                    <h5>{{ getBrief(nw.title.rendered) }}</h5>\r\n                    <p class=\"content\" *ngIf=\"nw.content\">{{ getBrief(nw.content.rendered) }}</p>\r\n                    <a [routerLink]=\"['/media-room/media', nw.id]\">{{'btn.read-more' | translate}}</a><br>\r\n                    <span>{{ nw.date }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <pagination-controls class=\"news-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\"\r\n                  responsive=\"true\" maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n                  nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ng-template #nonews>\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>{{'label.no-data' | translate}}</h4>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/media-room/press-release/press-release.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-room/press-release/press-release.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-7 col-xs-11\">\r\n          <div *ngIf=\"press.length > 0; else nopress\">\r\n            <h4>{{'submenu.press-release' | translate}}</h4><br>\r\n            <div class=\"row news\" *ngFor=\"let pre of contents | paginate: { itemsPerPage: 5 , currentPage: p , totalItems: total}\">\r\n              <div class=\"col-md-4 col-sm-7 featured-video\">\r\n                  <img [src]=\"pre.better_featured_image?.source_url\" [alt]=\"pre.better_featured_image?.source_url.alt_text\"\r\n                  (error)=\"imageError($event.target);\">\r\n                  <!-- <ng-template #showvedio>\r\n                      <iframe [src]=\"videoURL(pre?.acf.link)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> \r\n                  </ng-template>  -->\r\n                <div class=\"attachment-type\">\r\n                  <p *ngIf=\"pre.acf.attachment_type == 'image' else vedio;\">{{'label.image' | translate}}</p>\r\n                  <ng-template #vedio>\r\n                    <p>{{ 'label.video' | translate }}</p>\r\n                  </ng-template>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7 col-sm-5\"> \r\n                <div>\r\n                  <h5>{{ pre.title.rendered }}</h5>\r\n                  <p class=\"content\">{{ getBrief(pre.content.rendered) }}</p>\r\n                  <a [routerLink]=\"['/media-room/media', pre.id]\">{{'btn.read-more' | translate}}</a><br>\r\n                  <span>{{ pre.date }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <pagination-controls class=\"press-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\" responsive=\"true\"\r\n                maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n                nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #nopress>\r\n          <div class=\"jumbotron no-data\">\r\n            <div [class.dot-falling]=\"loading\"></div>\r\n            <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media-room/access-info/access-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/media-room/access-info/access-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vYWNjZXNzLWluZm8vYWNjZXNzLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/media-room/access-info/access-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/media-room/access-info/access-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccessInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessInfoComponent", function() { return AccessInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");



var AccessInfoComponent = /** @class */ (function () {
    function AccessInfoComponent(mediaService) {
        this.mediaService = mediaService;
        this.customParams = [];
        this.p = 1;
        this.total = 1;
        this.accessInfo = [];
        this.contents = [];
    }
    // accessInfo;
    // loading = true;
    AccessInfoComponent.prototype.ngOnInit = function () {
        // this.getPolicyDetails();
        this.customParams.push('title.rendered');
        this.customParams.push('content.rendered');
        this.customParams.push('acf.attachment_type');
        this.customParams.push('acf.link');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('date');
        this.customParams.push('id');
        this.getAceessInfoData('access_to_info', this.p);
    };
    // getPolicyDetails() {
    //   this.loading = true;
    //   const customParams = [];
    //   customParams.push('title');
    //   customParams.push('content');
    //   this.mediaService.getAccesInfoData(customParams, 'access_to_info').subscribe((data) => {
    //     console.log('accessInfo: ', data);
    //     this.loading = false;
    //     if (data.length > 0) {
    //       this.accessInfo = this.mediaService.styleDetailsLink(data[0]);
    //     }
    //   });
    // }
    AccessInfoComponent.prototype.getAceessInfoData = function (type, page) {
        var _this = this;
        if ((this.accessInfo.length < 1) || (this.accessInfo.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.mediaService.getMediaData(this.customParams, type, page).subscribe(function (accessInfoData) {
                _this.total = Number(accessInfoData.headers.get('X-WP-Total'));
                if (accessInfoData.body.length > 0) {
                    var newData = {
                        page: page,
                        data: _this.mediaService.refineData(accessInfoData.body)
                    };
                    _this.accessInfo.push(newData);
                    _this.contents = newData.data;
                }
            });
        }
        else {
            this.contents = (this.accessInfo.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    AccessInfoComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        //console.log(el);
        return true;
    };
    AccessInfoComponent.prototype.getBrief = function (ds) {
        if (ds.length > 60) {
            return ds.substring(0, 60) + '...';
        }
        return ds;
    };
    AccessInfoComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getAceessInfoData('news', page);
    };
    AccessInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-info',
            template: __webpack_require__(/*! raw-loader!./access-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/access-info/access-info.component.html"),
            styles: [__webpack_require__(/*! ./access-info.component.css */ "./src/app/media-room/access-info/access-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_2__["MediaServicesService"]])
    ], AccessInfoComponent);
    return AccessInfoComponent;
}());



/***/ }),

/***/ "./src/app/media-room/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/media-room/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .margin-top{\r\n    margin-top: 15px;\r\n  }\r\n  h4,h5 {\r\n    font-weight: bold !important;\r\n  }\r\n  img {\r\n    width: 100%;\r\n    height: 250px;\r\n  }\r\n  span {\r\n    color: gray;\r\n    font-size: small;\r\n    font-weight: bold;\r\n  }\r\n  a {\r\n    font-weight: bold;\r\n    color: #282560\r\n  }\r\n  .news {\r\n    margin-bottom: 20px;\r\n    overflow-wrap: break-word;\r\n  }\r\n  .pmaterial {\r\n    background-color: #01a79b;\r\n    margin: 0px 10px;\r\n    margin-bottom: 20px;\r\n  }\r\n  a:hover:not(.active) {\r\n    color: #01a79b;\r\n    cursor: pointer;\r\n  }\r\n  .events-pagination /deep/ .ngx-pagination .current {\r\n    background: #01a79b;\r\n  }\r\n  .text-center {\r\n    text-align: center;\r\n  }\r\n  .icon {\r\n    height: 80%;\r\n    width: 50%;\r\n    margin: auto;\r\n  }\r\n  .content{\r\n    text-align: justify\r\n  }\r\n  .featured-video iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtcm9vbS9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQjtFQUNGO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0VBR0E7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS1yb29tL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLm1hcmdpbi10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBoNCxoNSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyODI1NjBcclxuICB9XHJcbiAgXHJcbiAgLm5ld3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAucG1hdGVyaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgY29sb3I6ICMwMWE3OWI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ldmVudHMtcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMWE3OWI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5XHJcbiAgfVxyXG4gIC5mZWF0dXJlZC12aWRlbyBpZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/media-room/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/media-room/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");




var EventsComponent = /** @class */ (function () {
    function EventsComponent(mediaService) {
        this.mediaService = mediaService;
        this.loading = true;
        this.customParams = [];
        this.p = 1;
        this.total = 1;
        this.events = [];
        this.contents = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.customParams.push('title.rendered');
        this.customParams.push('content.rendered');
        this.customParams.push('acf.attachment_type');
        this.customParams.push('acf.link');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('date');
        this.customParams.push('id');
        this.getEventsData('events', this.p);
    };
    EventsComponent.prototype.getEventsData = function (type, page) {
        var _this = this;
        if ((this.events.length < 1) || (this.events.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.loading = true;
            this.mediaService.getMediaData(this.customParams, type, page).subscribe(function (eventsData) {
                _this.loading = false;
                _this.total = Number(eventsData.headers.get('X-WP-Total'));
                if (eventsData.body.length > 0) {
                    var newData = {
                        page: page,
                        data: _this.refineData(eventsData.body)
                    };
                    _this.events.push(newData);
                    // console.log(this.events);
                    _this.contents = newData.data;
                }
            });
        }
        else {
            this.contents = (this.events.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    EventsComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
                el.content.rendered = this.mediaService.htmlToPlaintext(el.content.rendered);
            }
        }
        return data;
    };
    EventsComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 260) + '...';
        }
        return ds;
    };
    EventsComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        // console.log(el);
        return true;
    };
    EventsComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getEventsData('events', page);
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/media-room/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_3__["MediaServicesService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/media-room/media-general-template/media-general-template.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/media-room/media-general-template/media-general-template.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 90%;  \r\n    height: 400px;\r\n    display: block;\r\n    margin: 3% 4%;\r\n}\r\n.content{\r\n    margin: 0px 4%; \r\n    width: 100%;\r\n}\r\np{\r\n    text-align: justify\r\n}\r\nh5{\r\n    font-weight: bold !important;\r\n    margin:15px 0px;\r\n}\r\nh6{\r\n    color :  gray;\r\n}\r\n.featured-video {\r\n    margin: 4% 0px;\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n.featured-video iframe,\r\n.featured-video img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtcm9vbS9tZWRpYS1nZW5lcmFsLXRlbXBsYXRlL21lZGlhLWdlbmVyYWwtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vbWVkaWEtZ2VuZXJhbC10ZW1wbGF0ZS9tZWRpYS1nZW5lcmFsLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogOTAlOyAgXHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMlIDQlO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwcHggNCU7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnlcclxufVxyXG5oNXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46MTVweCAwcHg7XHJcbn1cclxuaDZ7XHJcbiAgICBjb2xvciA6ICBncmF5O1xyXG59XHJcbi5mZWF0dXJlZC12aWRlbyB7XHJcbiAgICBtYXJnaW46IDQlIDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG4uZmVhdHVyZWQtdmlkZW8gaWZyYW1lLFxyXG4uZmVhdHVyZWQtdmlkZW8gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/media-room/media-general-template/media-general-template.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/media-room/media-general-template/media-general-template.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MediaGeneralTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaGeneralTemplateComponent", function() { return MediaGeneralTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var MediaGeneralTemplateComponent = /** @class */ (function () {
    function MediaGeneralTemplateComponent(route, dataService, sanitizer, mediaService) {
        this.route = route;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.mediaService = mediaService;
        this.loading = true;
    }
    MediaGeneralTemplateComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getNewsDetails(this.id);
    };
    MediaGeneralTemplateComponent.prototype.getNewsDetails = function (id) {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('better_featured_image.source_url');
        customParams.push('better_featured_image.alt_text');
        customParams.push('acf.attachment_type');
        customParams.push('acf.link');
        customParams.push('date');
        this.dataService.getPostDetails(id, customParams).subscribe(function (newsData) {
            _this.loading = false;
            if (_this.objHasKeys(newsData[0], ['acf', 'link'])) {
                _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_7__["parseHTML"](newsData[0].acf.link);
                _this.videoLink = jquery__WEBPACK_IMPORTED_MODULE_7__(_this.videoLink).attr('src');
                _this.videoLink = _this.videoURL(_this.videoLink);
            }
            _this.news = _this.refineData(newsData[0]);
            _this.news = _this.mediaService.styleDetailsLink(newsData[0]);
        });
    };
    MediaGeneralTemplateComponent.prototype.refineData = function (data) {
        if (!data.hasOwnProperty('date')) {
            data.date = '00' + 'th' + 'MNT' + '';
        }
        else {
            data.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(data.date, 'MMM dd, yyyy', 'en-US', '+0530');
            if (data.hasOwnProperty('content')) {
                data.content.rendered = this.dataService.htmlToPlaintext(data.content.rendered);
            }
        }
        return data;
    };
    MediaGeneralTemplateComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.png';
        // console.log(el);
        return true;
    };
    MediaGeneralTemplateComponent.prototype.videoURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    MediaGeneralTemplateComponent.prototype.objHasKeys = function (obj, keys) {
        var next = keys.shift();
        return obj[next] && (!keys.length || this.objHasKeys(obj[next], keys));
    };
    MediaGeneralTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-general-template',
            template: __webpack_require__(/*! raw-loader!./media-general-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/media-general-template/media-general-template.component.html"),
            styles: [__webpack_require__(/*! ./media-general-template.component.css */ "./src/app/media-room/media-general-template/media-general-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _media_services_service__WEBPACK_IMPORTED_MODULE_6__["MediaServicesService"]])
    ], MediaGeneralTemplateComponent);
    return MediaGeneralTemplateComponent;
}());



/***/ }),

/***/ "./src/app/media-room/media-room-home/media-room-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/media-room/media-room-home/media-room-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vbWVkaWEtcm9vbS1ob21lL21lZGlhLXJvb20taG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/media-room/media-room-home/media-room-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/media-room/media-room-home/media-room-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: MediaRoomHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoomHomeComponent", function() { return MediaRoomHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");



var MediaRoomHomeComponent = /** @class */ (function () {
    function MediaRoomHomeComponent(mediaService) {
        this.mediaService = mediaService;
        this.orgs = [];
        this.brochures = [];
        this.posters = [];
        this.flyers = [];
        this.booklets = [];
        this.newsletters = [];
        this.promoMaterialFlag = false;
    }
    MediaRoomHomeComponent.prototype.ngOnInit = function () {
        this.getPromotingMaterial('Promotional_Materials');
        this.getNewsMaterial('Newsletter', 1);
    };
    MediaRoomHomeComponent.prototype.getNewsMaterial = function (type, perPage) {
        var _this = this;
        var customParams = [];
        customParams.push('acf.library_attachment.url');
        this.mediaService.getNewsData(customParams, type, perPage).subscribe(function (newsData) {
            _this.newsletters.push(newsData[0]);
        });
    };
    MediaRoomHomeComponent.prototype.getPromotingMaterial = function (type) {
        var _this = this;
        var customParams = [];
        customParams.push('acf.promotional_materials_attachment.url');
        customParams.push('acf.promotional_materials_type');
        this.mediaService.getPromotingData(customParams, type).subscribe(function (promotingMaterialData) {
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
        });
    };
    MediaRoomHomeComponent.prototype.checkPromoMaterials = function () {
        return true;
    };
    MediaRoomHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-room-home',
            template: __webpack_require__(/*! raw-loader!./media-room-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/media-room-home/media-room-home.component.html"),
            styles: [__webpack_require__(/*! ./media-room-home.component.css */ "./src/app/media-room/media-room-home/media-room-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_2__["MediaServicesService"]])
    ], MediaRoomHomeComponent);
    return MediaRoomHomeComponent;
}());



/***/ }),

/***/ "./src/app/media-room/media-room/media-room.component.css":
/*!****************************************************************!*\
  !*** ./src/app/media-room/media-room/media-room.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vbWVkaWEtcm9vbS9tZWRpYS1yb29tLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/media-room/media-room/media-room.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/media-room/media-room/media-room.component.ts ***!
  \***************************************************************/
/*! exports provided: MediaRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoomComponent", function() { return MediaRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MediaRoomComponent = /** @class */ (function () {
    function MediaRoomComponent() {
    }
    MediaRoomComponent.prototype.ngOnInit = function () {
    };
    MediaRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-room',
            template: __webpack_require__(/*! raw-loader!./media-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/media-room/media-room.component.html"),
            styles: [__webpack_require__(/*! ./media-room.component.css */ "./src/app/media-room/media-room/media-room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MediaRoomComponent);
    return MediaRoomComponent;
}());



/***/ }),

/***/ "./src/app/media-room/media-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/media-room/media-routing.module.ts ***!
  \****************************************************/
/*! exports provided: MediaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoutingModule", function() { return MediaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "./src/app/media-room/events/events.component.ts");
/* harmony import */ var _media_room_home_media_room_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-room-home/media-room-home.component */ "./src/app/media-room/media-room-home/media-room-home.component.ts");
/* harmony import */ var _news_updates_news_updates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-updates/news-updates.component */ "./src/app/media-room/news-updates/news-updates.component.ts");
/* harmony import */ var _press_release_press_release_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./press-release/press-release.component */ "./src/app/media-room/press-release/press-release.component.ts");
/* harmony import */ var _media_general_template_media_general_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media-general-template/media-general-template.component */ "./src/app/media-room/media-general-template/media-general-template.component.ts");
/* harmony import */ var _access_info_access_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access-info/access-info.component */ "./src/app/media-room/access-info/access-info.component.ts");
/* harmony import */ var _news_letter_news_letter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-letter/news-letter.component */ "./src/app/media-room/news-letter/news-letter.component.ts");










var mediaRoutes = [
    {
        path: '',
        component: _media_room_home_media_room_home_component__WEBPACK_IMPORTED_MODULE_4__["MediaRoomHomeComponent"],
        children: [
            {
                path: '',
                children: [
                    // { path: 'event', component: EventsComponent },
                    { path: 'news-updates', component: _news_updates_news_updates_component__WEBPACK_IMPORTED_MODULE_5__["NewsUpdatesComponent"] },
                    { path: 'press-release', component: _press_release_press_release_component__WEBPACK_IMPORTED_MODULE_6__["PressReleaseComponent"] },
                    { path: 'media/:id', component: _media_general_template_media_general_template_component__WEBPACK_IMPORTED_MODULE_7__["MediaGeneralTemplateComponent"] },
                    { path: 'access-info', component: _access_info_access_info_component__WEBPACK_IMPORTED_MODULE_8__["AccessInfoComponent"] },
                    { path: 'newsletter', component: _news_letter_news_letter_component__WEBPACK_IMPORTED_MODULE_9__["NewsLetterComponent"] },
                    { path: '', component: _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"] }
                ]
            }
        ]
    }
];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(mediaRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());



/***/ }),

/***/ "./src/app/media-room/media-services.service.ts":
/*!******************************************************!*\
  !*** ./src/app/media-room/media-services.service.ts ***!
  \******************************************************/
/*! exports provided: MediaServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaServicesService", function() { return MediaServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var MediaServicesService = /** @class */ (function () {
    function MediaServicesService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    MediaServicesService.prototype.getMediaData = function (customP, catName, page) {
        return this.http.get(this.dataService.api + 'posts', {
            observe: 'response',
            params: {
                'filter[category_name]': catName,
                per_page: '4',
                page: page,
                lang: this.dataService.language,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    MediaServicesService.prototype.getPromotingData = function (customP, catName) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.dataService.language,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    MediaServicesService.prototype.getNewsData = function (customP, catName, perPage) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.dataService.language,
                per_page: perPage,
                fields: customP.join(','),
                orederby: 'date'
            }
        });
    };
    MediaServicesService.prototype.getAccesInfoData = function (customP, catName) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                'filter[category_name]': catName,
                lang: this.dataService.language,
                fields: customP.join(','),
            }
        });
    };
    MediaServicesService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    MediaServicesService.prototype.styleDetailsLink = function (data) {
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
    MediaServicesService.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
                if (el.hasOwnProperty('content')) {
                    el.content.rendered = this.htmlToPlaintext(el.content.rendered);
                }
            }
        }
        return data;
    };
    MediaServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], MediaServicesService);
    return MediaServicesService;
}());



/***/ }),

/***/ "./src/app/media-room/media.module.ts":
/*!********************************************!*\
  !*** ./src/app/media-room/media.module.ts ***!
  \********************************************/
/*! exports provided: createTranslateLoader, MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media-routing.module */ "./src/app/media-room/media-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/events.component */ "./src/app/media-room/events/events.component.ts");
/* harmony import */ var _media_room_home_media_room_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media-room-home/media-room-home.component */ "./src/app/media-room/media-room-home/media-room-home.component.ts");
/* harmony import */ var _news_updates_news_updates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-updates/news-updates.component */ "./src/app/media-room/news-updates/news-updates.component.ts");
/* harmony import */ var _press_release_press_release_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./press-release/press-release.component */ "./src/app/media-room/press-release/press-release.component.ts");
/* harmony import */ var _media_room_media_room_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./media-room/media-room.component */ "./src/app/media-room/media-room/media-room.component.ts");
/* harmony import */ var _media_general_template_media_general_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./media-general-template/media-general-template.component */ "./src/app/media-room/media-general-template/media-general-template.component.ts");
/* harmony import */ var _news_letter_news_letter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news-letter/news-letter.component */ "./src/app/media-room/news-letter/news-letter.component.ts");
/* harmony import */ var _access_info_access_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./access-info/access-info.component */ "./src/app/media-room/access-info/access-info.component.ts");








// Import shared Module here









function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"],
                _media_room_home_media_room_home_component__WEBPACK_IMPORTED_MODULE_10__["MediaRoomHomeComponent"],
                _news_updates_news_updates_component__WEBPACK_IMPORTED_MODULE_11__["NewsUpdatesComponent"],
                _press_release_press_release_component__WEBPACK_IMPORTED_MODULE_12__["PressReleaseComponent"],
                _media_room_media_room_component__WEBPACK_IMPORTED_MODULE_13__["MediaRoomComponent"],
                _media_general_template_media_general_template_component__WEBPACK_IMPORTED_MODULE_14__["MediaGeneralTemplateComponent"],
                _news_letter_news_letter_component__WEBPACK_IMPORTED_MODULE_15__["NewsLetterComponent"],
                _access_info_access_info_component__WEBPACK_IMPORTED_MODULE_16__["AccessInfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _media_routing_module__WEBPACK_IMPORTED_MODULE_7__["MediaRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
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
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./src/app/media-room/news-letter/news-letter.component.css":
/*!******************************************************************!*\
  !*** ./src/app/media-room/news-letter/news-letter.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vbmV3cy1sZXR0ZXIvbmV3cy1sZXR0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/media-room/news-letter/news-letter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/media-room/news-letter/news-letter.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLetterComponent", function() { return NewsLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");




var NewsLetterComponent = /** @class */ (function () {
    function NewsLetterComponent(mediaService) {
        this.mediaService = mediaService;
        this.customParams = [];
        this.p = 1;
        this.total = 1;
        this.newsLetter = [];
        this.contents = [];
    }
    NewsLetterComponent.prototype.ngOnInit = function () {
        this.customParams.push('title.rendered');
        this.customParams.push('content.rendered');
        this.customParams.push('acf.attachment_type');
        this.customParams.push('acf.link');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('date');
        this.customParams.push('id');
        this.getNewsLetterData('newsletter', this.p);
    };
    NewsLetterComponent.prototype.getNewsLetterData = function (type, page) {
        var _this = this;
        if ((this.newsLetter.length < 1) || (this.newsLetter.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.mediaService.getMediaData(this.customParams, type, page).subscribe(function (newsData) {
                _this.total = Number(newsData.headers.get('X-WP-Total'));
                //console.log('newletter data', newsData);
                if (newsData.body.length > 0) {
                    var newData = {
                        page: page,
                        data: _this.refineData(newsData.body)
                    };
                    _this.newsLetter.push(newData);
                    _this.contents = newData.data;
                }
            });
        }
        else {
            this.contents = (this.newsLetter.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    NewsLetterComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(el.date, 'dd MMM yyyy', 'en-US', '+0530');
                if (el.hasOwnProperty('content')) {
                    el.content.rendered = this.mediaService.htmlToPlaintext(el.content.rendered);
                }
            }
        }
        return data;
    };
    NewsLetterComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 39) + '...';
        }
        return ds;
    };
    NewsLetterComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        // console.log(el);
        return true;
    };
    NewsLetterComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getNewsLetterData('news', page);
    };
    NewsLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-letter',
            template: __webpack_require__(/*! raw-loader!./news-letter.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/news-letter/news-letter.component.html"),
            styles: [__webpack_require__(/*! ./news-letter.component.css */ "./src/app/media-room/news-letter/news-letter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_3__["MediaServicesService"]])
    ], NewsLetterComponent);
    return NewsLetterComponent;
}());



/***/ }),

/***/ "./src/app/media-room/news-updates/news-updates.component.css":
/*!********************************************************************!*\
  !*** ./src/app/media-room/news-updates/news-updates.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vbmV3cy11cGRhdGVzL25ld3MtdXBkYXRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/media-room/news-updates/news-updates.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/media-room/news-updates/news-updates.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsUpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsUpdatesComponent", function() { return NewsUpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");



var NewsUpdatesComponent = /** @class */ (function () {
    function NewsUpdatesComponent(mediaService) {
        this.mediaService = mediaService;
        this.customParams = [];
        this.p = 1;
        this.total = 1;
        this.news = [];
        this.contents = [];
    }
    NewsUpdatesComponent.prototype.ngOnInit = function () {
        this.customParams.push('title.rendered');
        this.customParams.push('content.rendered');
        this.customParams.push('acf.attachment_type');
        this.customParams.push('acf.link');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('date');
        this.customParams.push('id');
        this.getNewsData('news', this.p);
    };
    NewsUpdatesComponent.prototype.getNewsData = function (type, page) {
        var _this = this;
        if ((this.news.length < 1) || (this.news.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.mediaService.getMediaData(this.customParams, type, page).subscribe(function (newsData) {
                _this.total = Number(newsData.headers.get('X-WP-Total'));
                if (newsData.body.length > 0) {
                    var newData = {
                        page: page,
                        data: _this.mediaService.refineData(newsData.body)
                    };
                    _this.news.push(newData);
                    // console.log(this.news);
                    _this.contents = newData.data;
                }
            });
        }
        else {
            this.contents = (this.news.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    NewsUpdatesComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        //console.log(el);
        return true;
    };
    NewsUpdatesComponent.prototype.getBrief = function (ds) {
        if (ds.length > 60) {
            return ds.substring(0, 60) + '...';
        }
        return ds;
    };
    NewsUpdatesComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getNewsData('news', page);
    };
    NewsUpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-updates',
            template: __webpack_require__(/*! raw-loader!./news-updates.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/news-updates/news-updates.component.html"),
            styles: [__webpack_require__(/*! ./news-updates.component.css */ "./src/app/media-room/news-updates/news-updates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_2__["MediaServicesService"]])
    ], NewsUpdatesComponent);
    return NewsUpdatesComponent;
}());



/***/ }),

/***/ "./src/app/media-room/press-release/press-release.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/media-room/press-release/press-release.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top{\r\n  margin-top: 15px;\r\n}\r\n  h4,h5 {\r\n    font-weight: bold !important;\r\n  }\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  span {\r\n    color: gray;\r\n    font-size: small;\r\n    font-weight: bold;\r\n  }\r\n  a {\r\n    font-weight: bold;\r\n    color: #282560\r\n  }\r\n  .news {\r\n    margin-bottom: 20px;\r\n    overflow-wrap: break-word;\r\n  }\r\n  .pmaterial {\r\n    background-color: #01a79b;\r\n    margin: 0px 10px;\r\n    margin-bottom: 20px;\r\n  }\r\n  a:hover:not(.active) {\r\n    color: #01a79b;\r\n    cursor: pointer;\r\n  }\r\n  .press-pagination /deep/ .ngx-pagination .current {\r\n    background: #01a79b;\r\n  }\r\n  .text-center {\r\n    text-align: center;\r\n  }\r\n  .icon {\r\n    height: 80%;\r\n    width: 50%;\r\n    margin: auto;\r\n  }\r\n  .content{\r\n    text-align: justify\r\n  }\r\n  .featured-video iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtcm9vbS9wcmVzcy1yZWxlYXNlL3ByZXNzLXJlbGVhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO0VBQ0Y7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXJvb20vcHJlc3MtcmVsZWFzZS9wcmVzcy1yZWxlYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiAgaDQsaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyODI1NjBcclxuICB9XHJcbiAgXHJcbiAgLm5ld3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAucG1hdGVyaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgY29sb3I6ICMwMWE3OWI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVzcy1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzAxYTc5YjtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmljb24ge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnlcclxuICB9XHJcbiAgLmZlYXR1cmVkLXZpZGVvIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/media-room/press-release/press-release.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/media-room/press-release/press-release.component.ts ***!
  \*********************************************************************/
/*! exports provided: PressReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressReleaseComponent", function() { return PressReleaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media-services.service */ "./src/app/media-room/media-services.service.ts");




var PressReleaseComponent = /** @class */ (function () {
    function PressReleaseComponent(mediaService) {
        this.mediaService = mediaService;
        this.loading = true;
        this.customParams = [];
        this.p = 1;
        this.total = 1;
        this.press = [];
        this.contents = [];
    }
    PressReleaseComponent.prototype.ngOnInit = function () {
        this.customParams.push('title.rendered');
        this.customParams.push('content.rendered');
        this.customParams.push('acf.attachment_type');
        this.customParams.push('acf.link');
        this.customParams.push('better_featured_image.source_url');
        this.customParams.push('better_featured_image.alt_text');
        this.customParams.push('date');
        this.customParams.push('id');
        this.getPressData('press', this.p);
    };
    PressReleaseComponent.prototype.getPressData = function (type, page) {
        var _this = this;
        if ((this.press.length < 1) || (this.press.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.loading = true;
            this.mediaService.getMediaData(this.customParams, type, page).subscribe(function (pressData) {
                _this.total = Number(pressData.headers.get('X-WP-Total'));
                if (pressData.body.length > 0) {
                    _this.loading = false;
                    var newData = {
                        page: page,
                        data: _this.refineData(pressData.body)
                    };
                    _this.press.push(newData);
                    // console.log(this.press);
                    _this.contents = newData.data;
                }
            });
        }
        else {
            this.contents = (this.press.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    PressReleaseComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            if (!el.hasOwnProperty('date')) {
                el.date = '00' + 'th' + 'MNT' + '';
            }
            else {
                el.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
                el.content.rendered = this.mediaService.htmlToPlaintext(el.content.rendered);
            }
        }
        return data;
    };
    PressReleaseComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 260) + '...';
        }
        return ds;
    };
    PressReleaseComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.png';
        //console.log(el);
        return true;
    };
    PressReleaseComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getPressData('press', page);
    };
    PressReleaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-press-release',
            template: __webpack_require__(/*! raw-loader!./press-release.component.html */ "./node_modules/raw-loader/index.js!./src/app/media-room/press-release/press-release.component.html"),
            styles: [__webpack_require__(/*! ./press-release.component.css */ "./src/app/media-room/press-release/press-release.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_media_services_service__WEBPACK_IMPORTED_MODULE_3__["MediaServicesService"]])
    ], PressReleaseComponent);
    return PressReleaseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=media-room-media-module.js.map