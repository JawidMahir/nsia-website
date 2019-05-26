import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUsService } from '../about-us.service';
import { from } from 'rxjs';




@Component({
  selector: 'app-about-nsia',
  templateUrl: './about-nsia.component.html',
  styleUrls: ['./about-nsia.component.css']
})
export class AboutNsiaComponent implements OnInit {
  aboutNSIA;
  constructor(
    private aboutUs: AboutUsService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getAboutNsia();
  }

  getAboutNsia() {
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    customParams.push('acf');
    this.aboutUs.getAboutNsia(customParams).subscribe((data) => {
      //console.log('biodata: ', data);
      if (data) {
        this.aboutNSIA = data[0];
       // console.log('aboutNSIA: ', this.aboutNSIA);
        // if (this.aboutNSIA) {
        //   this.aboutNSIA.content.rendered = this.aboutUs.htmlToPlaintext(this.aboutNSIA.content.rendered);
        // }
      }
    });
  }

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
