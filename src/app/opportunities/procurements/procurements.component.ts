import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-procurements',
  templateUrl: './procurements.component.html',
  styleUrls: ['./procurements.component.css']
})
export class ProcurementsComponent implements OnInit {
  p: number = 1;
  total = 1;
  tenders = [];
  contents = [];
  lang;
  loading = true;
  constructor(private oppService: OppService) {}

  ngOnInit() {
    this.getTenders(this.p);
    this.lang = localStorage.getItem('lang');
  }
  getTenders(page) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.closing_date');
    if (
      this.tenders.length < 1 ||
      this.tenders.filter(d => d.page === this.p).length < 1
    ) {
      this.oppService.getTenders(customParams, page).subscribe(data => {
        this.total = Number(data.headers.get('X-WP-Total'));
        this.loading = false;

        const newData = {
          page: page,
          data: this.refineData(data.body)
        };

        this.tenders.push(newData);
        //console.log(this.tenders);
        this.contents = newData.data;
      });
    } else {
      this.contents = this.tenders.filter(d => d.page === this.p)[0].data;
    }
  }
  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

  refineData(data) {
    for (const tn of data) {
      if (tn.content) {
        tn.content.rendered = this.oppService.htmlToPlaintext(
          tn.content.rendered
        );
      }
      const date = new Date(tn.date);
      const tempDate =
        date.getDate() +
        '/' +
        (Number(date.getMonth()) + 1) +
        '/' +
        date.getFullYear();
      tn.date = tempDate;
      if (this.lang == 'fa' || this.lang == 'ps') {
        tn.date = moment(tn.date, 'DD/MM/YYYY')
          .locale('fa')
          .format('YYYY/MM/DD');
        tn.acf.closing_date = moment(tn.acf.closing_date, 'DD/MM/YYYY')
          .locale('fa')
          .format('YYYY/MM/DD');
      }
    }
    return data;
  }

  pageChanged(page: number) {
    this.p = page;
    this.getTenders(page);
  }
}
