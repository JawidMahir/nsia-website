import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs;
  dJobs = [
    {
      id: 421,
      name: 'Data Analyst',
      brief: 'ssflskjf alskfjl saldfjl sdj sdlkjflsjf',
      pdate: '11-09-2019',
      cdate: '22-09-2019'
    }, {
      id: 412,
      name: 'SQL Analyst',
      brief: 'ssflskjf alskfjl saldfjl sdj sdlkjflsjf',
      pdate: '11-09-2019',
      cdate: '22-09-2019'
    }, {
      id: 327,
      name: 'JAVA Analyst',
      brief: 'ssflskjf alskfjl saldfjl sdj sdlkjflsjf',
      pdate: '11-09-2019',
      cdate: '22-09-2019'
    }
  ];
  constructor(private oppService: OppService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.closing_date');
    this.oppService.getJobs(customParams).subscribe((data) => {
      console.log('Jobs: ', data);
      if (data) {
        this.jobs = data;
        for (const jb of this.jobs) {
          if (jb.content) {
            jb.content.rendered = this.oppService.htmlToPlaintext(jb.content.rendered);
          }
          const date = new Date(jb.date);
          const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
          jb.date = tempDate;
        }

      }

    });
  }
  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

}
