import { Component, OnInit, AfterContentInit, ContentChildren, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { FilterColumnComponent } from '../filter-column/filter-column.component';
import { FilterArgument } from '../../models/filter-argument';
import cloneMap from '../../utils/cloneMap';
import { StringFilterComponent } from '../filters/string-filter/string-filter.component';
import { NumberFilterComponent } from '../filters/number-filter/number-filter.component';
import { BoolFilterComponent } from '../filters/bool-filter/bool-filter.component';
import { ListFilterComponent } from '../filters/list-filter/list-filter.component';
import { InlineEditListComponent } from '../cell-templates/inline-edit-list/inline-edit-list.component';
import findInList from '../../utils/findInList';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.css']
})
export class FilterGridComponent implements OnInit, AfterContentInit {
  @ContentChildren(FilterColumnComponent) columns: QueryList<FilterColumnComponent>

  @ViewChildren(StringFilterComponent) stringmenus: QueryList<StringFilterComponent>
  @ViewChildren(NumberFilterComponent) numbermenus: QueryList<NumberFilterComponent>
  @ViewChildren(BoolFilterComponent) boolmenus: QueryList<BoolFilterComponent>
  @ViewChildren(ListFilterComponent) listmenus: QueryList<ListFilterComponent>
  @ViewChildren(InlineEditListComponent) inlineListMenus: QueryList<InlineEditListComponent>

  @Input() rows: any;

  // Selektierte Rows mit two way databinding
  @Input() selectedRows: any[];
  @Output() selectedRowsChange = new EventEmitter<any[]>();  

  public filters: Map<string, FilterArgument>;

  public messages = {
    emptyMessage: 'Keine Daten vorhanden',
    totalMessage: 'Datensätze'
  }

  findInList = findInList;

  constructor() { }
  
  ngOnInit() {
    if(this.rows == null) { throw new Error('Attribute "rows" is required'); }
    if(this.selectedRows == null) { this.selectedRows = new Array<any>() }

    this.filters = new Map<string, FilterArgument>();

  }
  
  ngAfterContentInit(): void {
    this.columns.forEach(item => {
      this.filters.set(item.name, new FilterArgument(item.name, item.type));
    });
  }

  closeOtherMenus($event: any) {
    if(!$event.path.find(i => i.tagName == 'APP-FILTER-MENU')) { // außerhalb des FilterMenüs
      this.stringmenus.forEach(fm => fm.showMenu = "none");
      this.numbermenus.forEach(fm => fm.showMenu = "none");
      this.boolmenus.forEach(fm => fm.showMenu = "none");
      this.listmenus.forEach(fm => fm.showMenu = "none");
      this.inlineListMenus.forEach(fm => fm.showMenu = "none");
    }
  }

  onSelect({selected}) {
    this.selectedRows.splice(0, this.selectedRows.length);
    this.selectedRows.push(...selected);

    this.selectedRowsChange.emit(this.selectedRows);
  }

  applyFilter($event: FilterArgument) {
    const clonedFilters = cloneMap(this.filters);

    clonedFilters.set($event.name, $event);

    this.filters = clonedFilters;
  }

  getLink(link: string, param: any) {
    if (link != null && param != null) {
      const baselink = link.endsWith("/") ? link.substring(0, link.length - 1): link;
      return `${baselink}/${param}`;
    }
    return '';
  }
}
