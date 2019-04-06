import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://172.16.222.81/nsia/wp-json/wp/v2/';
  nodeapi = 'http://172.16.222.81:6001/api/';

  // For accessing the real server
  // api = 'http://18.221.128.25/index.php/wp-json/wp/v2/';
  // nodeapi = 'http://18.221.128.25:6001/api/';
  language = 'en';
  serviceType = 'stats';
  redirectPath = 'home';

  /**
   * The following code establishes a connection between navbar component and service-home component
   * i.e the changes in navbar cmp are detected in service home cmp
   */
  
  callToServiceMethodSource = new Subject<any>();

  serviceCmpMethodCalled$ = this.callToServiceMethodSource.asObservable();

  constructor(private http: HttpClient) { }


  callServiceCmpMethod() {
    this.callToServiceMethodSource.next();
  }

  getNsiaText() {
    return this.http.get(this.api + 'posts', {
      params: {
        'filter[category_name]': 'nsia_services',
        lang: this.language,
        fields: 'content.rendered'
      }
    });
  }



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
        per_page: '4',
        orderby: 'date',
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

  getBusinessData(customP) {
    return this.http.get(this.api + 'posts', {
      params: {
        'filter[category_name]': 'business',
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
  addContactData(contactData) {
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
  /**
   * The following two methods are related to the promotional materials
   */

  getMediaData(customP, catName) {
    return this.http.get<Array<any>>(this.api + 'posts', {
      params: {
        'filter[category_name]': catName,
        lang: this.language,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

  getNewsData(customP, catName, perPage) {
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

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
