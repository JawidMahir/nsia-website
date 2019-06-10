import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  structure;
  loading = true;
  constructor(private aboutUs: AboutUsService) { }

  ngOnInit() {
    this.getNsiaStructure();
  }

  getNsiaStructure() {
    this.loading = true;
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    customParams.push('better_featured_image.source_url');
    this.aboutUs.getNsiaStructure(customParams).subscribe((data) => {
      // console.log('biodata: ', data);
      if (data) {
        this.loading = false;
        this.structure = data[0];
        // if (this.structure) {
        //   this.structure.content.rendered = this.aboutUs.htmlToPlaintext(this.structure.content.rendered);
        // }
      }
    });
  }

}
