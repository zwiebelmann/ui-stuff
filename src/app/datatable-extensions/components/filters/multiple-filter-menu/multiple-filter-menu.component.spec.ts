import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFilterMenuComponent } from './multiple-filter-menu.component';

describe('MultipleFilterMenuComponent', () => {
  let component: MultipleFilterMenuComponent;
  let fixture: ComponentFixture<MultipleFilterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFilterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
