import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutUsRoutingModule } from './about-us-routing.module';

// Import shared Module here
import { SharedModule } from '../shared/shared.module';


import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutNsiaComponent } from './about-nsia/about-nsia.component';
import { ActivityComponent } from './activity/activity.component';
import { StructureComponent } from './structure/structure.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { BioComponent } from './bio/bio.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutHomeComponent,
    AboutNsiaComponent,
    ActivityComponent,
    StructureComponent,
    BiographiesComponent,
    BioComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    })
  ]
})
export class AboutUsModule { }
