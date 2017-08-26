import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { ReviewsService } from "./reviews.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-reviews',
  templateUrl: 'add-review.component.html',
  styles: []
})
export class AddReviewComponent implements OnInit {
    form: FormGroup

  constructor(
    private reviewsService: ReviewsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        'companyName': ''
    })
  }

}
