import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import mapboxgl from 'mapbox-gl';

import { DataService } from '../../data.service';

import * as $ from 'jquery';
import { SearchService } from '../search.service';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  navbar: any;
  searchWrapper: any;
  @ViewChild('map') mapElement: ElementRef;
  map: mapboxgl.Map;
  sText;
  searchPostsResult = [];
  linksArray = [];
  categories;
  searchTerm = new Subject<string>();
  searchPattern;
  serviceDetails;


  searchCategories = {
    services: [],
    biographies: [],
    news: [],
    jobs: [],
    procurements: [],
    attachments: []
  };

  constructor(
    private translate: TranslateService,
    private router: Router,
    private dataService: DataService,
    private searchService: SearchService
  ) {

    // translate.setDefaultLang('en');
    // this.langeuageChangeListener();

  }

  webLinks = [
    'home',
    'services',
    'about-us',
    'statistics',
    'GIS',
    'access-info',
    'library',
    'media-room',
    'opportunities'
  ];

  quickLinks = [
    {
      title: 'home',
      url: ''
    }, {
      title: 'services',
      url: '/services'
    }, {
      title: 'library',
      url: '/library'
    }, {
      title: 'about us',
      url: '/about-us'
    }, {
      title: 'access to info',
      url: '/access-info'
    }, {
      title: 'Media room',
      url: '/media-room'
    }, {
      title: 'opportunities',
      url: '/opportunities'
    }
    , {
      title: 'Geographical Information Systems',
      slug: 'service gis',
      url: '/services',
      data: {
        flag: 'service',
        value: 'gis'
      }
    }, {
      title: 'Statistics Services',
      slug: 'service stat statistic',
      url: '/services',
      data: {
        flag: 'service',
        value: 'stat'
      }
    }, {
      title: 'Information Systems Development',
      slug: 'service sdu',
      url: '/services',
      data: {
        flag: 'service',
        value: 'sdu'
      }
    }, {
      title: 'National Identity',
      slug: 'service nid tazkira',
      url: '/services',
      data: {
        flag: 'service',
        value: 'nid'
      }
    }, {
      title: 'Books',
      slug: 'library kitab',
      url: '/library',
      data: {
        flag: 'library',
        value: 'books'
      }
    }, {
      title: 'Surveys',
      slug: 'library',
      url: '/library',
      data: {
        flag: 'library',
        value: 'surveys'
      }
    }, {
      title: 'Reports',
      slug: 'library rapor',
      url: '/library',
      data: {
        flag: 'library',
        value: 'reports'
      }
    }, {
      title: 'magazine',
      slug: 'library',
      url: '/library',
      data: {
        flag: 'library',
        value: 'magazines'
      }
    }, {
      title: 'Articles',
      slug: 'library',
      url: '/library',
      data: {
        flag: 'library',
        value: 'articles'
      }
    }, {
      title: 'Newsletter',
      slug: 'library',
      url: '/library',
      data: {
        flag: 'library',
        value: 'newsletters'
      }
    }, {
      title: 'Policies',
      slug: 'library',
      url: '/library',
      data: {
        flag: 'library',
        value: 'policies'
      }
    }
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

    this.getSearchResults();

    // fetch all categories for search purpose
    this.getCategoriesInfo();

    this.navbar = document.getElementById('navbar');
    this.searchWrapper = document.getElementById('search-result-wrapper');

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
     * Collapse the search results on search item clicked
     */
    $('.search-results').on('click', 'li', function () {
      console.log('I am clicked');
      $('.search-result-wrapper').removeClass('show');
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
    $('#lang-change2').val(this.dataService.language);
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
      $('#lang-change').val(event.lang);
      $('#lang-change2').val(event.lang);
      console.log('the path is :', location.pathname);
      const pt = location.pathname;

      this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
        this.router.navigate([pt]));
    });
  }

  useLanguage(language) {
    console.log(language.id);

    if ($(language).is(':visible')) {
      this.translate.use(language.value);
      this.hideSearchResults();
    }
  }

  updateServiceType(sType) {
    this.dataService.serviceType = sType;
    localStorage.setItem('serviceType', sType);
    this.dataService.callServiceCmpMethod();
  }

  getCategoriesInfo() {
    const customParams = [];
    customParams.push('id');
    customParams.push('name');
    this.searchService.getCategories(customParams).subscribe((data) => {
      if (data) {
        console.log('categories: ', data);
        this.categories = data;
      }
    });
  }

  getCategoryName(catId) {
    const name = this.categories.filter(cat => cat.id === catId);
    return name[0].name;
  }

  // hideSearchResult(el) {
  //   console.log('ID is:', el);
  //   if ($('#search-result-wrapper').children(':focus').length === 0) {
  //     $('.search-result-wrapper').removeClass('show');
  //   }
  //   this.sText = '';
  // }

  hideSearchResults() {
    this.sText = '';
    $('.search-result-wrapper').removeClass('show');

    // this.searchCategories.attachments = [];
    // this.searchCategories.biographies = [];
    // this.searchCategories.jobs = [];
    // this.searchCategories.news = [];
    // this.searchCategories.procurements = [];
    // this.searchCategories.services = [];

    // this.searchPostsResult = [];
    // this.searchPattern = '';

  }

  showSearchResults(val) {
    if (!$('.search-result-wrapper').hasClass('show')) {
      $('.search-result-wrapper').addClass('show');
    }
    this.searchPattern = val;

    if (val.length > 2) {
      // this.getSearchResults(val);
      this.searchTerm.next(val);
    }

    if (val.length < 1) {
      $('.search-result-wrapper').removeClass('show');
    }

  }

  showSearchDiv(val) {
    if (val.length > 2) {
      if (!$('.search-result-wrapper').hasClass('show')) {
        $('.search-result-wrapper').addClass('show');
      }
    }
  }

  followLink(link, id) {
    this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
      this.router.navigate([link, id]));
  }

  gotoLink(link) {
    console.log(link);

    if (link.hasOwnProperty('data')) {
      if (link.data.flag === 'service') {
        this.dataService.serviceType = link.data.value;
      }

      if (link.data.flag === 'library') {
        localStorage.setItem('library-type', link.data.value);
      }
    }
    this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
      this.router.navigate([link.url]));
  }

  searchFocusOut() {
    let el;
    $(document).click(function (e) {
      el = e.target;
      console.log('focused element', $(el).html());
    });

    console.log('parent: ', $(el).parents('#search-result-wrapper').length);

    if ($(el).parents('#search-result-wrapper').length < 1) {
      $('.search-result-wrapper').removeClass('show');
    }
  }

  groupSearchResults(data) {

    for (const dt of data) {
      console.log('Post Category', this.getCategoryName(dt.categories[0]));
      const catType = this.getCategoryName(dt.categories[0]);
      const ct = catType.split('_');
      const c = ct[ct.length - 1];
      console.log('category type: ', c);
      switch (c.toLowerCase()) {
        case 'biography':
          this.searchCategories.biographies.push(dt);
          break;
        case 'services':
          this.searchCategories.services.push(dt);
          this.getAttachments(dt);
          break;
        case 'events':
        case 'news':
        case 'press':
        case 'publications':
          this.searchCategories.news.push(dt);
          break;
        case 'job':
          this.searchCategories.jobs.push(dt);
          break;
        case 'tender':
          this.searchCategories.procurements.push(dt);
          break;
        case 'books':
        case 'surveys':
        case 'reports':
        case 'magazine':
        case 'article':
        case 'newsletter':
        case 'policies':
          this.getAttachments(dt);
          break;
      }
    }

    console.log('categorized data: ', this.searchCategories);
    this.boldMatchedText();
  }

  boldMatchedText() {


    // tslint:disable-next-line: forin
    for (const item in this.searchCategories) {
      console.log('Type of Item : ', typeof item);
      const catArray = this.searchCategories[item];
      for (const cat of catArray) {
        if (cat.hasOwnProperty('title')) {
          const str = cat.title.rendered.replace(new RegExp(this.searchPattern, 'gi'), `<b class="text-green">${this.searchPattern}</b>`);
          cat.title.rendered = str;
        }
      }
    }
  }

  getSearchResults() {
    const customParams = [];
    customParams.push('id');
    customParams.push('title');
    customParams.push('content.rendered');
    customParams.push('acf');
    customParams.push('categories');

    this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => {
        return this.searchService.getSearchResults(val, customParams);
      }
      )
    ).subscribe((data) => {

      this.searchCategories.attachments = [];
      this.searchCategories.biographies = [];
      this.searchCategories.jobs = [];
      this.searchCategories.news = [];
      this.searchCategories.procurements = [];
      this.searchCategories.services = [];

      this.searchPostsResult = [];

      if (data) {

        this.searchPostsResult = data;
        console.log('search results first: ', this.searchPostsResult);

        /**
         * This is to check if the @searchPattern is matching any category name
         */
        const matchedCategories = this.matchCategoryNames(this.searchPattern);
        console.log('matched categories: ', matchedCategories);


        if (matchedCategories.length > 0) {
          this.searchService.getCategoriesData(matchedCategories, customParams).subscribe((catData) => {
            if (catData) {

              console.log('category dataa: ', catData);

              catData.map((d) => {
                if ((this.searchPostsResult.filter(sr => d.id === sr.id)).length < 1) {
                  this.searchPostsResult.push(d);
                } else {
                  console.log('ID matched');
                }
              });

              // this.searchPostsResult.concat(catData);
              console.log('search results amended: ', this.searchPostsResult);
              this.groupSearchResults(this.searchPostsResult);
            }
          });
        } else {
          console.log('search results: ', this.searchPostsResult);
          this.groupSearchResults(this.searchPostsResult);
        }

        //  this.getAttachments(data);



      }
    });
  }

  matchCategoryNames(searchPattern) {
    const matchedCatTypes = [];
    for (const ct of this.categories) {
      if (ct.name.toLowerCase().includes(searchPattern)) {
        matchedCatTypes.push(ct.name);
      }
    }

    return matchedCatTypes;
  }

  getAttachments(ps) {
    let tempLinksArray;
    this.linksArray = [];
    const pattern = /<a[A-Za-z0-9_@./#&\s>"=\-:]*<\/a>/g;

    if (ps.hasOwnProperty('content')) {
      tempLinksArray = [];
      tempLinksArray = ps.content.rendered.match(pattern);
      console.log('pattern result: ', tempLinksArray);
      if (tempLinksArray) {
        tempLinksArray.map((vl) => {
          vl = vl.replace('">', '" target="_blank">');
          // this.linksArray.push(vl);
          this.searchCategories.attachments.push(vl);
        });

        console.log('links result: ', tempLinksArray);
      }

    }


    console.log('the final links array is: ', this.linksArray);

  }



  showServiceDetails(service) {
    console.log('service launched');
    this.serviceDetails = service;
    $('#serviceModal').modal('show');
  }

  makeNavbarSticky(sticky: any): void {

    if (window.pageYOffset >= sticky) {

      this.navbar.classList.add('sticky');
      this.searchWrapper.classList.add('sticky');
      this.searchWrapper.classList.add('pd-top');
      this.navbar.classList.add('active-bar');
    } else {
      this.navbar.classList.remove('sticky');
      this.searchWrapper.classList.remove('sticky');
      this.searchWrapper.classList.remove('pd-top');
      this.navbar.classList.remove('active-bar');
    }
  }

}
