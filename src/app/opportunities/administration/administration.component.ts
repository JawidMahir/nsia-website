import { Component, OnInit } from '@angular/core';
import { OppService } from '../opp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  job;
  constructor(private oppService: OppService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getJobDetails(id);
  }

  getJobDetails(id) {
    const customParams = [];
    customParams.push('id');
    customParams.push('date');
    customParams.push('title.rendered');
    customParams.push('acf');

    this.oppService.getJobDetails(customParams, id).subscribe((data) => {
      console.log('Jobs details: ', data);
      if (data) {
        this.job = data[0];

        if (this.job.content) {
          this.job.content.rendered = this.oppService.htmlToPlaintext(this.job.content.rendered);
        }
        const date = new Date(this.job.date);
        const tempDate = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();
        this.job.date = tempDate;
      }


    });
  }
}
