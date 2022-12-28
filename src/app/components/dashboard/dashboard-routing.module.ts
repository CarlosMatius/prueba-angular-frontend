import { AuthGuard } from './../../guard/auth.guard';
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
    { path: '', canActivate:[AuthGuard], component: InicioComponent},
    { path: 'clientes', canActivate:[AuthGuard], component: ClientesComponent},
    { path: 'almacenamientos', canActivate:[AuthGuard], component: AlmacenamientosComponent},
    { path: 'entregas', canActivate:[AuthGuard], component: EntregasComponent},
    { path: 'crear-cliente', canActivate:[AuthGuard], component: CrearClienteComponent},
    { path: 'editar-cliente/:id', canActivate:[AuthGuard], component: CrearClienteComponent},
    { path: 'crear-almacenamiento', canActivate:[AuthGuard], component: CrearAlmacenamientoComponent},
    { path: 'editar-almacenamiento/:id', canActivate:[AuthGuard], component: CrearAlmacenamientoComponent},
    { path: 'crear-entrega', canActivate:[AuthGuard], component: CrearEntregaComponent},
    { path: 'editar-entrega/:id', canActivate:[AuthGuard], component: CrearEntregaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
