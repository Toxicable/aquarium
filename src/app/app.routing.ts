import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from './review/reviews.component';
import { AddReviewComponent } from "./review/add-review.component";
import { ProfileComponent } from "./profile/profile.component";
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'reviews',
    component: ReviewsComponent
  },{
    path: 'add-review',
    component: AddReviewComponent
  },{
    path: 'profile',
    component: ProfileComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});