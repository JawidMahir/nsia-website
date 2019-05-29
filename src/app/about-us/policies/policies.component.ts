import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(private aboutUs: AboutUsService) { }
  policies;

  ngOnInit() {
    this.getPolicyDetails();
  }


  getPolicyDetails() {
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    this.aboutUs.getNsiaPolicies(customParams).subscribe((data) => {
      // console.log('policies: ', data);
      if (data) {
        this.policies = this.aboutUs.styleDetailsLink(data[0]);
        // if (this.gender) {
        //   this.gender.content.rendered = this.aboutUs.htmlToPlaintext(this.gender.content.rendered);
        // }
      }
    });
  }

}
