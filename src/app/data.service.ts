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

  getInitialStats(customP: Array<string>) {
    return this.http.get(this.api + 'posts', {
      params: {
        categories: '26',
        lang: this.language,
        fields: customP.join(',')
      }
    });
  }

  getCarouselSlides(customP: Array<string>) {
    return this.http.get(this.api + 'posts', {
      params: {
        categories: '27',
        lang: this.language,
        fields: customP.join(',')
      }
    });
  }

  getFeaturedMedia(imgCode, customP: Array<string>) {
    return this.http.get(this.api + 'media/' + imgCode, {
      params: {
        fields: customP.join(',')
      }
    });
  }

}
