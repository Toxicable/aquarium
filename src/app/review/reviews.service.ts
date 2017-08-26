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
                CompStructRating: 1
            } ,
            {   $key: '23141234232' ,
                companyName: 'facebook' ,
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
                CompStructRating: 3
            } ,
            {   $key: '813274318' ,
                companyName: 'subway' ,
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
                CompStructRating: 1
        } ,
        ])

    }

    searchByTitle(term: string) {
        return this.reviews$.map(r => r.filter(item => item.location.includes(term)));
    }

}