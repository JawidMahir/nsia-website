(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<ngx-loading-bar [color]=\"282560\"></ngx-loading-bar>\r\n<div *ngIf=\"!chooseLang\">\r\n    <app-navbar></app-navbar>\r\n</div>\r\n\r\n<div class=\"custom-container\"  *ngIf=\"!chooseLang\">\r\n  <div id=\"scroll\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"TOP\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </div>\r\n\r\n  <nav class=\"navigation\">\r\n    <div class=\"full-path\" *ngFor=\"let pt of currentPath; let i = index\">\r\n      <small class=\"fullpath\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\">{{ pt }}</small>\r\n      <i class=\"fas fa-chevron-right\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\"></i>\r\n      <small class=\"currentpath\" *ngIf=\"i == currentPath.length - 1\">{{ pt }}</small>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<main [@fadeInOut]=\"getPage(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n<!-- <router-outlet [@fadeInOut]='true'></router-outlet> -->\r\n<div  *ngIf=\"!chooseLang\">\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/choose-lang/choose-lang.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choose-lang/choose-lang.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <img src=\"../../assets/images/lang.jpg\" id=\"bg\">\r\n  <div class=\"center\">\r\n    <div class=\"nsia-log\">\r\n      <img src=\"../../assets/logo/amended-logo final final-01.svg\" alt=\"Logo\">\r\n    </div>\r\n    <div class=\"lang-buttons\"> \r\n      <div (click)=\"detectLanguage($event.target)\" id=\"en\" class=\"lan\">English</div>\r\n      <div (click)=\"detectLanguage($event.target)\" id=\"fa\" class=\"lan\">دری</div>\r\n      <div (click)=\"detectLanguage($event.target)\" id =\"ps\" class=\"lan\">پښتو</div> \r\n    </div>\r\n  </div>\r\n  <footer class=\"footer\">\r\n    © {{ year }}, All rights reserved, National Statistics and Information Authority\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<ngx-loading-bar [color]=\"282560\"></ngx-loading-bar>\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"custom-container\">\r\n  <div id=\"scroll\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"TOP\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </div>\r\n\r\n  <nav class=\"navigation\">\r\n    <div class=\"full-path\" *ngFor=\"let pt of currentPath; let i = index\">\r\n      <small class=\"fullpath\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\">{{ pt }}</small>\r\n      <i class=\"fas fa-chevron-right\" *ngIf=\"i !== 0 && i !== currentPath.length - 1\"></i>\r\n      <small class=\"currentpath\" *ngIf=\"i == currentPath.length - 1\">{{ pt }}</small>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<main [@fadeInOut]=\"getPage(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n<!-- <router-outlet [@fadeInOut]='true'></router-outlet> -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\r\n  <div class=\"not-found\">\r\n    <div class=\"not-found-wrapper\">\r\n      <div class=\"icon-wrapper\">\r\n        <img src=\"../../assets/images/404.svg\" alt=\"\">\r\n      </div>\r\n      <div class=\"details\">\r\n        <h1 class=\"error-message\">404</h1>\r\n        <p>Requested page not found</p>\r\n      </div>\r\n      <div class=\"btns\">\r\n        <button class=\"go-back c-btn-outline-blue\" (click)=\"goBack()\">GO BACK</button>\r\n        <button class=\"go-home c-btn-outline-blue\" (click)=\"goHome()\">HOME</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quick-links\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'label.subscribe.title' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <p>{{'label.news-letter-subscribe' | translate}}</p>\r\n          <input type=\"email\" name=\"email\" id=\"email\" [placeholder]=\"'label.email-address' | translate\" #useremail required\r\n            [(ngModel)]=\"email\" (input)=\"checkEmail()\">\r\n          <button [disabled]=\"!validEmail\" (click)=\"subscribe(useremail.value)\"\r\n            class=\"subscribe-btn\">{{'label.subscribe' | translate}}</button>\r\n        </div>\r\n        <!-- <div class=\"alert alert-success alert-dismissible fade show\" id=\"success-subscribe\" role=\"alert\">\r\n          <strong>Thank You,</strong> You will receive our regular publications to your inbox.\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"alert alert-danger alert-dismissible fade show\" id=\"failure-subscribe\" role=\"alert\">\r\n          <strong>Thank You,</strong> You will receive our regular publications to your inbox.\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'menu.about-us' | translate}}</h4>\r\n        </div>\r\n\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink='/about-us'>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'submenu.about-nsia' | translate}} </a>\r\n            </li>\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.history' | translate}}</a></li> -->\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.vision-mission'| translate }}</a></li> -->\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.authority-functions' | translate}}</a></li> -->\r\n            <li routerLink='/about-us/structure'>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.organization-structure' | translate}}</a>\r\n            </li>\r\n            <li routerLink='/contact-us'>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.contact-us' | translate}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'label.quick-links' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n                <i class=\"fas fa-chevron-right\" ></i>\r\n                <a>{{'label.stats' | translate}}</a></li>\r\n            <li routerLink=\"/services\">\r\n                  <i class=\"fas fa-chevron-right\"></i>\r\n                  <a>{{'submenu.provincial-s' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.tazkira-enrollement' | translate}}</a></li>\r\n            <!-- <li>\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.laws' | translate}}</a></li> -->\r\n            <li routerLink=\"/opportunities/procurements\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'submenu.procurement' | translate}}</a></li>\r\n            <li routerLink=\"/opportunities/jobs\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.jobs' | translate}}</a></li>\r\n              <li routerLink=\"/media-room/access-info\">\r\n                <i class=\"fas fa-chevron-right\"></i>\r\n                <a>{{'label.access-info' | translate}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"link-title\">\r\n          <h4>{{'menu.forms' | translate}}</h4>\r\n        </div>\r\n        <div class=\"links\">\r\n          <ul>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.etazkira' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.paper-tazkira' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.birth-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.death-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.marriage-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.divorce-registration' | translate}}</a></li>\r\n            <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <a>{{'label.foreign-registration' | translate}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n  <div class=\"custom-container\">\r\n    <div class=\"contents-wrapper\">\r\n\r\n      <div class=\"contents\">\r\n        <div class=\"footer-logo\">\r\n          <img src=\"../../../assets/logo/flag-design.png\" alt=\"flat logo\">\r\n        </div>\r\n\r\n        <div class=\"copy-right\">\r\n          <span>\r\n            <b>\r\n              {{ 'label.copy-right' | translate:{'year':year } }}\r\n            </b>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"social-media\">\r\n          <div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.instagram.com/nsia_afghanistan/\" target=\"_blank\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.youtube.com/channel/UCO4p9zdLgTJrYHHd-3M3hjQ?view_as=subscriber\" target=\"_blank\">\r\n                <i class=\"fab fa-youtube\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.linkedin.com/company/19090359/\" target=\"_blank\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://twitter.com/NSIAGOVAF1397\" target=\"_blank\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"s-media\">\r\n              <a href=\"https://www.facebook.com/NSIA.GOV.AF\" target=\"_blank\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\r\n\r\n  <div class=\"header\">\r\n    <div class=\"custom-container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12 logos\">\r\n          <div class=\"logo-wrapper\">\r\n            <!-- <div class=\"gov-logo\">\r\n              <img src=\"../../../assets/logo/national-emblem.svg\" alt=\"\">\r\n            </div> -->\r\n            <div class=\"nsia-logo\">\r\n              <img src=\"../../../assets/logo/amended-logo final final-01.svg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12\">\r\n          <div class=\"header-details\">\r\n\r\n            <div class=\"contact-details\">\r\n              <div class=\"c-item\">\r\n                <p routerLink=\"/contact-us\"> <i class=\"fas fa-phone contact\"></i> {{ 'label.contact-us' | translate }}\r\n                </p>\r\n              </div>\r\n              <!-- <div class=\"c-item\">\r\n                <p> <i class=\"fas fa-clock\"></i> {{ 'label.working-hours' | translate }}</p>\r\n              </div> -->\r\n              <div class=\"c-item\" data-toggle=\"modal\" data-target=\"#mapModal\">\r\n                <p> <i class=\"fas fa-map-marker-alt\"></i> {{'label.head-office' | translate}}</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"website-tools\">\r\n              <div class=\"tools-wrapper\">\r\n                <div class=\"search-input c-item\">\r\n                  <div class=\"wrapper\">\r\n                    <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" [(ngModel)]=\"sText\"\r\n                      class=\"search-box\" #searchText (keyup)=\"showSearchResults($event, searchText.value)\"\r\n                      (focus)=\"showSearchDiv(searchText.value)\">\r\n                    <!-- <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" \r\n                    class=\"search-box\" #searchText > -->\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"change-language c-item\">\r\n                  <select name=\"lang-change\" id=\"lang-change\" class=\"form-control custom-form-control\" #languageChange1\r\n                    (change)='useLanguage(languageChange1)'>\r\n                    <option value=\"en\">{{ 'lang.english' | translate }}</option>\r\n                    <option value=\"fa\">{{ 'lang.dari' | translate }}</option>\r\n                    <option value=\"ps\">{{ 'lang.pashto' | translate }}</option>\r\n                  </select>\r\n                  <i class=\"fas fa-chevron-down\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\" id=\"navbar\">\r\n    <div class=\"custom-container\">\r\n\r\n\r\n      <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsable-nav\" aria-controls=\"collapsable-nav\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button> -->\r\n      <!-- Custom Responsive navbar -->\r\n      <div class=\"responsive-navbar\">\r\n        <button class=\"resp-toggler\" (click)=\"toggleRespNav()\">\r\n          <i class=\"fas fa-bars\"></i>\r\n        </button>\r\n        <div class=\"tls\">\r\n          <div class=\"web-tls\">\r\n\r\n            <div class=\"search-input c-item\">\r\n              <div class=\"wrapper\">\r\n                <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" [(ngModel)]=\"sText\"\r\n                  class=\"search-box\" #searchTextRes (keyup)=\"showSearchResults($event, searchTextRes.value)\"\r\n                  (focus)=\"showSearchDiv(searchText.value)\">\r\n\r\n                <!-- <input type=\"text\" placeholder=\"{{'label.search-website' | translate }}\" class=\"search-box\"> -->\r\n                <i class=\"fas fa-search\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"change-language c-item\">\r\n              <select name=\"lang-change\" id=\"lang-change2\" class=\"form-control custom-form-control\" #languageChange2\r\n                (change)='useLanguage(languageChange2)'>\r\n                <option value=\"en\">{{ 'lang.english' | translate }}</option>\r\n                <option value=\"fa\">{{ 'lang.dari' | translate }}</option>\r\n                <option value=\"ps\">{{ 'lang.pashto' | translate }}</option>\r\n              </select>\r\n              <i class=\"fas fa-chevron-down\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"responsive-nav\" id=\"responsive-nav\">\r\n        <div class=\"r-menu\">\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/home\"><i class=\"fas fa-home\"></i></p>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/about-us\">\r\n              {{ 'menu.about-us' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/about-us/about-nsia\">{{'submenu.about-nsia' | translate}}</li>\r\n              <!-- <li routerLink=\"about-us/finance\">Finance</li> -->\r\n              <li routerLink=\"/about-us/activity-achievments\">{{'submenu.achievments' | translate}}</li>\r\n              <li routerLink=\"/about-us/structure\">{{'submenu.structure' | translate}}</li>\r\n              <li routerLink=\"/about-us/policies\">{{'submenu.policies' | translate}}</li>\r\n              <li routerLink=\"/about-us/biographies\">{{'submenu.biographies' | translate}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/services\">\r\n              {{ 'menu.services' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('stats')\">{{'submenu.statistics' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('nid')\">{{'submenu.nid' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('gis')\">{{'submenu.gis' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('sdu')\">{{'submenu.isd' | translate}}</li>\r\n              <li routerLink=\"/services\" (click)=\"updateServiceType('prs')\">{{'submenu.provincial-s' | translate}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/library\">\r\n              {{ 'menu.library' | translate }}</p>\r\n            <!-- <ul>\r\n              <li routerLink=\"library/reports\">{{'submenu.reports' | translate}}</li>\r\n              <li routerLink=\"library/articles\">{{'submenu.articles' | translate}}</li>\r\n            </ul> -->\r\n          </div>\r\n          <!-- <div class=\"r-menu-item\">\r\n            <p routerLink=\"/access-info\">\r\n              {{ 'menu.access-info' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"access-info/guidelines\">Guidelines</li>\r\n              <li routerLink=\"access-info/statistics\">Statistics</li>\r\n              <li routerLink=\"access-info/nid\">National Identity</li>\r\n              <li routerLink=\"access-info/regualtions\">Regulations</li>\r\n              <li routerLink=\"access-info/policies\">Policies</li>\r\n            </ul>\r\n          </div> -->\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/media-room/event\">\r\n              {{ 'menu.media-room' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/media-room/event\">{{'submenu.events' | translate}}</li>\r\n              <li routerLink=\"/media-room/news-updates\">{{'submenu.news-updates' | translate}}</li>\r\n              <li routerLink=\"/media-room/press-release\">{{'submenu.press-release' | translate}}</li>\r\n              <li routerLink=\"media-room/access-info\">{{'menu.access-info' | translate}}</li>\r\n              <li routerLink=\"media-room/newsletter\">{{'label.newsletter' | translate}}</li>\r\n              <!-- <li routerLink=\"media-room/poster\">Poster</li>\r\n              <li routerLink=\"media-room/booklet\">Booklet</li>\r\n              <li routerLink=\"media-room/brochures\">Brochures</li> -->\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"r-menu-item\">\r\n            <p routerLink=\"/opportunities\">\r\n              {{ 'menu.opportunities' | translate }}</p>\r\n            <ul>\r\n              <li routerLink=\"/opportunities/jobs\">{{'submenu.jobs' | translate}}</li>\r\n              <li routerLink=\"/opportunities/procurements\">{{'submenu.procurement' | translate}}</li>\r\n              <!-- <li routerLink=\"opportunities/tenders\">Tenders</li> -->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"collapsable-nav\">\r\n        <ul class=\"navbar-nav mt-2 mt-lg-0\">\r\n          <li class=\"nav-item\" id=\"home\">\r\n            <a href=\"\" routerLink=\"/home\">\r\n              <i class=\"fas fa-home\"></i>\r\n            </a>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/about-us\">\r\n              {{ 'menu.about-us' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/about-us/about-nsia\">{{'submenu.about-nsia' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/finance\">Finance</a> -->\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/about-us/activity-achievments\">{{'submenu.achievments' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/structure\">{{'submenu.structure' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/about-us/rules-policies\">{{'submenu.policies' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/about-us/biographies\">{{'submenu.biographies' | translate}}</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/services\">\r\n              {{ 'menu.services' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('stats')\">{{'submenu.statistics' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('nid')\">{{'submenu.nid' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('gis')\">{{'submenu.gis' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('sdu')\">{{'submenu.isd' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/services\"\r\n                (click)=\"updateServiceType('prs')\">{{'submenu.provincial-s' | translate}}</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/library\">\r\n              {{ 'menu.library' | translate }}\r\n            </a>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/library/reports\">{{'submenu.reports' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/library/articles\">{{'submenu.articles' | translate}}</a>\r\n            </div> -->\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <!-- <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/access-info\">\r\n              {{ 'menu.access-info' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/guidelines\">Guidelines</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/statistics\">Statistics</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/nid\">National Identity</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/regualtions\">Regulations</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/access-info/policies\">Policies</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">  \r\n            <div></div>\r\n          </div> -->\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/media-room/event\">\r\n              {{ 'menu.media-room' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/event\">{{'submenu.events' | translate}}</a> -->\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/media-room/news-updates\">{{'submenu.news-updates' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/media-room/press-release\">{{'submenu.press-release' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/media-room/access-info\">{{'menu.access-info' | translate}}</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/newsletter\">{{'label.newsletter' | translate}}</a>\r\n              <!--<a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/poster\">Poster</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/booklet\">Booklet</a>\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/media-room/brochures\">Brochures</a> -->\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n              aria-expanded=\"false\" routerLink=\"/opportunities/jobs\">\r\n              {{ 'menu.opportunities' | translate }}\r\n            </a>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a href=\"\" class=\"dropdown-item\" routerLink=\"/opportunities/jobs\">{{'submenu.jobs' | translate}}</a>\r\n              <!-- <a href=\"\" class=\"dropdown-item\" routerLink=\"/opportunities/procurements\">Procurements</a> -->\r\n              <a href=\"\" class=\"dropdown-item\"\r\n                routerLink=\"/opportunities/procurements\">{{'submenu.procurement' | translate}}</a>\r\n            </div>\r\n          </li>\r\n          <div class=\"seperator\">\r\n            <div></div>\r\n          </div>\r\n        </ul>\r\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form> -->\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"search-result-wrapper\" id=\"search-result-wrapper\">\r\n    <i class=\"fas fa-times\" (click)=\"hideSearchResults()\"></i>\r\n    <div class=\"search-results\">\r\n      <div class=\"result-links result\">\r\n        <h4 class=\"search-item-title\">Links</h4>\r\n        <ul>\r\n          <li *ngFor=\"let ln of quickLinks | searchFilter:sText\" (click)=\"gotoLink(ln)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            {{ln[linkTitle]}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.services.length > 0\">\r\n        <h4 class=\"search-item-title\">Services</h4>\r\n        <ul>\r\n          <li *ngFor=\"let sr of searchCategories.services\" (click)=\"showServiceDetails(sr)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"sr.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.news.length > 0\">\r\n        <h4 class=\"search-item-title\">News and Updates</h4>\r\n        <ul>\r\n          <li *ngFor=\"let nw of searchCategories.news\" (click)=\"followLink('/media-room/media', nw.id)\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"nw.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-services result\" *ngIf=\"searchCategories.biographies.length > 0\">\r\n        <h4 class=\"search-item-title\">Biographies</h4>\r\n        <ul>\r\n          <li *ngFor=\"let bi of searchCategories.biographies\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"bi.title.rendered\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-attachments result\" *ngIf=\"searchCategories.attachments.length > 0\">\r\n        <h4 class=\"search-item-title\">Attachments</h4>\r\n        <ul *ngIf=\"linksArray\">\r\n          <li *ngFor=\"let at of searchCategories.attachments\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n            <span [innerHTML]=\"at\"></span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"result-attachments result\"\r\n        *ngIf=\"searchCategories.procurements.length > 0 || searchCategories.jobs.length > 0\">\r\n        <h4 class=\"search-item-title\">Opportunities</h4>\r\n        <div class=\"sr-jobs\" *ngIf=\"searchCategories.jobs.length > 0\">\r\n          <h5>Jobs</h5>\r\n          <ul>\r\n            <li *ngFor=\"let jb of searchCategories.jobs\" (click)=\"followLink('/opportunities/job', jb.id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span [innerHTML]=\"jb.title.rendered\"></span></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"sr-procurements\" *ngIf=\"searchCategories.procurements.length > 0\">\r\n          <h5>Procurements</h5>\r\n          <ul>\r\n            <li *ngFor=\"let prc of searchCategories.procurements\" (click)=\"followLink('/opportunities/tender', prc.id)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span [innerHTML]=\"prc.title.rendered\"></span></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- Modal for google map -->\r\n<!-- Button trigger modal -->\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade \" id=\"mapModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mapModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=map #map></div>\r\n        <div class=\"address\">\r\n          <h6>7th District, Chahel saton street, beside of bagh babar</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal  -->\r\n<div class=\"modal fade \" id=\"serviceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"serviceModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"service-details\" [innerHTML]=\"serviceDetails\"></div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- // My location 34.498340, 69.157875 -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/news/news.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/news/news.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"globalsidebar\">\r\n  <h4>{{ 'label.news' | translate }}</h4>\r\n  <hr>\r\n  <div *ngIf=\"newsBriefs.news != ''; else nonews\">\r\n    <div class=\"row\" *ngFor=\"let nw of newsBriefs.news\">\r\n      <div class=\"col-md-4 col-sm-5 col-xs-3 newsside\">\r\n        <img src=\"../../assets/images/newsIcon.png\" alt=\"News\">\r\n      </div>\r\n      <div class=\"col-md-8 col-sm-7 col-xs-4 display newsside\">\r\n        <a [routerLink]=\"['/media-room/media', nw.id]\">\r\n          {{ getBrief(nw.title.rendered) }}\r\n        </a>\r\n        <p>{{ nw.date }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #nonews>\r\n    <div class=\"jumbotron no-data\">\r\n      <div [class.dot-falling]=\"loading\"></div>\r\n      <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-outline-info\" (click)=\"readMoreRedirect($event.target)\" id=\"news-read-more\"\r\n      [disabled]=\"newsBriefs.news === ''\">{{'btn.view-all-news' | translate}}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/promotional-materials/promotional-materials.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/promotional-materials/promotional-materials.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"promote-material globalsidebar\">\r\n  <div class=\"title\">\r\n    <h5>{{'label.promoting-material' | translate }}</h5>\r\n  </div>\r\n\r\n\r\n  <div class=\"materials\" *ngIf=\"promoMaterialFlag; else nodata\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"orgs.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{orgs[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Org Profile.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Org Profile</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"brochures.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{brochures[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Brochure.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Brochure</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"posters.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{posters[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Poster.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Poster</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"flyers.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{flyers[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Flyer.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Flyer</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"booklets.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a href=\"{{booklets[0]?.acf?.promotional_materials_attachment.url}}\" download=\"Booklet.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Booklet</span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 material-wrapper\" *ngIf=\"newsletters.length > 0\">\r\n        <div class=\"p-material\">\r\n          <div class=\"promo-image\">\r\n            <img src=\"../../../assets/images/promo.png\" alt=\"promo\">\r\n          </div>\r\n          <div class=\"download-promo\">\r\n            <img src=\"../../../assets/images/pdf.png\" alt=\"pdf\">\r\n            <a [href]=\"newsletters[0].attachment\" download=\"Newsletter.pdf\"\r\n              target=\"_blank\"><span>{{'btn.download' | translate}}</span></a>\r\n          </div>\r\n        </div>\r\n        <span class=\"m-name\">Newsletter</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #nodata>\r\n    <div class=\"jumbotron no-data\">\r\n      <div [class.dot-falling]=\"loading\"></div>\r\n      <h4 *ngIf=\"!loading\" class=\"text-center\">{{ 'label.no-data' | translate }}</h4>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choose-lang/choose-lang.component */ "./src/app/choose-lang/choose-lang.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




// import { ContactUsComponent } from './contact-us/contact-us.component';


var routes = [
    {
        path: 'choose-lang',
        component: _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_4__["ChooseLangComponent"]
    }, {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    }, {
        path: 'home',
        // loadChildren: './home/home.module#HomeModule'
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomeModule; }); }
    }, {
        path: 'contact-us',
        // component: ContactUsComponent
        // loadChildren: './contact-us/contact.module#ContactModule'
        loadChildren: function () { return __webpack_require__.e(/*! import() | contact-us-contact-module */ "contact-us-contact-module").then(__webpack_require__.bind(null, /*! ./contact-us/contact.module */ "./src/app/contact-us/contact.module.ts")).then(function (m) { return m.ContactModule; }); }
    }, {
        path: 'about-us',
        // loadChildren: './about-us/about-us.module#AboutUsModule'
        loadChildren: function () { return Promise.all(/*! import() | about-us-about-us-module */[__webpack_require__.e("default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1"), __webpack_require__.e("about-us-about-us-module")]).then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "./src/app/about-us/about-us.module.ts")).then(function (m) { return m.AboutUsModule; }); }
    }, {
        path: 'services',
        // loadChildren: './services/services.module#ServicesModule'
        loadChildren: function () { return Promise.all(/*! import() | services-services-module */[__webpack_require__.e("common"), __webpack_require__.e("services-services-module")]).then(__webpack_require__.bind(null, /*! ./services/services.module */ "./src/app/services/services.module.ts")).then(function (m) { return m.ServicesModule; }); }
    }, {
        path: 'library',
        // loadChildren: './library/library.module#LibraryModule'
        loadChildren: function () { return Promise.all(/*! import() | library-library-module */[__webpack_require__.e("default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1"), __webpack_require__.e("common"), __webpack_require__.e("library-library-module")]).then(__webpack_require__.bind(null, /*! ./library/library.module */ "./src/app/library/library.module.ts")).then(function (m) { return m.LibraryModule; }); }
    }, {
        path: 'access-info',
        // loadChildren: './access-to-info/access.module#AccessModule'
        loadChildren: function () { return __webpack_require__.e(/*! import() | access-to-info-access-module */ "access-to-info-access-module").then(__webpack_require__.bind(null, /*! ./access-to-info/access.module */ "./src/app/access-to-info/access.module.ts")).then(function (m) { return m.AccessModule; }); }
    }, {
        path: 'media-room',
        // loadChildren: './media-room/media.module#MediaModule'
        loadChildren: function () { return Promise.all(/*! import() | media-room-media-module */[__webpack_require__.e("default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1"), __webpack_require__.e("media-room-media-module")]).then(__webpack_require__.bind(null, /*! ./media-room/media.module */ "./src/app/media-room/media.module.ts")).then(function (m) { return m.MediaModule; }); }
    }, {
        path: 'opportunities',
        // loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
        loadChildren: function () { return Promise.all(/*! import() | opportunities-opportunities-module */[__webpack_require__.e("default~about-us-about-us-module~library-library-module~media-room-media-module~opportunities-opport~feff25f1"), __webpack_require__.e("opportunities-opportunities-module")]).then(__webpack_require__.bind(null, /*! ./opportunities/opportunities.module */ "./src/app/opportunities/opportunities.module.ts")).then(function (m) { return m.OpportunitiesModule; }); }
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            // imports: [RouterModule.forRoot(routes)],
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
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).on('click', '#scroll', function () {
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
            this.router.navigate([location.pathname]);
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
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./choose-lang/choose-lang.component */ "./src/app/choose-lang/choose-lang.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");









// import { NgxPaginationModule } from 'ngx-pagination';

// Import shared Module here






// import { ContactUsComponent } from './contact-us/contact-us.component';





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
                _main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_16__["ChooseLangComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_7__["LoadingBarHttpClientModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__["LoadingBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production })
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

module.exports = "#bg{\r\n    position: fixed; \r\n    top: 0; \r\n    left: 0; \r\n    /* Preserve aspet ratio */\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n.content {\r\n    width: 55vw;\r\n    height: 50vh;\r\n    background-color: rgba(255, 255, 255, 0.61);\r\n\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n\r\n    /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n    max-width:100%;\r\n    max-height:100%;\r\n    overflow:auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.center{\r\n    width:50%;\r\n    height:50%;\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n\r\n    margin:auto !important;\r\n    background:rgba(255, 255, 255, 0.61);\r\n    position:absolute;\r\n    text-align:center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.nsia-log { \r\n    display:block;\r\n    margin:auto;\r\n}\r\n.nsia-log img{\r\n    width: 100%;\r\n}\r\n.lang-buttons {\r\n    margin: auto;\r\n    margin-top: 0px;\r\n}\r\n/* First Primary: #01a79b green */\r\n/* Second Primary: #282560 blue */\r\n.lan {\r\n    /* margin: 0px 10px;\r\n    background-color: transparent;\r\n    border: 1.5px solid #282560; \r\n    color: #282560;\r\n    padding: 10px;\r\n    cursor: pointer; */\r\n    display:inline-block;\r\n    cursor: pointer;\r\n    padding:0.5em 3em;\r\n    border:1.5px solid #282560;\r\n    margin:0 0.3em;\r\n    box-sizing: border-box;\r\n    color:#282560;\r\n    text-align:center;\r\n    transition: all 0.15s;\r\n}\r\n.lan:hover {\r\n    background-color: #282560;\r\n    color: rgb(214, 211, 211);\r\n}\r\n/* .cp-right {\r\n    position: absolute;\r\n    bottom: 40px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    width: fit-content;\r\n    color: #282560;\r\n} */\r\n/* @media only screen and (max-width: 1050px) {\r\n    .lang-buttons .lan {\r\n        width: 24% !important;\r\n        overflow: hidden;\r\n    }\r\n}  */\r\n.footer{\r\n  position: absolute;\r\n  bottom: 25px;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 1em;\r\n}\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 720px) \r\n  and (max-device-width: 1000px) \r\n  and (-webkit-min-device-pixel-ratio: 1) {\r\n    .lan{\r\n        padding: 10px;\r\n        width: 110px;\r\n\r\n        margin:10px 0px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 480px) \r\n  and (-webkit-min-device-pixel-ratio: 1) {\r\n    .lan{\r\n        padding: 5px;\r\n        width: 110px;\r\n        display:block;\r\n        margin:10px 0px;\r\n        font-size: 0.8em;\r\n        cursor: pointer;\r\n    }\r\n    .nsia-log img{\r\n        margin-top:5px; \r\n        width: 90%;\r\n        height: 95%;\r\n    }\r\n}\r\n@media only screen \r\n  and (min-device-width: 460px) \r\n  and (max-device-width: 900px) \r\n  and (-webkit-min-device-pixel-ratio: 1) {\r\n    .lan{\r\n        padding: 5px;\r\n        width: 80px;\r\n        margin:10px 5px;\r\n        cursor: pointer;\r\n        font-size: 0.6em;\r\n    }\r\n    .nsia-log img{\r\n        margin-top:5px; \r\n        width: 70%;\r\n        height: 70%;\r\n    } \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWxhbmcvY2hvb3NlLWxhbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJDQUEyQzs7SUFFM0MsaUJBQWlCLEVBQUUsc0JBQXNCO0lBQ3pDLE1BQU0sRUFBRSxPQUFPO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixXQUFXOztJQUVYLDRGQUE0RjtJQUM1RixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixNQUFNLEVBQUUsT0FBTztJQUNmLEtBQUssRUFBRSxRQUFROztJQUVmLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUEsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQztJQUNJOzs7OztzQkFLa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTs7Ozs7Ozs7R0FRRztBQUVIOzs7OztJQUtJO0FBQ0o7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBLDJCQUEyQjtBQUMzQjs7OztJQUlJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7O1FBRVosZUFBZTtRQUNmLGVBQWU7SUFDbkI7QUFDSjtBQUNBOzs7O0lBSUk7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7QUFDQTs7OztJQUlJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1sYW5nL2Nob29zZS1sYW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgLyogUHJlc2VydmUgYXNwZXQgcmF0aW8gKi9cclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xyXG5cclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyAvKml0IGNhbiBiZSBmaXhlZCB0b28qL1xyXG4gICAgbGVmdDowOyByaWdodDowO1xyXG4gICAgdG9wOjA7IGJvdHRvbTowO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcblxyXG4gICAgLyp0aGlzIHRvIHNvbHZlIFwidGhlIGNvbnRlbnQgd2lsbCBub3QgYmUgY3V0IHdoZW4gdGhlIHdpbmRvdyBpcyBzbWFsbGVyIHRoYW4gdGhlIGNvbnRlbnRcIjogKi9cclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY2VudGVye1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICAgIGxlZnQ6MDsgcmlnaHQ6MDtcclxuICAgIHRvcDowOyBib3R0b206MDtcclxuXHJcbiAgICBtYXJnaW46YXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5uc2lhLWxvZyB7IFxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4ubnNpYS1sb2cgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gIFxyXG5cclxuLmxhbmctYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn0gIFxyXG5cclxuLyogRmlyc3QgUHJpbWFyeTogIzAxYTc5YiBncmVlbiAqL1xyXG4vKiBTZWNvbmQgUHJpbWFyeTogIzI4MjU2MCBibHVlICovXHJcbi5sYW4ge1xyXG4gICAgLyogbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMjgyNTYwOyBcclxuICAgIGNvbG9yOiAjMjgyNTYwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzowLjVlbSAzZW07XHJcbiAgICBib3JkZXI6MS41cHggc29saWQgIzI4MjU2MDtcclxuICAgIG1hcmdpbjowIDAuM2VtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiMyODI1NjA7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxufVxyXG5cclxuLmxhbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIxMSwgMjExKTtcclxufVxyXG5cclxuLyogLmNwLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6ICMyODI1NjA7XHJcbn0gKi9cclxuXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAubGFuZy1idXR0b25zIC5sYW4ge1xyXG4gICAgICAgIHdpZHRoOiAyNCUgIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG59ICAqL1xyXG4uZm9vdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4vKiBQb3J0cmFpdCBhbmQgTGFuZHNjYXBlICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDcyMHB4KSBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMDBweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcclxuICAgIC5sYW57XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XHJcbiAgICAubGFue1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubnNpYS1sb2cgaW1ne1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4OyBcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ2MHB4KSBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDkwMHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xyXG4gICAgLmxhbntcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgfVxyXG4gICAgLm5zaWEtbG9nIGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDsgXHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH0gXHJcbn0iXX0= */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var ChooseLangComponent = /** @class */ (function () {
    function ChooseLangComponent(dataService, router, trs) {
        this.dataService = dataService;
        this.router = router;
        this.trs = trs;
        this.lang = '';
    }
    ChooseLangComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
        localStorage.removeItem('lang');
    };
    ChooseLangComponent.prototype.detectLanguage = function (el) {
        this.lang = jquery__WEBPACK_IMPORTED_MODULE_5__(el).closest('.lan').attr('id');
        this.dataService.language = this.lang;
        if (this.lang === 'en') {
            this.dataService.sliderDirection = 'ltr_slider';
        }
        else {
            this.dataService.sliderDirection = 'rtl_slider';
        }
        this.trs.use(this.lang);
        localStorage.setItem('lang', this.lang);
        this.router.navigate([this.dataService.redirectPath]);
    };
    ChooseLangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-lang',
            template: __webpack_require__(/*! raw-loader!./choose-lang.component.html */ "./node_modules/raw-loader/index.js!./src/app/choose-lang/choose-lang.component.html"),
            styles: [__webpack_require__(/*! ./choose-lang.component.css */ "./src/app/choose-lang/choose-lang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ChooseLangComponent);
    return ChooseLangComponent;
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
        this.nodeapi = 'https://nsia.gov.af:6001/api/';
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

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






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
        // $(window).scroll(function () {
        //   if ($(this).scrollTop() > 100) {
        //     $('#scroll').fadeIn();
        //   } else {
        //     $('#scroll').fadeOut();
        //   }
        // });
        // $('#scroll').click(() => {
        //   $('html, body').animate({ scrollTop: 0 }, 600);
        //   return false;
        // });
        // this.router.events.subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     that.createNavigationBreadPath();
        //   }
        // });
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
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
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
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
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
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
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

module.exports = ".header {\r\n  background-color: #fff;\r\n  padding: 16px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.align-center {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.header .logos img {\r\n  height: 90px;\r\n  margin-right: 3%;\r\n  float: left;\r\n}\r\n\r\n.header .header-details {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  float: right;\r\n}\r\n\r\n.header .website-tools .tools-wrapper {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  float: right;\r\n}\r\n\r\n.header .contact-details,\r\n.website-tools {\r\n  display: block;\r\n}\r\n\r\n.header .contact-details .c-item {\r\n  cursor: pointer;\r\n  float: right; \r\n}\r\n\r\n.header .c-item {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-right: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.navbar {\r\n  padding: 0px !important;\r\n}\r\n\r\n.header select,\r\n#navbar select {\r\n  padding: 5px;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.change-language {\r\n  background-color: #282560;\r\n  position: relative;\r\n  width: 55px;\r\n}\r\n\r\n.change-language i {\r\n  color: #fff;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 15px;\r\n  font-size: 12px !important;\r\n  z-index: 1;\r\n  text-align: center;\r\n  width: 10%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  margin-top: 0px !important;\r\n}\r\n\r\n.search-result-wrapper {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 0vh;\r\n  z-index: 90;\r\n  background-color: #282560;\r\n  overflow: scroll;\r\n  color: #fff;\r\n  transition: height .3s ease-in-out;\r\n}\r\n\r\n.search-result-wrapper.show {\r\n  height: 50vh;\r\n}\r\n\r\n.search-results {\r\n  background-color: transparent;\r\n  margin: 2rem;\r\n  display: flex\r\n}\r\n\r\n.search-result-wrapper i.fa-times {\r\n  position: absolute;\r\n  padding: 1rem;\r\n  left: 0;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pd-top {\r\n  padding-top: 3rem;\r\n}\r\n\r\n.search-results ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.search-results li {\r\n  cursor: pointer;\r\n}\r\n\r\n.search-results li:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.search-results li span {\r\n  margin: 0px 4px;\r\n}\r\n\r\n.search-results .result {\r\n  margin: 0px 2rem;\r\n}\r\n\r\n.search-results .search-item-title {\r\n  border-bottom: 1px solid #fff;\r\n}\r\n\r\n#mapModal .modal-body {\r\n  padding: 0px;\r\n  min-height: 70vh;\r\n}\r\n\r\n#map {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#mapModal .address {\r\n  background-color: #fff;\r\n  z-index: 123;\r\n  position: absolute;\r\n  left: 5px;\r\n  bottom: 5px;\r\n  padding: 1rem;\r\n}\r\n\r\n#navbar {\r\n  /* overflow: hidden; */\r\n  background-color: #fff;\r\n  z-index: 1000;\r\n  transition: background-color 100ms linear;\r\n}\r\n\r\n.navbar-collapse {\r\n  border-top: 1px solid rgb(197, 195, 195);\r\n}\r\n\r\n#navbar .nav-item {\r\n  padding: 0px 20px;\r\n}\r\n\r\n#navbar .seperator {\r\n  padding: 0px 2px;\r\n}\r\n\r\n#navbar .seperator>div {\r\n  height: 33%;\r\n  position: absolute;\r\n  top: 33%;\r\n  border: .5px solid #282560;\r\n  border-radius: 3px;\r\n}\r\n\r\n#navbar li,\r\n#navbar a {\r\n  transition: background-color 100ms linear;\r\n}\r\n\r\n#navbar a {\r\n  float: left;\r\n  display: block;\r\n  text-align: center;\r\n  color: #282560;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\n#navbar a::after {\r\n  content: none;\r\n}\r\n\r\n#navbar .fa-chevron-down {\r\n  font-size: 7px;\r\n  margin-top: 21px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n#navbar .nav-item.active:hover .fas {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar .nav-item.active .fas {\r\n  color: #01a79b !important;\r\n}\r\n\r\n#navbar.active-bar .nav-item.active:hover .fas {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar .nav-item.active .fa-chevron-down {\r\n  margin-top: 18px !important;\r\n  color: #01a79b !important;\r\n}\r\n\r\n#navbar .dropdown-menu {\r\n  padding: 0px !important;\r\n  margin: 0px !important;\r\n  border-radius: 0px !important;\r\n}\r\n\r\n#navbar .dropdown-menu a {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n#navbar .dropdown-item {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar .dropdown:hover .dropdown-menu {\r\n  display: table;\r\n}\r\n\r\n#navbar li:hover,\r\n#navbar .dropdown-item:hover {\r\n  background-color: #01a79b;\r\n  /* color: black; */\r\n}\r\n\r\n#navbar .nav-item.active {\r\n  border-top: 4px solid #01a79b;\r\n  margin-top: -2px;\r\n  line-height: 1;\r\n}\r\n\r\n#navbar .nav-item.active>a {\r\n  color: #01a79b !important;\r\n}\r\n\r\n#navbar .nav-item.active:hover>a {\r\n  color: #282560 !important;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: #282560 !important;\r\n}\r\n\r\n.resp-toggler,\r\n.responsive-nav {\r\n  display: none;\r\n\r\n}\r\n\r\n.resp-toggler {\r\n  background-color: #fff;\r\n  padding: 8px 17px\r\n}\r\n\r\n.resp-toggler i {\r\n  font-size: 24px;\r\n}\r\n\r\n.responsive-nav {\r\n  height: 0px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  z-index: 120;\r\n  transition: height .2s ease-in-out;\r\n}\r\n\r\n.responsive-navbar {\r\n  display: none;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.responsive-nav .r-menu {\r\n  display: flex;\r\n  margin: 25px;\r\n}\r\n\r\n.r-show {\r\n  border: 1px solid #282560;\r\n  height: 400px;\r\n  width: inherit;\r\n  overflow-x: auto;\r\n}\r\n\r\n.responsive-nav .r-menu-item {\r\n  display: inline-block;\r\n  margin-right: 14px;\r\n}\r\n\r\n.responsive-nav .r-menu-item p {\r\n  font-weight: 600;\r\n  border-bottom: 1px solid #282560;\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n}\r\n\r\n.responsive-nav .r-menu-item ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.responsive-nav .r-menu-item ul li {\r\n  margin-bottom: 8px\r\n}\r\n\r\n.content {\r\n  padding: 16px;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.sticky+.content {\r\n  padding-top: 60px;\r\n}\r\n\r\n#navbar.active-bar {\r\n  background-color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar a,\r\n#navbar.active-bar li i {\r\n  color: #fff !important;\r\n  background-color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar li:hover,\r\n#navbar.active-bar li:hover a,\r\n#navbar.active-bar li:hover i {\r\n  background-color: #01a79b !important;\r\n  color: #fff !important;\r\n}\r\n\r\n#navbar.active-bar li:hover.active i {\r\n  color: #282560 !important;\r\n}\r\n\r\n#navbar.active-bar .nav-item .dropdown-item:hover {\r\n  color: #282560 !important;\r\n  background-color: #ddd !important;\r\n}\r\n\r\n#navbar.active-bar .seperator>div {\r\n  border-color: #fff;\r\n}\r\n\r\n#navbar .tls {\r\n  display: none;\r\n  float: right;\r\n  margin-top: 5px;\r\n}\r\n\r\n#navbar .web-tls {\r\n  display: flex;\r\n}\r\n\r\n#navbar .web-tls .wrapper {\r\n  height: 100%;\r\n  margin-right: 27px;\r\n  padding: 0px 5px;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper {\r\n  height: 100%;\r\n  margin-right: 27px;\r\n  padding: 0px 5px;\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper:focus-within {\r\n  border-bottom: 1px solid #01a79b;\r\n  color: #01a79b;\r\n}\r\n\r\n#navbar.active-bar .web-tls .wrapper input {\r\n  color: #fff;\r\n}\r\n\r\n#navbar .web-tls .wrapper input {\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n  .seperator {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.contact {\r\n  color: #282560;\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 1390px) {\r\n  #navbar .nav-item {\r\n    padding: 0px 8px;\r\n  }\r\n\r\n  #navbar a {\r\n    padding: 14px 11px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  #navbar .nav-item {\r\n    padding: 0px 6px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n\r\n\r\n\r\n  .logo-wrapper,\r\n  .header-details {\r\n    display: inline-flex;\r\n    margin: auto;\r\n  }\r\n\r\n  .logos {\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .logo-wrapper .nsia-logo {\r\n    margin: 0px 8px;\r\n  }\r\n\r\n  .header-details {\r\n    float: none !important;\r\n\r\n  }\r\n\r\n  .resp-toggler,\r\n  .responsive-nav {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .website-tools {\r\n    display: none;\r\n  }\r\n\r\n  #navbar .tls {\r\n    display: block;\r\n  }\r\n\r\n  .responsive-navbar {\r\n    display: block;\r\n  }\r\n\r\n  .resp-toggler {\r\n    background-color: #282560;\r\n    color: #fff;\r\n    border: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUdBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWix3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFHYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUlFLHlDQUF5QztBQUMzQzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTs7RUFFRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEI7QUFDRjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBSUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBT0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOzs7O0VBSUU7O0lBRUUsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7O0VBRXhCOztFQUVBOztJQUVFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE2cHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWNlbnRlciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRlciAubG9nb3MgaW1nIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmhlYWRlciAuaGVhZGVyLWRldGFpbHMge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIC53ZWJzaXRlLXRvb2xzIC50b29scy13cmFwcGVyIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaGVhZGVyIC5jb250YWN0LWRldGFpbHMsXHJcbi53ZWJzaXRlLXRvb2xzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlYWRlciAuY29udGFjdC1kZXRhaWxzIC5jLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7IFxyXG59XHJcblxyXG4uaGVhZGVyIC5jLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgc2VsZWN0LFxyXG4jbmF2YmFyIHNlbGVjdCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhbmdlLWxhbmd1YWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLmNoYW5nZS1sYW5ndWFnZSBpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDB2aDtcclxuICB6LWluZGV4OiA5MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtd3JhcHBlci5zaG93IHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXhcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtd3JhcHBlciBpLmZhLXRpbWVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucGQtdG9wIHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyBsaTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyBsaSBzcGFuIHtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXJlc3VsdHMgLnJlc3VsdCB7XHJcbiAgbWFyZ2luOiAwcHggMnJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzIC5zZWFyY2gtaXRlbS10aXRsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbiNtYXBNb2RhbCAubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI21hcE1vZGFsIC5hZGRyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEyMztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcblxyXG4jbmF2YmFyIHtcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxOTcsIDE5NSwgMTk1KTtcclxufVxyXG5cclxuI25hdmJhciAubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcblxyXG4jbmF2YmFyIC5zZXBlcmF0b3Ige1xyXG4gIHBhZGRpbmc6IDBweCAycHg7XHJcbn1cclxuXHJcbiNuYXZiYXIgLnNlcGVyYXRvcj5kaXYge1xyXG4gIGhlaWdodDogMzMlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMzJTtcclxuICBib3JkZXI6IC41cHggc29saWQgIzI4MjU2MDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNuYXZiYXIgbGksXHJcbiNuYXZiYXIgYSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcblxyXG4jbmF2YmFyIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzI4MjU2MDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG59XHJcblxyXG4jbmF2YmFyIGE6OmFmdGVyIHtcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG4jbmF2YmFyIC5mYS1jaGV2cm9uLWRvd24ge1xyXG4gIGZvbnQtc2l6ZTogN3B4O1xyXG4gIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI25hdmJhciAubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIC5mYXMge1xyXG4gIGNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAubmF2LWl0ZW0uYWN0aXZlIC5mYXMge1xyXG4gIGNvbG9yOiAjMDFhNzliICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIC5mYXMge1xyXG4gIGNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZSAuZmEtY2hldnJvbi1kb3duIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMWE3OWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhciAuZHJvcGRvd24tbWVudSBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jbmF2YmFyIC5kcm9wZG93bi1pdGVtIHtcclxuICBjb2xvcjogIzI4MjU2MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2YmFyIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcblxyXG4jbmF2YmFyIGxpOmhvdmVyLFxyXG4jbmF2YmFyIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhNzliO1xyXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cclxufVxyXG5cclxuI25hdmJhciAubmF2LWl0ZW0uYWN0aXZlIHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzAxYTc5YjtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4jbmF2YmFyIC5uYXYtaXRlbS5hY3RpdmU+YSB7XHJcbiAgY29sb3I6ICMwMWE3OWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhciAubmF2LWl0ZW0uYWN0aXZlOmhvdmVyPmEge1xyXG4gIGNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogIzI4MjU2MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzcC10b2dnbGVyLFxyXG4ucmVzcG9uc2l2ZS1uYXYge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcblxyXG4ucmVzcC10b2dnbGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDhweCAxN3B4XHJcbn1cclxuXHJcblxyXG4ucmVzcC10b2dnbGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbmF2IHtcclxuICBoZWlnaHQ6IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEyMDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW5hdiAuci1tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG5cclxuLnItc2hvdyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MjU2MDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW5hdiAuci1tZW51LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW5hdiAuci1tZW51LWl0ZW0gcCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjU2MDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLW5hdiAuci1tZW51LWl0ZW0gdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1uYXYgLnItbWVudS1pdGVtIHVsIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHhcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGlja3krLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI1NjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIGEsXHJcbiNuYXZiYXIuYWN0aXZlLWJhciBsaSBpIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI1NjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIGxpOmhvdmVyLFxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgbGk6aG92ZXIgYSxcclxuI25hdmJhci5hY3RpdmUtYmFyIGxpOmhvdmVyIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgbGk6aG92ZXIuYWN0aXZlIGkge1xyXG4gIGNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiAjMjgyNTYwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2YmFyLmFjdGl2ZS1iYXIgLnNlcGVyYXRvcj5kaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI25hdmJhciAudGxzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbiNuYXZiYXIgLndlYi10bHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNuYXZiYXIgLndlYi10bHMgLndyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDI3cHg7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIC53ZWItdGxzIC53cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI25hdmJhci5hY3RpdmUtYmFyIC53ZWItdGxzIC53cmFwcGVyOmZvY3VzLXdpdGhpbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMWE3OWI7XHJcbiAgY29sb3I6ICMwMWE3OWI7XHJcbn1cclxuXHJcbiNuYXZiYXIuYWN0aXZlLWJhciAud2ViLXRscyAud3JhcHBlciBpbnB1dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuI25hdmJhciAud2ViLXRscyAud3JhcHBlciBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc2VwZXJhdG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgY29sb3I6ICMyODI1NjA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzOTBweCkge1xyXG4gICNuYXZiYXIgLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyIGEge1xyXG4gICAgcGFkZGluZzogMTRweCAxMXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAjbmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG5cclxuXHJcblxyXG4gIC5sb2dvLXdyYXBwZXIsXHJcbiAgLmhlYWRlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxvZ29zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG5cclxuICAubG9nby13cmFwcGVyIC5uc2lhLWxvZ28ge1xyXG4gICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1kZXRhaWxzIHtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLnJlc3AtdG9nZ2xlcixcclxuICAucmVzcG9uc2l2ZS1uYXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAud2Vic2l0ZS10b29scyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI25hdmJhciAudGxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJlc3BvbnNpdmUtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJlc3AtdG9nZ2xlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "mapElement", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
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
        this.loading = true;
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
        this.loading = true;
        var customParams = [];
        customParams.push('title.rendered');
        customParams.push('date');
        customParams.push('id');
        this.dataService.getCardsData(customParams, type, perPage).subscribe(function (newsData) {
            _this.loading = false;
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
            // console.log('before redirectNews: ', this.newsReadMore);
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
            template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/news/news.component.html"),
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
        this.loading = true;
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
        this.loading = true;
        var customParams = [];
        customParams.push('id');
        customParams.push('content');
        this.dataService.getNewsData(customParams, type, perPage).subscribe(function (newsData) {
            //  console.log('Newsletter data: ', this.newsletters);
            if (newsData[0]) {
                _this.loading = false;
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
        this.loading = true;
        var customParams = [];
        customParams.push('acf.promotional_materials_attachment.url');
        customParams.push('acf.promotional_materials_type');
        this.dataService.getMediaData(customParams, type).subscribe(function (promotingMaterialData) {
            // console.log('Prmotional materials: ', promotingMaterialData);
            if (promotingMaterialData.length > 0) {
                _this.loading = false;
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
            template: __webpack_require__(/*! raw-loader!./promotional-materials.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/promotional-materials/promotional-materials.component.html"),
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