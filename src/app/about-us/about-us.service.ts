import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http: HttpClient, 
              private dataService: DataService,
              private sanitizer: DomSanitizer) { }

  fetchData(customParams, category) {
    const header = {
      'filter[category_name]': category,
      lang: this.dataService.language,
      fields: customParams.join(',')
    };
    return this.http.get(this.dataService.api + 'posts', {
      params: header
    });
  }

  getBios(customParams, page) {
    return this.http.get(this.dataService.api + 'posts', {
      observe: 'response',
      params: {
        'filter[category_name]': 'biography',
        per_page: '5',
        page,
        lang: this.dataService.language,
        fields: customParams.join(','),
        order: 'asc'
      }
    });
  }

  getActivityDetails(customParams) {
    return this.fetchData(customParams, 'activity_achievments');

  }

  getNsiaStructure(customParams) {
    return this.fetchData(customParams, 'structure');
  }

  getAboutNsia(customParams) {
    return this.fetchData(customParams, 'about_us');
  }

  getNsiaPolicies(customParams) {
    return this.fetchData(customParams, 'policies');
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

  styleDetailsLink(data) {
    let contentRendered;
    if (data.hasOwnProperty('content')) {
      contentRendered = data.content.rendered;

      // wrap contents in a div first
      contentRendered = '<div>' + contentRendered + '</div>';

      const details = $.parseHTML(contentRendered);
      //console.log('details before', $(details).html());
      if ($(details).has('a')) {

        $(details).find('a').attr('target', '_blank');
        $(details).find('a').wrap('<div class="attachment" ></div>');

        $(details).find('a').each((i, val) => {

          const fileExtArray = $(val).attr('href').split('.');
          const fileExt = fileExtArray[fileExtArray.length - 1];
          // console.log('extension is : ', fileExt);

          let fileIcon = '<i class="fas fa-file-alt"></i>';
          if (fileExt === 'xlsx' || fileExt === 'xls') {
            fileIcon = '<i class="fas fa-file-excel"></i>';
          }
          if (fileExt === 'pdf') {
            fileIcon = '<i class="fas fa-file-pdf"></i>';
          }
          $(val).parent().prepend(fileIcon);
        });

      }

      data.content.rendered = $(details).html();
    }
    //console.log('details are done', data);


    return data;
  }
  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //return this.sanitizer.bypassSecurityTrustHtml(url);
  }
   objHasKeys(obj, keys) {
    var next = keys.shift();
    return obj[next] && (! keys.length || this.objHasKeys(obj[next], keys));
  }

}
