import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-input-number',
  templateUrl: './filter-input-number.component.html',
  styleUrls: ['./filter-input-number.component.css']
})
export class FilterInputNumberComponent implements OnInit {
  @Input() value;
  @Output() action = new EventEmitter<any>();
  @ViewChild('input') input;
  
  enters$: Observable<any>;

  constructor() { }

  checkInput() {
    if (this.value == '') this.value = null;

    this.action.emit(+this.value);
  }  

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.enters$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(600)
      );
    
    this.enters$.subscribe(() => this.checkInput());
  }
}
