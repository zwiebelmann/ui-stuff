import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import findInList from '../../../utils/findInList';
import { FilterColumnComponent } from '../../filter-column/filter-column.component';
import FilterListItem from '../../../models/filter-list-item';

@Component({
  selector: 'app-inline-edit-list',
  templateUrl: './inline-edit-list.component.html',
  styleUrls: ['./inline-edit-list.component.css']
})
export class InlineEditListComponent implements OnInit {
  @Input() column: FilterColumnComponent;
  @Input() value: any;
  @Input() row: any;

  findInList = findInList;
  showMenu = 'none';

  constructor() { }
  
  ngOnInit() {
    if (this.column == null) { throw new Error('Attribute "column" is required'); }
    if (this.column == null) { throw new Error('Attribute "row" is required'); }
  }  

  select($event: FilterListItem) {    
    this.value = $event.key;
    this.column.selectListValue(this.value, this.row);
    this.showMenu = 'none';
    this.row[this.column.prop] = this.value;
  }

  toggleMenu() {
    setTimeout(() => {
      this.showMenu = this.showMenu === 'none' 
        ? 'block'
        : 'none';
    }, 1);
  }
}
