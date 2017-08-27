import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { CompanyService } from "../company/company.service";
import { Observable } from "rxjs/Observable";
import { Company } from "../models/company";

/**
 * Home landing page of the site.
 * This will display the search bar, and the search results for companies.
 * When the user searches the results will be shown below.
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl = new FormControl('');
  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.companies$ = this.searchControl.valueChanges
      .startWith('')
      .mergeMap( value => this.companyService.searchCompanies(value))
  }

}
