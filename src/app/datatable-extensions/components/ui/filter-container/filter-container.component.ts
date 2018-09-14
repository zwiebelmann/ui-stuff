import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {
  @Input() label: string;
  @Input() sorts: Array<any>;
  @Input() name: string;
  @Output() sortFn = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  triggerSort() {
    this.sortFn.emit();
  }

  getCurrentSort() {
    if (this.sorts == undefined) return;

    if (this.sorts.length > 0 && this.sorts[0].prop == this.name) {
      return this.sorts[0].dir;
    }
  }

}
