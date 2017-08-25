import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from './review/reviews.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'reviews',
    component: ReviewsComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});