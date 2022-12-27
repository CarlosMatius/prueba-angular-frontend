import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AlmacenamientosComponent } from './almacenamientos/almacenamientos.component';
import { EntregasComponent } from './entregas/entregas.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearAlmacenamientoComponent } from './almacenamientos/crear-almacenamiento/crear-almacenamiento.component';
import { CrearEntregaComponent } from './entregas/crear-entrega/crear-entrega.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ClientesComponent,
    AlmacenamientosComponent,
    EntregasComponent,
    CrearClienteComponent,
    CrearAlmacenamientoComponent,
    CrearEntregaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
