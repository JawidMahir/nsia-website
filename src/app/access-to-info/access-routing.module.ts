import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessHomeComponent } from './access-home/access-home.component';


const accessRoutes: Routes = [
  {
    path: '',
    component: AccessHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(accessRoutes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
