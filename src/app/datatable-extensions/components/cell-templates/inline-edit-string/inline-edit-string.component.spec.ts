import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditStringComponent } from './inline-edit-string.component';

describe('InlineEditStringComponent', () => {
  let component: InlineEditStringComponent;
  let fixture: ComponentFixture<InlineEditStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
