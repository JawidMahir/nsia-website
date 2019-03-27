import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getInfo(customParams) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': 'access_to_info',
        fields: customParams.join(',')
      }
    });
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}
