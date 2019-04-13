import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';

// Import shared Module here
import { SharedModule } from '../shared/shared.module';

import { AdministrationComponent } from './administration/administration.component';
import { OpportunitiesHomeComponent } from './opportunities-home/opportunities-home.component';
import { ProcurementsComponent } from './procurements/procurements.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { JobsComponent } from './jobs/jobs.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AdministrationComponent,
    OpportunitiesHomeComponent,
    ProcurementsComponent,
    OpportunitiesComponent,
    ProcurementComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    })
  ]
})
export class OpportunitiesModule { }
