import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterContentInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InlineEditConstraints } from '../../../models/inline-edit-constraints';

@Component({
  selector: 'app-filter-input-string',
  templateUrl: './filter-input-string.component.html',
  styleUrls: ['./filter-input-string.component.css']
})
export class FilterInputStringComponent implements OnInit, AfterContentInit {
  @Input() value;
  @Input() debounceMilliseconds: number;
  @Input() constraints: InlineEditConstraints;
  @Input() type: "Enter" | "Auto";
  @Input() isNumber = false;
  @Output() action = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();
  @ViewChild('input') input;

  enters$: Observable<any>;

  constructor() { }

  checkInput() {
    if (this.value == '')
      this.value = null;
    this.action.emit(this.value);
  }

  ngOnInit() {
  }
  
  changeValue($event: KeyboardEvent) {
    if (this.isNumber) {
      if (isNaN(+$event.char)) {
        $event.stopPropagation();
        $event.preventDefault();
      }
    }

    if (this.constraints && this.value && this.value.length + 1 > this.constraints.MaxLength) {
      $event.stopPropagation();
      $event.preventDefault();
    }


    if (this.type == "Enter") {
      if ($event.key == "Enter") {
        this.checkInput();
      }
    }
  }

  //ngAfterContentInit() {
  //  this.enters$ = fromEvent(this.input.nativeElement, 'keyup')
  //    .pipe(
  //      debounceTime(600)
  //    );

  //  this.enters$.subscribe(() => this.checkInput());
  //}

  ngAfterContentInit() {
    let timeOffset = 600;
    
    if (this.debounceMilliseconds) timeOffset = this.debounceMilliseconds;
    
    this.enters$ = fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      debounceTime(timeOffset)
    );
    
    this.enters$.subscribe(() => {
      if (this.type == "Auto") {
        this.checkInput();
      }
      this.change.emit(this.value);
    });
  }
}

