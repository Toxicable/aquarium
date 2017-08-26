import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Review } from "../models/reviews";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ReviewsService {

    reviews$: Observable<Review[]>;

    constructor(
        private afDb: AngularFireDatabase
    ) {
        this.reviews$ = Observable.of([
            {   $key: '21r324r2345' ,
                companyName: 'Tradestaff Global' ,
                location: 'auckland' , 
                salary: 5 ,
                allowancesShort: 'lots of days off' ,
                allowancesRating: 5 ,
                careerDevShort: 'always room to improve' ,
                careerDevRating: 5 ,
                dressCodeShort: 'shorts and shirts' ,
                dressCodeRating: 5 ,
                diversityShort: 'lots of diversity' ,
                diversityRating: 5 ,
                CompStructShort: 'a great company structure' ,
                CompStructRating: 5 ,
                generalReview: ''
            } ,
            {   $key: '231412342143' ,
                companyName: 'Z Energy' ,
                location: 'auckland' , 
                salary: 4 ,
                allowancesShort: 'only a weeks holiday per year' ,
                allowancesRating: 2 ,
                careerDevShort: 'lots of room to grow' ,
                careerDevRating: 5 ,
                dressCodeShort: 'casual' ,
                dressCodeRating: 4 ,
                diversityShort: 'high' ,
                diversityRating: 5 ,
                CompStructShort: 'very hierarchical' ,
                CompStructRating: 1,
                generalReview: ''
            } ,
            {   $key: '23141234232' ,
                companyName: 'Walling Contracting Ltd' ,
                location: 'auckland' , 
                salary: 3 ,
                allowancesShort: 'free dental' ,
                allowancesRating: 4 ,
                careerDevShort: 'feel trapped in my position' ,
                careerDevRating: 2 ,
                dressCodeShort: 'business casual' ,
                dressCodeRating: 3 ,
                diversityShort: 'moderate' ,
                diversityRating: 3 ,
                CompStructShort: 'realativly flat' ,
                CompStructRating: 3 ,
                generalReview: ''
            } ,
            {   $key: '813274318' ,
                companyName: 'Nor West Contracting Ltd' ,
                location: 'wellington' , 
                salary: 2 ,
                allowancesShort: 'very few extras given' ,
                allowancesRating: 1 ,
                careerDevShort: 'no possability to grow' ,
                careerDevRating: 1 ,
                dressCodeShort: 'have to wear a uniform' ,
                dressCodeRating: 1 ,
                diversityShort: 'very high level of diversity' ,
                diversityRating: 4 ,
                CompStructShort: 'high level of structure' ,
                CompStructRating: 1,
                generalReview: ''
            } ,
            {   $key: '813274318sad' ,
                companyName: 'Nor West Contracting Ltd' ,
                location: 'wellington' , 
                salary: 2 , 
                allowancesShort: 'great number extras give' ,
                allowancesRating: 4 ,
                careerDevShort: 'no ways to improve carreer' ,
                careerDevRating: 1 ,
                dressCodeShort: 'business casual' ,
                dressCodeRating: 4 ,
                diversityShort: 'everyone was old' ,
                diversityRating: 4 ,
                CompStructShort: 'not much structure, my boss was pretty chill' ,
                CompStructRating: 5,
                generalReview: ''
            } ,
        ])

    }

    searchByTitle(term: string) {
        return this.reviews$.map(r => r.filter(item => item.location.includes(term)));
    }

    add(review: Review){
        this.afDb.list('/reviews').push(review);
    }

}