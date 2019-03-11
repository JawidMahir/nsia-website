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

  carousel = {
    nsia: '',
    isd: '',
    gis: '',
    stats: '',
    accra: ''
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

  dummyData = [
    {
      img: '../../assets/images/news1.png',
      title: 'We Did something',
      brief: 'lorem ipsum adidaad farin is good person',
      day: '23',
      month: 'feb'
    },
    {
      img: '../../assets/images/news2.png',
      title: 'They did nothing',
      brief: 'lorem ipsum adidaad farin is good person',
      day: '23',
      month: 'feb'
    },
    {
      img: '../../assets/images/news3.png',
      title: 'jafar says something',
      brief: 'lorem ipsum adidaad farin is good person',
      day: '23',
      month: 'feb'
    },
    {
      img: '../../assets/images/news1.png',
      title: 'karim says nothing',
      brief: 'lorem ipsum adidaad farin is good person',
      day: '23',
      month: 'feb'
    }
  ];

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


    /**
     * Get carousel slides data from server
     */
    this.getCarouselSlides();
    this.getInitialStats();


    // instantiate the first news category on page load
    this.getCardsData('news', 4);
    this.getCardsData('events', 3);



    /** Listeners */

    // tslint:disable-next-line: space-before-function-paren
    $('.ls-btn').click(function () {
      const parent = $(this).attr('aria-controls');
      const redirecUrl = $(this).attr('redirect-url');
      let perPage = 4;
      const categoryType = parent.split('-')[1];

      console.log('categoryType: ', categoryType);



      if ($(this).hasClass('col-md-3')) {
        $('.news-cat').removeClass('active-news');
        $(this).find('.news-cat').addClass('active-news');
        $('#news-read-more').prop('disabled', true);
        that.newsReadMore = redirecUrl;

      } else {

        $('.events-cat').removeClass('active-news');
        $(this).find('.events-cat').addClass('active-news');
        $('#events-read-more').prop('disabled', true);
        that.eventsReadMore = redirecUrl;
        perPage = 3;
      }

      that.getCardsData(categoryType, perPage);

    });
  }

  getCardsData(type, perPage) {
    const customParams = [];
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
        console.log('data: ', cardsData);

        this.generateCards(type, cardsData);
      });

    } else {

      const newsCategories = ['news', 'publications', 'press', 'announcements'];

      if (newsCategories.includes(type)) {
        $('#news-read-more').prop('disabled', false);
      } else {
        $('#events-read-more').prop('disabled', false);

      }
    }

  }

  generateCards(sectionId, data) {
    const newsCategories = ['news', 'publications', 'press', 'announcements'];


    if (data.length > 0) {
      if (newsCategories.includes(sectionId)) {

        $('#news-read-more').prop('disabled', false);
      } else {
        $('#events-read-more').prop('disabled', false);

      }

      this.newsBriefs[sectionId] = this.refineData(data);

    }



    // Broadcast the change so that all related directives update their data
    this.cdref.detectChanges();

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
        el.acf.brief = this.htmlToPlaintext(el.acf.brief);
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

  private htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

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
    if (el.id === 'news-read-more') {
      console.log('before redirectNews: ', this.newsReadMore);
      this.router.navigate([this.newsReadMore]);
    } else {
      console.log('before redirectEvents: ', this.eventsReadMore);
      this.router.navigate([this.eventsReadMore]);
    }

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
    this.carousel.isd = data[1];
    this.carousel.gis = data[2];
    this.carousel.stats = data[3];
    this.carousel.accra = data[4];
  }

  getInitialStats() {

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('acf.statistics');
    customParams.push('featured_media');

    this.dataService.getInitialStats(customParams, 'statistics').subscribe((data: Array<object>) => {
      this.gender = data[0];
      this.cpi = data[1];
      this.gdp = data[2];
      this.population = data[3];

      console.log(data);
    });
  }


}
