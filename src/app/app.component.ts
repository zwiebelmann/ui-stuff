import { Component, OnInit } from '@angular/core';
import FilterListItem from './datatable-extensions/models/filter-list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  locations: Array<FilterListItem>;

  rows = [
    { name: 'irma', age: 15, birthday: '2018-08-01', single: true, location: 10 },
    { name: 'Jesus Vogel', age: 25, birthday: '2018-06-01', single: false, location: 20 },
    { name: 'Dr. 00 Schneider', age: 35, birthday: '2017-08-01', single: true, location: 20 },
    { name: 'Chrisdorf Roos', age: 45, birthday: '2016-08-01', single: false, location: 30 }
  ]

  ngOnInit(): void {
    this.locations = new Array<FilterListItem>();

    this.locations.push(new FilterListItem(10, 'Offenbach', 'OF'));
    this.locations.push(new FilterListItem(20, 'Frankfurt', 'F'));
    this.locations.push(new FilterListItem(30, 'Kelsterbach', 'GG'));
    this.locations.push(new FilterListItem(40, "Usingen", 'USI'));
  }
}
