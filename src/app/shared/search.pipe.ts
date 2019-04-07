import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  fText;

  transform(list: any[], filterText: string): any {
    this.fText = filterText;
    return list ? list.filter(this.filterContents) : [];
  }

  filterContents = (item) => {
    if (item.hasOwnProperty('slug')) {
      if ((item.title.search(new RegExp(this.fText, 'i')) > -1) || (item.slug.search(new RegExp(this.fText, 'i')) > -1)) {
        return true;
      } else {
        return false;
      }
    } else {
      if ((item.title.search(new RegExp(this.fText, 'i')) > -1)) {
        return true;
      } else {
        return false;
      }
    }

  }
}
