import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {
  customParams = [];
  p = 1;
  total = 1;
  news = [];
  contents = [];
  constructor(
    private mediaService: MediaServicesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.customParams.push('title.rendered');
    this.customParams.push('content.rendered');
    this.customParams.push('acf.attachment_type');
    this.customParams.push('acf.link');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('date');
    this.customParams.push('id');
    this.getNewsData('news', this.p);
  }

  getNewsData(type, page) {
    if ((this.news.length < 1) || (this.news.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((newsData) => {

        this.total = Number(newsData.headers.get('X-WP-Total'));

        const newData = {
          page: page,
          data: this.refineData(newsData.body)
        };

        this.news.push(newData);
       // console.log(this.news);
        this.contents = newData.data;
        
      });
    }else{
      this.contents = (this.news.filter(d => d.page === this.p))[0].data;
    }
  }

  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
      } else {
        el.date = formatDate(el.date, 'dd MMM yyyy', 'en-US', '+0530');
        if (el.hasOwnProperty('content')) {
          el.content.rendered = this.mediaService.htmlToPlaintext(el.content.rendered);
        }
      }
    }
    return data;
  }

  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.svg';
    //console.log(el);
    return true;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getNewsData('news', page);
  }

}
