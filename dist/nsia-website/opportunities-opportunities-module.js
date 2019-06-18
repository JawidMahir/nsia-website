(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opportunities-opportunities-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/administration/administration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/administration/administration.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"opportunities jobs content-justify\" *ngIf=\"job; else nodata\">\r\n  <div class=\"title-wrapper\">\r\n    <div class=\"job-title\">\r\n      <h4>{{job.title.rendered}}</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"job-specs\">\r\n\r\n    <div class=\"spec-item\">\r\n      <span><i class=\"fas fa-graduation-cap\"></i>{{ job.acf.degree }}</span>\r\n\r\n    </div>\r\n    <div class=\"spec-item\">\r\n      <span><i class=\"fas fa-map-marker-alt\"></i> {{ job.acf.location }}</span>\r\n\r\n    </div>\r\n    <div class=\"spec-item\">\r\n      <span><i class=\"fas fa-clock\"></i> {{job.acf.time}}</span>\r\n\r\n    </div>\r\n    <div class=\"spec-item\">\r\n      <span><i class=\"fas fa-eye\"></i> 159</span>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"job-full-specs\">\r\n    <table class=\"table table-bordered job-specifications\">\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <span>{{'label.date-posted' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.date\">{{ job.date }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{'label.reference' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.reference_\">{{job.acf.reference_}}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{'label.closing-date' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.closing_date\">{{ job.acf.closing_date }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{'label.work-type' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.work_type\">{{ job.acf.work_type }}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{'label.vacancies-num' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.number_of_vacancies\">{{ job.acf.number_of_vacancies }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{'submenu.gender' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.gender\">{{ job.acf.gender}}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{'label.functional-area' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.functional_area\">{{ job.acf.functional_area }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{'label.nationality' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.nationality\">{{ job.acf.nationality }}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{'label.salary-range' | translate}}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.salary_range\">{{ job.acf.salary_range }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{ 'label.experience' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.years_of_experience\">{{ job.acf.years_of_experience }}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{ 'label.contract-duration' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.contract_duration\">{{ job.acf.contract_duration }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{ 'label.extension-possibility' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.extension_possibility\">{{ job.acf.extension_possibility }}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{ 'label.contract-type' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.contract_type\">{{ job.acf.contract_type }}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{ 'label.probation-period' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.probation_period\">{{ job.acf.probation_period }}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span>{{ 'label.required-languages' | translate }}</span>\r\n          </td>\r\n          <td>\r\n            <span *ngIf=\"job.acf.required_language\">{{ job.acf.required_language }}</span>\r\n          </td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"job-details\">\r\n    <div class=\"about-nsia detail-section\" *ngIf=\"job.acf.about_nsia\">\r\n      <h3>{{ 'submenu.about-nsia' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.about_nsia\">\r\n      </div>\r\n    </div>\r\n    <div class=\"job-summary detail-section\" *ngIf=\"job.acf.job_summary\">\r\n      <h3>{{ 'label.job-summary' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.job_summary\">\r\n      </div>\r\n    </div>\r\n    <div class=\"skills-required detail-section\" *ngIf=\"job.acf.skills_required\">\r\n      <h3>{{ 'label.skills-required' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.skills_required\">\r\n      </div>\r\n    </div>\r\n    <div class=\"skills-description detail-section\" *ngIf=\"job.acf.skills_description\">\r\n      <h3>{{ 'label.skills-description' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.skills_description\">\r\n      </div>\r\n    </div>\r\n    <div class=\"duties-responisibilities detail-section\" *ngIf=\"job.acf.responsibilities\">\r\n      <h3>{{ 'label.responsibilities' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.responsibilities\">\r\n      </div>\r\n    </div>\r\n    <div class=\"job-location detail-section\" *ngIf=\"job.acf.location\">\r\n      <h3>{{ 'label.location' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.location\">\r\n      </div>\r\n    </div>\r\n    <div class=\"qualification detail-section\" *ngIf=\"job.acf.qualifications\">\r\n      <h3>{{ 'label.qualifications' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.qualifications\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"submission-email detail-section\" *ngIf=\"job.acf.submission_guideline\">\r\n      <h3>{{ 'label.submission-guidelines' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.submission_guideline\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"submission-email detail-section\" *ngIf=\"job.acf.submission_email\">\r\n      <h3>{{ 'label.submission-email' | translate }}</h3>\r\n      <div class=\"content\" [innerHTML]=\"job.acf.submission_email\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<ng-template #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/jobs/jobs.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/jobs/jobs.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jobs content-justify\">\r\n  <div class=\"title\">\r\n    <h1>{{'submenu.jobs' | translate }}</h1>\r\n  </div>\r\n  <div class=\"job-contents\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <th><span>\r\n            {{'label.description'| translate}}\r\n          </span></th>\r\n        <th>\r\n          <span>\r\n            {{'label.p-date' | translate}}\r\n          </span>\r\n        </th>\r\n        <th>\r\n          <span>\r\n            {{'label.c-date' | translate}}\r\n          </span>\r\n        </th>\r\n      </thead>\r\n      <tbody *ngIf=\"jobs\">\r\n        <tr class=\"job\" *ngFor=\"let jb of contents | paginate: { itemsPerPage: 10 , currentPage: p , totalItems: total }\">\r\n          <td class=\"description\">\r\n            <a class=\"headline\" [routerLink]=\"['/opportunities/job', jb.id]\">\r\n              {{ jb.title.rendered }}\r\n            </a>\r\n            <p class=\"job-brief\" *ngIf=\"jb.content\">\r\n              {{ getBrief(jb.content.rendered) }}\r\n            </p>\r\n          </td>\r\n          <td>\r\n            <span>\r\n              {{ jb.date }}\r\n            </span>\r\n          </td>\r\n          <td>\r\n            <span>\r\n              {{ jb.acf.closing_date }}\r\n            </span>\r\n          </td>\r\n        </tr>\r\n        <div class=\"text-center\">\r\n          <pagination-controls class=\"jobs-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\"\r\n            responsive=\"true\" maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n            nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n        </div>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/opportunities-home/opportunities-home.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/opportunities-home/opportunities-home.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"section-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-8 col-sm-8 col-lg-8 col-xs-9\">\r\n          <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-11\">\r\n          <app-news></app-news>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/opportunities/opportunities.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/opportunities/opportunities.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  opportunities works!\r\n</p>\r\n\r\n\r\n<div>\r\n  <a href=\"\" routerLink=\"./administration\">Administration</a><br>\r\n  <a href=\"\" routerLink=\"./procurements\">Procurements</a><br>\r\n  <a href=\"\" routerLink=\"./tenders\">Tenders</a><br>\r\n \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/procurement/procurement.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/procurement/procurement.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tender content-justify\" *ngIf=\"selectedTender; else nodata\">\r\n  <h1 class=\"title\">\r\n    {{ selectedTender.title.rendered }}\r\n  </h1>\r\n  <div class=\"tender-details\">\r\n\r\n    <div class=\"p-date\">\r\n\r\n      <span>{{ 'label.date-posted' | translate }}:</span>\r\n      <strong>{{ selectedTender.date }}</strong>\r\n    </div>\r\n\r\n\r\n    <div class=\"c-date\">\r\n      <span>{{ 'label.closing-date' | translate }}:</span>\r\n      <strong>{{ selectedTender.acf.closing_date }}</strong>\r\n    </div>\r\n\r\n\r\n    <div class=\"t-number\">\r\n      <span>{{ 'label.tender-number' | translate }}:</span>\r\n      <strong>{{ selectedTender.acf.tender_number }}</strong>\r\n    </div>\r\n\r\n\r\n    <div class=\"t-city\">\r\n      <span>{{ 'label.city' | translate }}:</span>\r\n      <strong>{{ selectedTender.acf.city }}</strong>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"tender-description\">\r\n    <h4>{{ 'label.description' | translate }}:</h4>\r\n    <hr>\r\n    <p>{{ selectedTender.content.rendered }}</p>\r\n  </div>\r\n</div>\r\n<ng-template class=\"container\" #nodata>\r\n  <div class=\"jumbotron no-data\">\r\n    <div [class.dot-falling]=\"loading\"></div>\r\n    <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opportunities/procurements/procurements.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opportunities/procurements/procurements.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tenders content-justify\">\r\n  <div class=\"title\">\r\n    <h1>{{'submenu.procurement' | translate }}</h1>\r\n  </div>\r\n  <div class=\"tender-contents\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <th><span>\r\n            {{'label.description'| translate}}\r\n          </span></th>\r\n        <th>\r\n          <span>\r\n            {{'label.p-date' | translate}}\r\n          </span>\r\n        </th>\r\n        <th>\r\n          <span>\r\n            {{'label.c-date' | translate}}\r\n          </span>\r\n        </th>\r\n      </thead>\r\n      <tbody *ngIf=\"tenders\">\r\n        <tr class=\"tender\" *ngFor=\"let tn of contents | paginate: { itemsPerPage: 10 , currentPage: p , totalItems: total }\">\r\n          <td class=\"description\">\r\n            <a class=\"headline\" [routerLink]=\"['/opportunities/procurement', tn.id]\">\r\n              {{ tn.title.rendered }}\r\n            </a>\r\n            <p class=\"tender-brief\">\r\n              {{ getBrief(tn.content.rendered) }}\r\n            </p>\r\n          </td>\r\n          <td>\r\n            <span>\r\n              {{ tn.date }}\r\n            </span>\r\n          </td>\r\n          <td>\r\n            <span>\r\n              {{ tn.acf.closing_date }}\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"text-center\"> \r\n      <pagination-controls class=\"tenders-pagination\" (pageChange)=\"pageChanged($event)\" autoHide=\"true\" responsive=\"true\"\r\n        maxSize=\"9\" previousLabel=\"{{ 'pagination.previous' | translate }}\"\r\n        nextLabel=\"{{ 'pagination.next' | translate }}\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/opportunities/administration/administration.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/opportunities/administration/administration.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobs .job-title {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.jobs .job-specs {\r\n  display: flex;\r\n  display: flex;\r\n  padding: 8px;\r\n  background-color: #01a79b;\r\n  color: #fff;\r\n  margin: 2rem 0px;\r\n}\r\n\r\n.jobs .spec-item,\r\n.jobs .job-full-specs table,\r\n.jobs .detail-section h3 {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.jobs .job-specs i {\r\n  margin: 0px 4px;\r\n}\r\n\r\n.jobs .job-specs .spec-item {\r\n  flex: auto;\r\n}\r\n\r\n.jobs .job-specifications tr td:nth-child(odd) span {\r\n  font-weight: 600;\r\n}\r\n\r\n.jobs .job-details {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.jobs .detail-section {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdGllcy9hZG1pbmlzdHJhdGlvbi9hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7OztFQUdFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vcHBvcnR1bml0aWVzL2FkbWluaXN0cmF0aW9uL2FkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9icyAuam9iLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uam9icyAuam9iLXNwZWNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAycmVtIDBweDtcclxufVxyXG4uam9icyAuc3BlYy1pdGVtLFxyXG4uam9icyAuam9iLWZ1bGwtc3BlY3MgdGFibGUsXHJcbi5qb2JzIC5kZXRhaWwtc2VjdGlvbiBoMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5qb2JzIC5qb2Itc3BlY3MgaSB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcblxyXG4uam9icyAuam9iLXNwZWNzIC5zcGVjLWl0ZW0ge1xyXG4gIGZsZXg6IGF1dG87XHJcbn1cclxuXHJcbi5qb2JzIC5qb2Itc3BlY2lmaWNhdGlvbnMgdHIgdGQ6bnRoLWNoaWxkKG9kZCkgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmpvYnMgLmpvYi1kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5cclxuLmpvYnMgLmRldGFpbC1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/opportunities/administration/administration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/opportunities/administration/administration.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../opp.service */ "./src/app/opportunities/opp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(oppService, route) {
        this.oppService = oppService;
        this.route = route;
        this.loading = true;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getJobDetails(id);
    };
    AdministrationComponent.prototype.getJobDetails = function (id) {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('id');
        customParams.push('date');
        customParams.push('title.rendered');
        customParams.push('acf');
        this.oppService.getJobDetails(customParams, id).subscribe(function (data) {
            console.log('Jobs details: ', data);
            _this.loading = false;
            if (data.length > 0) {
                _this.job = data[0];
                if (_this.job.hasOwnProperty('content')) {
                    _this.job.content.rendered = _this.oppService.htmlToPlaintext(_this.job.content.rendered);
                }
                var date = new Date(_this.job.date);
                var tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
                _this.job.date = tempDate;
            }
        });
    };
    AdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! raw-loader!./administration.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/opportunities/administration/administration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_opp_service__WEBPACK_IMPORTED_MODULE_2__["OppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/opportunities/jobs/jobs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/opportunities/jobs/jobs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobs .title {\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n}\r\n\r\n/* First Primary: #01a79b green */\r\n\r\n/* Second Primary: #282560 blue */\r\n\r\n.jobs .job .headline {\r\n    color: #282560;\r\n    cursor: pointer;\r\n    transition: color .1s ease-in-out;\r\n}\r\n\r\n.jobs .job .headline:hover {\r\n    color: #01a79b;\r\n    text-decoration: underline;\r\n}\r\n\r\n.jobs-pagination /deep/ .ngx-pagination .current {\r\n    background: #01a79b;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdGllcy9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLGlDQUFpQzs7QUFDakMsaUNBQWlDOztBQUVqQztJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUdBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9icyAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLyogRmlyc3QgUHJpbWFyeTogIzAxYTc5YiBncmVlbiAqL1xyXG4vKiBTZWNvbmQgUHJpbWFyeTogIzI4MjU2MCBibHVlICovXHJcblxyXG4uam9icyAuam9iIC5oZWFkbGluZSB7XHJcbiAgICBjb2xvcjogIzI4MjU2MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcbi5qb2JzIC5qb2IgLmhlYWRsaW5lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDFhNzliO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5qb2JzLXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDFhNzliO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/opportunities/jobs/jobs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/opportunities/jobs/jobs.component.ts ***!
  \******************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../opp.service */ "./src/app/opportunities/opp.service.ts");



var JobsComponent = /** @class */ (function () {
    function JobsComponent(oppService) {
        this.oppService = oppService;
        this.p = 1;
        this.total = 1;
        this.jobs = [];
        this.contents = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.getJobs(this.p);
    };
    JobsComponent.prototype.getJobs = function (page) {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('date');
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('acf.closing_date');
        if ((this.jobs.length < 1) || (this.jobs.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.oppService.getJobs(customParams, page).subscribe(function (data) {
                _this.total = Number(data.headers.get('X-WP-Total'));
                var newData = {
                    page: page,
                    data: _this.refineData(data.body)
                };
                _this.jobs.push(newData);
                //console.log(this.jobs);
                _this.contents = newData.data;
            });
        }
        else {
            this.contents = (this.jobs.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    JobsComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 39) + '...';
        }
        return ds;
    };
    JobsComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var jb = data_1[_i];
            if (jb.content) {
                jb.content.rendered = this.oppService.htmlToPlaintext(jb.content.rendered);
            }
            var date = new Date(jb.date);
            var tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
            jb.date = tempDate;
        }
        return data;
    };
    JobsComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getJobs(page);
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/opportunities/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_opp_service__WEBPACK_IMPORTED_MODULE_2__["OppService"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/opportunities/opp.service.ts":
/*!**********************************************!*\
  !*** ./src/app/opportunities/opp.service.ts ***!
  \**********************************************/
/*! exports provided: OppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OppService", function() { return OppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var OppService = /** @class */ (function () {
    function OppService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    OppService.prototype.fetchData = function (customParams, category, page) {
        var header = {
            'filter[category_name]': category,
            per_page: '10',
            page: page,
            lang: this.dataService.language,
            fields: customParams.join(',')
        };
        return this.http.get(this.dataService.api + 'posts', {
            observe: 'response',
            params: header
        });
    };
    OppService.prototype.fetchDetails = function (customParams, category, id) {
        var header = {
            'filter[category_name]': category,
            'filter[p]': id,
            lang: this.dataService.language,
            fields: customParams.join(','),
        };
        return this.http.get(this.dataService.api + 'posts', {
            params: header
        });
    };
    OppService.prototype.getTenders = function (customParams, page) {
        return this.fetchData(customParams, 'tender', page);
    };
    OppService.prototype.getTenderDetails = function (customParams, id) {
        return this.fetchDetails(customParams, 'tender', id);
    };
    OppService.prototype.getJobs = function (customParams, page) {
        return this.fetchData(customParams, 'job', page);
    };
    OppService.prototype.getJobDetails = function (customParams, id) {
        return this.fetchDetails(customParams, 'job', id);
    };
    OppService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    OppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], OppService);
    return OppService;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities-home/opportunities-home.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/opportunities/opportunities-home/opportunities-home.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvb3Bwb3J0dW5pdGllcy1ob21lL29wcG9ydHVuaXRpZXMtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/opportunities/opportunities-home/opportunities-home.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/opportunities/opportunities-home/opportunities-home.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OpportunitiesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesHomeComponent", function() { return OpportunitiesHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpportunitiesHomeComponent = /** @class */ (function () {
    function OpportunitiesHomeComponent() {
    }
    OpportunitiesHomeComponent.prototype.ngOnInit = function () {
    };
    OpportunitiesHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunities-home',
            template: __webpack_require__(/*! raw-loader!./opportunities-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/opportunities-home/opportunities-home.component.html"),
            styles: [__webpack_require__(/*! ./opportunities-home.component.css */ "./src/app/opportunities/opportunities-home/opportunities-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpportunitiesHomeComponent);
    return OpportunitiesHomeComponent;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/opportunities/opportunities-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OpportunitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesRoutingModule", function() { return OpportunitiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/opportunities/administration/administration.component.ts");
/* harmony import */ var _opportunities_home_opportunities_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opportunities-home/opportunities-home.component */ "./src/app/opportunities/opportunities-home/opportunities-home.component.ts");
/* harmony import */ var _procurements_procurements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./procurements/procurements.component */ "./src/app/opportunities/procurements/procurements.component.ts");
/* harmony import */ var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opportunities/opportunities.component */ "./src/app/opportunities/opportunities/opportunities.component.ts");
/* harmony import */ var _procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./procurement/procurement.component */ "./src/app/opportunities/procurement/procurement.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/opportunities/jobs/jobs.component.ts");









