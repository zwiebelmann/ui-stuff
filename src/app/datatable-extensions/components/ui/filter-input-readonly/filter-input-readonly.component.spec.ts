import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputReadonlyComponent } from './filter-input-readonly.component';

describe('FilterInputReadonlyComponent', () => {
  let component: FilterInputReadonlyComponent;
  let fixture: ComponentFixture<FilterInputReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInputReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
