import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "../review/reviews.service";
import { Observable } from "rxjs/Observable";
import { CompanyService } from "../company/company.service";
import { Company } from "../models/company";

/**
 * Home landing page of the site.
 * This will display the search bar, and the search results for companies.
 * When the user searches the results will be shown below.
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  searchControl = new FormControl('');
  reviews$: Observable<any[]>;
  companies$: Observable<Company[]>;

  constructor(
    private reviewsService: ReviewsService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {

    this.companies$ = this.companyService.getAll()
    this.reviews$ = this.searchControl.valueChanges
      .mergeMap( value => this.reviewsService.searchByTitle(value))
  }

}
