import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {searchComponent} from './components/search/search.component';
import {aboutComponent} from './components/about/about.component';
import {AppComponent} from './app.component';

export const router: Routes = [
    {path: '', redirectTo: 'search', pathMatch:'full'},
    {path: 'search' , component:searchComponent},
    {path: 'about', component:aboutComponent}
];
export const routes : ModuleWithProviders = RouterModule.forRoot(router);
   
