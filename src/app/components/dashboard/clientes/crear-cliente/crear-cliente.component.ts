import { ClienteService } from './../../../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteRequest } from './../../../../model/ClienteRequest';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit{
  
  form: FormGroup;
  idCliente!:number;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      cedula: ['',Validators.required],
      correo: ['',Validators.required],
      telefono: ['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.cargarDatos();
  }

  create(): void {
    this.clienteService.saveCliente(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/clientes']);
        this._snackBar.open("Cliente Creado con exito", '', {
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
    this.clienteService.updateCliente(this.form.value, this.idCliente).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/clientes']);
        this._snackBar.open("Cliente Actualizado con exito", '', {
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
        this.idCliente=c['id'];
        if(id) {
          this.clienteService.getById(id).subscribe({
            next:(cli) => {
              this.form.patchValue({
                nombre:cli.nombre,
                cedula:cli.cedula,
                correo:cli.correo,
                telefono:cli.telefono
              })
            }
          })
        }
      }
    })
  }
}