var oppRoutes = [
    {
        path: '',
        component: _opportunities_home_opportunities_home_component__WEBPACK_IMPORTED_MODULE_4__["OpportunitiesHomeComponent"],
        children: [
            {
                path: '',
                children: [
                    { path: 'procurements', component: _procurements_procurements_component__WEBPACK_IMPORTED_MODULE_5__["ProcurementsComponent"] },
                    { path: 'procurement/:id', component: _procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__["ProcurementComponent"] },
                    { path: 'job/:id', component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__["AdministrationComponent"] },
                    { path: 'jobs', component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__["JobsComponent"] },
                    { path: '', component: _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_6__["OpportunitiesComponent"] }
                ]
            }
        ]
    }
];
var OpportunitiesRoutingModule = /** @class */ (function () {
    function OpportunitiesRoutingModule() {
    }
    OpportunitiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(oppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OpportunitiesRoutingModule);
    return OpportunitiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/opportunities/opportunities.module.ts ***!
  \*******************************************************/
/*! exports provided: createTranslateLoader, OpportunitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesModule", function() { return OpportunitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _opportunities_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./opportunities-routing.module */ "./src/app/opportunities/opportunities-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/opportunities/administration/administration.component.ts");
/* harmony import */ var _opportunities_home_opportunities_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./opportunities-home/opportunities-home.component */ "./src/app/opportunities/opportunities-home/opportunities-home.component.ts");
/* harmony import */ var _procurements_procurements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./procurements/procurements.component */ "./src/app/opportunities/procurements/procurements.component.ts");
/* harmony import */ var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opportunities/opportunities.component */ "./src/app/opportunities/opportunities/opportunities.component.ts");
/* harmony import */ var _procurement_procurement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./procurement/procurement.component */ "./src/app/opportunities/procurement/procurement.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/opportunities/jobs/jobs.component.ts");








