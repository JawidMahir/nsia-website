import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { MediaServicesService } from '../media-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-media-general-template',
  templateUrl: './media-general-template.component.html',
  styleUrls: ['./media-general-template.component.css']
})
export class MediaGeneralTemplateComponent implements OnInit {
  news;
  videoLink;
  loading = true;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private mediaService: MediaServicesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNewsDetails(this.id);
  }

  getNewsDetails(id) {
    this.loading = true;
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text'); 
    customParams.push('acf.attachment_type');
    customParams.push('acf.link');
    customParams.push('date');
    this.dataService.getPostDetails(id, customParams).subscribe((newsData) => {
      this.loading = false;
      if(this.objHasKeys(newsData[0], ['acf', 'link'])){
        this.videoLink = $.parseHTML(newsData[0].acf.link);
        this.videoLink = $(this.videoLink).attr('src');
        this.videoLink = this.videoURL(this.videoLink); 
      }
      this.news = this.mediaService.styleDetailsLink(newsData[0]);
      this.news = this.refineData(this.news);
    });
  }

  refineData(data) {
    if (!data.hasOwnProperty('date')) { 
      data.date = '00' + 'th' + 'MNT' + '';
    } else {
      data.date = formatDate(data.date, 'MMM dd, yyyy', 'en-US', '+0530');
      // if (data.hasOwnProperty('content')) {
      //   data.content.rendered = this.dataService.htmlToPlaintext(data.content.rendered);
      // }
    }
    return data;
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    // console.log(el);
    return true;
  }
  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  objHasKeys(obj, keys) {
    var next = keys.shift();
    return obj[next] && (! keys.length || this.objHasKeys(obj[next], keys));
  }
  
}



