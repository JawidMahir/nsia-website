import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
export class HomeRoutingModule { }
