import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FilterArgument } from '../../../models/filter-argument';
import convertToBoolean from '../../../utils/convertToBoolean';
import FilterListItem from '../../../models/filter-list-item';
import getClearButtonStyle from '../../../utils/getClearButtonStyle';

@Component({
  selector: 'app-bool-filter',
  templateUrl: './bool-filter.component.html',
  styleUrls: ['./bool-filter.component.css']
})
export class BoolFilterComponent implements OnInit {
  @Input() name: string;
  @Input() displayName: string;
  @Output() filter = new EventEmitter<FilterArgument>();

  public value: boolean;
  public displayValue: string;

  public showMenu: string;
  public filterModes: FilterListItem[];

  public getClearButtonStyle = getClearButtonStyle;

  constructor() {
    this.filterModes = new Array<FilterListItem>();

    // this.filterModes.push(new FilterListItem(null, '(Alle)', '-'));
    this.filterModes.push(new FilterListItem('true', 'Ja', 'Ja'));
    this.filterModes.push(new FilterListItem('false', 'Nein', 'Nein'));

    this.showMenu = 'none';
   }

  doFilter() { 
    const filterArgument = new FilterArgument(
      this.name, 'bool', null, this.value
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
    this.displayValue = null;
    const filterArgument = new FilterArgument(
      this.name, 'bool', null, this.value
    );

    this.filterModes.forEach(fm => fm.active = false);

    this.showMenu = 'none';
    this.filter.emit(filterArgument);
  }

  setMode(mode: FilterListItem) {
    this.filterModes.forEach(fm => fm.active = false);
    mode.active = true;
  
    this.value = convertToBoolean(mode.key);
    this.displayValue = mode.value;

    this.doFilter();
    this.showMenu = 'none';
  }

  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }
    if (this.displayName == null) this.displayName = this.name;

    this.displayValue = null;
  }
}
