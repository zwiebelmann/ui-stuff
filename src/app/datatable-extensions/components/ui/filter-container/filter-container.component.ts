import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {
  @Input() label: string;
  @Output() sortFn = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  triggerSort() {
    this.sortFn.emit();
  }

}
