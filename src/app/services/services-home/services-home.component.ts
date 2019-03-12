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
  menus = [];
  serviceName = 'statistics';

  commingMenus = [
    {
      mName: 'depOne',
      subMenus: [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    },
    {
      mName: 'depTwo',
      subMenus: [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    },
    {
      mName: 'depThree',
      subMenus: [
        'sub menu one',
        'sub menu two',
        'sub menu three'
      ]
    },
    {
      mName: 'depFour',
      subMenus: []
    }
  ];

  contents = {
    name: 'statistics',
    deputy: 'ahmad ilyas',
    image: '../../../assets/images/happy-dace.jpg',
    details: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam eius unde rerum, optio quas commodi
    esse, numquam consectetur nam obcaecati neque, ipsa quasi labore tenetur maxime odio tempore! A magnam
    dolor reprehenderit error iure. Sed dolores vel, vitae ullam sint rerum tempora odit quidem ratione eius?
    Nihil molestiae sint sapiente ea vitae delectus totam voluptas dolor veniam, neque iure doloribus
    voluptatem laborum! Inventore cumque eius, voluptatem mollitia magni quis error perspiciatis quaerat rerum,
    impedit nobis. Asperiores, obcaecati minus! Illo cupiditate enim quaerat perspiciatis aliquam deserunt
    repellendus quibusdam molestias qui.
    <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam eius unde rerum, optio quas commodi
    esse, numquam consectetur nam obcaecati neque, ipsa quasi labore tenetur maxime odio tempore! A magnam
    dolor reprehenderit error iure. Sed dolores vel, vitae ullam sint rerum tempora odit quidem ratione eius?
    Nihil molestiae sint sapiente ea vitae delectus totam voluptas dolor veniam, neque iure doloribus
    voluptatem laborum! Inventore cumque eius, voluptatem mollitia magni quis error perspiciatis quaerat rerum,
    impedit nobis. Asperiores, obcaecati minus! Illo cupiditate enim quaerat perspiciatis aliquam deserunt
    repellendus quibusdam molestias qui.`
  };


  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const that = this;
    window.onresize = this.windowResize;

    this.menus = this.commingMenus;


  }

  activeMenu(menuItem) {
    const that = this;
    $('.menu-item').removeClass('active-item');
    $(menuItem).closest('.menu-item').addClass('active-item');

    if ($(menuItem).closest('.menu-item').hasClass('sidebar-title')) {
      console.log('moinat');
    } else {
      const name = $(menuItem).closest('.menu-item').attr('id');
      that.contents.name += '/ ' + name;
    }
  }


  windowResize() {
    const wd = window.innerWidth;

    // run this code only for service component
    if (location.pathname.toString().split('/').includes('services')) {

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

    // reset the menu highlights
    this.activeMenu($('.sidebar-title'));


    // collapse all menus


    switch (id) {
      case 'isd':
        this.contents.name = 'information systems development';
        this.serviceName = 'information systems development';
        break;
      case 'stats':
        this.contents.name = 'statistics';
        this.serviceName = 'statistics';
        break;
      case 'gis':
        this.contents.name = 'Geographical Information Systems';
        this.serviceName = 'Geographical Information Systems';
        break;
      case 'accra':
        this.contents.name = 'National Identity';
        this.serviceName = 'National Identity';
        break;
    }
  }

}
