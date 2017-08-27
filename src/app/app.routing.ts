import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from './review/reviews.component';
import { AddReviewComponent } from "./review/add-review.component";
import { ProfileComponent } from "./profile/profile.component";
import { CompanyComponent } from "./company/company.component";
export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'reviews',
    component: ReviewsComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'company/:companyName',
    component: CompanyComponent
  },{
    path: 'company/:companyName/add-review',
    component: AddReviewComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});
