import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import FilterListItem from '../../../models/filter-list-item';

@Component({
  selector: 'app-multiple-filter-menu',
  templateUrl: './multiple-filter-menu.component.html',
  styleUrls: ['./multiple-filter-menu.component.css']
})
export class MultipleFilterMenuComponent implements OnInit {
  _values: FilterListItem[];

  get values(): FilterListItem[] {
    return this._values;
  }
  @Input('values')
  set values(values: FilterListItem[]) {
    if (values == null)  { throw new Error('Attribute "values" is required'); }
    this._values = this.reduceKeys(values);
  }

  @Output() onSelect = new EventEmitter<FilterListItem[]>();

  constructor() { }

  public distinctvalues: FilterListItem[];

  ngOnInit() {
  }

  toggleFilter(item: FilterListItem) {
    item.active = !item.active;
  }

  filter() {
    const filteredValues = this.values.filter(v =>
      v.active
    );
    this.onSelect.emit(filteredValues);
  }

  getActiveStateFont(item: FilterListItem): string {
    return item.active ? '700' : '500';
  }

  getActiveStateColor(item: FilterListItem): string {
    return item.active ? 'rgba(207, 4, 42, 1)' : 'rgba(128,128,128,1)';
  }

  reduceKeys(values: FilterListItem[]) {
    const newArray = new Array<FilterListItem>();

    values.forEach(value => {
      let item: FilterListItem;

      if (newArray.length === 0) {
        item = new FilterListItem([value.key], value.value, value.short);
        item.show = value.show;
        newArray.push(item);
        return;
      }

      const temp = newArray.find(i => i.value === value.value);

      if (temp == null) {
        item = new FilterListItem([value.key], value.value, value.short);
        item.show = value.show;
        newArray.push(item);
      } else {
        temp.key.push(value.key);
      }
    });

    return newArray;
  }
}
