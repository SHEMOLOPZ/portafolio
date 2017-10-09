import { Component } from '@angular/core';

import { InformacioService } from "../../services/informacio.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public _is:InformacioService){
    
  }
}
