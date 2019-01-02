import { Component, OnInit, Input, Output, EventEmitter, Inject, InjectionToken } from '@angular/core';
import { ContextMenuAction } from 'src/app/datatable-extensions/models/context-menu-action';
import FilterListItem from 'src/app/datatable-extensions/models/filter-list-item';
import { PORTAL_DATA } from 'src/app/datatable-extensions/utils/portalInjectionToken';

@Component({
  selector: 'app-context-menu-dropdown',
  templateUrl: './context-menu-dropdown.component.html',
  styleUrls: ['./context-menu-dropdown.component.css']
})
export class ContextMenuDropdownComponent implements OnInit {
  contextMenuActions: ContextMenuAction[];
  item: any;
  close: any;

  constructor(@Inject(PORTAL_DATA) public data) {
    if (data) {
      this.contextMenuActions = data.contextMenuActions;
      this.item = data.item;
      this.close = data.closeFn;
    }
  }

  getActiveStateFont(item: FilterListItem): string {
    return item.active ? '700' : '500';
  }

  getActiveStateColor(item: FilterListItem): string {
    return item.active ? 'rgba(207, 4, 42, 1)' : 'rgba(128,128,128,1)';
  }

  doAction($event, a: ContextMenuAction) {
    a.action($event);
    this.close();
  }

  ngOnInit() {
    // if (this.values == null)  { throw new Error('Attribute "values" is required'); }
    // this.values = this.removeDuplicates(this.values, 'value');
  }
}
