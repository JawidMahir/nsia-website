(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0NaJ":function(l,n,u){"use strict";u.d(n,"a",function(){return a}),u("R7Hv");var a=function(){function l(l){this.dataService=l,this.orgs=[],this.brochures=[],this.posters=[],this.flyers=[],this.booklets=[],this.newsletters=[],this.promoMaterialFlag=!1}return l.prototype.ngOnInit=function(){this.getPromotingMaterial("Promotional_Materials"),this.getNewsMaterial("Newsletter",1)},l.prototype.getNewsMaterial=function(l,n){var u=this,a=[];a.push("id"),a.push("content"),this.dataService.getNewsData(a,l,n).subscribe(function(l){console.log("Newsletter data: ",u.newsletters),l[0]&&(l[0]=u.getAttachments(l[0]),u.newsletters.push(l[0]),console.log("Newsletter data: ",l[0]),u.promoMaterialFlag=!0)})},l.prototype.getAttachments=function(l){var n;return console.log("It has data",l),l.hasOwnProperty("content")&&(n=[],(n=l.content.rendered.match(/\"[A-Za-z0-9_@.\/#&\s>"=\-:]*\"/g))&&(n[0]=n[0].replace(new RegExp('"',"g"),""),console.log("pattern result: ",n[0]),l.attachment=n[0])),l},l.prototype.getPromotingMaterial=function(l){var n=this,u=[];u.push("acf.promotional_materials_attachment.url"),u.push("acf.promotional_materials_type"),this.dataService.getMediaData(u,l).subscribe(function(l){if(console.log("Prmotional materials: ",l),l.length>0)for(var u in n.promoMaterialFlag=!0,l)switch(l[u].acf.promotional_materials_type){case"booklet":n.booklets.push(l[u]);break;case"flyer":n.flyers.push(l[u]);break;case"poster":n.posters.push(l[u]);break;case"brochure":n.brochures.push(l[u]);break;case"org_pro\ufb01le":n.orgs.push(l[u])}})},l}()},AZar:function(l,n,u){"use strict";var a=u("CcnG"),t=u("A7o+"),o=u("Ip0R");u("0NaJ"),u("R7Hv"),u.d(n,"a",function(){return s}),u.d(n,"b",function(){return d});var s=a.nb({encapsulation:0,styles:[[""]],data:{}});function e(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Org Profile.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Org Profile"]))],null,function(l,n){var u=n.component;l(n,6,0,a.rb(1,"",null==u.orgs[0]?null:null==u.orgs[0].acf?null:u.orgs[0].acf.promotional_materials_attachment.url,"")),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function r(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Brochure.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Brochure"]))],null,function(l,n){var u=n.component;l(n,6,0,a.rb(1,"",null==u.brochures[0]?null:null==u.brochures[0].acf?null:u.brochures[0].acf.promotional_materials_attachment.url,"")),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function p(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Poster.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Poster"]))],null,function(l,n){var u=n.component;l(n,6,0,a.rb(1,"",null==u.posters[0]?null:null==u.posters[0].acf?null:u.posters[0].acf.promotional_materials_attachment.url,"")),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function i(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Flyer.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Flyer"]))],null,function(l,n){var u=n.component;l(n,6,0,a.rb(1,"",null==u.flyers[0]?null:null==u.flyers[0].acf?null:u.flyers[0].acf.promotional_materials_attachment.url,"")),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function c(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Booklet.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Booklet"]))],null,function(l,n){var u=n.component;l(n,6,0,a.rb(1,"",null==u.booklets[0]?null:null==u.booklets[0].acf?null:u.booklets[0].acf.promotional_materials_attachment.url,"")),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function b(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,11,"div",[["class","col-lg-6 col-md-6 col-sm-12 material-wrapper"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,8,"div",[["class","p-material"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,1,"div",[["class","promo-image"]],null,null,null,null,null)),(l()(),a.pb(3,0,null,null,0,"img",[["alt","promo"],["src","../../../assets/images/promo.png"]],null,null,null,null,null)),(l()(),a.pb(4,0,null,null,5,"div",[["class","download-promo"]],null,null,null,null,null)),(l()(),a.pb(5,0,null,null,0,"img",[["alt","pdf"],["src","../../../assets/images/pdf.png"]],null,null,null,null,null)),(l()(),a.pb(6,0,null,null,3,"a",[["download","Newsletter.pdf"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),a.pb(7,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),a.Gb(8,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.pb(10,0,null,null,1,"span",[["class","m-name"]],null,null,null,null,null)),(l()(),a.Gb(-1,null,["Newsletter"]))],null,function(l,n){l(n,6,0,n.component.newsletters[0].attachment),l(n,8,0,a.Hb(n,8,0,a.yb(n,9).transform("btn.download")))})}function m(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,13,"div",[["class","materials"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.gb(16777216,null,null,1,null,e)),a.ob(3,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,r)),a.ob(5,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,p)),a.ob(7,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,i)),a.ob(9,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,c)),a.ob(11,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,b)),a.ob(13,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.orgs.length>0),l(n,5,0,u.brochures.length>0),l(n,7,0,u.posters.length>0),l(n,9,0,u.flyers.length>0),l(n,11,0,u.booklets.length>0),l(n,13,0,u.newsletters.length>0)},null)}function g(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,3,"div",[["class","jumbotron text-center no-data"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),a.Gb(2,null,["",""])),a.Ab(131072,t.i,[t.j,a.h])],null,function(l,n){l(n,2,0,a.Hb(n,2,0,a.yb(n,3).transform("label.no-data")))})}function d(l){return a.Ib(0,[(l()(),a.pb(0,0,null,null,7,"div",[["class","promote-material globalsidebar"]],null,null,null,null,null)),(l()(),a.pb(1,0,null,null,3,"div",[["class","title"]],null,null,null,null,null)),(l()(),a.pb(2,0,null,null,2,"h5",[],null,null,null,null,null)),(l()(),a.Gb(3,null,["",""])),a.Ab(131072,t.i,[t.j,a.h]),(l()(),a.gb(16777216,null,null,1,null,m)),a.ob(6,16384,null,0,o.j,[a.O,a.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),a.gb(0,[["nodata",2]],null,0,null,g))],function(l,n){l(n,6,0,n.component.promoMaterialFlag,a.yb(n,7))},function(l,n){l(n,3,0,a.Hb(n,3,0,a.yb(n,4).transform("label.promoting-material")))})}},SnQK:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var a=u("CcnG"),t=function(){function l(){}return l.prototype.canDeactivate=function(l){return!l.canDeactivate||l.canDeactivate()},l.ngInjectableDef=a.S({factory:function(){return new l},token:l,providedIn:"root"}),l}()}}]);