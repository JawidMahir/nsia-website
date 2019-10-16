import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as $ from 'jquery';
import swal from 'sweetalert';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  email: string;
  forms: any = [];
  validEmail = false;
  loading = true;
  constructor(
    private dataService: DataService,
    private translate: TranslateService) {
    this.year = new Date().getFullYear();
    translate.onLangChange.subscribe(lang => {

    });
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.forms = [];
      this.getForms();
    });
  }

  subscribe(email) {
    // console.log('user email: ', email);
    const user = {
      email,
      username: email,
      password: '1234546'
    };

    this.dataService.registerUserEmail(user).subscribe((data) => {
      // tslint:disable-next-line: no-string-literal
      if (data['code'] === 200) {
        swal(this.translate.instant('subscribed.msg'), this.translate.instant('success.subscribe.msg'), 'success');
        this.email = '';
        this.validEmail = false;
      }
    }, (error) => {
      // tslint:disable-next-line: no-string-literal
      // console.log('Error: ', error['status']);
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 400) {
        swal(this.translate.instant('sorry.message'), this.translate.instant('email.error.msg'), 'warning');
      }

      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 500) {
        swal(this.translate.instant('sorry.message'), this.translate.instant('unsucess.msg'), 'warning');
      }
    });
  }


  checkEmail() {
    // tslint:disable-next-line: max-line-length
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(this.email)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }

  }

  updateServiceType(sType) {
    this.dataService.serviceType = sType;
  }

  getForms() {
    const customParams = [];
    customParams.push('title.rendered');
    customParams.push('content.rendered');

    this.dataService.getForms(customParams, 'form', 20).subscribe((res: any) => {
      //console.log('res: ', res);
      res.forEach((el: any) => {
        const t = {
          title: this.titleCase(el.title.rendered),
          url: el.content.rendered.match(/"(.*)"/)[1]
        }
        // console.log('form is: ', t);
        this.forms.push(t);
        this.loading = false;
      });
    }, err => {
      // console.log('err: ', err);
    });
  }

  titleCase(str) {
    let splitStr = str.split(' ');
    console.log(splitStr)
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      if (splitStr[i] !== 'NSIA' && splitStr[i] !== 'NSIA_eNID' ) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

}
