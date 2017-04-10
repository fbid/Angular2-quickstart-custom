import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { BoldHoverDirective } from './bold-hover.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BoldHoverDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
