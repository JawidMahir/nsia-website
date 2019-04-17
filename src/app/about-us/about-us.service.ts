import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

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
        page: page,
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

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
