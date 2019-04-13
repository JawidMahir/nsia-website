import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { MediaRoutingModule } from './media-routing.module';

// Import shared Module here
import { SharedModule } from '../shared/shared.module';

import { EventsComponent } from './events/events.component';
import { MediaRoomHomeComponent } from './media-room-home/media-room-home.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { MediaRoomComponent } from './media-room/media-room.component';
import { MediaGeneralTemplateComponent } from './media-general-template/media-general-template.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    EventsComponent,
    MediaRoomHomeComponent,
    NewsUpdatesComponent,
    PressReleaseComponent,
    MediaRoomComponent,
    MediaGeneralTemplateComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
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
export class MediaModule {}
