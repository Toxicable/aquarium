import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});