import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';
import { OppService } from '../opp.service';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css']
})
export class ProcurementComponent implements OnInit {
  selectedTender;
  loading = true;
  lang;
  constructor(
    private route: ActivatedRoute,
    private oppService: OppService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTenderDetails(id);
    this.lang = localStorage.getItem('lang');
  }

  getTenderDetails(id) {
    this.loading = true;
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('slug');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf');

    this.oppService.getTenderDetails(customParams, id).subscribe((data) => {
      if (data.length > 0) {
        this.loading = false;
        this.selectedTender = data[0];

        this.selectedTender.content.rendered = this.oppService.htmlToPlaintext(this.selectedTender.content.rendered);
        const date = new Date(this.selectedTender.date);
        const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
        this.selectedTender.date = tempDate;
        if (this.lang == 'fa' || this.lang == 'ps' ) {
          this.selectedTender.date = moment(this.selectedTender.date, 'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
          this.selectedTender.acf.closing_date = moment(this.selectedTender.acf.closing_date, 'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD');
        }

      }

    });
  }

}
