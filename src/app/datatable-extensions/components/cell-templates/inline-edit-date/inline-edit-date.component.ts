import { Component, OnInit, Input } from '@angular/core';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';

@Component({
  selector: 'app-inline-edit-date',
  templateUrl: './inline-edit-date.component.html',
  styleUrls: ['./inline-edit-date.component.css']
})
export class InlineEditDateComponent implements OnInit {
  @Input() column: FilterColumnComponent;
  @Input() value: any;
  @Input() row: any;
  
  constructor() { }

  ngOnInit() {
    if (this.column == null) { throw new Error('Attribute "column" is required'); }
    if (this.column == null) { throw new Error('Attribute "row" is required'); }
  }

  valueChanged($event) {
    this.value = $event;
    this.column.selectDateValue(this.value, this.row);
    this.row[this.column.prop] = this.value;
  }
}
