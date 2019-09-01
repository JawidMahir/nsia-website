import { Component, OnInit } from '@angular/core';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.css']
})
export class AnnualReportComponent implements OnInit {
  customParams = [];
  loading = true;
  p = 1;
  total = 1;
  annualReports = [];
  contents = [];

  constructor(
    private mediaService: MediaServicesService
    ) {}

  ngOnInit() {
    this.customParams.push('title.rendered');
    this.customParams.push('content.rendered');
    this.customParams.push('acf.attachment_type');
    this.customParams.push('acf.link');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('date');
    this.customParams.push('id');
    this.getAnnualReportsData('annual-report', this.p);
  }
  getAnnualReportsData(type, page) {
    if ((this.annualReports.length < 1) || (this.annualReports.filter(d => d.page === this.p)).length < 1) {
      this.mediaService.getMediaData(this.customParams, type, page).subscribe((annualReportsData) => {
        this.loading = false;
        this.total = Number(annualReportsData.headers.get('X-WP-Total'));
        if (annualReportsData.body.length > 0) {
          const newData = {
            page : page ,
            data: this.mediaService.refineData(annualReportsData.body)
          };

          this.annualReports.push(newData);
          // console.log(this.annualReports);
          this.contents = newData.data;
        }
      });
    } else {
      this.contents = (this.annualReports.filter(d => d.page === this.p))[0].data;
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
    this.getAnnualReportsData('annual-report', page);
  }
}
