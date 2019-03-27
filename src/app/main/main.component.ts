import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
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
export class MainComponent implements OnInit {

  title = 'NSIA';
  currentPath;

  constructor(private router: Router, private dataService: DataService, private translateService: TranslateService) { }

  ngOnInit() {
    const that = this;

    this.checkDefaultLanguage();

    // If the page is refreshed then this is called
    this.createNavigationBreadPath();


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
      }
    });
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

  checkDefaultLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.dataService.language = lang;
      this.translateService.use(lang);

      this.router.navigate([location.pathname]);
      // // this.dataService.callNavbarCmpMethod();
      // if (lang !== 'en') {
      //   $('body').addClass('rtl');
      // }
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

}
