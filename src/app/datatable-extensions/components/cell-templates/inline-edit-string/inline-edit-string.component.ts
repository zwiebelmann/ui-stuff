import { Component, OnInit, Input } from '@angular/core';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';

@Component({
  selector: 'app-inline-edit-string',
  templateUrl: './inline-edit-string.component.html',
  styleUrls: ['./inline-edit-string.component.css']
})
export class InlineEditStringComponent implements OnInit {
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
    this.column.enterStringValue(this.value, this.row);
  }
}
