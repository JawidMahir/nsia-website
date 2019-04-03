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
  news: '';

  constructor(
    private mediaService: MediaServicesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getNewsData('news');
  }

  getNewsData(type) {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.attachment_type');
    customParams.push('acf.link');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('date');
    customParams.push('id');
    this.mediaService.getMediaData(customParams, type).subscribe((newsData) => {
      console.log('news data update: ', newsData);
      this.news = this.refineData(newsData);
    });
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
    el.src = '../../assets/images/noimage.png';
    console.log(el);
    return true;
  }

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
