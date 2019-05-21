import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void <=>*', [animate('1s')]),
    ]),

    // state('*', style({ transform: 'translateX(0)', opacity: 1 })),
    // transition('void => *', [
    //   style({ transform: 'translateX(-100%)', opacity: 0 }),
    //   animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
    // ]),
    // transition('* => void',
    //   animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
    //     transform: 'translateX(100%)',
    //     opacity: 0
    //   }))
    // )
    // ])
  ]
})
export class AppComponent implements OnInit {

  title = 'NSIA';
  currentPath;
  chooseLang = true;
  constructor(private router: Router, private dataService: DataService, private translateService: TranslateService) { }

  ngOnInit() {

    const that = this;
    console.log('App Component');

    // tslint:disable-next-line: space-before-function-paren
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        that.createNavigationBreadPath();
        console.log('Navigation ended: ', location.pathname);
        if (location.pathname === '/choose-lang') {
          that.chooseLang = true;
        } else {
          that.chooseLang = false;
        }
      }
    });

    // if (location.pathname === '/') {
    //   this.router.navigate(['choose-lang']);
    // } else {
    //   this.checkDefaultLanguage();
    // }
    this.checkDefaultLanguage();
  }


  checkDefaultLanguage() {
    console.log('detect language called');
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.dataService.language = lang;
      this.translateService.use(lang);
      if (lang !== 'en') {
        $('body').toggleClass('rtl');
      }
      this.chooseLang = false;
      this.router.navigate([this.dataService.redirectPath]);
    } else {
      this.dataService.redirectPath = location.pathname;
      this.chooseLang = true;
      this.router.navigate(['choose-lang']);
    }
  }

  createNavigationBreadPath() {
    this.currentPath = this.router.url.toString().split('/');

    if (this.currentPath.includes('home')) {
      this.currentPath = [];
    }
  }

  getPage(outlet) {
    // tslint:disable-next-line: no-string-literal

    return outlet.activatedRouteData.state;
  }


}
