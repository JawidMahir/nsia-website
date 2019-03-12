import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  // dummy data for menus
  menus = [
    {
      mName: 'depOne',
      subMenus : [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    },
    {
      mName: 'depTwo',
      subMenus : [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    },
    {
      mName: 'depThree',
      subMenus : [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    }
  ];


  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const that = this;

    window.onresize = this.windowResize;

    // tslint:disable-next-line: space-before-function-paren
    $('.menu-item').click(function () {
      $('.menu-item').removeClass('active-item');
      $(this).closest('.menu-item').addClass('active-item');
      console.log('clicked');
    });

  }


  windowResize() {
    const wd = window.innerWidth;

    // run this code only for service component
    if ( location.pathname.toString().split('/').includes('services')) {

      if (wd < 700) {
        (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '0px';
        (document.getElementsByClassName('contents')[0] as HTMLElement).style.marginLeft = '0px';
        (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '0px';

      } else if (wd > 700 && wd < 800) {
        (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '100px';
        (document.getElementsByClassName('contents')[0] as HTMLElement).style.marginLeft = '100px';
      } else {
        (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '300px';
        (document.getElementsByClassName('contents')[0] as HTMLElement).style.marginLeft = '300px';

      }
    }

  }

  toggleNavbar() {
    const navWidth = (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width;
    console.log('navWidth: ', navWidth);

    if (navWidth === '0px') {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '300px';
      (document.getElementsByClassName('contents')[0] as HTMLElement).style.marginLeft = '300px';
      (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '300px';

    } else {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '0px';
      (document.getElementsByClassName('contents')[0] as HTMLElement).style.marginLeft = '0px';
      (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '0px';
    }

  }

  toggleServices(el) {
    const id = $(el).closest('.m-service').attr('id');
    console.log('service id: ', id);

    $('.m-service').removeClass('active-service');
    $(el).closest('.m-service').addClass('active-service');


    switch (id) {
      case 'isd':
        break;
      case 'stats':
        break;
      case 'gis':
        break;
      case 'accra':
        break;
    }
  }

}
