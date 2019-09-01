import { Component, OnInit } from '@angular/core';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-important-announcements',
  templateUrl: './important-announcements.component.html',
  styleUrls: ['./important-announcements.component.css']
})
export class ImportantAnnouncementsComponent implements OnInit {
  customParams = [];
  loading = true;
  p = 1;
  total = 1;
  importantAnnouncements = [];
  contents = [];
  constructor(
    private mediaService: MediaServicesService
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
    this.getImportantAnnouncementsData('announcements', this.p);
  }
  getImportantAnnouncementsData(type, page){
    if ((this.importantAnnouncements.length < 1) || (this.importantAnnouncements.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((importantAnnouncementsData) => {
        this.loading=false;
        this.total = Number(importantAnnouncementsData.headers.get('X-WP-Total'));
        if (importantAnnouncementsData.body.length > 0) {
          const newData = {
            page: page,
            data: this.mediaService.refineData(importantAnnouncementsData.body)
          };

          this.importantAnnouncements.push(newData);
          // console.log(this.importantAnnouncements);
          this.contents = newData.data;
        }
      });
    } else {
      this.contents = (this.importantAnnouncements.filter(d => d.page === this.p))[0].data;
    }
  }
  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.svg';
    //console.log(el);
    return true;
  }
  getBrief(ds) {
    if (ds.length > 60) {
      return ds.substring(0, 60) + '...';
    }
    return ds;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getImportantAnnouncementsData('announcements', page);
  }
}
