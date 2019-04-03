import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { LibraryServicesService } from '../library-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  contents;
  p;
  filterText;
  libraryContents = {
    books: '',
    surveys: '',
    reports: '',
    magazine: '',
    // articles: '',
    newsletter: '',
    policies: ''
  };

  constructor(private libraryService: LibraryServicesService) { }

  ngOnInit() {
    let element: HTMLElement;
    if (localStorage.getItem('library-type')) {
      element = document.getElementById('surveys') as HTMLElement;
    } else {
      element = document.getElementById('books') as HTMLElement;
    }
    element.click();
  }

  showLibraries(el) {
    const id = $(el).closest('.lib-btn').attr('id');
    $('.lib-btn').removeClass('active-libraray');
    $(el).closest('.lib-btn').addClass('active-libraray');
    if (this.libraryContents[id] === '') {
      const customParams = [];
      customParams.push('title.rendered');
      customParams.push('date');
      customParams.push('better_featured_image.source_url');
      customParams.push('better_featured_image.alt_text');
      customParams.push('acf.library_attachment.url');
      customParams.push('acf.library_attachment.filename');
      this.libraryService.getLibraryData(customParams, id).subscribe((libraryData => {
        this.libraryContents[id] = libraryData;
        this.contents = this.refineData(this.libraryContents[id]);
      }));
    } else {
      this.contents = this.libraryContents[id];
    }
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    console.log(el);
    return true;
  }

  refineData(data) {
    for (const el of data) {
      if (!el.hasOwnProperty('date')) {
        el.date = '00' + 'th' + 'MNT' + '';
      } else {
        el.date = formatDate(el.date, 'dd MMM yyyy', 'en-US', '+0530');
      }
    }
    return data;
  }

  canDeactivate() {
    if (localStorage.getItem('library-type')) {
      localStorage.removeItem('library-type');
      return true;
    } else {
      return true;
    }
  }

}
