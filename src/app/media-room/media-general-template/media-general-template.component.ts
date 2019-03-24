import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-media-general-template',
  templateUrl: './media-general-template.component.html',
  styleUrls: ['./media-general-template.component.css']
})
export class MediaGeneralTemplateComponent implements OnInit {
    news:'';
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
      console.log(this.news)
    });
  }
  private extractDay(dateString) {
    return dateString.split('-')[2].substr(0, 2);
  }

  private extractMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-us', { month: 'long' }).substr(0, 3);
  }

  private extractYear(dateString) {
    return dateString.split('-')[0].substr(0, 4); 
  }
  
  refineData(data) {
      if (!data.hasOwnProperty('date')) {
        data.date = '00'+'th'+'MNT'+'';
      } else {
        const dateString = data.date;
        data.date = this.extractDay(dateString)+'th'+' '+this.extractMonth(dateString)+' '+this.extractYear(dateString);
        data.content.rendered = this.dataService.htmlToPlaintext(data.content.rendered);
      }
    return data;
  }
  
}



