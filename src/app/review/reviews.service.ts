import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Review } from "../models/reviews";

@Injectable()
export class ReviewsService {

    reviews$: Observable<Review[]>;

    constructor(

    ) {
        this.reviews$ = Observable.of([
            { location: 'I am a title' }
        ])

    }

    searchByTitle(term: string) {
        return this.reviews$.map(r => r.filter(item => item.location.includes(term)));
    }

}