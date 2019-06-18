(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-to-info-access-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/access-to-info/access-home/access-home.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/access-to-info/access-home/access-home.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\r\n<div class=\"custom-container\">\r\n\r\n  <div class=\"full-details content-justify\">\r\n    <div class=\"info-wrapper\" *ngIf=\"selectedInfo\">\r\n      <h1>{{ selectedInfo.title.rendered }}</h1>\r\n      <div class=\"info-details\">\r\n        <div class=\"full-media\">\r\n          <img class=\"fit-cover\" [src]=\"selectedInfo.better_featured_image?.source_url\" alt=\"image\"\r\n            *ngIf=\"selectedInfo.acf.attachment_type === 'image'\" (error)=\"imageError($event.target)\">\r\n\r\n          <iframe [src]=\"videoURL(selectedInfo.acf.link)\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n            allowfullscreen *ngIf=\"selectedInfo.acf.attachment_type === 'video'\"></iframe>\r\n        </div>\r\n        <div class=\"full-text\">\r\n          <p> {{ selectedInfo.content.rendered }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"close-btn\" (click)=\"hideFullInfo()\">\r\n      X\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main-wrapper\">\r\n\r\n    <nav class=\"sidebar-nav\">\r\n      <div class=\"sidebar\">\r\n        <div class=\"sidebar-menu\">\r\n          <ul>\r\n            <li class=\"ai-type active-type\"\r\n              [class.active-type]=\"currentSection == 'guidelines' || currentSection == undefined\"\r\n              (click)=\"scrollTo('guidelines', $event.target)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{'label.guidelines' | translate }}</span>\r\n            </li>\r\n            <li class=\"ai-type\" [class.active-type]=\"currentSection == 'statistics'\"\r\n              (click)=\"scrollTo('statistics', $event.target)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{'submenu.statistics' | translate}}</span>\r\n            </li>\r\n            <li class=\"ai-type\" [class.active-type]=\"currentSection == 'national_identity'\"\r\n              (click)=\"scrollTo('national_identity', $event.target)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{'submenu.nid' | translate}}</span>\r\n            </li>\r\n            <li class=\"ai-type\" [class.active-type]=\"currentSection == 'regulations'\"\r\n              (click)=\"scrollTo('regulations', $event.target)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{'label.regulations' | translate}}</span>\r\n            </li>\r\n            <li class=\"ai-type\" [class.active-type]=\"currentSection == 'policies'\"\r\n              (click)=\"scrollTo('policies', $event.target)\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span>{{'btn.policies' | translate}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n    </nav>\r\n    <div class=\"sidebar-toggler\">\r\n      <div class=\"t-btn\" (click)=\"toggleNavbar()\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"contents\">\r\n\r\n      <!-- <router-outlet></router-outlet> -->\r\n      <div id=\"ai-sections\" scrollSpy [spiedTags]=\"['DIV']\" (sectionChange)=\"onSectionChange($event)\"\r\n        (scroll)=\"getScroll($event.target)\" *ngIf=\"accessInfo\">\r\n        <div id=\"guidelines\">\r\n          <div class=\"section-title active-section\">\r\n            <h4 class=\"info-section \">{{'label.guidelines' | translate }}</h4>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i> -->\r\n          </div>\r\n          <div class=\"section-details\" *ngIf=\"sectionExist('guidlines')\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let info of accessInfo\">\r\n                <div class=\"info-card col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"info.acf.info_type==='guidlines'\">\r\n                  <div class=\"info-item\" (click)=\"showInfo(info)\">\r\n                    <div class=\"info-item-media\">\r\n                      <img [src]=\"info.better_featured_image?.source_url\" alt=\"media item\"\r\n                        (error)=\"imageError($event.target);\">\r\n                      <div class=\"blue-mask\">\r\n                        <div class=\"media-icon\">\r\n                          <i class=\"fab fa-youtube\" *ngIf=\"info.acf.attachment_type==='video'\"></i>\r\n                          <i class=\"fas fa-image\" *ngIf=\"info.acf.attachment_type==='image'\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info-item-title\">\r\n                      <p>{{ info.title.rendered }}</p>\r\n                    </div>\r\n                    <div class=\"info-item-brief\" *ngIf=\"info.content\">\r\n                      <small>{{ getBrief(info.content.rendered) }}</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"statistics\">\r\n          <div class=\"section-title\">\r\n            <h4 class=\"info-section \">{{'submenu.statistics' | translate}}</h4>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i> -->\r\n          </div>\r\n          <div class=\"section-details\" *ngIf=\"sectionExist('statistics')\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let info of accessInfo\">\r\n                <div class=\"info-card col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"info.acf.info_type==='statistics'\">\r\n                  <div class=\"info-item\" (click)=\"showInfo(info)\">\r\n                    <div class=\"info-item-media\">\r\n                      <img [src]=\"info.better_featured_image?.source_url\" alt=\"media item\"\r\n                        (error)=\"imageError($event.target);\">\r\n                      <div class=\"blue-mask\">\r\n                        <div class=\"media-icon\">\r\n                          <i class=\"fab fa-youtube\" *ngIf=\"info.acf.attachment_type==='video'\"></i>\r\n                          <i class=\"fas fa-image\" *ngIf=\"info.acf.attachment_type==='image'\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info-item-title\">\r\n                      <p>{{ info.title.rendered }}</p>\r\n                    </div>\r\n                    <div class=\"info-item-brief\" *ngIf=\"info.content\">\r\n                      <small>{{ getBrief(info.content.rendered) }}</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"national_identity\">\r\n          <div class=\"section-title\">\r\n            <h4 class=\"info-section \">{{'submenu.nid' | translate}}</h4>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i> -->\r\n          </div>\r\n          <div class=\"section-details\" *ngIf=\"sectionExist('national_identity')\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let info of accessInfo\">\r\n                <div class=\"info-card col-lg-4 col-md-4 col-sm-6 col-xs-12\"\r\n                  *ngIf=\"info.acf.info_type==='national_identity'\">\r\n                  <div class=\"info-item\" (click)=\"showInfo(info)\">\r\n                    <div class=\"info-item-media\">\r\n                      <img [src]=\"info.better_featured_image?.source_url\" alt=\"media item\"\r\n                        (error)=\"imageError($event.target);\">\r\n                      <div class=\"blue-mask\">\r\n                        <div class=\"media-icon\">\r\n                          <i class=\"fab fa-youtube\" *ngIf=\"info.acf.attachment_type==='video'\"></i>\r\n                          <i class=\"fas fa-image\" *ngIf=\"info.acf.attachment_type==='image'\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info-item-title\">\r\n                      <p>{{ info.title.rendered }}</p>\r\n                    </div>\r\n                    <div class=\"info-item-brief\" *ngIf=\"info.content\">\r\n                      <small>{{ getBrief(info.content.rendered) }}</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"regulations\">\r\n          <div class=\"section-title\">\r\n            <h4 class=\"info-section \">{{'label.regulations' | translate}}</h4>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i> -->\r\n          </div>\r\n          <div class=\"section-details\" *ngIf=\"sectionExist('regulations')\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let info of accessInfo\">\r\n                <div class=\"info-card col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"info.acf.info_type==='regulations'\">\r\n                  <div class=\"info-item\" (click)=\"showInfo(info)\">\r\n                    <div class=\"info-item-media\">\r\n                      <img [src]=\"info.better_featured_image?.source_url\" alt=\"media item\"\r\n                        (error)=\"imageError($event.target);\">\r\n                      <div class=\"blue-mask\">\r\n                        <div class=\"media-icon\">\r\n                          <i class=\"fab fa-youtube\" *ngIf=\"info.acf.attachment_type==='video'\"></i>\r\n                          <i class=\"fas fa-image\" *ngIf=\"info.acf.attachment_type==='image'\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info-item-title\">\r\n                      <p>{{ info.title.rendered }}</p>\r\n                    </div>\r\n                    <div class=\"info-item-brief\" *ngIf=\"info.content\">\r\n                      <small>{{ getBrief(info.content.rendered) }}</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"policies\">\r\n          <div class=\"section-title\">\r\n            <h4 class=\"info-section \">{{'btn.policies' | translate}}</h4>\r\n            <!-- <i class=\"fas fa-chevron-down\"></i> -->\r\n          </div>\r\n          <div class=\"section-details\" *ngIf=\"sectionExist('policies')\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let info of accessInfo\">\r\n                <div class=\"info-card col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"info.acf.info_type==='policies'\">\r\n                  <div class=\"info-item\" (click)=\"showInfo(info)\">\r\n                    <div class=\"info-item-media\">\r\n                      <img [src]=\"info.better_featured_image?.source_url\" alt=\"media item\"\r\n                        (error)=\"imageError($event.target);\">\r\n                      <div class=\"blue-mask\">\r\n                        <div class=\"media-icon\">\r\n                          <i class=\"fab fa-youtube\" *ngIf=\"info.acf.attachment_type==='video'\"></i>\r\n                          <i class=\"fas fa-image\" *ngIf=\"info.acf.attachment_type==='image'\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info-item-title\">\r\n                      <p>{{ info.title.rendered }}</p>\r\n                    </div>\r\n                    <div class=\"info-item-brief\" *ngIf=\"info.content\">\r\n                      <small>{{ getBrief(info.content.rendered) }}</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <ng-template #nodata>\r\n          <div class=\"contents\">\r\n            <div class=\"jumbotron text-center no-data\">\r\n              <h4>NO DATA</h4>\r\n            </div>\r\n          </div>\r\n        </ng-template> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/access-to-info/access-home/access-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/access-to-info/access-home/access-home.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-menu ul {\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-menu ul li {\r\n  display: block;\r\n  border-top: 1px solid #282560;\r\n  padding: 8px 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar-menu ul li span {\r\n  margin: 0px;\r\n  margin: 4px;\r\n}\r\n\r\n.active-type {\r\n  color: #282560;\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar-menu ul li.active-type i {\r\n  visibility: visible !important;\r\n}\r\n\r\n.section-title.active-section {\r\n  color: #01a79b;\r\n  border-bottom: 2px solid #01a79b !important;\r\n}\r\n\r\n.section-title.active-section .info-section {\r\n  color: #282560 !important;\r\n}\r\n\r\n#ai-sections {\r\n  height: 450px;\r\n  overflow-y: scroll;\r\n  padding: 0px 2px;\r\n  overflow-x: hidden;\r\n  padding-bottom: 10rem;\r\n}\r\n\r\n#ai-sections .section-title {\r\n  display: flex;\r\n  border-bottom: 1px solid #282560;\r\n  margin: 1rem 0px;\r\n}\r\n\r\n#ai-sections .section-title .info-section {\r\n  flex: auto;\r\n  color: #d2d0d0;\r\n  /* margin-bottom: 0px !important; */\r\n}\r\n\r\n#ai-sections .section-title i {\r\n  margin: 12px;\r\n  margin-bottom: 8px;\r\n  font-size: 1.2rem;\r\n\r\n}\r\n\r\n.info-card {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.info-item {\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.info-item-media {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.info-item img {\r\n  width: 100%;\r\n  height: 160px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  transition: .2s ease-in-out;\r\n  position: static;\r\n}\r\n\r\n.info-item-media .blue-mask {\r\n  position: absolute;\r\n  background-color: #28256098;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n\r\n.info-item-media .blue-mask .media-icon {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.info-item-media .blue-mask .media-icon .fa-youtube,\r\n.info-item-media .blue-mask .media-icon .fa-image {\r\n  font-size: 50px;\r\n  color: #01a79b;\r\n}\r\n\r\n.info-item-media:hover .blue-mask .media-icon .fa-youtube,\r\n.info-item-media:hover .blue-mask .media-icon .fa-image {\r\n  color: #fff;\r\n}\r\n\r\n.info-item:hover img {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.info-item .info-item-title p {\r\n  margin: 0px !important;\r\n  font-weight: 600;\r\n}\r\n\r\n.full-details {\r\n  position: fixed;\r\n  display: none;\r\n  background-color: #282560e3;\r\n  z-index: 1200;\r\n  /* height: 100%; */\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  overflow: scroll;\r\n}\r\n\r\n.full-details .info-wrapper {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  width: 50vw;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.full-details .info-wrapper .full-text {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.full-details .info-wrapper .full-media img,\r\n.full-details .info-wrapper .full-media iframe {\r\n  width: 100%;\r\n  height: 350px;\r\n}\r\n\r\n.full-details .close-btn {\r\n  color: #fff;\r\n  position: absolute;\r\n  right: 200px;\r\n  top: 77px;\r\n  padding: 1px 12px;\r\n  background-color: #01a79b;\r\n  color: #282560;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzLXRvLWluZm8vYWNjZXNzLWhvbWUvYWNjZXNzLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtBQUNSOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVzs7QUFFYjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWNjZXNzLXRvLWluZm8vYWNjZXNzLWhvbWUvYWNjZXNzLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW1lbnUgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyNTYwO1xyXG4gIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51IHVsIGxpIHNwYW4ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uYWN0aXZlLXR5cGUge1xyXG4gIGNvbG9yOiAjMjgyNTYwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUgdWwgbGkuYWN0aXZlLXR5cGUgaSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZS5hY3RpdmUtc2VjdGlvbiB7XHJcbiAgY29sb3I6ICMwMWE3OWI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMWE3OWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUuYWN0aXZlLXNlY3Rpb24gLmluZm8tc2VjdGlvbiB7XHJcbiAgY29sb3I6ICMyODI1NjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2FpLXNlY3Rpb25zIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nOiAwcHggMnB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbn1cclxuXHJcbiNhaS1zZWN0aW9ucyAuc2VjdGlvbi10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjU2MDtcclxuICBtYXJnaW46IDFyZW0gMHB4O1xyXG59XHJcblxyXG4jYWktc2VjdGlvbnMgLnNlY3Rpb24tdGl0bGUgLmluZm8tc2VjdGlvbiB7XHJcbiAgZmxleDogYXV0bztcclxuICBjb2xvcjogI2QyZDBkMDtcclxuICAvKiBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuI2FpLXNlY3Rpb25zIC5zZWN0aW9uLXRpdGxlIGkge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcblxyXG59XHJcblxyXG4uaW5mby1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmluZm8taXRlbS1tZWRpYSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG59XHJcblxyXG4uaW5mby1pdGVtLW1lZGlhIC5ibHVlLW1hc2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwOTg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmluZm8taXRlbS1tZWRpYSAuYmx1ZS1tYXNrIC5tZWRpYS1pY29uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0tbWVkaWEgLmJsdWUtbWFzayAubWVkaWEtaWNvbiAuZmEteW91dHViZSxcclxuLmluZm8taXRlbS1tZWRpYSAuYmx1ZS1tYXNrIC5tZWRpYS1pY29uIC5mYS1pbWFnZSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDFhNzliO1xyXG59XHJcblxyXG4uaW5mby1pdGVtLW1lZGlhOmhvdmVyIC5ibHVlLW1hc2sgLm1lZGlhLWljb24gLmZhLXlvdXR1YmUsXHJcbi5pbmZvLWl0ZW0tbWVkaWE6aG92ZXIgLmJsdWUtbWFzayAubWVkaWEtaWNvbiAuZmEtaW1hZ2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaW5mby1pdGVtOmhvdmVyIGltZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIC5pbmZvLWl0ZW0tdGl0bGUgcCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZnVsbC1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNTYwZTM7XHJcbiAgei1pbmRleDogMTIwMDtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5mdWxsLWRldGFpbHMgLmluZm8td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcblxyXG5cclxuLmZ1bGwtZGV0YWlscyAuaW5mby13cmFwcGVyIC5mdWxsLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcblxyXG4uZnVsbC1kZXRhaWxzIC5pbmZvLXdyYXBwZXIgLmZ1bGwtbWVkaWEgaW1nLFxyXG4uZnVsbC1kZXRhaWxzIC5pbmZvLXdyYXBwZXIgLmZ1bGwtbWVkaWEgaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uZnVsbC1kZXRhaWxzIC5jbG9zZS1idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjAwcHg7XHJcbiAgdG9wOiA3N3B4O1xyXG4gIHBhZGRpbmc6IDFweCAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWE3OWI7XHJcbiAgY29sb3I6ICMyODI1NjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/access-to-info/access-home/access-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/access-to-info/access-home/access-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccessHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessHomeComponent", function() { return AccessHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info.service */ "./src/app/access-to-info/info.service.ts");





var AccessHomeComponent = /** @class */ (function () {
    function AccessHomeComponent(info, sanitizer) {
        this.info = info;
        this.sanitizer = sanitizer;
        this.currentSection = 'guidelines';
    }
    AccessHomeComponent.prototype.ngOnInit = function () {
        this.getAccessInfo();
    };
    AccessHomeComponent.prototype.onSectionChange = function (sectionId) {
        this.currentSection = sectionId;
        console.log('section changed: ', this.currentSection);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.section-title').removeClass('active-section');
        if (this.currentSection === undefined) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#guidelines').find('.section-title').addClass('active-section');
        }
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + this.currentSection).find('.section-title').addClass('active-section');
    };
    AccessHomeComponent.prototype.scrollTo = function (section, el) {
        var target = document.querySelector('#' + section);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#ai-sections').animate({ scrollTop: (target.offsetTop - jquery__WEBPACK_IMPORTED_MODULE_2__('#ai-sections').offset().top) }, 600);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.section-title').removeClass('active-section');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + section).find('.section-title').addClass('active-section');
        jquery__WEBPACK_IMPORTED_MODULE_2__('.ai-type').removeClass('active-type');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).closest('.ai-type').addClass('active-type');
    };
    AccessHomeComponent.prototype.toggleNavbar = function () {
        var navWidth = document.getElementsByClassName('sidebar-nav')[0].style.width;
        console.log('navWidth: ', navWidth);
        var rtl = false;
        if (jquery__WEBPACK_IMPORTED_MODULE_2__('body').hasClass('rtl')) {
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
            jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar-toggler i').removeClass('fa-chevron-right').addClass('fa-chevron-left');
        }
        else {
            document.getElementsByClassName('sidebar-nav')[0].style.width = '0px';
            if (rtl) {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginRight = '0px';
            }
            else {
                document.getElementsByClassName('sidebar-toggler')[0].style.marginLeft = '0px';
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar-toggler i').removeClass('fa-chevron-left').addClass('fa-chevron-right');
        }
    };
    AccessHomeComponent.prototype.getScroll = function (el) {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__(el).scrollTop());
    };
    AccessHomeComponent.prototype.videoURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AccessHomeComponent.prototype.hideFullInfo = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.full-details').hide();
    };
    AccessHomeComponent.prototype.showInfo = function (info) {
        this.selectedInfo = info;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.full-details').show();
    };
    AccessHomeComponent.prototype.getAccessInfo = function () {
        var _this = this;
        var customParams = [];
        customParams.push('id');
        customParams.push('title');
        customParams.push('content');
        customParams.push('better_featured_image.source_url');
        customParams.push('acf');
        this.info.getInfo(customParams).subscribe(function (data) {
            console.log('access info: ', data);
            if (data) {
                _this.accessInfo = data;
                for (var _i = 0, _a = _this.accessInfo; _i < _a.length; _i++) {
                    var ai = _a[_i];
                    if (ai.hasOwnProperty('content')) {
                        ai.content.rendered = _this.info.htmlToPlaintext(ai.content.rendered);
                    }
                }
            }
        });
    };
    AccessHomeComponent.prototype.sectionExist = function (sc) {
        for (var _i = 0, _a = this.accessInfo; _i < _a.length; _i++) {
            var section = _a[_i];
            if ((section.acf.info_type).toLowerCase() === sc) {
                return true;
            }
        }
        return false;
    };
    AccessHomeComponent.prototype.getBrief = function (ds) {
        if (ds.length > 40) {
            return ds.substring(0, 39) + '...';
        }
        return ds;
    };
    AccessHomeComponent.prototype.imageError = function (el) {
        el.onerror = '';
        el.src = '../../assets/images/noimage.svg';
        console.log(el);
        return true;
    };
    AccessHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-home',
            template: __webpack_require__(/*! raw-loader!./access-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/access-to-info/access-home/access-home.component.html"),
            styles: [__webpack_require__(/*! ./access-home.component.css */ "./src/app/access-to-info/access-home/access-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_info_service__WEBPACK_IMPORTED_MODULE_4__["InfoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AccessHomeComponent);
    return AccessHomeComponent;
}());



