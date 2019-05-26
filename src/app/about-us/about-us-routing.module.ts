import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutNsiaComponent } from './about-nsia/about-nsia.component';
import { GenderComponent } from './gender/gender.component';
import { StructureComponent } from './structure/structure.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { BioComponent } from './bio/bio.component';
import { PoliciesComponent } from './policies/policies.component';


const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'about-nsia', component: AboutNsiaComponent },
          { path: 'activity-achievments', component: GenderComponent },
          { path: 'structure', component: StructureComponent },
          { path: 'biographies', component: BiographiesComponent },
          { path: 'policies', component: PoliciesComponent },
          { path: 'bio/:id', component: BioComponent },
          { path: '', component: AboutNsiaComponent}
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
