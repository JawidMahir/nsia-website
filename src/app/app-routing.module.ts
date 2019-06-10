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
    // loadChildren: './home/home.module#HomeModule'
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'contact-us',
    // component: ContactUsComponent
    // loadChildren: './contact-us/contact.module#ContactModule'
    loadChildren: () => import('./contact-us/contact.module').then(m => m.ContactModule)
  }, {
    path: 'about-us',
    // loadChildren: './about-us/about-us.module#AboutUsModule'
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  }, {
    path: 'services',
    // loadChildren: './services/services.module#ServicesModule'
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  }, {
    path: 'library',
    // loadChildren: './library/library.module#LibraryModule'
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
  }, {
    path: 'access-info',
    // loadChildren: './access-to-info/access.module#AccessModule'
    loadChildren: () => import('./access-to-info/access.module').then(m => m.AccessModule)
  }, {
    path: 'media-room',
    // loadChildren: './media-room/media.module#MediaModule'
    loadChildren: () => import('./media-room/media.module').then(m => m.MediaModule)
  }, {
    path: 'opportunities',
    // loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
    loadChildren: () => import('./opportunities/opportunities.module').then(m => m.OpportunitiesModule)
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
