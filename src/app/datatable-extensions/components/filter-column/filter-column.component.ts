import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import FilterListItem from '../../models/filter-list-item';
import { InlineEditConstraints } from '../../models/inline-edit-constraints';
import { ContextMenuAction } from '../../models/context-menu-action';

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
  @Input() listOnlyContaining = true;
  @Input() link: string;
  @Input() maxWidth: number;
  @Input() linkProp: string;
  @Input() inlineEdit: boolean;
  @Input() dateformat: string;
  @Input() contextMenu: ContextMenuAction[]; // array von objekten mit display_value und action(parameter)
  @Input() constraints: InlineEditConstraints;
  @Input() actionType: 'Enter' | 'Auto';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }
    if (this.prop == null) { throw new Error('Attribute "prop" is required'); }
    if (this.type == null) { throw new Error('Attribute "type" is required'); }

    if (this.inlineEdit && this.actionType == null) { throw new Error('Attribute "actionType" is required'); }
    if (this.inlineEdit && this.link != null) {throw new Error('Cannot use inlineEdit mode and link mode together.'); }

    if (this.prop == null) { this.prop = this.name; }
  }

  private emitValue(value: any, row) {
    this.onChange.emit({
      newValue: value,
      oldValue: row[this.prop],
      entity: row,
      prop: this.prop
    });
  }

  public selectListValue(value: any, row) { this.emitValue(+value, row); }
  public enterStringValue(value: any, row) { this.emitValue(value, row); }
  public enterNumberValue(value: any, row) { this.emitValue(+value, row); }
  public selectBoolValue(value: any, row) { this.emitValue(!!value, row); }
  public selectDateValue(value: any, row) { this.emitValue(value, row); }
}
