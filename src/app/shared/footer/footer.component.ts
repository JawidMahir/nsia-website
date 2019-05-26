import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
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
  validEmail = false;
  constructor(private dataService: DataService) {
    this.year = new Date().getFullYear();

  }

  ngOnInit() { }

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
        swal('Subscribed', 'You will receive our publications', 'success');
        this.email = '';
        this.validEmail = false;
      }
    }, (error) => {
      // tslint:disable-next-line: no-string-literal
     // console.log('Error: ', error['status']);
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 400) {
        swal('Opps', 'Email address already exist', 'warning');
      }

      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 500) {
        swal('Opps', 'Cannot make request at this moment', 'warning');
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

}
