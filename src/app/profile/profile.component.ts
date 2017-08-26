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
  templateUrl: 'profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  searchControl = new FormControl('');
  reviews$: Observable<any[]>;

  constructor(
    private reviewsService: ReviewsService
  ) { }

  ngOnInit() {
    this.reviews$ = this.searchControl.valueChanges
      .mergeMap( value => this.reviewsService.searchByTitle(value))
  }

}
