import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccraComponent } from './accra/accra.component';
import { GisComponent } from './gis/gis.component';
import { InformationSystemComponent } from './information-system/information-system.component';
import { ProvincialServicesComponent } from './provincial-services/provincial-services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ServicesComponent } from './services/services.component';
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
