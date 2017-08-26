import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "../review/reviews.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from "./company.service";
import { Company } from "../models/company";
/**
 * Home landing page of the site.
 * This will display the search bar, and the search results for companies.
 * When the user searches the results will be shown below.
 */

@Component({
  selector: 'app-home',
  templateUrl: 'company.component.html',
  styles: []
})
export class CompanyComponent implements OnInit {
    constructor(
      private route: ActivatedRoute,
      private companiesService: CompanyService,
    ) {}
    company$: Observable<Company>;

    ngOnInit(){
      this.company$ = this.route.paramMap.mergeMap(params => {
        console.log(params);
        return this.companiesService.getAll()
          .map(companies => companies.find(c => c.Company === params.get('companyName')))
      })
    }


}
