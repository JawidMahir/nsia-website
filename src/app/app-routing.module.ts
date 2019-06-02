import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChooseLangComponent } from './choose-lang/choose-lang.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'choose-lang',
    component: ChooseLangComponent
  }, {
    path: '',
    component: AppComponent,
  }, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }, {
    path: 'contact-us',
    // component: ContactUsComponent
    loadChildren: './contact-us/contact.module#ContactModule'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  // imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
