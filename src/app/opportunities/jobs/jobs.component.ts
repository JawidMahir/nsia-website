import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  p: number = 1;
  total = 1;
  jobs = [];

  constructor(private oppService: OppService) { }

  ngOnInit() {
    this.getJobs(this.p);
  }

  getJobs(page) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.closing_date');
    if (this.jobs.length < this.total) {
      this.oppService.getJobs(customParams, page).subscribe((data) => {
        if (data) {
          this.jobs = this.jobs.concat(this.refineData(data.body));
          this.total = parseInt(data.headers.get('X-WP-Total'));
          console.log('jobs data: ', this.jobs);

        }
      });
    }
    console.log('jobs data out of function: ', this.jobs);

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
    }
    return data;
  }

  pageChanged(page: number) {
    this.getJobs(page);
    this.p = page;
  }

}
