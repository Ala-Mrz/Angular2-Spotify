import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {navBarComponent } from './components/navbar/navbar.component';
import {aboutComponent } from './components/about/about.component';
import {searchComponent } from './components/search/search.component';
import {routes} from './app.routes';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, routes, FormsModule, HttpModule],
  declarations: [ AppComponent, navBarComponent, aboutComponent, searchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
