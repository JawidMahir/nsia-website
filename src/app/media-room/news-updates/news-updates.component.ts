import { Component, OnInit } from '@angular/core';
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
        el.content.rendered = this.dataService.htmlToPlaintext(el.content.rendered);
      }
    }
    return data;
  }
  

}
