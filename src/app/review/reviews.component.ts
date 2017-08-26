import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReviewsService } from "./reviews.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

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
