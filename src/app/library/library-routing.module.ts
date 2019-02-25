import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { ReportsComponent } from './reports/reports.component';
import { LibraryComponent } from './library/library.component';

const libraryRoutes: Routes = [
  {
    path: '',
    component: LibraryHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'articles', component: ArticlesComponent },
          { path: 'reports', component: ReportsComponent },
          { path: '', component: LibraryComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
