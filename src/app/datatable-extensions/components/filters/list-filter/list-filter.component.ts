import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterArgument } from '../../../models/filter-argument';
import FilterListItem from '../../../models/filter-list-item';
import getClearButtonStyle from '../../../utils/getClearButtonStyle';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Input() name: string;
  @Input() displayName: string;
  @Input() list: FilterListItem[];
  @Output() filter = new EventEmitter<FilterArgument>();

  public values: FilterListItem[];
  public displayValue: string;

  public showMenu: string;

  public getClearButtonStyle = getClearButtonStyle;

  constructor() {
    this.showMenu = 'none';
    this.displayValue = null;
   }

  doFilter() { 
    const filterArgument = new FilterArgument(
      this.name, 'list', null, this.values
    );

    this.filter.emit(filterArgument);
  }

  toggleMenu() {
    this.showMenu = this.showMenu === 'none' 
      ? 'block'
      : 'none';
  }

  clearFilter() {
    this.values = null;
    this.displayValue = null;
    const filterArgument = new FilterArgument(
      this.name, 'list', null, null
    );

    this.showMenu = 'none';

    this.list.forEach(i => i.active = false);

    this.filter.emit(filterArgument);
  }

  setValues(values: FilterListItem[]) {
    this.values = values;
    this.displayValue = values.map(val => val.short).join('; ');

    this.doFilter();
    this.showMenu = 'none';
  }

  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }
    if (this.list == null) { throw new Error('Attribute "list" is required'); }
    if (this.displayName == null) this.displayName = this.name;
  }
}
