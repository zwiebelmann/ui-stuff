import { Component, OnInit, Input } from '@angular/core';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';
import { InlineEditConstraints } from '../../../models/inline-edit-constraints';

@Component({
  selector: 'app-inline-edit-string',
  templateUrl: './inline-edit-string.component.html',
  styleUrls: ['./inline-edit-string.component.css']
})
export class InlineEditStringComponent implements OnInit {
  @Input() column: FilterColumnComponent;
  @Input() value: string;
  @Input() actionType: 'Enter' | 'Auto';
  @Input() constraints: InlineEditConstraints;
  @Input() row: any;

  constructor() { }

  ngOnInit() {
    if (this.column == null) { throw new Error('Attribute "column" is required'); }
    if (this.column == null) { throw new Error('Attribute "row" is required'); }
  }

  keyPressed($event) {
    if (!($event instanceof Event)) {
      this.row[this.column.prop] = $event;
    }
  }

  changed($event: string) {
    this.value = $event;
    if (this.constraints) {
      if (this.constraints.MinLength) {
        if (this.value.length < this.constraints.MinLength) {
          return false;
        }
      }

      if (this.constraints.MaxLength) {
        if (this.value.length > this.constraints.MaxLength) {
          this.value = this.value.slice(0, this.constraints.MaxLength);
        }
      }
    }

    this.column.enterStringValue(this.value, this.row);
  }
}
