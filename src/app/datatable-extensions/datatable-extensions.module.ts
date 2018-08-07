import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { GridFilterPipe } from './pipe/grid-filter.pipe';
import { FilterGridComponent } from './components/filter-grid/filter-grid.component';
import { StringFilterComponent } from './components/filters/string-filter/string-filter.component';
import { NumberFilterComponent } from './components/filters/number-filter/number-filter.component';
import { DateFilterComponent } from './components/filters/date-filter/date-filter.component';
import { BoolFilterComponent } from './components/filters/bool-filter/bool-filter.component';
import { ListFilterComponent } from './components/filters/list-filter/list-filter.component';
import { FilterColumnComponent } from './components/filter-column/filter-column.component';
import { FilterMenuComponent } from './components/filters/filter-menu/filter-menu.component';
import { SimpleFilterMenuComponent } from './components/filters/simple-filter-menu/simple-filter-menu.component';
import { MultipleFilterMenuComponent } from './components/filters/multiple-filter-menu/multiple-filter-menu.component';
import { FilterButtonComponent } from './components/ui/filter-button/filter-button.component';
import { FilterContainerComponent } from './components/ui/filter-container/filter-container.component';
import { FilterInputStringComponent } from './components/ui/filter-input-string/filter-input-string.component';
import { FilterInputReadonlyComponent } from './components/ui/filter-input-readonly/filter-input-readonly.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule
  ],
  exports: [
    FilterGridComponent,
    FilterColumnComponent
  ],
  declarations: [
    GridFilterPipe,
    FilterGridComponent, 
    StringFilterComponent, 
    NumberFilterComponent, 
    DateFilterComponent, 
    BoolFilterComponent, 
    ListFilterComponent,
    FilterColumnComponent,
    FilterMenuComponent,
    SimpleFilterMenuComponent,
    MultipleFilterMenuComponent,
    FilterButtonComponent,
    FilterContainerComponent,
    FilterInputStringComponent,
    FilterInputReadonlyComponent]
})
export class DatatableExtensionsModule { }
