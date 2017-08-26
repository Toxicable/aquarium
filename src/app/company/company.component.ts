import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "../review/reviews.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from "./company.service";
import { Company } from "../models/company";
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Home landing page of the site.
 * This will display the search bar, and the search results for companies.
 * When the user searches the results will be shown below.
 */

@Component({
  selector: 'app-home',
  templateUrl: 'company.component.html',
  styles: [],
})
export class CompanyComponent implements OnInit {
    constructor(
      private sanitiser: DomSanitizer,
      private route: ActivatedRoute,
      private companiesService: CompanyService,
    ) {}

    company$: Observable<Company>;

    ngOnInit(){
      const companyname$ = this.route.paramMap.map(params => params.get('companyName'))
      companyname$.mergeMap(companyName => {
        return this.companiesService.getAll()
          .map(companies =>{
            const company = companies.find(c => c.Company === companyName);
            company.Banner = this.sanitiser.bypassSecurityTrustResourceUrl(company.Banner) as any;
            company.Logo = this.sanitiser.bypassSecurityTrustResourceUrl(company.Logo) as any;
            return company;
          })
      })



    }


}
