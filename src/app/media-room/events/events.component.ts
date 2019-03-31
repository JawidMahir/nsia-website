import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = '';
  constructor(private mediaService: MediaServicesService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getEventsData('events'); 
  }

  getEventsData(type){
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.attachment_type');
    customParams.push('acf.link');
    customParams.push('better_featured_image.source_url'); 
    customParams.push('better_featured_image.alt_text');
    customParams.push('date');
    customParams.push('id');
    this.mediaService.getMediaData(customParams, type).subscribe((eventsData) => {
     this.events = this.refineData(eventsData);
     console.log(this.events); 
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

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
