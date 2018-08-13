import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {
  @HostBinding('style.display') @Input() show: string;
}
