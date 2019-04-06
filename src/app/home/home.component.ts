import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import 'bootstrap';
import * as $ from 'jquery';

interface Stats {
  title: object;
  acf: object;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x: any;
  title: any;
  contents = {
    contents: null,
    image: {
      url: '',
      alt: ''
    }
  };
  nsiaServiceText;
  stakeHolders;

  carousel = {
    nsia: null,
    isd: null,
    gis: null,
    stats: null,
    nid: null
  };

  businessMainData = {
    stakeholders: [],
    donors: [],
    customers: []
  };




  newsReadMore = '/media-room/news-updates';
  eventsReadMore = '/media-room/event';

  // News and events Briefs

  newsBriefs = {
    news: '',
    press: '',
    publications: '',
    announcements: '',
    upcoming_publications: '',
    events: '',
    surveys: ''
  };



  population;
  gdp;
  cpi;
  gender;

  constructor(
    private dataService: DataService,
    private cdref: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.x = location.pathname;
    const that = this;
    $('.carousel').carousel({
      interval: 4000,
      ride: 'carousel'
    });

    // const test = 'abscsf3434fjayyyyyfsadaahmads';
    // const pat = /a[a-z]*s/g;
    // const my = test.match(pat);
    // console.log('regex result: ', my);

    // stakeholder-carousel

    // this.reArrangeBusinessData();

    this.getNsiaText();

    /**
     * Get carousel slides data from server
     */
    this.getCarouselSlides();
    this.getInitialStats();
    this.getBusinessData();

    // disable the read more buttons in the begining
    $('.news-read-more').prop('disabled', true);
    $('#events-read-more').prop('disabled', true);

    // instantiate the first news category on page load
    this.getCardsData('news', 4);
    this.getCardsData('events', 3);


    /** Listeners */

    // tslint:disable-next-line: space-before-function-paren
    $('.ls-btn').click(function () {
      const categoryType = $(this).attr('category');
      const redirecUrl = $(this).attr('redirect-url');
      let perPage = 4;

      console.log('categoryType: ', categoryType);
      console.log('redirect URL: ', redirecUrl);



      if ($(this).hasClass('col-md-3')) {
        $('.news-cat').removeClass('active-news');
        $(this).find('.news-cat').addClass('active-news');
        $('.news-read-more').prop('disabled', true);
        that.newsReadMore = redirecUrl;

      } else if ($(this).hasClass('col-md-4')) {

        $('.events-cat').removeClass('active-news');
        $(this).find('.events-cat').addClass('active-news');
        $('#events-read-more').prop('disabled', true);
        that.eventsReadMore = redirecUrl;
        perPage = 3;
      } else {
        $('.news-read-more').prop('disabled', true);
        that.newsReadMore = redirecUrl;
        perPage = 3;
        console.log('it is else bro');
      }

      that.getCardsData(categoryType, perPage);

    });
  }


  reArrangeBusinessData() {

    const arrangeDataOf = (dArray) => {
      let threeArray = [];
      const tempArray = [];
      if (dArray.length > 0) {
        for (let i = 0, j = 0; i < dArray.length; i++) {
          if (i % 3 === 0 && i !== 0) {
            tempArray.push(threeArray);
            threeArray = [];
            threeArray.push(dArray[i]);
          } else {
            threeArray.push(dArray[i]);
          }
        }

        if (threeArray.length > 0) {
          tempArray.push(threeArray);
        }

        return tempArray;
      } else {
        return dArray;
      }

    };

    this.businessMainData.donors = arrangeDataOf(this.businessMainData.donors);
    this.businessMainData.stakeholders = arrangeDataOf(this.businessMainData.stakeholders);
    this.businessMainData.customers = arrangeDataOf(this.businessMainData.customers);

    console.log('After refinment the data is: ', this.businessMainData);

  }

  getNsiaText() {
    this.dataService.getNsiaText().subscribe((data) => {
      if (data[0]) {
        this.nsiaServiceText = this.dataService.htmlToPlaintext(data[0].content.rendered);
      }
    });
  }

  getCardsData(type, perPage) {
    const customParams = [];
    customParams.push('id');
    customParams.push('title.rendered');
    customParams.push('date');
    customParams.push('content.rendered');
    customParams.push('acf.brief');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('better_featured_image.caption.rendered');

    // this is to prevent another call for existing data
    if (this.newsBriefs[type] === '') {

      this.dataService.getCardsData(customParams, type, perPage).subscribe((cardsData) => {
        console.log('news data: ', cardsData);

        this.generateCards(type, cardsData);
      });

    } else {

      const newsCategories = ['news', 'publications', 'press', 'announcements'];

      if (newsCategories.includes(type)) {
        $('.news-read-more').prop('disabled', false);
      } else {
        $('#events-read-more').prop('disabled', false);

      }
    }

  }

  generateCards(sectionId, data) {
    const newsCategories = ['news', 'publications', 'press', 'announcements'];


    if (data.length > 0) {
      if (newsCategories.includes(sectionId)) {

        $('.news-read-more').prop('disabled', false);
      } else {
        $('#events-read-more').prop('disabled', false);

      }

      this.newsBriefs[sectionId] = this.refineData(data);

    }



    // Broadcast the change so that all related directives update their data
    // this.cdref.detectChanges();

  }


