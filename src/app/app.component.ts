import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "./auth.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  constructor(
    private afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ){
    
  }
}
