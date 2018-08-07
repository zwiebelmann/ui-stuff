import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
