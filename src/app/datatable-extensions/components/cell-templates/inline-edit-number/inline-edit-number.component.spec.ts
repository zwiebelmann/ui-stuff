import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditNumberComponent } from './inline-edit-number.component';

describe('InlineEditNumberComponent', () => {
  let component: InlineEditNumberComponent;
  let fixture: ComponentFixture<InlineEditNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
