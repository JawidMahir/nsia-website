import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://172.16.223.39/nsia/wp-json/wp/v2/posts';
  language = 'fa';

  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get(this.api, {
      params: {
        lang: this.language,
        per_page: '1'
      }
    });
  }

}
