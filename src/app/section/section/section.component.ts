import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [
    trigger('sectionState', [
      transition('void => active', [
        style({
          'max-height': 0,
          opacity: 0
        }),
        animate('100ms ease-out')
      ]),
      transition('active => void', [
        animate('100ms ease-in', style({
          'max-height': 0,
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SectionComponent implements OnInit {
  @Input() public header: string;
  @Input() public collapsible: Boolean;
  @Input() public defaultOpen: Boolean;

  public headerStyle: string;
  public sectionState: string;

  constructor() { }

  toggleState() {
    if (this.collapsible) {
      this.sectionState = this.sectionState === 'active' ? 'inactive' : 'active';
    }
  }

  ngOnInit() {
    if (this.header == null) { throw new Error('Attribute "header" is required'); }
    if (this.collapsible == null) { this.collapsible = false; }
    if (this.defaultOpen == null) { this.defaultOpen = true; }

    if (this.collapsible) {
      this.sectionState = this.defaultOpen ? 'active' : 'inactive';
      this.headerStyle = 'toggle';
    } else {
      this.sectionState = 'active';
    }
  }

}
