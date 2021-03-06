import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    AboutComponent,
    ItemComponent,
    PortafolioComponent,
    SearchComponent
 } from "./components/index.paginas";

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch:'full',redirectTo: 'home'}
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const routing = RouterModule.forRoot(routes, {useHash:true});
