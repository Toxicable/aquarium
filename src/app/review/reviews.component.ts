import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "./reviews.service";
import { Observable } from "rxjs/Observable";
import { CompanyService } from "../company/company.service";

/**
 * This component is embedded into the reviews tab on the company view.
 * It shows a list of reviews which when clicked on show the review component.
 */

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

  constructor(
    private reviewsService: ReviewsService,
    private companSerivce: CompanyService
  ) { }

  ngOnInit() {
  }

}
