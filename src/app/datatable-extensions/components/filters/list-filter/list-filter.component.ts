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
  @Input() sorts: Array<any>;
  @Input() list: FilterListItem[];
  @Output() filter = new EventEmitter<FilterArgument>();
  @Output() sortFn = new EventEmitter<void>();

  public values: FilterListItem[];
  public displayValue: string;

  public showMenu: string;

  public getClearButtonStyle = getClearButtonStyle;

  constructor() {
    this.showMenu = 'none';
    this.displayValue = null;
   }

   triggerSort() {
     this.sortFn.emit();
   }

  doFilter() {
    const filterArgument = new FilterArgument(
      this.name, 'list', null, this.values
    );

    this.filter.emit(filterArgument);
  }

  toggleMenu() {
    setTimeout(() => {
      this.showMenu = this.showMenu === 'none'
        ? 'block'
        : 'none';
    }, 1);
  }

  clearFilter() {
    this.values = null;
    this.displayValue = null;
    const filterArgument = new FilterArgument(
      this.name, 'list', null, null
    );

    this.showMenu = 'none';

    // this.list.forEach(i => i.active = false);

    // this.list = this.list.map(i => Object.assign(i, { active: false }));
    this.list = this.list.map(i => ({ ...i, active: false }));

    this.filter.emit(filterArgument);
  }

  setValues(values: FilterListItem[]) {
    this.values = values;

    if (values.every(val => val.short != null && val.short.length > 0)) {
      this.displayValue = values.map(val => val.short).join('; ');
    } else {
      this.displayValue = values.map(val => val.value).join('; ');
    }

    this.doFilter();
    this.showMenu = 'none';
  }

  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }
    if (this.list == null) { throw new Error(`Attribute "list" is required for '${this.name}'`); }
    if (this.displayName == null) this.displayName = this.name;
  }
}
