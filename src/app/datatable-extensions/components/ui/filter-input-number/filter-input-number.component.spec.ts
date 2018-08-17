import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputNumberComponent } from './filter-input-number.component';

describe('FilterInputNumberComponent', () => {
  let component: FilterInputNumberComponent;
  let fixture: ComponentFixture<FilterInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
