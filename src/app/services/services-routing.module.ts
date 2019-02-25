import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccraComponent } from './accra/accra.component';
import { GisComponent } from './gis/gis.component';
import { InformationSystemComponent } from './information-system/information-system.component';
import { ProvincialServicesComponent } from './provincial-services/provincial-services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ServicesComponent } from './services/services.component';


const servicesRoutes: Routes = [
  {
    path: '',
    component: ServicesHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'accra', component: AccraComponent },
          { path: 'gis', component: GisComponent },
          { path: 'info-sys', component: InformationSystemComponent },
          { path: 'statistics', component: StatisticsComponent },
          { path: 'province-service', component: ProvincialServicesComponent },
          { path: '', component: ServicesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicesRoutes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
