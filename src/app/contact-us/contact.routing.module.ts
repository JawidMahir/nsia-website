import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: ContactUsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
