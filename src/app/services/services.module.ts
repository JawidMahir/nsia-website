import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ServicesRoutingModule } from './services-routing.module';

import { AccraComponent } from './accra/accra.component';
import { GisComponent } from './gis/gis.component';
import { InformationSystemComponent } from './information-system/information-system.component';
import { ProvincialServicesComponent } from './provincial-services/provincial-services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ServicesComponent } from './services/services.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AccraComponent,
    GisComponent,
    InformationSystemComponent,
    ProvincialServicesComponent,
    ServicesHomeComponent,
    StatisticsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
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
export class ServicesModule { }
