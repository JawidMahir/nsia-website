import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsBriefs = {
    news: ''
  };
  newsReadMore = '/media-room/news-updates';
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNewsData('news' , 5);
  }

  getNewsData(type , perPage ){
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('date');
    this.dataService.getCardsData(customParams, type, perPage).subscribe((newsData) => {
     this.newsBriefs['news'] = this.refineData(newsData);
    });
  } 
  private extractDay(dateString) {
    return dateString.split('-')[2].substr(0, 2);
  }

  private extractMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-us', { month: 'long' }).substr(0, 3);
  }

  private extractYear(dateString) {
    return dateString.split('-')[0].substr(0, 4);
  }
  
 refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00'+'th'+'MNT'+'';
      } else {
        const dateString = el.date;
        el.date = this.extractDay(dateString)+'th'+' '+this.extractMonth(dateString)+' '+this.extractYear(dateString);
      }
    }
    return data;
  }
  readMoreRedirect(el) {
    if (el.id === 'news-read-more') {
      console.log('before redirectNews: ', this.newsReadMore);
      this.router.navigate([this.newsReadMore]);
    } 
  }
}
