import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity;
  loading = true;
  constructor(private aboutUs: AboutUsService) { }

  ngOnInit() {
    this.getActivityDetails();
  }


  getActivityDetails() {
    this.loading = true;
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    this.aboutUs.getActivityDetails(customParams).subscribe((data) => {
      // console.log('biodata: ', data);
      if (data) {
        this.loading = false;
        this.activity = data[0];
        // if (this.activity) {
        //   this.activity.content.rendered = this.aboutUs.htmlToPlaintext(this.activity.content.rendered);
        // }
      }
    });
  }
}
