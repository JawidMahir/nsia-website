import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity;
  videoLink;
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
    customParams.push('acf.link');
    this.aboutUs.getActivityDetails(customParams).subscribe((data) => {
      if (data) {
        console.log(data[0])
        this.loading = false; 
        if(this.aboutUs.objHasKeys(data[0], ['acf', 'link'])){
          this.videoLink = $.parseHTML(data[0].acf.link);
          this.videoLink = $(this.videoLink).attr('src');
          this.videoLink = this.aboutUs.videoURL(this.videoLink); 
        }
        this.activity = this.aboutUs.styleDetailsLink(data[0]);
        // if (this.activity) { 
        //   this.activity.content.rendered = this.aboutUs.htmlToPlaintext(this.activity.content.rendered);
        // }
      }
    });
  }
}
