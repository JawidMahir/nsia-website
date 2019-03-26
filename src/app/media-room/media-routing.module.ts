import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookletComponent } from './booklet/booklet.component';
import { BrochuresComponent } from './brochures/brochures.component';
import { EventsComponent } from './events/events.component';
import { MagazineComponent } from './magazine/magazine.component';
import { MediaRoomHomeComponent } from './media-room-home/media-room-home.component';
import { NewsLettersComponent } from './news-letters/news-letters.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { PostersComponent } from './posters/posters.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { MediaRoomComponent } from './media-room/media-room.component';
import { MediaGeneralTemplateComponent } from './media-general-template/media-general-template.component';


const mediaRoutes: Routes = [
  {
    path: '',
    component: MediaRoomHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'event', component: EventsComponent },
          { path: 'news-updates', component: NewsUpdatesComponent },
          { path: 'press-release', component: PressReleaseComponent },
          { path: 'magazine', component: MagazineComponent },
          { path: 'newsletters', component: NewsLettersComponent },
          { path: 'poster', component: PostersComponent },
          { path: 'booklet', component: BookletComponent },
          { path: 'brochures', component: BrochuresComponent },
          { path: 'news/:id', component: MediaGeneralTemplateComponent},
          { path: '', component: MediaRoomComponent }
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
