import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputStringComponent } from './filter-input-string.component';

describe('FilterInputStringComponent', () => {
  let component: FilterInputStringComponent;
  let fixture: ComponentFixture<FilterInputStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInputStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