// Import shared Module here







function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var OpportunitiesModule = /** @class */ (function () {
    function OpportunitiesModule() {
    }
    OpportunitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _administration_administration_component__WEBPACK_IMPORTED_MODULE_9__["AdministrationComponent"],
                _opportunities_home_opportunities_home_component__WEBPACK_IMPORTED_MODULE_10__["OpportunitiesHomeComponent"],
                _procurements_procurements_component__WEBPACK_IMPORTED_MODULE_11__["ProcurementsComponent"],
                _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_12__["OpportunitiesComponent"],
                _procurement_procurement_component__WEBPACK_IMPORTED_MODULE_13__["ProcurementComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _opportunities_routing_module__WEBPACK_IMPORTED_MODULE_7__["OpportunitiesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                })
            ]
        })
    ], OpportunitiesModule);
    return OpportunitiesModule;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities/opportunities.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/opportunities/opportunities/opportunities.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvb3Bwb3J0dW5pdGllcy9vcHBvcnR1bml0aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/opportunities/opportunities/opportunities.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/opportunities/opportunities/opportunities.component.ts ***!
  \************************************************************************/
/*! exports provided: OpportunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesComponent", function() { return OpportunitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent() {
    }
    OpportunitiesComponent.prototype.ngOnInit = function () {
    };
    OpportunitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunities',
            template: __webpack_require__(/*! raw-loader!./opportunities.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/opportunities/opportunities.component.html"),
            styles: [__webpack_require__(/*! ./opportunities.component.css */ "./src/app/opportunities/opportunities/opportunities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "./src/app/opportunities/procurement/procurement.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/opportunities/procurement/procurement.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tender .title {\r\n    font-weight: 700;\r\n}\r\n\r\n.tender .tender-details strong {\r\n  margin: 0px 20px;\r\n}\r\n\r\n.tender .tender-details,\r\n.tender .tender-description {\r\n  margin-top: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdGllcy9wcm9jdXJlbWVudC9wcm9jdXJlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvcHJvY3VyZW1lbnQvcHJvY3VyZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW5kZXIgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50ZW5kZXIgLnRlbmRlci1kZXRhaWxzIHN0cm9uZyB7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuLnRlbmRlciAudGVuZGVyLWRldGFpbHMsXHJcbi50ZW5kZXIgLnRlbmRlci1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/opportunities/procurement/procurement.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/opportunities/procurement/procurement.component.ts ***!
  \********************************************************************/
/*! exports provided: ProcurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementComponent", function() { return ProcurementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _opp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../opp.service */ "./src/app/opportunities/opp.service.ts");