/***/ }),

/***/ "./src/app/access-to-info/access-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/access-to-info/access-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRoutingModule", function() { return AccessRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _access_home_access_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-home/access-home.component */ "./src/app/access-to-info/access-home/access-home.component.ts");




var accessRoutes = [
    {
        path: '',
        component: _access_home_access_home_component__WEBPACK_IMPORTED_MODULE_3__["AccessHomeComponent"],
    }
];
var AccessRoutingModule = /** @class */ (function () {
    function AccessRoutingModule() {
    }
    AccessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(accessRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccessRoutingModule);
    return AccessRoutingModule;
}());



/***/ }),

/***/ "./src/app/access-to-info/access.module.ts":
/*!*************************************************!*\
  !*** ./src/app/access-to-info/access.module.ts ***!
  \*************************************************/
/*! exports provided: createTranslateLoader, AccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessModule", function() { return AccessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-routing.module */ "./src/app/access-to-info/access-routing.module.ts");
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scrollspy.directive */ "./src/app/scrollspy.directive.ts");
/* harmony import */ var _access_home_access_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access-home/access-home.component */ "./src/app/access-to-info/access-home/access-home.component.ts");









function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AccessModule = /** @class */ (function () {
    function AccessModule() {
    }
    AccessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _access_home_access_home_component__WEBPACK_IMPORTED_MODULE_8__["AccessHomeComponent"],
                _scrollspy_directive__WEBPACK_IMPORTED_MODULE_7__["ScrollSpyDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _access_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccessRoutingModule"],
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
    ], AccessModule);
    return AccessModule;
}());



/***/ }),

/***/ "./src/app/access-to-info/info.service.ts":
/*!************************************************!*\
  !*** ./src/app/access-to-info/info.service.ts ***!
  \************************************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var InfoService = /** @class */ (function () {
    function InfoService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    InfoService.prototype.getInfo = function (customParams) {
        return this.http.get(this.dataService.api + 'posts', {
            params: {
                lang: this.dataService.language,
                'filter[category_name]': 'access_to_info',
                fields: customParams.join(',')
            }
        });
    };
    InfoService.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    InfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/app/scrollspy.directive.ts":
/*!****************************************!*\
  !*** ./src/app/scrollspy.directive.ts ***!
  \****************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ScrollSpyDirective.prototype.onScroll = function (event) {
        var currentSection;
        var children = this._el.nativeElement.children;
        var scrollTop = event.target.scrollTop;
        var parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScrollSpyDirective.prototype, "spiedTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScrollSpyDirective.prototype, "sectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onScroll", null);
    ScrollSpyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[scrollSpy]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());



/***/ })

}]);
//# sourceMappingURL=access-to-info-access-module.js.map