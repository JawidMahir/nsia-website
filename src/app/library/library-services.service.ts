import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryServicesService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getLibraryData(customP, catName, page) {
    return this.http.get(this.dataService.api + 'posts', {
      observe: 'response',
      params: {
        'filter[category_name]': catName,
        per_page: '8',
        page: page,
        lang: this.dataService.language,
        fields: customP.join(','),
        orederby: 'date'
      }
    });
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}
