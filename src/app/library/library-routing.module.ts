import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { ReportsComponent } from './reports/reports.component';
import { LibraryComponent } from './library/library.component';
import { CanDeactivateGuard } from '../services/can-deactivate.guard';

const libraryRoutes: Routes = [
  {
    path: '',
    component: LibraryHomeComponent,
    children: [
      {
        path: '',
        component: LibraryComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
