import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class OppService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getTenders(customParams) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': 'tender',
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

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}
