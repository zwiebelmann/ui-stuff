import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { ArrowIndicatorComponent } from './arrow-indicator/arrow-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SectionComponent
  ],
  declarations: [SectionComponent, ArrowIndicatorComponent]
})
export class SectionModule { }
