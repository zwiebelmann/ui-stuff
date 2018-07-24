import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderGridComponent } from './render-grid.component';

describe('RenderGridComponent', () => {
  let component: RenderGridComponent;
  let fixture: ComponentFixture<RenderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
