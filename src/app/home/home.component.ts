import { Component, OnInit } from '@angular/core';

/**
 * Home landing page of the site.
 * This will display the search bar, and the search results for companies.
 * When the user searches the results will be shown below.
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
