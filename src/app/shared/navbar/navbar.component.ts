import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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

    this.navbar = document.getElementById('navbar');

    const url = location.pathname.split('/')[1];
// tslint:disable-next-line: triple-equals
    if (url == 'home') {
      $('#home').addClass('active');
    }

    $('[routerLink=' + url + ']').closest('.nav-item').addClass('active');

    this.langeuageChangeListener();
    this.activeLink();

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

  activeLink() {

    $('a').click(function() {
      $('.nav-item').removeClass('active');
      $(this).closest('.nav-item').addClass('active');
      $(this).attr('aria-expanded', 'false');
      setTimeout(() => {
        $(this).closest('.nav-item').find('.dropdown-menu').removeClass('show');
      });
      console.log('done');
    });

    $('.navbar-toggler').trigger('click');
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
