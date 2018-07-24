import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterArgument } from '../filter-argument';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent implements OnInit {
  @Input() name: string;
  @Output() filter = new EventEmitter<FilterArgument>();

  public value: string;
  public mode: string;

  private modes = ['ctns', 'edwh', 'stwh'];

  constructor() { }

  doFilter() {
    const filterArgument = new FilterArgument(
      this.name, 'string', this.mode, this.value
    );

    this.filter.emit(filterArgument);
  }

  cycleMode() {
    let currentModeIndex = this.modes.indexOf(this.mode);

    if (currentModeIndex < 2) {
      currentModeIndex++;
    } else {
      currentModeIndex = 0;
    }

    this.mode = this.modes[currentModeIndex];
  }



  ngOnInit() {
    if (this.name == null) { throw new Error('Attribute "name" is required'); }

    this.mode = this.modes[0];
  }

}
