import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {searchComponent} from './components/search/search.component';
import {aboutComponent} from './components/about/about.component';
import {albumComponent} from './components/album/album.component';
import {AppComponent} from './app.component';
import {artistComponent} from './components/artist/artist.component';


export const router: Routes = [
    {path: '', redirectTo: 'search', pathMatch:'full'},
    {path: 'search' , component:searchComponent},
    {path: 'about', component:aboutComponent},
    {path: 'artist/:id', component:artistComponent},
    {path: 'album/:id', component:albumComponent}

];
export const routes : ModuleWithProviders = RouterModule.forRoot(router);
   
