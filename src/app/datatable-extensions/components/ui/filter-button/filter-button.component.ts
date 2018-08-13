import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})
export class FilterButtonComponent implements OnInit {
  @Input() label: string;
  @Input() assetUrl: string;
  @Output() action = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
