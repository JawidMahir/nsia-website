import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-media-general-template',
  templateUrl: './media-general-template.component.html',
  styleUrls: ['./media-general-template.component.css']
})
export class MediaGeneralTemplateComponent implements OnInit {
  news;
  loading = true;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNewsDetails(this.id);
  }

  getNewsDetails(id) {
    this.loading = true;
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('acf.attachment_type');
    customParams.push('acf.link');
    customParams.push('date');
    this.dataService.getPostDetails(id, customParams).subscribe((newsData) => {
      this.loading = false;
      this.news = this.refineData(newsData[0]);
      // console.log(this.news);
    });
  }

  refineData(data) {
    if (!data.hasOwnProperty('date')) {
      data.date = '00' + 'th' + 'MNT' + '';
    } else {
      data.date = formatDate(data.date, 'dd MMM yyyy', 'en-US', '+0530');
      if (data.hasOwnProperty('content')) {
        data.content.rendered = this.dataService.htmlToPlaintext(data.content.rendered);
      }
    }
    return data;
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    // console.log(el);
    return true;
  }
  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}



