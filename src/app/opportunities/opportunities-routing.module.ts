import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';
import { OpportunitiesHomeComponent } from './opportunities-home/opportunities-home.component';
import { ProcurementsComponent } from './procurements/procurements.component';
import { TendersComponent } from './tenders/tenders.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { TenderComponent } from './tender/tender.component';
import { JobsComponent } from './jobs/jobs.component';


const oppRoutes: Routes = [
  {
    path: '',
    component: OpportunitiesHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'administration', component: AdministrationComponent },
          { path: 'procurements', component: ProcurementsComponent },
          { path: 'tenders', component: TendersComponent },
          { path: 'tender/:id', component: TenderComponent },
          { path: 'job/:id', component: AdministrationComponent },
          { path: 'jobs', component: JobsComponent },
          { path: '', component: OpportunitiesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(oppRoutes)],
  exports: [RouterModule]
})
export class OpportunitiesRoutingModule { }
