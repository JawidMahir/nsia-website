import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaRoomHomeComponent } from './media-room-home/media-room-home.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { MediaGeneralTemplateComponent } from './media-general-template/media-general-template.component';
import { AccessInfoComponent } from './access-info/access-info.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { PoliciesComponent } from './policies/policies.component';


const mediaRoutes: Routes = [
  {
    path: '',
    component: MediaRoomHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'news-updates', component: NewsUpdatesComponent },
          { path: 'press-release', component: PressReleaseComponent },
          { path: 'media/:id', component: MediaGeneralTemplateComponent},
          { path: 'access-info', component: AccessInfoComponent },
          { path: 'rules-policies', component: PoliciesComponent },
          { path: 'newsletter', component: NewsLetterComponent },
          { path: '', component: NewsUpdatesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mediaRoutes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
