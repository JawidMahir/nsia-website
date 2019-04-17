import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MediaServicesService {

  constructor(private http: HttpClient, private dataService: DataService) { } 

  getMediaData(customP, catName , page) {
    return this.http.get(this.dataService.api + 'posts', {
      observe: 'response',
      params: {
        'filter[category_name]': catName,
        per_page: '5',
        page: page,
        lang: this.dataService.language,
        fields: customP.join(','),
        orederby: 'date'
      }
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

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
