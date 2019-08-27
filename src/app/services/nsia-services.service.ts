import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { DomSanitizer} from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class NsiaServicesService {

  constructor(private http: HttpClient,
              private dataService: DataService,
              private sanitizer: DomSanitizer) { }

  getDuptyDetails(deputyType, tag, customP) {
    return this.http.get<Array<any>>(this.dataService.api + 'posts', {
      params: {
        lang: this.dataService.language,
        'filter[category_name]': deputyType,
        'filter[posts_per_page]':'100',
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
        'filter[posts_per_page]':'100',
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

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //return this.sanitizer.bypassSecurityTrustHtml(url);
  }
   objHasKeys(obj, keys) {
    var next = keys.shift();
    return obj[next] && (! keys.length || this.objHasKeys(obj[next], keys));
  }

}
