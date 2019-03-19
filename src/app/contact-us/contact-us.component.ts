import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { DataService } from '../data.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm : FormGroup;
  newsBriefs = {
    news: ''
  };
  newsReadMore = '/media-room/news-updates';
  constructor(private dataService: DataService,) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'phone' : new FormControl(""),
      'organization' : new FormControl(""),
      'message' : new FormControl(null,Validators.required)
    });
  }
  onSubmit(){
    this.dataService.addContactData(this.contactForm.value).subscribe((contactData) => {
        swal('Submit', 'You send successfully your feedback', 'success');
      console.log('data: ', contactData);
      this.contactForm.reset();
    }, (error) => {
      // tslint:disable-next-line: no-string-literal
      console.log('Error: ', error['status']);
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 400) {
        swal('Opps', 'Form data does not completed!', 'warning');
      }
      // tslint:disable-next-line: no-string-literal
      if (error['status'] === 500) {
        swal('Opps', 'Cannot make request at this moment', 'warning');
      }
    });
  }
}
