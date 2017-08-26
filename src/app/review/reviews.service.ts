import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Review } from "../models/reviews";

@Injectable()
export class ReviewsService {

    reviews$: Observable<Review[]>;

    constructor(

    ) {
        this.reviews$ = Observable.of([
            {   $key: '' ,
                companyName: '' ,
                location: '' , 
                salary: 0 ,
                allowances: '' , 
                allowancesShort: '' ,
                allowancesRating: 0 ,
                careerDev: '' ,
                careerDevShort: '' ,
                careerDevRating: 0 ,
                dressCode: '' ,
                dressCodeShort: '' ,
                dressCodeRating: 0 ,
                diversity: '' ,
                diversityShort: '' ,
                diversityRating: 0 ,
                CompStruct: '' ,
                CompStructShort: '' ,
                CompStructRating: 0
            } ,
            {   $key: '231412342143' ,
            companyName: 'google' ,
            location: 'auckland' , 
            salary: 4 ,
            allowances: '' , 
            allowancesShort: '' ,
            allowancesRating: 0 ,
            careerDev: '' ,
            careerDevShort: '' ,
            careerDevRating: 0 ,
            dressCode: '' ,
            dressCodeShort: '' ,
            dressCodeRating: 0 ,
            diversity: '' ,
            diversityShort: '' ,
            diversityRating: 0 ,
            CompStruct: '' ,
            CompStructShort: '' ,
            CompStructRating: 0
        }
        ])

    }

    searchByTitle(term: string) {
        return this.reviews$.map(r => r.filter(item => item.location.includes(term)));
    }

}