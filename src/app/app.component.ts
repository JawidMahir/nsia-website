import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import * as $ from 'jquery';

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

  constructor(private router: Router) { }

  ngOnInit() {
    const that = this;
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
    console.log('path:  ', this.currentPath);
  }

  getPage(outlet) {
    // tslint:disable-next-line: no-string-literal

    return outlet.activatedRouteData.state;
  }

}
