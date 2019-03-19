import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ParamMap, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NsiaServicesService } from '../nsia-services.service';
import { DataService } from '../../data.service';
import { switchMap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  // dummy data for menus
  menus = [];
  serviceName = 'statistics';

  // A global variable used to determine the type of service
  serviceType = 'stats';

  serviceContents = {
    sdu: Object,
    stats: Object,
    gis: Object,
    nid: Object
  };

  departmentsFullDetails = [];

  contents;
  deputyDepartments;
  deputyHeadships;


  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dataService: DataService,
    private nsiaServices: NsiaServicesService,
  ) { }

  ngOnInit() {
    const that = this;
    // window.onresize = this.windowResize;

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    const sType = this.dataService.serviceType;
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

    this.dataService.serviceType = 'stats';
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
  }

  getDeputyDetails(deputyType, tag) {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');
    customParams.push('acf.name');
    customParams.push('better_featured_image.source_url');

    this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe((data) => {
      if (data[0]) {
        this.contents = data[0];
        console.log('Service data: ', this.contents);
        // strip html tags
        this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
        this.keepContentsLocal(deputyType);
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
    customParams.push('acf.department');

    this.nsiaServices.getDuptyDetails(deputyType, tag, customParams).subscribe((data) => {
      if (tag === 'department') {
        this.deputyDepartments = data;
        console.log('Departments data: ', this.deputyDepartments);
      } else {
        this.deputyHeadships = data;
        console.log('Headships data: ', this.deputyHeadships);
      }

      this.arrangeDepartments(deputyType);
    });
  }

  getDepartmentDetails(id, el) {

    this.contents = null;
    console.log('ID is: ', id);
    console.log($(el).closest('.m-item-c').attr('aria-expanded'));
    const customParams = [];
    let flag = false;

    for (const dep of this.departmentsFullDetails) {
      if (dep.id === id) {
        this.contents = dep;
        console.log('local se: ', dep);

        flag = true;
        break;
      }
    }

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
          this.contents.content.rendered = this.nsiaServices.htmlToPlaintext(this.contents.content.rendered);
          this.departmentsFullDetails.push(data[0]);
        }
      });
    }
  }

  arrangeDepartments(deputyType) {
    let tempHeadships = [];
    if (this.deputyDepartments && this.deputyHeadships) {
      for (const dep of this.deputyDepartments) {
        tempHeadships = [];
        for (const hdShip of this.deputyHeadships) {
          if (dep.acf.department === hdShip.acf.department) {
            tempHeadships.push(hdShip);
          }
        }
        dep.headships = tempHeadships;
      }
    }

    console.log('after', this.deputyDepartments);
    this.assignDepartmentsToDeputy(deputyType);
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

    if (navWidth === '0px') {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '25vw';
      (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '25vw';
      $('.sidebar-toggler i').removeClass('fa-chevron-right').addClass('fa-chevron-left');

    } else {
      (document.getElementsByClassName('sidebar-nav')[0] as HTMLElement).style.width = '0px';
      (document.getElementsByClassName('sidebar-toggler')[0] as HTMLElement).style.marginLeft = '0px';
      $('.sidebar-toggler i').removeClass('fa-chevron-left').addClass('fa-chevron-right');
    }

  }

  toggleServices(el) {

    const id = $(el).closest('.m-service').attr('id');
    this.serviceType = id;
    this.serviceName = $(el).closest('.m-service').find('.sr-name p').html();
    console.log('service id: ', id);

    $('.m-service').removeClass('active-service');
    $(el).closest('.m-service').addClass('active-service');

    // reset the menu highlights
    this.activeMenu($('.sidebar-title'));


    if (this.serviceContents[id].title) {
      console.log('from local ', this.serviceContents[id]);
      this.contents = this.serviceContents[id];
      this.deputyDepartments = this.contents.departments;
    } else {
      let serviceType;
      this.contents = null;
      this.deputyDepartments = null;

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
          serviceType = 'national_identity_service';
          this.getDeputyDetails(serviceType, 'service');
          this.getDeputyDepartments(serviceType, 'department');
          this.getDeputyDepartments(serviceType, 'headship');
          break;
      }
    }



  }

}
