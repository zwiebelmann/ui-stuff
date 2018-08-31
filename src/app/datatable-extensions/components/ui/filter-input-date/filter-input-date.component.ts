import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-input-date',
  templateUrl: './filter-input-date.component.html',
  styleUrls: ['./filter-input-date.component.css']
})
export class FilterInputDateComponent implements OnInit {
  @Input() value;
  @Output() action = new EventEmitter<any>();
  @ViewChild('dateInput') input: ElementRef;
  
  enters$: Observable<any>;

  constructor() { }

  checkInput() {
    if (this.value == '') this.value = null;

    this.action.emit(this.value);
  }  

  ngOnInit() {
  }

  valueChanged($event) {
    this.value = $event;
    this.checkInput();
  }
  
  ngAfterContentInit() {
    this.enters$ = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        debounceTime(600)
      );
    
    this.enters$.subscribe(() => this.checkInput());
  }
}
