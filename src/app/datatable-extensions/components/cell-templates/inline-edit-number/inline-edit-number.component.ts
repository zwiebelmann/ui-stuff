import { Component, OnInit, Input } from '@angular/core';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';

@Component({
  selector: 'app-inline-edit-number',
  templateUrl: './inline-edit-number.component.html',
  styleUrls: ['./inline-edit-number.component.css']
})
export class InlineEditNumberComponent implements OnInit {
  @Input() column: FilterColumnComponent;
  @Input() value: any;
  @Input() row: any;

  constructor() { }

  ngOnInit() {
    if (this.column == null) { throw new Error('Attribute "column" is required'); }
    if (this.column == null) { throw new Error('Attribute "row" is required'); }
  }
    
  changed($event: string) {    
    this.value = $event;
    this.column.enterNumberValue(+this.value, this.row);
    this.row[this.column.prop] = this.value;
  }
}
