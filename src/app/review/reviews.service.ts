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
        this.reviews$ = this.afDb.list('/reviews');
        this.reviews$.subscribe(a => console.log(a))

    }

    searchByTitle(term: string) {
        return this.reviews$.map(r => r.filter(item => item.companyName.includes(term)));
    }

    add(review: Review){
        this.afDb.list('/reviews').push(review);
    }

}