import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NewsComponent } from './news/news.component';
import { PromotionalMaterialsComponent } from './promotional-materials/promotional-materials.component';

import { SearchFilterPipe } from './search.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NewsComponent,
    PromotionalMaterialsComponent,
    SearchFilterPipe
  ],
  exports: [
    NewsComponent,
    PromotionalMaterialsComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
  ]
})
export class SharedModule { }
