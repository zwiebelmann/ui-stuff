import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolFilterComponent } from './bool-filter.component';

describe('BoolFilterComponent', () => {
  let component: BoolFilterComponent;
  let fixture: ComponentFixture<BoolFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoolFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
