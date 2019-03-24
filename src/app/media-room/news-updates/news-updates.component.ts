import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {
  newsBriefs = {
    news: ''
  };

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.getNewsData('news' , 5); 
  }

  getNewsData(type , perPage ){
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('date');
    customParams.push('id');
    this.dataService.getCardsData(customParams, type, perPage).subscribe((newsData) => {
     this.newsBriefs['news'] = this.refineData(newsData);
    });
  } 
  
  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00'+'th'+'MNT'+'';
      } else {
        el.date = formatDate(el.date, 'dd MMM yyyy', 'en-US', '+0530');
        el.content.rendered = this.dataService.htmlToPlaintext(el.content.rendered);
      }
    }
    return data;
  }
  

}
