import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.css']
})
export class PressReleaseComponent implements OnInit {
    press = '';
  constructor(private mediaService: MediaServicesService) { }

  ngOnInit() {
    this.getEventsData('press');
  }
  getEventsData(type){
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.attachment_type');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('date');
    customParams.push('id');
    this.mediaService.getMediaData(customParams, type).subscribe((pressData) => {
     this.press = this.refineData(pressData);
     console.log(this.press);
    });
  } 
  
  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00'+'th'+'MNT'+'';
      } else {
        el.date = formatDate(el.date, 'dd MMM yyyy', 'en-US', '+0530');
        el.content.rendered = this.mediaService.htmlToPlaintext(el.content.rendered);
      }
    }
    return data;
  }

  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 260) + '...';
    }
    return ds;
  }

  imageError(el) {  
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    console.log(el);
    return true;
  }

}
