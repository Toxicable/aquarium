import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Review } from "../models/reviews";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ReviewsService{

    reviews$: Observable<Review[]>;

    constructor(
        private afDb: AngularFireDatabase,
    ) { 
         this.reviews$ = Observable.of([
            {location: 'I am a title'}
         ])

    }

    searchByTitle(term: string){
        return this.reviews$.map(r => r.filter(item => item.location.includes(term) ));
    }

    add(review: Review){
        this.afDb.list('/reviews').push(review);
    }
}