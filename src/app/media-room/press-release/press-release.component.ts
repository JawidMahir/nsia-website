import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.css']
})
export class PressReleaseComponent implements OnInit {
  loading = true;
  customParams = [];
  p = 1;
  total = 1;
  press = [];
  contents = [];
  constructor(private mediaService: MediaServicesService) { }

  ngOnInit() {
    this.customParams.push('title.rendered');
    this.customParams.push('content.rendered');
    this.customParams.push('acf.attachment_type');
    this.customParams.push('acf.link');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('date');
    this.customParams.push('id');
    this.getPressData('press', this.p);
  }
  getPressData(type, page) {
    if ((this.press.length < 1) || (this.press.filter(d => d.page === this.p)).length < 1) {
      this.loading = true;
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((pressData) => {

        this.total = Number(pressData.headers.get('X-WP-Total'));
        if (pressData.body.length > 0) {
          this.loading = false;
          const newData = {
            page,
            data: this.refineData(pressData.body)
          };

          this.press.push(newData);
          // console.log(this.press);
          this.contents = newData.data;
        }

      });
    } else {
      this.contents = (this.press.filter(d => d.page === this.p))[0].data;
    }
  }

  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
      } else {
        el.date = formatDate(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
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
    //console.log(el);
    return true;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getPressData('press', page);
  }

}
