import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesHomeComponent } from './services-home/services-home.component';
import { CanDeactivateGuard } from './can-deactivate.guard';


const servicesRoutes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: ServicesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicesRoutes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
