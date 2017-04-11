import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { BoldHoverDirective } from './directives/bold-hover.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BoldHoverDirective,
    CapitalizePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
