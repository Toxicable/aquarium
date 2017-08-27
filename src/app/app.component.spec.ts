import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { appRoutes } from "./app.routing";
import { CompanyComponent } from "./company/company.component";

describe('AppComponent', () => {
  beforeEach(async(() => {

  }));
  it('should have default routing',() => {
    const companyRoute = appRoutes.find(r => r.path.includes('company'));
    expect(companyRoute.component).toEqual(CompanyComponent);
  })


});
