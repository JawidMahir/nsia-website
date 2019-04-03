import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, ParamMap, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NsiaServicesService } from '../nsia-services.service';
import { DataService } from '../../data.service';
import { switchMap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesHomeComponent implements OnInit, AfterViewInit {

  // dummy data for menus
  menus = [];
  srName = 'foo';
  serviceName;


  // A global variable used to determine the type of service
  serviceType = 'stats';
  provincialServices = false;
  provinces;

  serviceContents = {
    sdu: Object,
    stats: Object,
    gis: Object,
    nid: Object
  };

  departmentsFullDetails = [];
  dept;
  contents;
  deputyDepartments = [];
  deputyHeadships = [];


  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dataService: DataService,
    private nsiaServices: NsiaServicesService,
  ) { }

  ngOnInit() {
    const that = this;
    this.serviceName = 'statistics';
    // window.onresize = this.windowResize;


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });


    /**
     * Change service on dropdown click, if the route is pointing to service component itself
     */
    this.dataService.callToServiceMethodSource.subscribe(() => {
      console.log('Service Component is called');
      this.showServiceDetails();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showServiceDetails();
    });
  }

  showServiceDetails() {
    let sType;
    if (localStorage.getItem('serviceType')) {
      sType = localStorage.getItem('serviceType');
    } else {
      sType = this.dataService.serviceType;
    }
    localStorage.setItem('serviceType', sType);
    console.log('showServiceMethod: sType: ', sType);
    if (sType === 'prs') {
      this.provincialServices = true;
      this.contents = null;
      this.getProvinces();
      $('.m-service').removeClass('active-service');
      $('.provinces li:first-child').addClass('active-province');
    } else {
      this.provincialServices = false;
      switch (sType) {
        case 'sdu':
          $('#sdu').trigger('click');
          break;
        case 'gis':
          $('#gis').trigger('click');
          break;
        case 'stats':
          $('#stats').trigger('click');
          break;
        case 'nid':
          $('#nid').trigger('click');
          break;
      }
    }


    // this.dataService.serviceType = 'stats';
  }

  keepContentsLocal(deputyType) {
    switch (deputyType) {
      case 'statistics_services':
        this.serviceContents.stats = this.contents;
        break;
      case 'gis_services':
        this.serviceContents.gis = this.contents;
        break;
      case 'national_identity_services':
        this.serviceContents.nid = this.contents;
        break;
      case 'sdu_services':
        this.serviceContents.sdu = this.contents;
        break;
    }
  }

  assignDepartmentsToDeputy(deputyType) {
    switch (deputyType) {
      case 'statistics_services':
        this.serviceContents.stats['departments'] = this.deputyDepartments;
        break;
      case 'gis_services':
        this.serviceContents.gis['departments'] = this.deputyDepartments;
        break;
      case 'national_identity_services':
        this.serviceContents.nid['departments'] = this.deputyDepartments;
        break;
      case 'sdu_services':
        this.serviceContents.sdu['departments'] = this.deputyDepartments;
        break;
    }

    console.log('departments assigned', this.serviceContents);

  }

  getDeputyDetails(deputyType, tag) {
    console.log('getting service data');

    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.name');
    customParams.push('better_featured_image.source_url');

    this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe((data) => {
      if (data[0]) {
        // this.contents = data[0];
        this.contents = this.styleDetailsLink(data[0]);
        console.log('Service data: ', this.contents);
        this.keepContentsLocal(deputyType);
        // strip html tags
        // this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);

      }

    });

  }

  styleDetailsLink(data) {
    let contentRendered;
    if (data.hasOwnProperty('content')) {
      contentRendered = data.content.rendered;

      // wrap contents in a div first
      contentRendered = '<div>' + contentRendered + '</div>';

      const details = $.parseHTML(contentRendered);
      if ($(details).has('a')) {
        $(details).find('a').attr('target', '_blank');
        $(details).find('a').closest('p').addClass('attachment');
        $(details).find('a').closest('p').prepend('<img src="../../../assets/images/pdf.png" alt="pdf">');
      }

      data.content.rendered = $(details).html();
    }
    console.log('details are done');


    return data;
  }

  getProvinces() {
    this.nsiaServices.getProvinces().subscribe((data) => {
      console.log('Provinces: ', data);
      if (data.length > 0) {
        this.provinces = data;
        this.getProvinceDetails(this.provinces[0].id);
      }
    });
  }

  /**
   *
   * @param deputyType is either department or headship
   * @param tag is department
   */

  getDeputyDepartments(deputyType, tag) {
    const customParams = [];
    customParams.push('id');
    customParams.push('title.rendered');
    customParams.push('acf');

    this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe((data) => {
      if (tag === 'department') {
        this.deputyDepartments = data;
        console.log('Departments data: ', this.deputyDepartments);
      } else {
        this.deputyHeadships = data;
        console.log('Headships data: ', this.deputyHeadships);
      }
      // this.styleDetailsLink();

      this.arrangeDepartments(deputyType);
    });
  }

  imageError(el) {
    el.onerror = '';
    el.src = '../../assets/images/noimage.png';
    console.log(el);
    return true;
  }

  getDepartmentDetails(id, el) {

    this.contents = null;
    console.log('ID is: ', id);
    console.log($(el).closest('.m-item-c').attr('aria-expanded'));
    const customParams = [];
    const flag = false;

    // for (const dep of this.departmentsFullDetails) {
    //   if (dep.id === id) {
    //     this.contents = dep;
    //     console.log('local se: ', dep);

    //     flag = true;
    //     break;
    //   }
    // }

    if (!flag) {
      customParams.push('id');
      customParams.push('title.rendered');
      customParams.push('content.rendered');
      customParams.push('acf.name');
      customParams.push('better_featured_image.source_url');

      this.nsiaServices.getDepartmentDetails(id, customParams).subscribe((data) => {
        console.log('Department full data: ', data);
        if (data[0]) {
          this.contents = data[0];
          //  this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
          this.departmentsFullDetails.push(data[0]);
        }
      });
    }

    // this.styleDetailsLink('department');

  }

  arrangeDepartments(deputyType) {
    let tempHeadships = [];
    this.dept = deputyType.split('_')[0] + '_department';
    console.log('deputy related department: ', this.dept);


    if (this.deputyDepartments.length > 0 && this.deputyHeadships.length > 0) {
      console.log('I am called ', this.deputyDepartments, this.deputyHeadships);
      for (const dep of this.deputyDepartments) {
        tempHeadships = [];
        for (const hdShip of this.deputyHeadships) {
          if (dep.acf[this.dept] === hdShip.acf[this.dept]) {
            tempHeadships.push(hdShip);
          }
        }
        dep.headships = tempHeadships;
      }

      this.assignDepartmentsToDeputy(deputyType);
      console.log('after arrangement', this.deputyDepartments);
    }

  }

  provinceData(pItem, province) {

    console.log('Province: ', province);
    $('.province').removeClass('active-province');
    $(pItem).closest('.province').addClass('active-province');

    this.getProvinceDetails(province);
  }

  getProvinceDetails(id) {

    this.contents = null;
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.name');
    customParams.push('acf.province');
    customParams.push('better_featured_image.source_url');

    this.nsiaServices.getProvinceDetails(id, customParams).subscribe((data) => {
      this.contents = data[0];
      // this.styleDetailsLink('province');
      this.contents.title.rendered = this.nsiaServices.htmlToPlaintext(this.contents.title.rendered);
      // this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
      console.log(id + ' data:', this.contents);
    });
  }

  activeMenu(menuItem) {
    const that = this;
    // this.contents = null;
    $('.menu-item').removeClass('active-item');
    $(menuItem).closest('.menu-item').addClass('active-item');

    if ($(menuItem).closest('.menu-item').hasClass('sidebar-title')) {
      if (this.serviceContents[this.serviceType].title) {
        this.contents = this.serviceContents[this.serviceType];
        console.log('from this click ', this.serviceContents);
      } else {
        this.contents = null;
      }
    }
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

  toggleServices(el) {
    console.log('ToggleService Called');

    this.provincialServices = false;
    console.log('for array type: ', this.deputyDepartments instanceof Array);

    const id = $(el).closest('.m-service').attr('id');
    this.serviceType = id;
    // The departments in each service has a different key name, so we have to change it
    this.dept = id + '_department';
    console.log('department type: ', this.dept);

    localStorage.setItem('serviceType', id);

    this.serviceName = $(el).closest('.m-service').find('.sr-name p').html();
    console.log('service name: ', this.serviceName);
    console.log('service id: ', id);

    $('.m-service').removeClass('active-service');
    $(el).closest('.m-service').addClass('active-service');

    // reset the menu highlights
    this.activeMenu($('.sidebar-title'));


    /**
     * The following commented code is used to fetch data from already fetched data
     * but due to asynchronous behaviour of it, we cannot predict the order of data coming and hence
     * some bugs and errors occure
     * -- I will check this in the next version, for now let it be commented
     */


    // if (this.serviceContents[id].title) {
    //   console.log('from local ', this.serviceContents[id]);
    //   this.contents = this.serviceContents[id];
    //   this.deputyDepartments = this.serviceContents[id].departments;
    //   this.cdref.detectChanges();
    //   console.log('local departments: ', this.deputyDepartments);
    //   console.log('departments type : ', this.deputyDepartments instanceof Array);
    // } else {

    let serviceType;
    this.contents = null;
    this.deputyDepartments = [];

    switch (id) {
      case 'sdu':
        serviceType = 'sdu_services';
        this.getDeputyDetails(serviceType, 'service');
        this.getDeputyDepartments(serviceType, 'department');
        this.getDeputyDepartments(serviceType, 'headship');
        break;

      case 'stats':
        serviceType = 'statistics_services';
        this.getDeputyDetails(serviceType, 'service');

        this.getDeputyDepartments(serviceType, 'department');
        this.getDeputyDepartments(serviceType, 'headship');
        break;

      case 'gis':
        serviceType = 'gis_services';
        this.getDeputyDetails(serviceType, 'service');
        this.getDeputyDepartments(serviceType, 'department');
        this.getDeputyDepartments(serviceType, 'headship');
        break;

      case 'nid':
        serviceType = 'national_identity_services';
        this.getDeputyDetails(serviceType, 'service');
        this.getDeputyDepartments(serviceType, 'department');
        this.getDeputyDepartments(serviceType, 'headship');
        break;
    }
    // }



  }

  canDeactivate() {
    if (localStorage.getItem('serviceType')) {
      localStorage.removeItem('serviceType');
      return true;
    } else {
      return true;
    }
  }

}
