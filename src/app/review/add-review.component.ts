import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { ReviewsService } from "./reviews.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: 'add-review.component.html',
  styles: []
})
export class AddReviewComponent implements OnInit {
    form: FormGroup

  constructor(
    private reviewsService: ReviewsService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        'companyName': '',
        'salary': '',
        'location': '',
        'allowanceRating': '',
        'allowance': '',
        'careerDevRating': '',
        'careerDev': '',
        'dressCodeRating': '',
        'dressCode': '',
        'diversityRating': '',
        'diversity': '',
        'compStructRating': '',
        'compStruct': '',
        'review': ''
    })
  }
  submit(){
    this.reviewsService.add(this.form.value);
    this.router.navigate(['/reviews'])
  }

}
