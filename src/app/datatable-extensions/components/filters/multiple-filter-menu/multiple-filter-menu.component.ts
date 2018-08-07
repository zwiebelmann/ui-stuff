import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import FilterListItem from '../../../models/filter-list-item';

@Component({
  selector: 'app-multiple-filter-menu',
  templateUrl: './multiple-filter-menu.component.html',
  styleUrls: ['./multiple-filter-menu.component.css']
})
export class MultipleFilterMenuComponent implements OnInit {
  @Input() values: FilterListItem[];
  @Output() onSelect = new EventEmitter<FilterListItem[]>();

  constructor() { }

  toggleFilter(item: FilterListItem) {
    item.active = !item.active
  }

  filter() {
    const filteredValues = this.values.filter(v =>
      v.active
    );
    this.onSelect.emit(filteredValues);
  }

  getActiveStateFont(item: FilterListItem): string {
    return item.active? "700": "500";
  }

  getActiveStateColor(item: FilterListItem): string {
    return item.active? "rgba(207, 4, 42, 1)": "rgba(128,128,128,1)"
  }

  ngOnInit() {
    if(this.values == null)  { throw new Error('Attribute "values" is required'); }
  }

}
