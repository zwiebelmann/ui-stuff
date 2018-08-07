import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FilterArgument } from '../../../models/filter-argument';
import FilterListItem from '../../../models/filter-list-item';
import getClearButtonStyle from '../../../utils/getClearButtonStyle';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.css']
})
export class StringFilterComponent implements OnInit {
  @Input() name: string;
  @Input() displayName: string;
  @Output() filter = new EventEmitter<FilterArgument>();

  public value: string;
  public showMenu: string;

  public currentFilterMode: FilterListItem;
  public filterModes: FilterListItem[];
  public getClearButtonStyle = getClearButtonStyle;

  constructor() {
    this.filterModes = new Array<FilterListItem>();

    this.filterModes.push(new FilterListItem('ctns', 'Enthält', '*a*'));
    this.filterModes.push(new FilterListItem('stwh', 'Beginnt mit', 'a*'));
    this.filterModes.push(new FilterListItem('edwh', 'Endet mit', '*a'));

    this.showMenu = 'none';
   }

  doFilter(value: any) { 
    this.value = value;
    const filterArgument = new FilterArgument(
      this.name, 'string', this.currentFilterMode.key, this.value
    );

    this.filter.emit(filterArgument);
  }

  toggleMenu() {
    this.showMenu = this.showMenu === 'none' 
      ? 'block'
      : 'none';
  }

  clearFilter() {
    this.value = null;
    const filterArgument = new FilterArgument(
      this.name, 'string', this.currentFilterMode.key, this.value
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
