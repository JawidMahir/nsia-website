import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryServicesService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getLibraryData(customP, catName) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': catName,
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
 