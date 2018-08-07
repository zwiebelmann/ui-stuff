import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilterMenuComponent } from './simple-filter-menu.component';

describe('SimpleFilterMenuComponent', () => {
  let component: SimpleFilterMenuComponent;
  let fixture: ComponentFixture<SimpleFilterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFilterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
