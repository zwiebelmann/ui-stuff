import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionModule } from './section/section.module';
import { DatatableExtensionsModule } from './datatable-extensions/datatable-extensions.module';

@NgModule({
  declarations: [
    AppComponent
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
