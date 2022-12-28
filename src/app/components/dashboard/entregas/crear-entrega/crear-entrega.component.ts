import { ClienteRequest } from './../../../../model/ClienteRequest';
import { AlmacenamientoDTO } from './../../../../model/AlmacenamientoDTO';
import { ClienteDTO } from './../../../../model/ClienteDTO';
import { EntregaDTO } from './../../../../model/EntregaDTO';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntregaService } from './../../../../service/entrega.service';
import { AlmacenamientoService } from './../../../../service/almacenamiento.service';
import { ClienteService } from './../../../../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NonNullableFormBuilder } from '@angular/forms';
import { EntregaRequest } from './../../../../model/EntregaRequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-entrega',
  templateUrl: './crear-entrega.component.html',
  styleUrls: ['./crear-entrega.component.scss']
})
export class CrearEntregaComponent implements OnInit{

  form: FormGroup;
  selectedTipo!: string;
  idEntrega!:number;
  clientes! : ClienteDTO[];
  almacenes! : AlmacenamientoDTO[];

  constructor(
    private router: Router,
    private entregaService: EntregaService,
    private clienteService: ClienteService,
    private almacenamientoService: AlmacenamientoService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      tipo: ['', [Validators.required]],
      producto: ['',[Validators.required, Validators.minLength(3)]],
      cantidad: ['',Validators.required],
      fecha_entrega: ['',Validators.required],
      precio_envio: ['',Validators.required],
      dato_vehiculo: ['',Validators.required],
      guia: [ this.generarGuia(10),Validators.required],
      cliente: ['',Validators.required],
      almacenamiento: ['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.cargarDatos();
    this.clienteSelect();
    this.almacenSelect();
  }

  clienteSelect(): void {
    this.clienteService.getClientes().subscribe({
      next:(datos) => {
        this.clientes= datos
      }
    })
  }

  almacenSelect(): void {
    this.almacenamientoService.getAlmacenamientos().subscribe({
      next:(datos) => {
        this.almacenes= datos
      }
    })
  }

  create(): void {
    this.entregaService.saveEntrega(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/entregas']);
        this._snackBar.open("Entrega Creada con exito", '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
        
      },
      error: (err) => {
        this._snackBar.open(err.error.message, '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      }
    })
  }

  update(): void {
    this.entregaService.updateEntrega(this.form.value, this.idEntrega).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/entregas']);
        this._snackBar.open("Entrega Actualizada con exito", '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      },
      error: (err) => {
        this._snackBar.open(err.error.message, '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      }
    })
  }

  cargarDatos(): void {
    this.activatedRoute.params.subscribe({
      next:(c) => {
        let id=c['id'];
        this.idEntrega=c['id'];
        if(id) {
          this.entregaService.getById(id).subscribe({
            next:(ent) => {
              this.form.patchValue({
                tipo:ent.tipo,
                producto:ent.producto,
                cantidad:ent.cantidad,
                fecha_entrega:ent.fecha_entrega,
                precio_envio:ent.precio_envio,
                dato_vehiculo:ent.dato_vehiculo,
                guia:ent.guia,
                cliente:ent.cliente,
                almacenamiento:ent.almacenamiento
              })
            }
          })
        }
      }
    })
  }

  compareCliente(o1: ClienteDTO, o2: ClienteDTO) {
    return o1 && o2 && o1.nombre === o2.nombre
  }

  compareAlmacen(o1: AlmacenamientoDTO, o2: AlmacenamientoDTO) {
    return o1 && o2 && o1.nombre === o2.nombre
  }

  generarGuia(n: number): string {
    let result = '';
    const chars = 'ab0cd1ef2gh3ij4kl5mn6op7qr8st9uvwxyz'
    for (let i = 0; i < n; i++){
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}