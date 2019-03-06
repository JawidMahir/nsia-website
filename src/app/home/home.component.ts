import { Component, OnInit } from '@angular/core';
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
    private dataService: DataService
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
    // this.generateNewsCards('nav-news', 'news');
    // this.generateNewsCards('nav-events', 'events');


    /** Listeners */

    // tslint:disable-next-line: space-before-function-paren
    $('.ls-btn').click(function () {
      const parent = $(this).attr('aria-controls');
      const noDataMsg = $('.samples .no-data').clone();
      let cardType = 'news';
      const contentType = parent.split('-')[1];

      console.log('contentType: ', contentType);


      $(`#${parent} .row`).empty();
      $(`#${parent} .row`).html(noDataMsg);

      if ($(this).hasClass('col-md-3')) {
        $('.news-cat').removeClass('active-news');
        $(this).find('.news-cat').addClass('active-news');
      } else {
        $('.events-cat').removeClass('active-news');
        $(this).find('.events-cat').addClass('active-news');
        cardType = 'events';
      }

      that.getCardsData(parent, contentType);

      //  that.generateNewsCards(parent, cardType);
    });
  }

  getCardsData(sectionId, type) {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('date');
    customParams.push('content.rendered');
    customParams.push('acf.brief');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('better_featured_image.caption.rendered');

    this.dataService.getCardsData(customParams, type).subscribe((cardsData) => {
      console.log('cards data: ', cardsData);
      this.generateNewsCards(sectionId, cardsData, type);
    });
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }



  generateNewsCards(sectionId, data, cardType) {

    let newsCard;
    const newsCat = ['news', 'publications', 'press', 'announcements'];
    const eventsCat = ['events', 'upcoming-publications', 'surveys'];

    // Empty the div before adding new items
    $(`#${sectionId} .row`).empty();

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {

      if (newsCat.includes(cardType)) {
        if (i >= 4) {
          break;
        }
        newsCard = $('.samples #news-card').clone();
      } else {
        if (i >= 3) {
          break;
        }
        newsCard = $('.samples #events-card').clone();
      }

      newsCard.removeAttr('id');

      const date = new Date(data[i].date);  // 2009-11-10
      const month = date.toLocaleString('en-us', { month: 'long' }).substr(0, 3);
      const day = data[i].date.split('-')[2].substr(0, 2);
      console.log('Month:  ', month);
      console.log('Day:  ', day);


      newsCard.find('.news-item img').attr('src', data[i].img);
      newsCard.find('.contents h4').html(data[i].title.rendered);
      newsCard.find('.contents p').html(data[i].acf.brief);
      newsCard.find('.news-date h4').html(day);
      newsCard.find('.news-date p').html(month);

      newsCard.appendTo(`#${sectionId} .row`);
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

    this.dataService.getInitialStats(customParams, 'stats').subscribe((data: Array<object>) => {
      this.gender = data[0];
      this.cpi = data[1];
      this.gdp = data[2];
      this.population = data[3];

      console.log(data);
    });
  }


}
