import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "../review/reviews.service";
import { Observable } from "rxjs/Observable";

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
      
    ) {}
    ngOnInit(){}


}