var ProcurementComponent = /** @class */ (function () {
    function ProcurementComponent(route, oppService) {
        this.route = route;
        this.oppService = oppService;
        this.loading = true;
    }
    ProcurementComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getTenderDetails(id);
    };
    ProcurementComponent.prototype.getTenderDetails = function (id) {
        var _this = this;
        this.loading = true;
        var customParams = [];
        customParams.push('id');
        customParams.push('date');
        customParams.push('slug');
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('acf');
        this.oppService.getTenderDetails(customParams, id).subscribe(function (data) {
            if (data.length > 0) {
                _this.loading = false;
                _this.selectedTender = data[0];
                _this.selectedTender.content.rendered = _this.oppService.htmlToPlaintext(_this.selectedTender.content.rendered);
                var date = new Date(_this.selectedTender.date);
                var tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
                _this.selectedTender.date = tempDate;
            }
        });
    };
    ProcurementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-procurement',
            template: __webpack_require__(/*! raw-loader!./procurement.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/procurement/procurement.component.html"),
            styles: [__webpack_require__(/*! ./procurement.component.css */ "./src/app/opportunities/procurement/procurement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _opp_service__WEBPACK_IMPORTED_MODULE_3__["OppService"]])
    ], ProcurementComponent);
    return ProcurementComponent;
}());



