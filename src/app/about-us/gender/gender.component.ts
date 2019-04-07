import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  gender;
  constructor(private aboutUs: AboutUsService) { }

  ngOnInit() {
    this.getGenderDetails();
  }


  getGenderDetails() {
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    this.aboutUs.getGenderDetails(customParams).subscribe((data) => {
      console.log('biodata: ', data);
      if (data) {
        this.gender = data[0];
        // if (this.gender) {
        //   this.gender.content.rendered = this.aboutUs.htmlToPlaintext(this.gender.content.rendered);
        // }
      }
    });
  }
}
