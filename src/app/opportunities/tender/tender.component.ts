import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OppService } from '../opp.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  selectedTender;
  constructor(
    private route: ActivatedRoute,
    private oppService: OppService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTenderDetails(id);
  }

  getTenderDetails(id) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('slug');
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf');

    this.oppService.getTenderDetails(customParams, id).subscribe((data) => {
      if (data.length > 0) {

        this.selectedTender = data[0];

        this.selectedTender.content.rendered = this.oppService.htmlToPlaintext(this.selectedTender.content.rendered);
        const date = new Date(this.selectedTender.date);
        const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
        this.selectedTender.date = tempDate;

      }

    });
  }

}
