import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      )
    ])
  ]
})
export class AboutHomeComponent implements OnInit {

  showNews = true;
  currentRoute;
  aboutNSIA;
  constructor(private router: Router, private aboutUs: AboutUsService) { }

  ngOnInit() {
    this.currentRoute = location.pathname;
    this.toggleNews();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.currentRoute = this.router.url.toString();
        this.toggleNews();
      }
    });
  }

  toggleNews() {
    //console.log('current route: ', this.currentRoute);
    const url = this.currentRoute.split('/');
   // console.log('url length: ', url.length);
   // console.log('url: ', url);
    if (url.length === 2 && url.includes('about-us')) {
     // console.log('sure things');
      this.showNews = false;
    } else if (url.length > 2 && url.includes('about-nsia')) {
      //console.log('sure things');
      this.showNews = false;
    } else {
      //console.log('not so sure');

      this.showNews = true;
    }
  }

  getPage(outlet) {
    // tslint:disable-next-line: no-string-literal

    return outlet.activatedRouteData.state;
  }


}
