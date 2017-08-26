import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { ReviewsService } from "./reviews.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-reviews',
  templateUrl: 'add-review.component.html',
  styles: []
})
export class AddReviewComponent implements OnInit {
    form: FormGroup

    salaries = [
                {value: '0', viewValue: '< $40k'},
                {value: '1', viewValue: '$40k - $60k'},
                {value: '2', viewValue: '$60k - $80k'},
                {value: '3', viewValue: '$80k - $100k'},
                {value: '4', viewValue: '$100k - $125k'},
                {value: '5', viewValue: '$125k - $150k'},
                {value: '6', viewValue: '> $150k'},
                ]

  constructor(
    private reviewsService: ReviewsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MdSnackBar,
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
    this.router.navigate(['/reviews']);
    this.snackBar.open('Successfully Posted Review!','Close', {
      duration: 1500
    })
  }

}
