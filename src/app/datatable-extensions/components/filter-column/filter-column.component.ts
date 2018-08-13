import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import FilterListItem from '../../models/filter-list-item';

@Component({
  selector: 'app-filter-column',
  templateUrl: './filter-column.component.html',
  styleUrls: ['./filter-column.component.css']
})
export class FilterColumnComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() prop: string;
  @Input() list: FilterListItem[];
  @Input() link: string;
  @Input() linkProp: string;
  @Input() inlineEdit: boolean;
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if(this.name == null) { throw new Error('Attribute "name" is required'); }
    if(this.type == null) { throw new Error('Attribute "type" is required'); }

    if(this.prop == null) this.prop = this.name;
    // if(this.list != null) {
    //   this.list.unshift(new FilterListItem(null, ""));
    // }
  }

  public enterValue($event) {
    this.onChange.emit($event.target.value);
  }
}
