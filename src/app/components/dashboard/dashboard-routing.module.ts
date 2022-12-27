import { CrearEntregaComponent } from './entregas/crear-entrega/crear-entrega.component';
import { CrearAlmacenamientoComponent } from './almacenamientos/crear-almacenamiento/crear-almacenamiento.component';
import { AlmacenamientosComponent } from './almacenamientos/almacenamientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregasComponent } from './entregas/entregas.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', component: InicioComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'almacenamientos', component: AlmacenamientosComponent},
    { path: 'entregas', component: EntregasComponent},
    { path: 'crear-cliente', component: CrearClienteComponent},
    { path: 'editar-cliente/:id', component: CrearClienteComponent},
    { path: 'crear-almacenamiento', component: CrearAlmacenamientoComponent},
    { path: 'editar-almacenamiento/:id', component: CrearAlmacenamientoComponent},
    { path: 'crear-entrega', component: CrearEntregaComponent},
    { path: 'editar-entrega/:id', component: CrearEntregaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
