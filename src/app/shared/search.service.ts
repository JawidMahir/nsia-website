import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getSearchResults(val, fields) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        search: val,
        fields: fields.join(',')
      }
    });
  }

  getCategories(customParams) {
    return this.http.get(this.dataService.api + 'categories', {
      params: {
        per_page: '50',
        fields: customParams.join(',')
      }
    });
  }

  testFun(c) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': 'gis_services',
      }
    });
  }

  getCategoriesData(categories, customParams) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': categories.join(','),
        fields: customParams.join(',')
      }
    });
  }
}
