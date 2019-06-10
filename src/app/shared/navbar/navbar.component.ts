import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import mapboxgl from 'mapbox-gl';

import { DataService } from '../../data.service';
import { quickLinks } from '../quickLinks';

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
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: mapboxgl.Map;
  sText;
  searchPostsResult = [];
  linksArray = [];
  categories;
  tags;
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

  quickLinks = quickLinks;
  linkTitle = 'engTitle';

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

    //console.log('QuickLinks : ', this.quickLinks);


    mapboxgl.accessToken = mapToken;
    window.onload = this.showActiveTab;

    this.getSearchResults();

    // fetch all categories for search purpose
    this.getCategoriesInfo();
    this.getTags();

    this.navbar = document.getElementById('navbar');
    this.searchWrapper = document.getElementById('search-result-wrapper');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        $('.nav-item').removeClass('active');

        currentRoute = this.router.url.toString();
        // console.log('current route: ', currentRoute);
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
      //console.log('I am clicked');
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
    // console.log('I am clicked');

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
        this.linkTitle = 'engTitle';
        $('body').addClass('rtl');
        this.dataService.sliderDirection = 'rtl_slider';
        if (event.lang === 'ps') {
          this.linkTitle = 'psTitle';
        } else {
          this.linkTitle = 'faTitle';
        }
      } else {
        $('body').removeClass('rtl');
        this.linkTitle = 'engTitle';
        this.dataService.sliderDirection = 'ltr_slider';
      }
      $('#lang-change').val(event.lang);
      $('#lang-change2').val(event.lang);
      // console.log('the path is :', location.pathname);
      const pt = location.pathname;

      this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
        this.router.navigate([pt]));
    });
  }

  useLanguage(language) {
    //console.log(language.id);

    if ($(language).is(':visible')) {
      this.translate.use(language.value);
      this.hideSearchResults();
    }
  }

  updateServiceType(sType) {
    this.dataService.serviceType = sType;
    sessionStorage.setItem('serviceType', sType);
    sessionStorage.removeItem('sub-menu.type');
    sessionStorage.removeItem('sub-menu.id');
    sessionStorage.removeItem('department');
    this.dataService.callServiceCmpMethod();
  }

  getTags() {
    const customParams = [];
    customParams.push('id');
    customParams.push('name');

    this.searchService.getTags(customParams).subscribe((data) => {
      this.tags = data;
      // console.log('tags: ', this.tags);
    });
  }

  getCategoriesInfo() {
    const customParams = [];
    customParams.push('id');
    customParams.push('name');
    this.searchService.getCategories(customParams).subscribe((data) => {
      if (data) {
        //console.log('categories: ', data);
        this.categories = data;
      }
    });
  }

  getCategoryName(catId) {
    const name = this.categories.filter(cat => cat.id === catId);
    return name[0].name;
  }

  getTagName(tagId) {
    const name = this.tags.filter(cat => cat.id === tagId);
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

  showSearchResults(e, val) {

    //console.log(e);
    if (!$('.search-result-wrapper').hasClass('show')) {
      $('.search-result-wrapper').addClass('show');
    }
    this.searchPattern = val;

    if (val.length > 2) {
      // this.getSearchResults(val);
      this.searchTerm.next(val);
    }

    if (val.length < 1 || e.key === 'Escape') {
      this.hideSearchResults();
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
    // console.log(link);

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
      // console.log('focused element', $(el).html());
    });

    console.log('parent: ', $(el).parents('#search-result-wrapper').length);

    if ($(el).parents('#search-result-wrapper').length < 1) {
      $('.search-result-wrapper').removeClass('show');
    }
  }

  groupSearchResults(data) {

    for (const dt of data) {
      //  console.log('Post Category', this.getCategoryName(dt.categories[0]));
      const catType = this.getCategoryName(dt.categories[0]);
      const ct = catType.split('_');
      const c = ct[ct.length - 1];
      // console.log('category type: ', c);
      switch (c.toLowerCase()) {
        case 'biography':
          this.searchCategories.biographies.push(dt);
          break;
        case 'services':
        case 'slider':
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

    // console.log('categorized data: ', this.searchCategories);
    this.boldMatchedText();
  }

  boldMatchedText() {


    // tslint:disable-next-line: forin
    for (const item in this.searchCategories) {
      //  console.log('Type of Item : ', typeof item);
      const catArray = this.searchCategories[item];
      for (const cat of catArray) {
        if (cat.hasOwnProperty('title')) {
          // first find all the matches
          const matches = cat.title.rendered.match(new RegExp(this.searchPattern, 'gi'));
          //   console.log('Matches are: ', matches);
          if (matches) {
            for (const mt of matches) {
              const str = cat.title.rendered.replace(mt, `<b class="text-green">${mt}</b>`);
              cat.title.rendered = str;
            }
          }

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
    customParams.push('tags');
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
        //  console.log('search results first: ', this.searchPostsResult);

        /**
         * This is to check if the @searchPattern is matching any category name
         */
        const matchedCategories = this.matchCategoryNames(this.searchPattern);
        //  console.log('matched categories: ', matchedCategories);


        if (matchedCategories.length > 0) {
          this.searchService.getCategoriesData(matchedCategories, customParams).subscribe((catData) => {
            if (catData) {

              //  console.log('category dataa: ', catData);

              catData.map((d) => {
                if ((this.searchPostsResult.filter(sr => d.id === sr.id)).length < 1) {
                  this.searchPostsResult.push(d);
                } else {
                  //     console.log('ID matched');
                }
              });

              // this.searchPostsResult.concat(catData);
              //  console.log('search results amended: ', this.searchPostsResult);
              this.groupSearchResults(this.searchPostsResult);
            }
          });
        } else {
          // console.log('search results: ', this.searchPostsResult);
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
      // console.log('pattern result: ', tempLinksArray);
      if (tempLinksArray) {
        tempLinksArray.map((vl) => {
          vl = vl.replace('">', '" target="_blank">');
          // this.linksArray.push(vl);
          this.searchCategories.attachments.push(vl);
        });

        // console.log('links result: ', tempLinksArray);
      }

    }


    //  console.log('the final links array is: ', this.linksArray);

  }



  showServiceDetails(service) {
    const serviceType = this.getCategoryName(service.categories[0]);
    let serviceShortName = serviceType.split('_')[0].toLowerCase();
    if (serviceType.toLowerCase().includes('stat')) {
      serviceShortName = 'stats';
    }
    const depType = `${serviceShortName}_department`;

    // console.log('service type: ', serviceType);
    // console.log('service short: ', serviceShortName);
    if (serviceType.toLowerCase().includes('service')) {

      const tagName = this.getTagName(service.tags[0]).toLowerCase();

      if (tagName !== 'service') {
        if (tagName === 'headship') {
          const customParams = [];
          customParams.push('id');
          customParams.push('acf');
          const departmentName = service.acf[depType];
          let depId;
          //   console.log('department: ', departmentName);
          // first check if department is already fetched as well
          depId = this.getAvailableDepartmentID(depType, departmentName, service.id, service.tags[0]);

          if (depId) {
            // console.log('available locally', depId);
            sessionStorage.setItem('serviceType', serviceShortName);
            sessionStorage.setItem('department', `id${depId}`);
            sessionStorage.setItem('sub-menu.type', 'headship');
            sessionStorage.setItem('sub-menu.id', service.id);

            this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
              this.router.navigate(['/services']));

          } else {

            this.searchService.getRelatedDepartmentId(serviceType, 'department', customParams).subscribe((data) => {
              //   console.log('related department: ', data);
              for (const dp of data) {
                if (dp.acf[depType] === departmentName) {
                  depId = `id${dp.id}`;
                  //   console.log('Matched');
                  break;
                }
              }
              sessionStorage.setItem('serviceType', serviceShortName);
              sessionStorage.setItem('department', depId);
              sessionStorage.setItem('sub-menu.type', 'headship');
              sessionStorage.setItem('sub-menu.id', service.id);

              this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
                this.router.navigate(['/services']));
            });
          }

        } else {
          sessionStorage.setItem('serviceType', serviceShortName);
          sessionStorage.setItem('department', `id${service.id}`);
          sessionStorage.setItem('sub-menu.type', 'department');
          sessionStorage.setItem('sub-menu.id', service.id);

          this.router.navigateByUrl('/qw', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/services']));
        }
      }
    } else {
      this.serviceDetails = service.content.rendered;
      $('#serviceModal').modal('show');
    }
  }

  getAvailableDepartmentID(depType, depName, sID, tag) {
    for (const sr of this.searchCategories.services) {
      if (sr.acf[depType] === depName && sr.id !== sID && sr.tags[0] !== tag) {
        //  console.log('matched id is : ', sr.acf[depType]);
        //  console.log(depName);
        //  console.log('id is ', sr.id);
        return sr.id;
      }
    }

    return false;
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
