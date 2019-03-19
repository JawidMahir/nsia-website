import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutUsRoutingModule } from './about-us-routing.module';

// Import shared Module here
import { SharedModule } from '../shared/shared.module';


import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutNsiaComponent } from './about-nsia/about-nsia.component';
import { FinanceComponent } from './finance/finance.component';
import { OrganizationComponent } from './organization/organization.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { GenderComponent } from './gender/gender.component';
import { StructureComponent } from './structure/structure.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { AboutUsComponent } from './about-us/about-us.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutHomeComponent,
    AboutNsiaComponent,
    FinanceComponent,
    OrganizationComponent,
    VisionMissionComponent,
    GenderComponent,
    StructureComponent,
    BiographiesComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HttpClientModule,
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
