import { Component, OnInit, AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { FilterColumnComponent } from '../filter-column/filter-column.component';
import { FilterArgument } from '../../models/filter-argument';
import cloneMap from '../../utils/cloneMap';
import FilterListItem from '../../models/filter-list-item';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.css']
})
export class FilterGridComponent implements OnInit, AfterContentInit {
  @ContentChildren(FilterColumnComponent) columns: QueryList<FilterColumnComponent>

  @Input() rows: any;

  public filters: Map<string, FilterArgument>;

  constructor() { }
  
  ngOnInit() {
    if(this.rows == null) { throw new Error('Attribute "rows" is required'); }

    this.filters = new Map<string, FilterArgument>();

  }
  
  ngAfterContentInit(): void {
    this.columns.forEach(item => {
      this.filters.set(item.name, new FilterArgument(item.name, item.type));
    });
  }

  applyFilter($event: FilterArgument) {
    const clonedFilters = cloneMap(this.filters);

    clonedFilters.set($event.name, $event);

    this.filters = clonedFilters;
  }

  findInList(list: FilterListItem[], key: number) {
    return list.find(i => i.key == key).value;
  }
}
