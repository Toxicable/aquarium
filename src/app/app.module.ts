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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
