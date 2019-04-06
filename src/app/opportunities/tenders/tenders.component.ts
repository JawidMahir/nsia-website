import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {
  p: number = 1;
  total = 1;
  tenders = [];

  constructor(private oppService: OppService) { }

  ngOnInit() {
    this.getTenders(this.p);
  }

  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }

  getTenders(page) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('slug');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf');
    if(this.tenders.length < this.total){ 
      this.oppService.getTenders(customParams , page).subscribe((data) => {
        if (data.body.length > 0) {
          this.tenders = this.tenders.concat(this.refineData(data.body));
          this.total = parseInt(data.headers.get('X-WP-Total')); 
        }
      });
   }
  }
  
  refineData(data){
    for (const tn of data) {
      tn.content.rendered = this.oppService.htmlToPlaintext(tn.content.rendered);
      const date = new Date(tn.date);
      const tempDate = date.getDate()  + '/' + (Number(date.getMonth()) + 1 ) + '/' + date.getFullYear();
      tn.date = tempDate;
    }
    return data;
  }
  pageChanged(page: number) {
    this.getTenders(page);
    this.p = page;
  }
}
