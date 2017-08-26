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
                allowances: '' , 
                allowancesShort: 'lots of days off' ,
                allowancesRating: 5 ,
                careerDev: '' ,
                careerDevShort: 'always room to improve' ,
                careerDevRating: 5 ,
                dressCode: '' ,
                dressCodeShort: 'shorts and shirts' ,
                dressCodeRating: 5 ,
                diversity: '' ,
                diversityShort: 'lots of diversity' ,
                diversityRating: 5 ,
                CompStruct: '' ,
                CompStructShort: 'a great company structure' ,
                CompStructRating: 5 ,
                generalReview: ''
            } ,
            {   $key: '231412342143' ,
                companyName: 'Z Energy' ,
                location: 'auckland' , 
                salary: 4 ,
                allowances: '' , 
                allowancesShort: 'only a weeks holiday per year' ,
                allowancesRating: 2 ,
                careerDev: '' ,
                careerDevShort: 'lots of room to grow' ,
                careerDevRating: 5 ,
                dressCode: '' ,
                dressCodeShort: 'casual' ,
                dressCodeRating: 4 ,
                diversity: '' ,
                diversityShort: 'high' ,
                diversityRating: 5 ,
                CompStruct: '' ,
                CompStructShort: 'very hierarchical' ,
                CompStructRating: 1,
                generalReview: ''
            } ,
            {   $key: '23141234232' ,
                companyName: 'Walling Contracting Ltd' ,
                location: 'auckland' , 
                salary: 3 ,
                allowances: '' , 
                allowancesShort: 'free dental' ,
                allowancesRating: 4 ,
                careerDev: '' ,
                careerDevShort: 'feel trapped in my position' ,
                careerDevRating: 2 ,
                dressCode: '' ,
                dressCodeShort: 'business casual' ,
                dressCodeRating: 3 ,
                diversity: '' ,
                diversityShort: 'moderate' ,
                diversityRating: 3 ,
                CompStruct: '' ,
                CompStructShort: 'realativly flat' ,
                CompStructRating: 3 ,
                generalReview: ''
            } ,
            {   $key: '813274318' ,
                companyName: 'Nor West Contracting Ltd' ,
                location: 'wellington' , 
                salary: 2 ,
                allowances: '' , 
                allowancesShort: 'very few extras given' ,
                allowancesRating: 1 ,
                careerDev: '' ,
                careerDevShort: 'no possability to grow' ,
                careerDevRating: 1 ,
                dressCode: '' ,
                dressCodeShort: 'have to wear a uniform' ,
                dressCodeRating: 1 ,
                diversity: '' ,
                diversityShort: 'very high level of diversity' ,
                diversityRating: 4 ,
                CompStruct: '' ,
                CompStructShort: 'high level of structure' ,
                CompStructRating: 1,
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