/***/ }),

/***/ "./src/app/opportunities/procurements/procurements.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/opportunities/procurements/procurements.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tenders .title {\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n}\r\n\r\n/* First Primary: #01a79b green */\r\n\r\n/* Second Primary: #282560 blue */\r\n\r\n.tenders .tender .headline {\r\n    color: #282560;\r\n    cursor: pointer;\r\n    transition: color .1s ease-in-out;\r\n}\r\n\r\n.tenders .tender .headline:hover {\r\n    color: #01a79b;\r\n    text-decoration: underline; \r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}\r\n\r\n.tenders-pagination /deep/ .ngx-pagination .current {\r\n    background: #01a79b;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdGllcy9wcm9jdXJlbWVudHMvcHJvY3VyZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQSxpQ0FBaUM7O0FBQ2pDLGlDQUFpQzs7QUFFakM7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9vcHBvcnR1bml0aWVzL3Byb2N1cmVtZW50cy9wcm9jdXJlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW5kZXJzIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4vKiBGaXJzdCBQcmltYXJ5OiAjMDFhNzliIGdyZWVuICovXHJcbi8qIFNlY29uZCBQcmltYXJ5OiAjMjgyNTYwIGJsdWUgKi9cclxuXHJcbi50ZW5kZXJzIC50ZW5kZXIgLmhlYWRsaW5lIHtcclxuICAgIGNvbG9yOiAjMjgyNTYwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGVuZGVycyAudGVuZGVyIC5oZWFkbGluZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAxYTc5YjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcclxufSBcclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZW5kZXJzLXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDFhNzliO1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/opportunities/procurements/procurements.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/opportunities/procurements/procurements.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProcurementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementsComponent", function() { return ProcurementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../opp.service */ "./src/app/opportunities/opp.service.ts");



