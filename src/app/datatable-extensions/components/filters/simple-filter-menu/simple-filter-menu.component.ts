import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import FilterListItem from '../../../models/filter-list-item';

@Component({
  selector: 'app-simple-filter-menu',
  templateUrl: './simple-filter-menu.component.html',
  styleUrls: ['./simple-filter-menu.component.css']
})
export class SimpleFilterMenuComponent implements OnInit {
  @Input() values: FilterListItem[];
  @Output() onSelect = new EventEmitter<FilterListItem>();

  constructor() { }

  filter(item: FilterListItem) {
    this.onSelect.emit(item);
  }

  getActiveStateFont(item: FilterListItem): string {
    return item.active? "700": "500";
  }

  getActiveStateColor(item: FilterListItem): string {
    return item.active? "rgba(207, 4, 42, 1)": "rgba(128,128,128,1)"
  }

  ngOnInit() {
    if (this.values == null)  { throw new Error('Attribute "values" is required'); }
    this.values = this.removeDuplicates(this.values, 'value');
  }

  removeDuplicates(array, prop) {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

}
