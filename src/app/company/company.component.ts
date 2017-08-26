import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "../review/reviews.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from "./company.service";
import { Company, Cassified } from "../models/company";
import { DomSanitizer } from '@angular/platform-browser';
import { Review } from "../models/reviews";
import { AngularFireDatabase } from "angularfire2/database";

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
      private afDb: AngularFireDatabase
    ) {}

    company$: Observable<Company>;
    listings$: Observable<Cassified[]>;
    reviews$: Observable<Review[]>;

    ngOnInit(){
      const companyname$ = this.route.paramMap.map(params => params.get('companyName'))
      this.company$ = companyname$.mergeMap(companyName => {
        return this.companiesService.getAll()
          .map(companies =>{
            const company = companies.find(c => c.Company === companyName);
            company.Banner = this.sanitiser.bypassSecurityTrustResourceUrl(company.Banner) as any;
            company.Logo = this.sanitiser.bypassSecurityTrustResourceUrl(company.Logo) as any;
            return company;
          })
      })
      // this.listings$ = companyname$.mergeMap( companyName => {
      //   return this.companiesService.getAll().map(companies => {
      //     const company =  companies.find(c => c.Company == companyName).Cassifieds
      //   })
      // })
      this.reviews$ = companyname$.mergeMap( companyName => {
        return this.companiesService.getAll().mergeMap(companies => {
          return this.afDb.list('/reviews')
            .map((reviews: Review[]) => {
              return reviews.filter(r => r.companyName == companyName)
            })
        })
      })



    }


}
