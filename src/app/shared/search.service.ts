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

  getTags(customParams) {
    return this.http.get(this.dataService.api + 'tags', {
      params: {
        fields: customParams.join(',')
      }
    });
  }

  getCategoriesData(categories, customParams) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': categories.join(','),
        fields: customParams.join(',')
      }
    });
  }

  getRelatedDepartmentId(sType, tag, customParams) {
    //console.log('Data variables');
   // console.log('service type: ', sType);
   // console.log('tag: ', tag);

    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        'filter[category_name]': sType,
        'filter[tag]': tag,
        fields: customParams.join(',')
      }
    });
  }
}
