import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsService } from '../about-us.service';
import { from } from 'rxjs';
import * as $ from 'jquery';


@Component({
  selector: 'app-about-nsia',
  templateUrl: './about-nsia.component.html',
  styleUrls: ['./about-nsia.component.css']
})
export class AboutNsiaComponent implements OnInit {
  aboutNSIA;
  videoLink;
  loading = true;
  constructor(
    private aboutUs: AboutUsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAboutNsia(); 
  }

  getAboutNsia() {
    this.loading = true;
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    customParams.push('acf');
    customParams.push('acf.link');
    this.aboutUs.getAboutNsia(customParams).subscribe((data) => { 
      // console.log('biodata: ', data);
      if (data) {
        this.loading = false;
        // console.log(data[0].prototype.hasOwnProperty('acf.link'));
        // console.log('acf.link' in data[0])
        // console.log(this.objHasKeys(data[0], ['acf', 'link']));
        // if(data[0].hasOwnProperty('acf.link')){
        if(this.aboutUs.objHasKeys(data[0], ['acf', 'link'])){
          this.videoLink = $.parseHTML(data[0].acf.link);
          this.videoLink = $(this.videoLink).attr('src');
          this.videoLink = this.aboutUs.videoURL(this.videoLink); 
        }
        this.aboutNSIA = this.aboutUs.styleDetailsLink(data[0]);
        //console.log('aboutNSIA: ', this.aboutNSIA);
        // if (this.aboutNSIA) {
        //   this.aboutNSIA.content.rendered = this.aboutUs.htmlToPlaintext(this.aboutNSIA.content.rendered);
        // }
      }
    });
  }
  

  

}
