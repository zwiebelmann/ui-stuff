import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditBoolComponent } from './inline-edit-bool.component';

describe('InlineEditBoolComponent', () => {
  let component: InlineEditBoolComponent;
  let fixture: ComponentFixture<InlineEditBoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditBoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
