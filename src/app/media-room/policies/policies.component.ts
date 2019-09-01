import { Component, OnInit } from '@angular/core';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(private mediaService: MediaServicesService,) { }
  policies;
  loading = true;

  ngOnInit() {
    this.getPolicyDetails();
  }


  getPolicyDetails() {
    this.loading = true;
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    this.mediaService.getNsiaPolicies(customParams).subscribe((data) => {
      // console.log('policies: ', data);
      if (data) {
        this.loading = false;
        this.policies = this.mediaService.styleDetailsLink(data[0]);
        // if (this.gender) {
        //   this.gender.content.rendered = this.aboutUs.htmlToPlaintext(this.gender.content.rendered);
        // }
      }
    });
  }

}
