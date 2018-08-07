import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionModule } from './section/section.module';
import { DatatableExtensionsModule } from './datatable-extensions/datatable-extensions.module';
import { OComponent } from './o/o.component';

@NgModule({
  declarations: [
    AppComponent,
    OComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SectionModule,
    DatatableExtensionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
