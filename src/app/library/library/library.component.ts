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
  p: number = 1;
  total:number = 1;
  customParams = [];
  contents = '';
  filterText;
  id;
  libraryContents = {
    books:[],
    surveys: [],
    reports: [],
    magazine: [],
    articles: [],
    newsletter: [],
    policies: []
  };
  totalPosts = {
    books:1,
    surveys: 1,
    reports: 1,
    magazine: 1,
    articles: 1,
    newsletter: 1,
    policies: 1
  };
  constructor(private libraryService: LibraryServicesService) { }

  ngOnInit() {
    let element: HTMLElement;
    if (localStorage.getItem('library-type')) {
      element = document.getElementById('surveys') as HTMLElement;
    } else {
      element = document.getElementById('books') as HTMLElement;
    }
    this.customParams.push('title.rendered');
    this.customParams.push('date');
    this.customParams.push('better_featured_image.source_url');
    this.customParams.push('better_featured_image.alt_text');
    this.customParams.push('acf.library_attachment.url');
    this.customParams.push('acf.library_attachment.filename');
    // const element: HTMLElement = document.getElementById('books') as HTMLElement;
    // element.click();
    element.click();
  }

  showLibraries(el) {

    this.p = 1;
    this.id = $(el).closest('.lib-btn').attr('id');
    $('.lib-btn').removeClass('active-libraray');
    $(el).closest('.lib-btn').addClass('active-libraray');
    this.getData(this.customParams, this.p);

  }

  getData(customParams, page) { 
    if(Object.keys(this.libraryContents[this.id]).length !== this.totalPosts[this.id]){
      this.libraryService.getLibraryData(customParams, this.id, page).subscribe((libraryData => { 
        this.totalPosts[this.id] = parseInt(libraryData.headers.get('X-WP-Total'));
        this.total = this.totalPosts[this.id];
        this.libraryContents[this.id] = this.libraryContents[this.id].concat(this.refineData(libraryData.body));
        console.log(this.libraryContents[this.id]);
        this.contents = this.libraryContents[this.id];
        }));
    }else{
      this.contents = this.libraryContents[this.id];
      this.total = this.totalPosts[this.id];
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
  pageChanged(page: number) {
    this.getData(this.customParams, page);
    this.p = page;
  }

}
