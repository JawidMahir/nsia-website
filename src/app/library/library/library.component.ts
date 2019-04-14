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
  p = 1;
  total = 1;
  customParams = [];
  contents = [];
  filterText;
  id;
  libraryContents = {
    books: [],
    surveys: [],
    reports: [],
    magazine: [],
    articles: [],
    newsletter: [],
    policies: []
  };
  totalPosts = {
    books: 1,
    surveys: 1,
    reports: 1,
    magazine: 1,
    articles: 1,
    newsletter: 1,
    policies: 1
  };

  dummy = [
    1, 2, 3, 4, 5, 6, 7, 87, 5, 6, 7, 5, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ];
  constructor(private libraryService: LibraryServicesService) { }

  ngOnInit() {
    let element: HTMLElement;
    if (localStorage.getItem('library-type')) {
      const libType = localStorage.getItem('library-type');
      switch (libType) {
        case 'books':
          element = document.getElementById('books') as HTMLElement;
          break;
        case 'surveys':
          element = document.getElementById('surveys') as HTMLElement;
          break;
        case 'reports':
          element = document.getElementById('reports') as HTMLElement;
          break;
        case 'magazines':
          element = document.getElementById('magazine') as HTMLElement;
          break;
        case 'articles':
          element = document.getElementById('articles') as HTMLElement;
          break;
        case 'newsletters':
          element = document.getElementById('newsletter') as HTMLElement;
          break;
        case 'policies':
          element = document.getElementById('policies') as HTMLElement;
          break;
      }
    } else {
      element = document.getElementById('books') as HTMLElement;
    }
    this.customParams.push('title.rendered');
    this.customParams.push('date');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('content');
    this.customParams.push('acf.library_attachment.filename');
    // const element: HTMLElement = document.getElementById('books') as HTMLElement;
    // element.click();
    element.click();
  }

  showLibraries(el) {
    this.p = 1;
    this.id = $(el).closest('.lib-btn').attr('id');
    localStorage.setItem('library-type',this.id);
    $('.lib-btn').removeClass('active-libraray');
    $(el).closest('.lib-btn').addClass('active-libraray');
    this.getData(this.customParams, this.p);
  }

  getData(customParams, page) {
    if (Object.keys(this.libraryContents[this.id]).length < page*8) {
      this.libraryService.getLibraryData(customParams, this.id, page).subscribe((libraryData => {
        console.log('full response: ', libraryData);

        this.totalPosts[this.id] = Number(libraryData.headers.get('X-WP-Total'));
        this.total = this.totalPosts[this.id];
        console.log('total posts: ', this.total);

        const cb = this.getAttachments(libraryData.body);
        console.log('library contents: ', cb);
        this.libraryContents[this.id] = this.libraryContents[this.id].concat(this.refineData(cb));
        console.log(this.libraryContents[this.id]);
        const begin = ((page - 1) * 8)
        const end = begin + 8;
        this.contents = this.libraryContents[this.id].slice(begin, end);
      }));
    } else {
      const begin = ((page - 1) * 8)
      const end = begin + 8;
      this.contents = this.libraryContents[this.id].slice(begin, end);
      this.total = this.totalPosts[this.id];
      this.contents = this.libraryContents[this.id];
      console.log('Library all contents: ', this.libraryContents);

    }

  }

  getAttachments(data) {
    let tempLinksArray;
    // const pattern = /\"[A-Za-z0-9_@./#&\s>"=\-:]*\"/g;
    const pattern = /\".*\"/g;
    for (const ps of data) {
      if (ps.hasOwnProperty('content')) {
        tempLinksArray = [];
        tempLinksArray = ps.content.rendered.match(pattern);
        if (tempLinksArray) {
          tempLinksArray[0] = tempLinksArray[0].replace(new RegExp('"', 'g'), '');
          console.log('pattern result: ', tempLinksArray[0]);
          ps.attachment = tempLinksArray[0];
        }
      }
    }

    return data;
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.svg';
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
  pageChanged(page: number) {
    this.contents = [];
    this.p = page;
  //  this.getData(this.customParams, page);
    console.log('current page: ', this.p);
  }

}