  refineData(data) {

    for (const el of data) {

      if (!el.hasOwnProperty('date')) {
        el.day = '00';
        el.month = 'MNT';
      } else {

        const dateString = el.date;
        el.day = this.extractDay(dateString);
        el.month = this.extractMonth(dateString);
      }

      if (!el.hasOwnProperty('acf')) {
        const acf = {
          brief: 'No Briefing'
        };

        el.acf = acf;
      } else {

        // extract html tags from strings
        el.acf.brief = this.dataService.htmlToPlaintext(el.acf.brief);
      }

      if (!el.hasOwnProperty('better_featured_image')) {
        const bf = {
          source_url: '../../assets/images/noimage.png',
          alt_text: 'image'
        };
        el.better_featured_image = bf;
      } else {
        if (!el.better_featured_image.hasOwnProperty('source_url')) {
          el.better_featured_image.source_url = '../../assets/images/noimage.png';
        }

        if (!el.better_featured_image.hasOwnProperty('alt_text')) {
          el.better_featured_image.alt_text = 'image';
        }

      }
    }

    return data;
  }


  // Helper functions

  private extractDay(dateString) {
    return dateString.split('-')[2].substr(0, 2);
  }

  private extractMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-us', { month: 'long' }).substr(0, 3);
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    console.log(el);
    return true;
  }

  readMoreRedirect(el) {
    if ($(el).hasClass('news-read-more')) {
      console.log('before redirectNews: ', this.newsReadMore);
      this.router.navigate([this.newsReadMore]);
    } else {
      if (this.eventsReadMore.split('/').includes('library')) {
        localStorage.setItem('library-type', 'library');
      }
      console.log('before redirectEvents: ', this.eventsReadMore);
      this.router.navigate([this.eventsReadMore]);
    }

  }

  getBrief(ds) {
    if (ds.length > 250) {
      return ds.substring(0, 249) + '...';
    }
    return ds;
  }

  getTitleBrief(title) {
    if (title.length > 20) {
      return title.substring(0, 19) + '...';
    }
    return title;
  }



  getCarouselSlides() {

    const that = this;

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('slug');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('better_featured_image.caption.rendered');
    customParams.push('acf.order');
    customParams.push('acf.icon');

    this.dataService.getCarouselSlides(customParams, 'Slider').subscribe((data) => {
      console.log('Carousel Data(Before): ', data);
      data.sort(that.orderResultAscending);
      this.prepareCarouselSlides(data);
    });

  }

  orderResultAscending(a, b): number {
    if (a.acf.order < b.acf.order) {
      return -1;
    } else {
      return 1;
    }
  }

  prepareCarouselSlides(data) {

    this.carousel.nsia = data[0];
    this.carousel.stats = data[1];
    this.carousel.gis = data[2];
    this.carousel.isd = data[3];
    this.carousel.nid = data[4];

    // Strip HTML tags from the contents
    if (this.carousel.nsia.content) {
      this.carousel.nsia.content.rendered = this.dataService.htmlToPlaintext(this.carousel.nsia.content.rendered);
    }
    if (this.carousel.isd.content) {
      this.carousel.isd.content.rendered = this.dataService.htmlToPlaintext(this.carousel.isd.content.rendered);
    }
    if (this.carousel.gis.content) {
      this.carousel.gis.content.rendered = this.dataService.htmlToPlaintext(this.carousel.gis.content.rendered);
    }
    if (this.carousel.stats.content) {
      this.carousel.stats.content.rendered = this.dataService.htmlToPlaintext(this.carousel.stats.content.rendered);
    }
    if (this.carousel.nid.content) {
      this.carousel.nid.content.rendered = this.dataService.htmlToPlaintext(this.carousel.nid.content.rendered);
    }
  }

  getBusinessData() {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('acf');
    customParams.push('better_featured_image.source_url');
    this.dataService.getBusinessData(customParams).subscribe((data) => {
      console.log('business data: ', data);
      if (data) {
        this.categorizeBusinessData(data);
      }

    });
  }

  categorizeBusinessData(data) {
    for (const bs of data) {
      switch (bs.acf.business_type) {
        case 'stakeholders':
          this.businessMainData.stakeholders.push(bs);
          break;
        case 'donors':
          this.businessMainData.donors.push(bs);
          break;
        case 'customers':
          this.businessMainData.customers.push(bs);
          break;
      }
    }

    this.reArrangeBusinessData();
  }

  getInitialStats() {

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('acf');
    customParams.push('better_featured_image.source_url');

    this.dataService.getInitialStats(customParams, 'statistics').subscribe((data: Array<object>) => {
      if (data) {
        for (const st of data) {
          switch (st['acf'].statistics_type) {
            case 'gender':
              this.gender = st;
              break;
            case 'cpi':
              this.cpi = st;
              break;
            case 'gdp':
              this.gdp = st;
              break;
            case 'population':
              this.population = st;
              break;

          }
        }

        console.log('stats data', data);
      }

    }, (error) => {
      console.log('Data error: ', error);

    });
  }

  updateServiceType(sType) {
    this.dataService.serviceType = sType;
  }

}
