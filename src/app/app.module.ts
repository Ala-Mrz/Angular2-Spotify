import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {navBarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, navBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
