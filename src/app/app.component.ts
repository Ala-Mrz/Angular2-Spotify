import { Component } from '@angular/core';
import {navBarComponent} from './components/navbar/navbar.component';
import {aboutComponent} from './components/about/about.component';
import {searchComponent} from './components/search/search.component';
import { HttpModule } from '@angular/http';
import {SpotifyService} from './services/spotify.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[SpotifyService]
})
export class AppComponent  {  }
