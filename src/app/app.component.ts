import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NSIA';
  currentPath;

  constructor(private router: Router) { }

  ngOnInit() {
    const that = this;
    // If the page is refreshed then this is called
    this.createNavigationBreadPath();


    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        that.createNavigationBreadPath();
      }
    });
  }
  createNavigationBreadPath() {
    this.currentPath = this.router.url.toString().split('/');

    if (this.currentPath.includes('home')) {
      this.currentPath = [];
    }
    console.log('path:  ', this.currentPath);
  }

}
