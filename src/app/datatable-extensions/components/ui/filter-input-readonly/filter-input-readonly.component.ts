import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-input-readonly',
  templateUrl: './filter-input-readonly.component.html',
  styleUrls: ['./filter-input-readonly.component.css']
})
export class FilterInputReadonlyComponent implements OnInit {
  @Input() value;
  @Output() action = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

}
