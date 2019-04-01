import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { ChooseLangComponent } from './choose-lang/choose-lang.component';
import { CanDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'choose-lang',
    component: ChooseLangComponent
  }, {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'home',
            component: HomeComponent
          }, {
            path: 'contact-us',
            component: ContactUsComponent
          }, {
            path: 'about-us',
            loadChildren: './about-us/about-us.module#AboutUsModule'
          }, {
            path: 'services',
            loadChildren: './services/services.module#ServicesModule'
          }, {
            path: 'library',
            loadChildren: './library/library.module#LibraryModule'
          }, {
            path: 'access-info',
            loadChildren: './access-to-info/access.module#AccessModule'
          }, {
            path: 'media-room',
            loadChildren: './media-room/media.module#MediaModule'
          }, {
            path: 'opportunities',
            loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
          }, {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
          }, {
            path: '**',
            component: NotFoundComponent
          }
        ]
      }
    ]
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
