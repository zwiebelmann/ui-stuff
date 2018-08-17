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
import { InlineEditListComponent } from './components/cell-templates/inline-edit-list/inline-edit-list.component';
import { InlineEditStringComponent } from './components/cell-templates/inline-edit-string/inline-edit-string.component';
import { InlineEditBoolComponent } from './components/cell-templates/inline-edit-bool/inline-edit-bool.component';
import { InlineEditNumberComponent } from './components/cell-templates/inline-edit-number/inline-edit-number.component';
import { InlineEditDateComponent } from './components/cell-templates/inline-edit-date/inline-edit-date.component';
import { FilterInputNumberComponent } from './components/ui/filter-input-number/filter-input-number.component';
import { FilterCheckboxComponent } from './components/ui/filter-checkbox/filter-checkbox.component';

import { MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import 'moment/locale/de'
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatCheckboxModule
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
    FilterInputReadonlyComponent,
    InlineEditListComponent,
    InlineEditStringComponent,
    InlineEditBoolComponent,
    InlineEditNumberComponent,
    InlineEditDateComponent,
    FilterInputNumberComponent,
    FilterCheckboxComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de'}
  ]
})
export class DatatableExtensionsModule { }
