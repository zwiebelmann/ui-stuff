import { Component, OnInit, Input } from '@angular/core';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-inline-edit-bool',
  templateUrl: './inline-edit-bool.component.html',
  styleUrls: ['./inline-edit-bool.component.css']
})
export class InlineEditBoolComponent implements OnInit {
  @Input() column: FilterColumnComponent;
  @Input() value: any;
  @Input() row: any;

  constructor() { }

  ngOnInit() {
    if (this.column == null) { throw new Error('Attribute "column" is required'); }
    if (this.column == null) { throw new Error('Attribute "row" is required'); }
  }
    
  selected($event: MatCheckboxChange) { 
    this.value = $event.checked;
    this.column.selectBoolValue(this.value, this.row);
    this.row[this.column.prop] = this.value;
  }  
}
