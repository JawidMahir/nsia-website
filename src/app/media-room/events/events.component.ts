import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  customParams = [];
  p = 1;
  total = 1;
  events = [];
  contents = [];
  constructor(
    private mediaService: MediaServicesService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.customParams.push('title.rendered');
    this.customParams.push('content.rendered');
    this.customParams.push('acf.attachment_type');
    this.customParams.push('acf.link');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('date');
    this.customParams.push('id');
    this.getEventsData('events', this.p);
  }

  getEventsData(type, page) {
    if ((this.events.length < 1) || (this.events.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((eventsData) => {

        this.total = Number(eventsData.headers.get('X-WP-Total'));

        const newData = {
          page: page,
          data: this.refineData(eventsData.body)
        };

        this.events.push(newData);
        console.log(this.events);
        this.contents = newData.data;
        
      });
    }else{
      this.contents = (this.events.filter(d => d.page === this.p))[0].data;
    }
  }

  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
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
    el.src = '../../assets/images/noimage.svg';
    console.log(el);
    return true;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getEventsData('events', page);
  }

} 
