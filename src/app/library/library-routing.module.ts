import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { CanDeactivateGuard } from '../services/can-deactivate.guard';

const libraryRoutes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
