import { Component } from '@angular/core';
import { Router } from "@angular/router";

//servicios
import { InformacioService } from "../../services/informacio.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _is:InformacioService, private router:Router ){
  }

  buscar_producto(termino: string){
    //console.log(termino); 
    this.router.navigate(['buscar',termino]);  
  }
}
