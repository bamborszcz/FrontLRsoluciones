import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaUPComponent } from './components/empresa-up/empresa-up.component';
import { ProductosUPComponent } from './components/productos-up/productos-up.component';
import { ContactoUPComponent } from './components/contacto-up/contacto-up.component';
import { LichasControlPanelComponent } from './components/lichas-control-panel/lichas-control-panel.component';
// ng generate module app-routing --flat --module=app esta es la forma de crear el enrutamiento si no lo hago desde la creacion de un nuevo proyecto, ademas debo importarlo en el app.module.ts!!!!
const routes: Routes = [ // estas son las rutas que iran al lado de la url
  {
    path:'', pathMatch: 'full', redirectTo: 'empresa' // esta ruta es la que carga el componente empresa desde la primera vez q entramos a la web
  },
  {
    path: 'empresa', component: EmpresaUPComponent // llama al componente empresa
  },
  {
    path: 'productos', component: ProductosUPComponent // llama al componente productos
  },
  {
    path: 'contacto', component: ContactoUPComponent // llama al componente contacto
  },
  {
    path: 'lichaControlPanel', component: LichasControlPanelComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }
