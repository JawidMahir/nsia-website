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
    private dataService: DataService,
  ) {

    // translate.setDefaultLang('en');
    // this.langeuageChangeListener();

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

    /**
     * Listener for responsive navbar collapse on item click
     */
    $('#responsive-nav li').click(() => {
      that.toggleRespNav();
    });

    $('#responsive-nav p').click(() => {
      that.toggleRespNav();
    });


    this.langeuageChangeListener();

    const sticky = this.navbar.offsetTop;
    window.onscroll = () => {
      that.makeNavbarSticky(sticky);
    };


    /**
     * Detecte language change on reload
     */
    $('#lang-change').val(this.dataService.language);
  }

  toggleRespNav() {
    $('#responsive-nav').toggleClass('r-show');
    console.log('I am clicked');

  }

  langeuageChangeListener() {

    // When the language changes, refresh the component to fetch the
    // language specific contents
    this.translate.onLangChange.subscribe((event) => {
      this.dataService.language = event.lang;
      // Save the language into localstorage for future reference
      localStorage.setItem('lang', event.lang);
      if (event.lang !== 'en') {
        $('body').addClass('rtl');
      } else {
        $('body').removeClass('rtl');
      }
      console.log('the path is :', location.pathname);
      const pt = location.pathname;

      this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
        this.router.navigate([pt]));
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  updateServiceType(sType) {
    this.dataService.serviceType = sType;
    this.dataService.callServiceCmpMethod();
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
