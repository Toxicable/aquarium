import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRouting } from "./app.routing";
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from "../environments/environment";
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './review/reviews.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsService } from "./review/reviews.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from "./app-material.module";
import { AuthService } from "./auth.service";
import { AngularFireAuthModule } from "angularfire2/auth";

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'hammerjs';
import { AddReviewComponent } from "./review/add-review.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    ReviewsComponent,
    AddReviewComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    appRouting,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    ReviewsService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
