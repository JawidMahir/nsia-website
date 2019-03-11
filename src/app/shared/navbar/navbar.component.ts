import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

import { DataService } from '../../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private dataService: DataService
  ) {

    translate.setDefaultLang('en');
    this.langeuageChangeListener();

  }


  ngOnInit() {
    const that = this;
    let currentRoute = '';

    this.navbar = document.getElementById('navbar');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        $('.nav-item').removeClass('active');

        currentRoute = this.router.url.toString();
        console.log('current route: ', currentRoute);
        if (currentRoute === '/home') {
          $('#home').addClass('active');
        } else {
          const url = currentRoute.split('/')[1];
          $('[routerLink=' + url + ']').closest('.nav-item').addClass('active');
        }
      }
    });


    this.langeuageChangeListener();

    const sticky = this.navbar.offsetTop;
    window.onscroll = () => {
      that.makeNavbarSticky(sticky);
    };
  }

  langeuageChangeListener() {

    // When the language changes, refresh the component to fetch the
    // language specific contents
    this.translate.onLangChange.subscribe((event) => {
      console.log(event.lang);
      console.log(location.pathname);
      this.dataService.language = event.lang;
      this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
        this.router.navigate([location.pathname]));
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  makeNavbarSticky(sticky: any): void {

    if (window.pageYOffset >= sticky) {

      this.navbar.classList.add('sticky');
      this.navbar.classList.add('active-bar');
    } else {
      this.navbar.classList.remove('sticky');
      this.navbar.classList.remove('active-bar');
    }
  }

}
