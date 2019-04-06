import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-access-home',
  templateUrl: './access-home.component.html',
  styleUrls: ['./access-home.component.css']
})
export class AccessHomeComponent implements OnInit {

  currentSection = 'guidelines';
  accessInfo;
  selectedInfo;
  constructor(private info: InfoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAccessInfo();
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log('section changed: ', this.currentSection);
    $('.section-title').removeClass('active-section');

    if (this.currentSection === undefined) {
      $('#guidelines').find('.section-title').addClass('active-section');
    }

    $('#' + this.currentSection).find('.section-title').addClass('active-section');

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

  getScroll(el) {
    console.log($(el).scrollTop());
  }

  videoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  hideFullInfo() {
    $('.full-details').hide();
  }

  showInfo(info) {
    this.selectedInfo = info;
    $('.full-details').show();
  }

  getAccessInfo() {
    const customParams = [];
    customParams.push('id');
    customParams.push('title');
    customParams.push('content');
    customParams.push('better_featured_image.source_url');
    customParams.push('acf');

    this.info.getInfo(customParams).subscribe((data) => {
      console.log('access info: ', data);
      if (data) {
        this.accessInfo = data;
        for (const ai of this.accessInfo) {

          if (ai.hasOwnProperty('content')) {
            ai.content.rendered = this.info.htmlToPlaintext(ai.content.rendered);
          }
        }
      }
    });

  }

  sectionExist(sc) {
    for (const section of this.accessInfo) {
      if ((section.acf.info_type).toLowerCase() === sc) {
        return true;
      }
    }

    return false;
  }

  getBrief(ds) {
    if (ds.length > 40) {
      return ds.substring(0, 39) + '...';
    }
    return ds;
  }



  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.svg';
    console.log(el);
    return true;
  }

}
