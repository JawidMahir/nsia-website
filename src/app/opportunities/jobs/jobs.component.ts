import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  p: number = 1;
  total = 1;
  jobs = [];
  contents = [];
  lang;
  loading = true;

  constructor(private oppService: OppService) { }

  ngOnInit() {
    this.getJobs(this.p);
    this.lang = localStorage.getItem('lang');
  }

  getJobs(page) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.closing_date');
    if ((this.jobs.length < 1) || (this.jobs.filter(d => d.page === this.p)).length < 1) {
      this.oppService.getJobs(customParams, page).subscribe((data) => {
        this.total = Number(data.headers.get('X-WP-Total'));
        this.loading = false;
        const newData = {
          page: page,
          data: this.refineData(data.body)
        };

        this.jobs.push(newData);
        //console.log(this.jobs);
        this.contents = newData.data;

      });
    } else {
      this.contents = (this.jobs.filter(d => d.page === this.p))[0].data;
    }
  }
  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

  refineData(data) {
    for (const jb of data) {
      if (jb.content) {
        jb.content.rendered = this.oppService.htmlToPlaintext(jb.content.rendered);
      }
      const date = new Date(jb.date);
      const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
      jb.date = tempDate;
      if (this.lang == 'fa' || this.lang == 'ps') {
        jb.date = moment(jb.date, 'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
        jb.acf.closing_date = moment(jb.acf.closing_date, 'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
      }
    }
    return data;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getJobs(page);
  }

}
