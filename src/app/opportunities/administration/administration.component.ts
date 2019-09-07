import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  job;
  loading = true;
  lang;
  constructor(private oppService: OppService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getJobDetails(id);
    this.lang = localStorage.getItem('lang');
  }

  getJobDetails(id) {
    this.loading = true;
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('acf');

    this.oppService.getJobDetails(customParams, id).subscribe((data) => {
      // console.log('Jobs details: ', data);
      this.loading = false;
      if (data.length > 0 ) {
        this.job = data[0];

        if (this.job.hasOwnProperty('content')) {
          this.job.content.rendered = this.oppService.htmlToPlaintext(this.job.content.rendered);
        }
        const date = new Date(this.job.date);
        const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
        this.job.date = tempDate;
        if (this.lang == 'fa' || this.lang == 'ps' ) {
          this.job.date = moment(this.job.date,'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
          this.job.acf.closing_date = moment(this.job.acf.closing_date,'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
        }
      }


    });
  }
}