var ProcurementsComponent = /** @class */ (function () {
    function ProcurementsComponent(oppService) {
        this.oppService = oppService;
        this.p = 1;
        this.total = 1;
        this.tenders = [];
        this.contents = [];
    }
    ProcurementsComponent.prototype.ngOnInit = function () {
        this.getTenders(this.p);
    };
    ProcurementsComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 39) + '...';
        }
        return ds;
    };
    ProcurementsComponent.prototype.getTenders = function (page) {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('date');
        customParams.push('slug');
        customParams.push('title.rendered');
        customParams.push('content.rendered');
        customParams.push('acf');
        if ((this.tenders.length < 1) || (this.tenders.filter(function (d) { return d.page === _this.p; })).length < 1) {
            this.oppService.getTenders(customParams, page).subscribe(function (data) {
                _this.total = Number(data.headers.get('X-WP-Total'));
                var newData = {
                    page: page,
                    data: _this.refineData(data.body)
                };
                _this.tenders.push(newData);
                console.log(_this.tenders);
                _this.contents = newData.data;
            });
        }
        else {
            this.contents = (this.tenders.filter(function (d) { return d.page === _this.p; }))[0].data;
        }
    };
    ProcurementsComponent.prototype.refineData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var tn = data_1[_i];
            tn.content.rendered = this.oppService.htmlToPlaintext(tn.content.rendered);
            var date = new Date(tn.date);
            var tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
            tn.date = tempDate;
        }
        return data;
    };
    ProcurementsComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getTenders(page);
    };
    ProcurementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-procurements',
            template: __webpack_require__(/*! raw-loader!./procurements.component.html */ "./node_modules/raw-loader/index.js!./src/app/opportunities/procurements/procurements.component.html"),
            styles: [__webpack_require__(/*! ./procurements.component.css */ "./src/app/opportunities/procurements/procurements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_opp_service__WEBPACK_IMPORTED_MODULE_2__["OppService"]])
    ], ProcurementsComponent);
    return ProcurementsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=opportunities-opportunities-module.js.map