import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://172.16.222.104/nsia/wp-json/wp/v2/';
  nodeapi = 'http://172.16.222.104:6001/api/';
  language = 'en';
  serviceType = 'stats';
  callToServiceMethodSource   = new Subject<any>();

  serviceCmpMethodCalled$ = this.callToServiceMethodSource.asObservable();

  callServiceCmpMethod() {
    this.callToServiceMethodSource.next();
  }
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

  getCardsData(customP, catName, perPage) {
    return this.http.get(this.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.language,
        per_page: perPage,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

  registerUserEmail(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api + 'users/register', user, httpOptions);
  }
  addContactData(contactData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.nodeapi + 'contacts/add', contactData, httpOptions);
  }


  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
