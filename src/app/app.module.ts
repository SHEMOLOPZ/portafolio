import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//rutas
import { routing } from "./app.routes";

//servicios
import { InformacioService } from "./services/informacio.service";
import { ProductosService } from "./services/productos.service";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    InformacioService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
