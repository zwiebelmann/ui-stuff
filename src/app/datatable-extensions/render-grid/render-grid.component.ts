import { Component, OnInit, ViewChild } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterArgument } from '../filter-argument';
import { TestWrapComponent } from '../test-wrap/test-wrap.component';

@Component({
  selector: 'app-render-grid',
  templateUrl: './render-grid.component.html',
  styleUrls: ['./render-grid.component.css']
})

export class RenderGridComponent implements OnInit {
  @ViewChild(TestWrapComponent) filterWrapper: TestWrapComponent;

  public nameFilter: string;
  public filter = new Map<string, FilterArgument>();

  public rows = [
    { name: 'muff', age: 25 },
    { name: 'arsch', age: 26 },
    { name: 'tit', age: 27 },
    { name: 'bauch', age: 28 }
  ];

  doFilter($event: Map<string, FilterArgument>) {
    this.filter = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
