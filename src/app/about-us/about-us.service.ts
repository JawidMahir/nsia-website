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

    if (category === 'biography') {
      // tslint:disable-next-line: no-string-literal
      header['order'] = 'asc';
    }
    return this.http.get(this.dataService.api + 'posts', {
      params: header
    });
  }

  getBios(customParams) {
    return this.fetchData(customParams, 'biography');
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
