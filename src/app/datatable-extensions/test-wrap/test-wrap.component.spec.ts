import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWrapComponent } from './test-wrap.component';

describe('TestWrapComponent', () => {
  let component: TestWrapComponent;
  let fixture: ComponentFixture<TestWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
