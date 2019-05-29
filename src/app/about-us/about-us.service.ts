import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http: HttpClient, private dataService: DataService) { }

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

  getBios(customParams,page) {
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

  getGenderDetails(customParams) {
    return this.fetchData(customParams, 'gender');

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
