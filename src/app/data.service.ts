import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://172.16.222.81/nsia/wp-json/wp/v2/';
  nodeapi = 'http://172.16.222.81:6001/api/';
  language = 'en';
  serviceType = 'stats';

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
  
  getPostDetails(id, customP) {
    return this.http.get(this.api + 'posts', {
      params: {
        lang: this.language,
        'filter[p]': id,
        fields: customP.join(',')
      }
    });
  }


  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
