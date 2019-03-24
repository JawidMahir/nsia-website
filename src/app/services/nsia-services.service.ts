import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';


@Injectable({
  providedIn: 'root'
})
export class NsiaServicesService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  getDuptyDetails(deputyType, tag, customP) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': deputyType,
        'filter[tag]': tag,
        fields: customP.join(',')
      }
    });
  }

  getDepartmentDetails(id, customP) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[p]': id,
        fields: customP.join(',')
      }
    });
  }

  getProvinces() {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': 'provincial_services',
        fields: 'acf.province,id'
      }
    });
  }

  getProvinceDetails(id, customP) {
    return this.http.get(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': 'provincial_services',
        'filter[p]': id,
        fields: customP.join(',')
      }
    });
  }


  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }



}
