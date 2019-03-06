import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://172.16.223.39/nsia/wp-json/wp/v2/';
  language = 'en';

  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get(this.api, {
      params: {
        lang: this.language,
        per_page: '1'
      }
    });
  }

  getInitialStats(customP: Array<string>, catName) {
    return this.http.get(this.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.language,
        fields: customP.join(',')
      }
    });
  }

  getCarouselSlides(customP: Array<string>, catName) {
    return this.http.get<Array<object>>(this.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.language,
        fields: customP.join(','),
      }
    });
  }

  getCardsData(customP, catName) {
    return this.http.get(this.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.language,
        per_page: '4',
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

}
