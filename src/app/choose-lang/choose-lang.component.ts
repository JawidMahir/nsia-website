import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-choose-lang',
  templateUrl: './choose-lang.component.html',
  styleUrls: ['./choose-lang.component.css']
})
export class ChooseLangComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private trs: TranslateService) { }
  year;
  lang = '';
  ngOnInit() {
    this.year = new Date().getFullYear();
    localStorage.removeItem('lang');
  }

  detectLanguage(el) {
    this.lang = $(el).closest('.lan').attr('id');
    this.dataService.language = this.lang;
    if (this.lang === 'en') {
      this.dataService.sliderDirection = 'ltr_slider';
    } else {
      this.dataService.sliderDirection = 'rtl_slider';
    }
    this.trs.use(this.lang);
    localStorage.setItem('lang', this.lang);
    this.router.navigate([this.dataService.redirectPath]);

  }

}
