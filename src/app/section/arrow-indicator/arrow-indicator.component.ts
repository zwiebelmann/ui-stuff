import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'app-arrow-indicator',
  templateUrl: './arrow-indicator.component.html',
  styleUrls: ['./arrow-indicator.component.css'],
  animations: [
    trigger('arrowState', [

      state('inactive', style({ transform: 'rotate(0)' })),
      state('active', style({ transform: 'rotate(-180deg)' })),
      transition('inactive => active', [style({transform: 'rotate(-360deg)'}), animate('100ms ease-out')]),
      transition('active => inactive', animate('100ms ease-in'))

      // transition('active => inactive', [
      //   style({
      //     transform: 'rotate(-180deg)'
      //   }),
      //   animate(1000)
      // ]),
      // transition('inactive => active', [
      //   animate(1000, style({
      //     transform: 'rotate(360deg)'
      //   }))
      // ])
    ])
  ]
})
export class ArrowIndicatorComponent implements OnInit {
  @Input() public state: string;

  constructor() { }

  ngOnInit() {
    if (this.state === null) { throw new Error('Attribute "state" is required'); }
  }

}
