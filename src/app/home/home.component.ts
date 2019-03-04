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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.x = location.pathname;
    $('.carousel').carousel({
      interval: 4000,
      ride: 'carousel'
    });
    this.getCarouselSlides();
    this.getInitialStats();
  }

  getCarouselSlides() {

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('slug');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('better_featured_image.caption.rendered');

    this.dataService.getCarouselSlides(customParams).subscribe((data) => {
      console.log('Carousel Data: ', data);
      this.prepareCarouselSlides(data);
    });

  }

  prepareCarouselSlides(data) {

    for (const el of data) {
      const title = (el.slug).toLowerCase();
      console.log(title);
      switch (title) {
        case 'national-statistics-and-information-authority':
          this.carousel.nsia = el;
          break;
        case 'information-systems-development':
          this.carousel.isd = el;
          break;
        case 'geographical-information-systems':
          this.carousel.gis = el;
          break;
        case 'statistics-slider':
          this.carousel.stats = el;
          break;
        case 'accra':
          this.carousel.accra = el;
          break;
      }
    }
  }

  getInitialStats() {

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('acf.statistics');
    customParams.push('featured_media');

    this.dataService.getInitialStats(customParams).subscribe((data: Array<object>) => {
      this.gender = data[0];
      this.cpi = data[1];
      this.gdp = data[2];
      this.population = data[3];

      console.log(data);
    });
  }


}
