import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  tenders;

  constructor(private oppService: OppService) { }

  ngOnInit() {
    this.getTenders();
  }

  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

  getTenders() {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('slug');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf');

    this.oppService.getTenders(customParams).subscribe((data) => {
      console.log('tenders: ', data);
      if (data.length > 0) {
        this.tenders = data;
        for (const tn of this.tenders) {
          tn.content.rendered = this.oppService.htmlToPlaintext(tn.content.rendered);
          const date = new Date(tn.date);
          const tempDate = date.getDate()  + '/' + (Number(date.getMonth()) + 1 ) + '/' + date.getFullYear();
          tn.date = tempDate;
        }
      }
    });
  }

}
