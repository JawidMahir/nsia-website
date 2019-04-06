import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class OppService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getTenders(customParams , page) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', { 
      observe: 'response',
      params: {
        'filter[category_name]': 'tender',
        per_page: '2',
        page: page,
        lang: this.dataService.language,
        fields: customParams.join(','),
      }
    });
  }

  getTenderDetails(customParams, id) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': 'tender',
        'filter[p]': id,
        lang: this.dataService.language,
        fields: customParams.join(','),
      }
    });
  }

  getJobs(customParams , page) {
    return this.http.get(this.dataService.api + 'posts', {
      observe: 'response',
      params: {
        'filter[category_name]': 'job',
        per_page: '2',
        page: page,
        lang: this.dataService.language,
        fields: customParams.join(','),
      }
    });
  }

  getJobDetails(customParams, id) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': 'job',
        'filter[p]': id,
        lang: this.dataService.language,
        fields: customParams.join(','),
      }
    });
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
  
}
