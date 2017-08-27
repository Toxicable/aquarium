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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from "./app-material.module";
import { AuthService } from "./auth.service";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HttpClientModule } from '@angular/common/http';
import { AddReviewComponent } from "./review/add-review.component";
import { CompanyService } from "./company/company.service";
import { ProfileComponent } from "./profile/profile.component";
import { CompanyComponent } from "./company/company.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    ReviewsComponent,
    AddReviewComponent,
    ProfileComponent,
    CompanyComponent,
  ],
  imports: [
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    appRouting,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    ReviewsService,
    AuthService,
    CompanyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
