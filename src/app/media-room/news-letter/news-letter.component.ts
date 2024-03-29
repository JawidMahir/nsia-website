import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent implements OnInit {

  customParams = [];
  loading = true;
  p = 1;
  total = 1;
  newsLetter = [];
  contents = [];
  constructor(
    private mediaService: MediaServicesService,
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
    this.getNewsLetterData('newsletter', this.p);
  }

  getNewsLetterData(type, page) {
    if ((this.newsLetter.length < 1) || (this.newsLetter.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((newsData) => {
        this.loading=false;
        this.total = Number(newsData.headers.get('X-WP-Total'));
        //console.log('newletter data', newsData);
        if (newsData.body.length > 0) {

          const newData = {
            page,
            data: this.refineData(newsData.body)
          };

          this.newsLetter.push(newData);
          this.contents = newData.data;
        }

      });
    } else {
      this.contents = (this.newsLetter.filter(d => d.page === this.p))[0].data;
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
    // console.log(el);
    return true;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getNewsLetterData('news', page);
  }


}
