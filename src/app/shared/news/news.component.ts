import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

import { DataService } from '../../data.service';

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
  ) { }

  ngOnInit() {
    this.getNewsData('news', 5);
  }

  getNewsData(type, perPage) {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('date');
    customParams.push('id');
    this.dataService.getCardsData(customParams, type, perPage).subscribe((newsData) => {
// tslint:disable-next-line: no-string-literal
      this.newsBriefs['news'] = this.refineData(newsData);
    });
  }

  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
      } else {
        el.date = formatDate(el.date, 'dd MMM yyyy', 'en-US', '+0530');
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

  getBrief(ds) {
    if (ds.length > 60) {
      return ds.substring(0, 59) + '...';
    }
    return ds;
  }

}
