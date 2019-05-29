import { Component, OnInit } from '@angular/core';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-access-info',
  templateUrl: './access-info.component.html',
  styleUrls: ['./access-info.component.css']
})
export class AccessInfoComponent implements OnInit {

  constructor(private mediaService: MediaServicesService) { }

  accessInfo;

  ngOnInit() {
    this.getPolicyDetails();
  }


  getPolicyDetails() {
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    this.mediaService.getAccesInfoData(customParams, 'access-info').subscribe((data) => {
      // console.log('accessInfo: ', data);
      if (data.length > 0) {
        this.accessInfo = this.mediaService.styleDetailsLink(data[0]);
      }
    });
  }

}
