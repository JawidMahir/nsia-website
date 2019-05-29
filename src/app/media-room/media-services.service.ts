import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MediaServicesService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getMediaData(customP, catName, page) {
    return this.http.get<Array<object>>(this.dataService.api + 'posts', {
      observe: 'response',
      params: {
        'filter[category_name]': catName,
        per_page: '5',
        page,
        lang: this.dataService.language,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }
  getPromotingData(customP, catName) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.dataService.language,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

  getNewsData(customP, catName, perPage) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.dataService.language,
        per_page: perPage,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

  getAccesInfoData(customP, catName) {
    return this.http.get<Array<object>>(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.dataService.language,
        fields: customP.join(','),
      }
    });
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
      if ($(details).has('a')) {
        $(details).find('a').attr('target', '_blank');
        $(details).find('a').parent().addClass('attachment');
        $(details).find('a').parent().prepend('<img src="../../../assets/images/pdf.png" alt="pdf">');
      }

      data.content.rendered = $(details).html();
    }
    console.log('details are done', data);


    return data;
  }

}
