import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterArgument } from '../../../models/filter-argument';
import FilterListItem from '../../../models/filter-list-item';
import getClearButtonStyle from '../../../utils/getClearButtonStyle';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {
  @Input() name: string;
  @Input() displayName: string;
  @Output() filter = new EventEmitter<FilterArgument>();
  @Output() sortFn = new EventEmitter<void>();

  public value: string;
  public showMenu: string;

  public currentFilterMode: FilterListItem;
  public filterModes: FilterListItem[];

  public getClearButtonStyle = getClearButtonStyle;

  constructor() { 
    this.filterModes = new Array<FilterListItem>();

    this.filterModes.push(new FilterListItem('eq', 'Gleich', '='));
    this.filterModes.push(new FilterListItem('lt', 'Kleiner als', '<'));
    this.filterModes.push(new FilterListItem('lteq', 'Kleiner gleich', '<='));
    this.filterModes.push(new FilterListItem('gt', 'Größer als', '>'));
    this.filterModes.push(new FilterListItem('gteq', 'Größer gleich', '>='));
    // this.filterModes.push(new FilterListItem('btwn', 'Zwischen', '><'));

    this.showMenu = 'none';
  }

  triggerSort() {
    this.sortFn.emit();
  }

  doFilter(value: any) {
    this.value = value;
    const filterArgument = new FilterArgument(
      this.name, 'date', this.currentFilterMode.key, this.value
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
    this.value = null;
    const filterArgument = new FilterArgument(
      this.name, 'date', this.currentFilterMode.key, this.value
    );

    this.showMenu = 'none';
    this.filter.emit(filterArgument);
  }

  setMode(mode: FilterListItem) {
    this.filterModes.forEach(fm => fm.active = false);
    mode.active = true;

    this.currentFilterMode = mode;
    this.showMenu = 'none';

    this.doFilter(this.value);
  }

  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }
    if (this.displayName == null) this.displayName = this.name;

    this.currentFilterMode = this.filterModes[0];
    this.currentFilterMode.active = true;
  }
}
