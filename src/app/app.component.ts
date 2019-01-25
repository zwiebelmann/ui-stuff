import { Component, OnInit } from '@angular/core';
import FilterListItem from './datatable-extensions/models/filter-list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selectedRows = new Array<any>();

  title = 'app';
  locations: Array<FilterListItem>;

  rows = [
    { id: 1, name: 'irma', age: 15, birthday: '2018-08-02', single: true, location: 10 },
    { id: 2, name: 'Jesus Vogel', age: 25, birthday: '2018-06-01', single: false, location: 20 },
    // { id: 3, name: 'Dr. 00 Schneider', age: 35, birthday: '2017-08-01', single: true, location: 20 },
    // { id: 4, name: 'Chrisdorf Roos', age: 45, birthday: '2016-08-03', single: false, location: 30 },
    // { id: 5, name: 'Mario Giccone', age: 55, birthday: '2016-08-01', single: true, location: 40 }
  ];

  ngOnInit(): void {
    this.locations = new Array<FilterListItem>();

    this.locations.push(new FilterListItem(10, 'Offenbach', 'OF'));
    this.locations.push(new FilterListItem(20, 'Frankfurt', 'F'));
    this.locations.push(new FilterListItem(30, 'Kelsterbach', 'GG'));
    this.locations.push(new FilterListItem(40, 'Usingen', 'USI'));
  }

  ageChanged($event) {
    console.log($event);
  }

  singleChanged($event) {
    console.log($event);
  }

  locationChanged($event) {
    console.log($event);
  }

  birthdayChanged($event) {
    console.log($event);
  }
}
