(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1QSi":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("0bV8"),i=function(l){return new e.a(l,"./assets/i18n/",".json")},o=function(){return function(){}}(),c=u("pMnS"),r=u("Ip0R"),a=function(){function l(l){this._el=l,this.spiedTags=[],this.sectionChange=new t.m}return l.prototype.onScroll=function(l){for(var n,u=this._el.nativeElement.children,t=l.target.scrollTop,e=l.target.offsetTop,i=function(l){var i=u[l];o.spiedTags.some(function(l){return l===i.tagName})&&i.offsetTop-e<=t&&(n=i.id)},o=this,c=0;c<u.length;c++)i(c);n!==this.currentSection&&(this.currentSection=n,this.sectionChange.emit(this.currentSection))},l}(),s=u("A7o+"),f=u("EVdn"),b=u("R7Hv"),g=u("t/Na"),m=function(){function l(l,n){this.http=l,this.dataService=n}return l.prototype.getInfo=function(l){return this.http.get(this.dataService.api+"posts",{params:{lang:this.dataService.language,"filter[category_name]":"access_to_info",fields:l.join(",")}})},l.prototype.htmlToPlaintext=function(l){return l?String(l).replace(/<[^>]+>/gm,""):""},l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Qb(g.c),t.Qb(b.a))},token:l,providedIn:"root"}),l}(),d=function(){function l(l,n){this.info=l,this.sanitizer=n,this.currentSection="guidelines"}return l.prototype.ngOnInit=function(){this.getAccessInfo()},l.prototype.onSectionChange=function(l){this.currentSection=l,console.log("section changed: ",this.currentSection),f(".section-title").removeClass("active-section"),void 0===this.currentSection&&f("#guidelines").find(".section-title").addClass("active-section"),f("#"+this.currentSection).find(".section-title").addClass("active-section")},l.prototype.scrollTo=function(l,n){var u=document.querySelector("#"+l);f("#ai-sections").animate({scrollTop:u.offsetTop-f("#ai-sections").offset().top},600),f(".section-title").removeClass("active-section"),f("#"+l).find(".section-title").addClass("active-section"),f(".ai-type").removeClass("active-type"),f(n).closest(".ai-type").addClass("active-type")},l.prototype.toggleNavbar=function(){var l=document.getElementsByClassName("sidebar-nav")[0].style.width;console.log("navWidth: ",l);var n=!1;f("body").hasClass("rtl")&&(n=!0),"0px"===l?(document.getElementsByClassName("sidebar-nav")[0].style.width="19vw",n?document.getElementsByClassName("sidebar-toggler")[0].style.marginRight="19vw":document.getElementsByClassName("sidebar-toggler")[0].style.marginLeft="19vw",f(".sidebar-toggler i").removeClass("fa-chevron-right").addClass("fa-chevron-left")):(document.getElementsByClassName("sidebar-nav")[0].style.width="0px",n?document.getElementsByClassName("sidebar-toggler")[0].style.marginRight="0px":document.getElementsByClassName("sidebar-toggler")[0].style.marginLeft="0px",f(".sidebar-toggler i").removeClass("fa-chevron-left").addClass("fa-chevron-right"))},l.prototype.getScroll=function(l){console.log(f(l).scrollTop())},l.prototype.videoURL=function(l){return this.sanitizer.bypassSecurityTrustResourceUrl(l)},l.prototype.hideFullInfo=function(){f(".full-details").hide()},l.prototype.showInfo=function(l){this.selectedInfo=l,f(".full-details").show()},l.prototype.getAccessInfo=function(){var l=this,n=[];n.push("id"),n.push("title"),n.push("content"),n.push("better_featured_image.source_url"),n.push("acf"),this.info.getInfo(n).subscribe(function(n){if(console.log("access info: ",n),n){l.accessInfo=n;for(var u=0,t=l.accessInfo;u<t.length;u++){var e=t[u];e.hasOwnProperty("content")&&(e.content.rendered=l.info.htmlToPlaintext(e.content.rendered))}}})},l.prototype.sectionExist=function(l){for(var n=0,u=this.accessInfo;n<u.length;n++)if(u[n].acf.info_type.toLowerCase()===l)return!0;return!1},l.prototype.getBrief=function(l){return l.length>40?l.substring(0,39)+"...":l},l.prototype.imageError=function(l){return l.onerror="",l.src="../../assets/images/noimage.svg",console.log(l),!0},l}(),p=u("ZYjt"),v=t.pb({encapsulation:0,styles:[[".sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;border-top:1px solid #282560;padding:8px 4px;cursor:pointer}.sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:4px}.active-type[_ngcontent-%COMP%]{color:#282560;font-weight:600}.sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{visibility:visible!important}.section-title.active-section[_ngcontent-%COMP%]{color:#01a79b;border-bottom:2px solid #01a79b!important}.section-title.active-section[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{color:#282560!important}#ai-sections[_ngcontent-%COMP%]{height:450px;overflow-y:scroll;padding:0 2px 10rem;overflow-x:hidden}#ai-sections[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #282560;margin:1rem 0}#ai-sections[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{flex:auto;color:#d2d0d0}#ai-sections[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:12px 12px 8px;font-size:1.2rem}.info-card[_ngcontent-%COMP%]{margin-bottom:2rem}.info-item[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden}.info-item-media[_ngcontent-%COMP%]{overflow:hidden;position:relative}.info-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:160px;-o-object-fit:cover;object-fit:cover;transition:.2s ease-in-out;position:static}.info-item-media[_ngcontent-%COMP%]   .blue-mask[_ngcontent-%COMP%]{position:absolute;background-color:#28256098;height:100%;width:100%;top:0}.info-item-media[_ngcontent-%COMP%]   .blue-mask[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:transparent;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;max-width:100%;max-height:100%;overflow:auto;display:flex;flex-direction:column}.info-item-media[_ngcontent-%COMP%]   .blue-mask[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]   .fa-image[_ngcontent-%COMP%], .info-item-media[_ngcontent-%COMP%]   .blue-mask[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]   .fa-youtube[_ngcontent-%COMP%]{font-size:50px;color:#01a79b}.info-item-media[_ngcontent-%COMP%]:hover   .blue-mask[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]   .fa-image[_ngcontent-%COMP%], .info-item-media[_ngcontent-%COMP%]:hover   .blue-mask[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]   .fa-youtube[_ngcontent-%COMP%]{color:#fff}.info-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-transform:scale(1.1);transform:scale(1.1)}.info-item[_ngcontent-%COMP%]   .info-item-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0!important;font-weight:600}.full-details[_ngcontent-%COMP%]{position:fixed;display:none;background-color:#282560e3;z-index:1200;width:100%;top:0;left:0;bottom:0;right:0;overflow:scroll}.full-details[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{position:absolute;top:15%;left:0;right:0;margin:0 auto;width:50vw;color:#fff}.full-details[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .full-text[_ngcontent-%COMP%]{margin-top:2rem}.full-details[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .full-media[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .full-details[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .full-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:350px}.full-details[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{position:absolute;right:200px;top:77px;padding:1px 12px;background-color:#01a79b;color:#282560;cursor:pointer;font-size:25px;font-weight:600}"]],data:{}});function h(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["alt","image"],["class","fit-cover"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null))],null,function(l,n){var u=n.component;l(n,0,0,null==u.selectedInfo.better_featured_image?null:u.selectedInfo.better_featured_image.source_url)})}function _(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"iframe",[["allow","autoplay; encrypted-media"],["allowfullscreen",""],["frameborder","0"]],[[8,"src",5]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,0,0,u.videoURL(u.selectedInfo.acf.link))})}function O(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,11,"div",[["class","info-wrapper"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.rb(3,0,null,null,8,"div",[["class","info-details"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,4,"div",[["class","full-media"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.qb(6,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,_)),t.qb(8,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(9,0,null,null,2,"div",[["class","full-text"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(11,null,[" ",""]))],function(l,n){var u=n.component;l(n,6,0,"image"===u.selectedInfo.acf.attachment_type),l(n,8,0,"video"===u.selectedInfo.acf.attachment_type)},function(l,n){var u=n.component;l(n,2,0,u.selectedInfo.title.rendered),l(n,11,0,u.selectedInfo.content.rendered)})}function I(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null))],null,null)}function C(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fas fa-image"]],null,null,null,null,null))],null,null)}function y(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","info-item-brief"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.getBrief(n.parent.parent.context.$implicit.content.rendered))})}function x(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","info-card col-lg-4 col-md-4 col-sm-6 col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","info-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showInfo(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["class","info-item-media"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"img",[["alt","media item"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null)),(l()(),t.rb(4,0,null,null,5,"div",[["class","blue-mask"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,4,"div",[["class","media-icon"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.qb(7,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,C)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,2,"div",[["class","info-item-title"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,y)),t.qb(14,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,"video"===n.parent.context.$implicit.acf.attachment_type),l(n,9,0,"image"===n.parent.context.$implicit.acf.attachment_type),l(n,14,0,n.parent.context.$implicit.content)},function(l,n){l(n,3,0,null==n.parent.context.$implicit.better_featured_image?null:n.parent.context.$implicit.better_featured_image.source_url),l(n,12,0,n.parent.context.$implicit.title.rendered)})}function M(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(2,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(0,null,null,0))],function(l,n){l(n,2,0,"guidlines"===n.context.$implicit.acf.info_type)},null)}function P(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","section-details"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,M)),t.qb(3,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.accessInfo)},null)}function w(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null))],null,null)}function j(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fas fa-image"]],null,null,null,null,null))],null,null)}function k(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","info-item-brief"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.getBrief(n.parent.parent.context.$implicit.content.rendered))})}function $(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","info-card col-lg-4 col-md-4 col-sm-6 col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","info-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showInfo(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["class","info-item-media"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"img",[["alt","media item"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null)),(l()(),t.rb(4,0,null,null,5,"div",[["class","blue-mask"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,4,"div",[["class","media-icon"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,w)),t.qb(7,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,j)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,2,"div",[["class","info-item-title"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(14,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,"video"===n.parent.context.$implicit.acf.attachment_type),l(n,9,0,"image"===n.parent.context.$implicit.acf.attachment_type),l(n,14,0,n.parent.context.$implicit.content)},function(l,n){l(n,3,0,null==n.parent.context.$implicit.better_featured_image?null:n.parent.context.$implicit.better_featured_image.source_url),l(n,12,0,n.parent.context.$implicit.title.rendered)})}function L(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,$)),t.qb(2,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(0,null,null,0))],function(l,n){l(n,2,0,"statistics"===n.context.$implicit.acf.info_type)},null)}function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","section-details"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,L)),t.qb(3,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.accessInfo)},null)}function K(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null))],null,null)}function z(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fas fa-image"]],null,null,null,null,null))],null,null)}function S(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","info-item-brief"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.getBrief(n.parent.parent.context.$implicit.content.rendered))})}function E(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","info-card col-lg-4 col-md-4 col-sm-6 col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","info-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showInfo(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["class","info-item-media"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"img",[["alt","media item"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null)),(l()(),t.rb(4,0,null,null,5,"div",[["class","blue-mask"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,4,"div",[["class","media-icon"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,K)),t.qb(7,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,z)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,2,"div",[["class","info-item-title"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,S)),t.qb(14,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,"video"===n.parent.context.$implicit.acf.attachment_type),l(n,9,0,"image"===n.parent.context.$implicit.acf.attachment_type),l(n,14,0,n.parent.context.$implicit.content)},function(l,n){l(n,3,0,null==n.parent.context.$implicit.better_featured_image?null:n.parent.context.$implicit.better_featured_image.source_url),l(n,12,0,n.parent.context.$implicit.title.rendered)})}function T(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,E)),t.qb(2,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(0,null,null,0))],function(l,n){l(n,2,0,"national_identity"===n.context.$implicit.acf.info_type)},null)}function A(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","section-details"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,T)),t.qb(3,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.accessInfo)},null)}function B(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null))],null,null)}function F(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fas fa-image"]],null,null,null,null,null))],null,null)}function N(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","info-item-brief"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.getBrief(n.parent.parent.context.$implicit.content.rendered))})}function J(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","info-card col-lg-4 col-md-4 col-sm-6 col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","info-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showInfo(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["class","info-item-media"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"img",[["alt","media item"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null)),(l()(),t.rb(4,0,null,null,5,"div",[["class","blue-mask"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,4,"div",[["class","media-icon"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,B)),t.qb(7,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,F)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,2,"div",[["class","info-item-title"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,N)),t.qb(14,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,"video"===n.parent.context.$implicit.acf.attachment_type),l(n,9,0,"image"===n.parent.context.$implicit.acf.attachment_type),l(n,14,0,n.parent.context.$implicit.content)},function(l,n){l(n,3,0,null==n.parent.context.$implicit.better_featured_image?null:n.parent.context.$implicit.better_featured_image.source_url),l(n,12,0,n.parent.context.$implicit.title.rendered)})}function R(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,J)),t.qb(2,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(0,null,null,0))],function(l,n){l(n,2,0,"regulations"===n.context.$implicit.acf.info_type)},null)}function X(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","section-details"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,R)),t.qb(3,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.accessInfo)},null)}function Q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fab fa-youtube"]],null,null,null,null,null))],null,null)}function U(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"i",[["class","fas fa-image"]],null,null,null,null,null))],null,null)}function V(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","info-item-brief"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.getBrief(n.parent.parent.context.$implicit.content.rendered))})}function D(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","info-card col-lg-4 col-md-4 col-sm-6 col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","info-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showInfo(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["class","info-item-media"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"img",[["alt","media item"]],[[8,"src",4]],[[null,"error"]],function(l,n,u){var t=!0;return"error"===n&&(t=!1!==l.component.imageError(u.target)&&t),t},null,null)),(l()(),t.rb(4,0,null,null,5,"div",[["class","blue-mask"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,4,"div",[["class","media-icon"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,Q)),t.qb(7,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,U)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,2,"div",[["class","info-item-title"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,V)),t.qb(14,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,"video"===n.parent.context.$implicit.acf.attachment_type),l(n,9,0,"image"===n.parent.context.$implicit.acf.attachment_type),l(n,14,0,n.parent.context.$implicit.content)},function(l,n){l(n,3,0,null==n.parent.context.$implicit.better_featured_image?null:n.parent.context.$implicit.better_featured_image.source_url),l(n,12,0,n.parent.context.$implicit.title.rendered)})}function Y(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,D)),t.qb(2,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(0,null,null,0))],function(l,n){l(n,2,0,"policies"===n.context.$implicit.acf.info_type)},null)}function Z(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","section-details"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,Y)),t.qb(3,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.accessInfo)},null)}function G(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,37,"div",[["id","ai-sections"],["scrollSpy",""]],null,[[null,"sectionChange"],[null,"scroll"]],function(l,n,u){var e=!0,i=l.component;return"scroll"===n&&(e=!1!==t.Ab(l,1).onScroll(u)&&e),"sectionChange"===n&&(e=!1!==i.onSectionChange(u)&&e),"scroll"===n&&(e=!1!==i.getScroll(u.target)&&e),e},null,null)),t.qb(1,16384,null,0,a,[t.k],{spiedTags:[0,"spiedTags"]},{sectionChange:"sectionChange"}),t.Bb(2,1),(l()(),t.rb(3,0,null,null,6,"div",[["id","guidelines"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,3,"div",[["class","section-title active-section"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,2,"h4",[["class","info-section "]],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.gb(16777216,null,null,1,null,P)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,6,"div",[["id","statistics"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,3,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,2,"h4",[["class","info-section "]],null,null,null,null,null)),(l()(),t.Ib(13,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(16,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(17,0,null,null,6,"div",[["id","national_identity"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,3,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,2,"h4",[["class","info-section "]],null,null,null,null,null)),(l()(),t.Ib(20,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.gb(16777216,null,null,1,null,A)),t.qb(23,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(24,0,null,null,6,"div",[["id","regulations"]],null,null,null,null,null)),(l()(),t.rb(25,0,null,null,3,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),t.rb(26,0,null,null,2,"h4",[["class","info-section "]],null,null,null,null,null)),(l()(),t.Ib(27,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.gb(16777216,null,null,1,null,X)),t.qb(30,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(31,0,null,null,6,"div",[["id","policies"]],null,null,null,null,null)),(l()(),t.rb(32,0,null,null,3,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),t.rb(33,0,null,null,2,"h4",[["class","info-section "]],null,null,null,null,null)),(l()(),t.Ib(34,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.gb(16777216,null,null,1,null,Z)),t.qb(37,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,t=l(n,2,0,"DIV");l(n,1,0,t),l(n,9,0,u.sectionExist("guidlines")),l(n,16,0,u.sectionExist("statistics")),l(n,23,0,u.sectionExist("national_identity")),l(n,30,0,u.sectionExist("regulations")),l(n,37,0,u.sectionExist("policies"))},function(l,n){l(n,6,0,t.Jb(n,6,0,t.Ab(n,7).transform("label.guidelines"))),l(n,13,0,t.Jb(n,13,0,t.Ab(n,14).transform("submenu.statistics"))),l(n,20,0,t.Jb(n,20,0,t.Ab(n,21).transform("submenu.nid"))),l(n,27,0,t.Jb(n,27,0,t.Ab(n,28).transform("label.regulations"))),l(n,34,0,t.Jb(n,34,0,t.Ab(n,35).transform("btn.policies")))})}function H(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,41,"div",[["class","custom-container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,4,"div",[["class","full-details content-justify"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,O)),t.qb(3,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(4,0,null,null,1,"div",[["class","close-btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.hideFullInfo()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" X "])),(l()(),t.rb(6,0,null,null,35,"div",[["class","main-wrapper"]],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,28,"nav",[["class","sidebar-nav"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,27,"div",[["class","sidebar"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,26,"div",[["class","sidebar-menu"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,25,"ul",[],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,4,"li",[["class","ai-type active-type"]],[[2,"active-type",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollTo("guidelines",u.target)&&t),t},null,null)),(l()(),t.rb(12,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(14,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.rb(16,0,null,null,4,"li",[["class","ai-type"]],[[2,"active-type",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollTo("statistics",u.target)&&t),t},null,null)),(l()(),t.rb(17,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(19,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.rb(21,0,null,null,4,"li",[["class","ai-type"]],[[2,"active-type",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollTo("national_identity",u.target)&&t),t},null,null)),(l()(),t.rb(22,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(23,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(24,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.rb(26,0,null,null,4,"li",[["class","ai-type"]],[[2,"active-type",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollTo("regulations",u.target)&&t),t},null,null)),(l()(),t.rb(27,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(29,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.rb(31,0,null,null,4,"li",[["class","ai-type"]],[[2,"active-type",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollTo("policies",u.target)&&t),t},null,null)),(l()(),t.rb(32,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(33,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(34,null,["",""])),t.Cb(131072,s.i,[s.j,t.h]),(l()(),t.rb(36,0,null,null,2,"div",[["class","sidebar-toggler"]],null,null,null,null,null)),(l()(),t.rb(37,0,null,null,1,"div",[["class","t-btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleNavbar()&&t),t},null,null)),(l()(),t.rb(38,0,null,null,0,"i",[["class","fas fa-chevron-right"]],null,null,null,null,null)),(l()(),t.rb(39,0,null,null,2,"div",[["class","contents"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,G)),t.qb(41,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.selectedInfo),l(n,41,0,u.accessInfo)},function(l,n){var u=n.component;l(n,11,0,"guidelines"==u.currentSection||null==u.currentSection),l(n,14,0,t.Jb(n,14,0,t.Ab(n,15).transform("label.guidelines"))),l(n,16,0,"statistics"==u.currentSection),l(n,19,0,t.Jb(n,19,0,t.Ab(n,20).transform("submenu.statistics"))),l(n,21,0,"national_identity"==u.currentSection),l(n,24,0,t.Jb(n,24,0,t.Ab(n,25).transform("submenu.nid"))),l(n,26,0,"regulations"==u.currentSection),l(n,29,0,t.Jb(n,29,0,t.Ab(n,30).transform("label.regulations"))),l(n,31,0,"policies"==u.currentSection),l(n,34,0,t.Jb(n,34,0,t.Ab(n,35).transform("btn.policies")))})}function W(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-access-home",[],null,null,null,H,v)),t.qb(1,114688,null,0,d,[m,p.b],null,null)],function(l,n){l(n,1,0)},null)}var ll=t.nb("app-access-home",d,W,{},{},[]),nl=u("ZYCi"),ul=function(){return function(){}}();u.d(n,"AccessModuleNgFactory",function(){return tl});var tl=t.ob(o,[],function(l){return t.yb([t.zb(512,t.j,t.bb,[[8,[c.a,ll]],[3,t.j],t.x]),t.zb(4608,r.l,r.k,[t.u,[2,r.u]]),t.zb(4608,g.i,g.o,[r.d,t.B,g.m]),t.zb(4608,g.p,g.p,[g.i,g.n]),t.zb(5120,g.a,function(l){return[l]},[g.p]),t.zb(4608,g.l,g.l,[]),t.zb(6144,g.j,null,[g.l]),t.zb(4608,g.h,g.h,[g.j]),t.zb(6144,g.b,null,[g.h]),t.zb(4608,g.f,g.k,[g.b,t.q]),t.zb(4608,g.c,g.c,[g.f]),t.zb(5120,s.f,i,[g.c]),t.zb(4608,s.c,s.e,[]),t.zb(4608,s.h,s.d,[]),t.zb(4608,s.b,s.a,[]),t.zb(4608,s.j,s.j,[s.k,s.f,s.c,s.h,s.b,s.l,s.m]),t.zb(1073742336,r.c,r.c,[]),t.zb(1073742336,nl.o,nl.o,[[2,nl.t],[2,nl.l]]),t.zb(1073742336,ul,ul,[]),t.zb(1073742336,g.e,g.e,[]),t.zb(1073742336,g.d,g.d,[]),t.zb(1073742336,s.g,s.g,[]),t.zb(1073742336,o,o,[]),t.zb(1024,nl.j,function(){return[[{path:"",component:d}]]},[]),t.zb(256,g.m,"XSRF-TOKEN",[]),t.zb(256,g.n,"X-XSRF-TOKEN",[]),t.zb(256,s.m,void 0,[]),t.zb(256,s.l,void 0,[])])})}}]);