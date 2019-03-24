import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LibraryRoutingModule } from './library-routing.module';

import { ArticlesComponent } from './articles/articles.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { ReportsComponent } from './reports/reports.component';
import { LibraryComponent } from './library/library.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    ArticlesComponent,
    LibraryHomeComponent,
    ReportsComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    })
  ]
})
export class LibraryModule { }