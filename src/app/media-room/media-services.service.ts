import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';
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
        per_page: '4',
        page,
        lang: this.dataService.language,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }
  getNsiaPolicies(customParams) {
    return this.fetchData(customParams, 'policies');
  }
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
  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
      } else {
        el.date = formatDate(el.date, 'MMM dd, yyyy', 'en-US', '+0530');
        if (el.hasOwnProperty('content')) {
          el.content.rendered = this.htmlToPlaintext(el.content.rendered);
        }
      }
    }
    return data;
  }


}
