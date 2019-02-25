import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutNsiaComponent } from './about-nsia/about-nsia.component';
import { FinanceComponent } from './finance/finance.component';
import { OrganizationComponent } from './organization/organization.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { GenderComponent } from './gender/gender.component';
import { StructureComponent } from './structure/structure.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { AboutUsComponent } from './about-us/about-us.component';


const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'about-nsia', component: AboutNsiaComponent },
          { path: 'vision-mission', component: VisionMissionComponent },
          { path: 'finance', component: FinanceComponent },
          { path: 'organization', component: OrganizationComponent },
          { path: 'gender', component: GenderComponent },
          { path: 'structure', component: StructureComponent },
          { path: 'biographies', component: BiographiesComponent },
          { path: '', component: AboutUsComponent}
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutUsRoutingModule { }
