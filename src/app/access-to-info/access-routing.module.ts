import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessHomeComponent } from './access-home/access-home.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { NationalIdentityComponent } from './national-identity/national-identity.component';
import { PoliciesComponent } from './policies/policies.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AccessToInfoComponent } from './access-to-info/access-to-info.component';


const accessRoutes: Routes = [
  {
    path: '',
    component: AccessHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'guidelines', component: GuidelinesComponent },
          { path: 'nid', component: NationalIdentityComponent },
          { path: 'policies', component: PoliciesComponent },
          { path: 'regualtions', component: RegulationsComponent },
          { path: 'statistics', component: StatisticsComponent },
          { path: '', component: AccessToInfoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(accessRoutes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
