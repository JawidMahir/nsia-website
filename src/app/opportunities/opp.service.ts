import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class OppService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  fetchData(customParams, category , page , perPage) {
    const header = {
      'filter[category_name]': category,
      per_page: perPage,
      page: page,
      lang: this.dataService.language,
      fields: customParams.join(',')
    };
    return this.http.get(this.dataService.api + 'posts', {
      observe: 'response',
      params: header
    });
  }

  fetchDetails(customParams, category , id) {
    const header = {
      'filter[category_name]': category,
      'filter[p]': id,
        lang: this.dataService.language,
        fields: customParams.join(','),
    };
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: header
    });
  }

  getTenders(customParams , page) {
    return this.fetchData(customParams, 'tender',page , '5');
  }

  getTenderDetails(customParams, id) {
    return this.fetchDetails(customParams, 'tender', id);
  } 

  getJobs(customParams , page) {
    return this.fetchData(customParams, 'job',page , '10');
  }

  getJobDetails(customParams, id) {
    return this.fetchDetails(customParams, 'job', id);
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
  
}
