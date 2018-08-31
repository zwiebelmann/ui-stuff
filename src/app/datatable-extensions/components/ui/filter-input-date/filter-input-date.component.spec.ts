import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputDateComponent } from './filter-input-date.component';

describe('FilterInputDateComponent', () => {
  let component: FilterInputDateComponent;
  let fixture: ComponentFixture<FilterInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
