import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import mapboxgl from 'mapbox-gl';

import { DataService } from '../../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  navbar: any;
  @ViewChild('map') mapElement: ElementRef;
  map: mapboxgl.Map;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private dataService: DataService,
  ) {

    // translate.setDefaultLang('en');
    // this.langeuageChangeListener();

  }

  dummyLinksOne = [
    'somelink',
    'jhon doe',
    'sabrina',
    'somegood book',
    'wait what?',
    'سیبیسببی',
    'سیبسیبسب',
    'نتنتتن',
    'صضصصثضصث',
    'سېېزرېز',
    '۱۲۳۴سیبسی',
    '123dfsdf'
  ];

  dummyLinksTwo = [
    'service',
    'tools',
    '.pdf',
    'some thing',
    'of course'
  ];




  ngOnInit() {
    const that = this;
    let currentRoute = '';
    $(window).resize(() => {
      this.map.resize();
    });
    const mapToken = 'pk.eyJ1IjoibWlyd2Fpc2FrcmFtaSIsImEiOiJjanR3bGZwaWswcTdrNDRwbHdzZjR4bGMwIn0.kN5s8PNjviEhk50vK3pHuA';

    mapboxgl.accessToken = mapToken;
    window.onload = this.showActiveTab;

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
          $('[routerLink="/' + url + '"]').closest('.nav-item').addClass('active');
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

    $('#mapModal').on('shown.bs.modal', () => {
      this.map.resize();
    });


    /**
     * Detecte language change on reload
     */
    $('#lang-change').val(this.dataService.language);
  }

  createMap() {

    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15.27,
      center: [69.1575, 34.4992]
    });

  }

  ngAfterViewInit() {

    this.createMap();

    this.map.on('load', () => {
      /* Image: An image is loaded and added to the map. */
      this.map.loadImage('https://i.imgur.com/MK4NUzI.png', (error, image) => {
        if (error) { throw error; }
        this.map.addImage('custom-marker', image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        this.map.addLayer({
          id: 'markers',
          type: 'symbol',
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: [69.1579, 34.4985]
                  }
                }
              ]
            }
          },
          layout: {
            'icon-image': 'custom-marker',
          }
        });
      });
    });



  }

  toggleRespNav() {
    $('#responsive-nav').toggleClass('r-show');
    console.log('I am clicked');

  }

  showActiveTab() {
    let currentRoute = '';
    $('.nav-item').removeClass('active');

    currentRoute = location.pathname.toString();
    if (currentRoute === '/home') {
      $('#home').addClass('active');
    } else {
      const url = currentRoute.split('/')[1];
      $('[routerLink="/' + url + '"]').closest('.nav-item').addClass('active');
    }
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
    localStorage.setItem('serviceType', sType);
    this.dataService.callServiceCmpMethod();
  }

  showSearchResult() {
    $('.search-result-wrapper').toggleClass('show');
  }

  getSearchResults(val) {
    console.log('This is the search query: ', val);
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
