import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-context-menu-item',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.css']
})
export class ContextMenuItemComponent implements OnInit {
  @Input() display: string;
  @Input() item: any;
  @Input() icon: string;
  @Input() conditionProperty: string;
  @Output() action = new EventEmitter<void>();

  constructor() {
   }

  ngOnInit() {
  }

  showAction() {
    if (!this.conditionProperty) { return true; }

    return !!this.item[this.conditionProperty];
  }

  doAction() {
    this.action.emit(this.item);
  }

}
