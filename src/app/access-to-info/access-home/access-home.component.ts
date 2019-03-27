import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-access-home',
  templateUrl: './access-home.component.html',
  styleUrls: ['./access-home.component.css']
})
export class AccessHomeComponent implements OnInit {

  currentSection = 'section1';
  constructor() { }

  ngOnInit() {
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section, el) {
    const target = document.querySelector('#' + section) as HTMLElement;
    $('#ai-sections').animate({ scrollTop: (target.offsetTop - $('#ai-sections').offset().top) }, 600);

    $('.section-title').removeClass('active-section');
    $('#' + section).find('.section-title').addClass('active-section');

    $('.ai-type').removeClass('active-type');
    $(el).closest('.ai-type').addClass('active-type');

  }

  toggleNavbar() {
    const navWidth = (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width;
    console.log('navWidth: ', navWidth);
    let rtl = false;

    if ($('body').hasClass('rtl')) {
      rtl = true;
    }

    if (navWidth === '0px') {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '19vw';
      if (rtl) {
        (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginRight = '19vw';
      } else {
        (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '19vw';
      }
      $('.sidebar-toggler i').removeClass('fa-chevron-right').addClass('fa-chevron-left');

    } else {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '0px';
      if (rtl) {
        (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginRight = '0px';
      } else {
        (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '0px';
      }
      $('.sidebar-toggler i').removeClass('fa-chevron-left').addClass('fa-chevron-right');
    }

  }

  hideFullInfo() {
    $('.full-details').hide();
  }

  showInfo() {
    $('.full-details').show();
  }

}
