import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderGridComponent } from './render-grid/render-grid.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { GridFilterPipe } from './grid-filter.pipe';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { TestWrapComponent } from './test-wrap/test-wrap.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule
  ],
  exports: [
    RenderGridComponent
  ],
  declarations: [RenderGridComponent, GridFilterPipe, TextFilterComponent, TestWrapComponent]
})
export class DatatableExtensionsModule { }
