import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterArgument } from '../filter-argument';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-test-wrap',
  templateUrl: './test-wrap.component.html',
  styleUrls: ['./test-wrap.component.css']
})
export class TestWrapComponent implements OnInit {
  @Output() filter = new EventEmitter<Map<string, FilterArgument>>();

  public filters: Map<string, FilterArgument>;

  constructor() { }

  applyFilter($event: FilterArgument) {

    this.filters.forEach((v, key) => console.log(`1. key: [${key}] value: [${JSON.stringify(v)}]`));

    // clone
    const clonedFilter = new Map<string, FilterArgument>();

    this.filters.forEach((item, key) => {
      if (item.value != null || item.value === '') { // aufräumen funktioniert noch nicht
        clonedFilter.set(key, item);
      }
    });

    clonedFilter.set($event.name, $event);

    this.filters = clonedFilter;

    this.filters.forEach((v, key) => console.log(`2. key: [${key}] value: [${JSON.stringify(v)}]`));

    this.filter.emit(this.filters);
  }

  ngOnInit() {
    this.filters = new Map<string, FilterArgument>();
  }

}
