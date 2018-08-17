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
    if(this.prop == null) { throw new Error('Attribute "prop" is required'); }
    if(this.type == null) { throw new Error('Attribute "type" is required'); }

    if(this.inlineEdit && this.link != null) {throw new Error('Cannot use inlineEdit mode and link mode together.');}

    if(this.prop == null) this.prop = this.name;
  }

  private emitValue(value: any, row) {
    this.onChange.emit({
      newValue: value,
      entity: row,
      prop: this.prop
    });    
  }

  public selectListValue(value: number, row) { this.emitValue(+value, row); }
  public enterStringValue(value: number, row) { this.emitValue(value, row); }
  public enterNumberValue(value: number, row) { this.emitValue(+value, row); }
  public selectBoolValue(value: number, row) { this.emitValue(!!value, row); }
  public selectDateValue(value: number, row) { this.emitValue(value, row); } // ???
}
