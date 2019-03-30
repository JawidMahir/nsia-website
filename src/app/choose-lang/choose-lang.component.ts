import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choose-lang',
  templateUrl: './choose-lang.component.html',
  styleUrls: ['./choose-lang.component.css']
})
export class ChooseLangComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private trs: TranslateService) { }
  year;
  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  detectLanguage(lang) {
    this.dataService.language = lang;
    this.trs.use(lang);
    localStorage.setItem('lang', lang);
    this.router.navigate([this.dataService.redirectPath]);

  }

}