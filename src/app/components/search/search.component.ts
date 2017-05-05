import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
})
export class searchComponent  {  
    searchStr:string;
    searchMusic(){
        console.log(this.searchStr);
    }
}
