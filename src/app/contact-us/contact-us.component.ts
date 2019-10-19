import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { DataService } from '../data.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  loading = true;
  lang;
  contacts;
  contactForm: FormGroup;

  newsReadMore = '/media-room/news-updates';
  constructor(private dataService: DataService,
              private translate: TranslateService) {}

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    this.getContactData();
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(''),
      organization: new FormControl(''),
      message: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.dataService.addContactData(this.contactForm.value).subscribe((contactData) => {
      swal(this.translate.instant('input.submit'), this.translate.instant('alert.message'), 'success');
      // console.log('data: ', contactData);
      this.contactForm.reset();
    }, (error) => {
      // tslint:disable-next-line: no-string-literal
      // console.log('Error: ', error['status']);
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 400) {
        swal(this.translate.instant('sorry.message'), this.translate.instant('not.completed.msg'), 'warning');
      }
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 500) {
        swal(this.translate.instant('sorry.message'), this.translate.instant('unsucess.msg'), 'warning');
      }
    });
  }
  getContactData() {
    const customParams = [];
    customParams.push('acf');

    this.dataService.getContactData(customParams, 'contact').subscribe((data) => {
      // console.log('Jobs details: ', data);
      this.loading = false;
      if (data.length > 0) {
        this.contacts = data[0];
        //console.log(this.contacts)
      }


    });

  }
}
