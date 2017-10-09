import { Component } from '@angular/core';

import { InformacioService } from "./services/informacio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _is: InformacioService){
    
  }
}
