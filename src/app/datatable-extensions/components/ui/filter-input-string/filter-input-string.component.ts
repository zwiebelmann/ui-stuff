import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterContentInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-input-string',
  templateUrl: './filter-input-string.component.html',
  styleUrls: ['./filter-input-string.component.css']
})
export class FilterInputStringComponent implements OnInit, AfterContentInit {
  @Input() value;
  @Output() action = new EventEmitter<any>();
  @ViewChild('input') input;
  
  enters$: Observable<any>;

  constructor() { }

  checkInput() {
    if (this.value == '') this.value = null;

    this.action.emit(this.value);
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

  aft

}
