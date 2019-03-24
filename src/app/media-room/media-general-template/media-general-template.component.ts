import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {formatDate } from '@angular/common';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-media-general-template',
  templateUrl: './media-general-template.component.html',
  styleUrls: ['./media-general-template.component.css']
})
export class MediaGeneralTemplateComponent implements OnInit {
  news='';
  title: any;
  contents = {
    contents: null,
    date:null,
    image: {
      url: '',
      alt: ''
    }
  };
  id:any;
  constructor(private route: ActivatedRoute,
              private dataService: DataService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNewsDetails(this.id);
  }
   
  getNewsDetails(id){
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('better_featured_image.source_url');
    customParams.push('better_featured_image.alt_text');
    customParams.push('date');
    this.dataService.getPostDetails(id,customParams).subscribe((newsData) => {
      this.news = this.refineData(newsData[0]);
      this.title=this.news['title']['rendered'];
      this.contents.contents = this.news['content']['rendered'];
      this.contents.date = this.news['date'];
      this.contents.image.url = this.news['better_featured_image']['source_url'];
      this.contents.image.alt = this.news['better_featured_image']['alt_text'];
    });
  }
  
  refineData(data) {
      if (!data.hasOwnProperty('date')) {
        data.date = '00'+'th'+'MNT'+'';
      } else {
        data.date = formatDate(data.date, 'dd MMM yyyy', 'en-US', '+0530');
        data.content.rendered = this.dataService.htmlToPlaintext(data.content.rendered);
      }
    return data;
  }
  
}



