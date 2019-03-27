import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent implements OnInit {

  constructor(private aboutUs: AboutUsService) { }

  bios;
  ngOnInit() {
    this.getBios();
  }

  getBios() {
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    customParams.push('better_featured_image.source_url');
    this.aboutUs.getBios(customParams).subscribe((data) => {
      console.log('biodata: ', data);
      if (data) {
        this.bios = data;

        for (const bio of this.bios) {
          if (bio.content) {
            bio.content.rendered = this.aboutUs.htmlToPlaintext(bio.content.rendered);
          }
        }
      }
    });
  }

}
