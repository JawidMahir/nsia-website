import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-access-info',
  templateUrl: './access-info.component.html',
  styleUrls: ['./access-info.component.css']
})
export class AccessInfoComponent implements OnInit {
  customParams = [];
  loading = true;
  p = 1;
  total = 1;
  accessInfo = [];
  contents = [];

  constructor(private mediaService: MediaServicesService) { }

  // accessInfo;
  // loading = true;

  ngOnInit() {
    // this.getPolicyDetails();
    this.customParams.push('title.rendered');
    this.customParams.push('content.rendered');
    this.customParams.push('acf.attachment_type');
    this.customParams.push('acf.link');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('date');
    this.customParams.push('id');
    this.getAceessInfoData('access_to_info', this.p);
  }
  // getPolicyDetails() {
  //   this.loading = true;
  //   const customParams = [];
  //   customParams.push('title');
  //   customParams.push('content');
  //   this.mediaService.getAccesInfoData(customParams, 'access_to_info').subscribe((data) => {
  //     console.log('accessInfo: ', data);
  //     this.loading = false;
  //     if (data.length > 0) {
  //       this.accessInfo = this.mediaService.styleDetailsLink(data[0]);
  //     }
  //   });
  // }

  getAceessInfoData(type, page) {
    if ((this.accessInfo.length < 1) || (this.accessInfo.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((accessInfoData) => {
        this.loading=false;
        this.total = Number(accessInfoData.headers.get('X-WP-Total'));
        if (accessInfoData.body.length > 0) {
          const newData = {
            page: page,
            data: this.mediaService.refineData(accessInfoData.body)
          };

          this.accessInfo.push(newData);
          this.contents = newData.data;
        }
      });
    } else {
      this.contents = (this.accessInfo.filter(d => d.page === this.p))[0].data;
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
    this.getAceessInfoData('access_to_info', page);
  }
}
