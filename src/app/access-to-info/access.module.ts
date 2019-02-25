import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AccessRoutingModule } from './access-routing.module';

import { AccessHomeComponent } from './access-home/access-home.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { NationalIdentityComponent } from './national-identity/national-identity.component';
import { PoliciesComponent } from './policies/policies.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AccessToInfoComponent } from './access-to-info/access-to-info.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AccessHomeComponent,
    GuidelinesComponent,
    NationalIdentityComponent,
    PoliciesComponent,
    RegulationsComponent,
    StatisticsComponent,
    AccessToInfoComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
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
export class AccessModule { }
