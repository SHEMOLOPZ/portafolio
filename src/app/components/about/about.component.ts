import { Component } from '@angular/core';

import { InformacioService } from "../../services/informacio.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _is:InformacioService) { }
}
