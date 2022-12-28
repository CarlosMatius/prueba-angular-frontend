import { MatSnackBar } from '@angular/material/snack-bar';
import { AlmacenamientoService } from './../../../../service/almacenamiento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlmacenamientoRequest } from './../../../../model/AlmacenamientoRequest';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-almacenamiento',
  templateUrl: './crear-almacenamiento.component.html',
  styleUrls: ['./crear-almacenamiento.component.scss']
})
export class CrearAlmacenamientoComponent implements OnInit{

  form: FormGroup;
  almacenamiento = new AlmacenamientoRequest();
  selectedValue!: string;

  constructor(
    private router: Router,
    private almacenamientoService: AlmacenamientoService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      tipo: ['', [Validators.required]],
      nombre: ['',[Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  create(): void {
    this.almacenamientoService.saveAlmacenamiento(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/almacenamientos']);
        this._snackBar.open("Almacen Creado con exito", '', {
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
    this.almacenamientoService.updateAlmacenamiento(this.form.value, this.almacenamiento.id).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/almacenamientos']);
        this._snackBar.open("Almacen Actualizado con exito", '', {
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
        if(id) {
          this.almacenamientoService.getById(id).subscribe({
            next:(alm) => {
              this.almacenamiento = alm
              this.form.patchValue({
                tipo:alm.tipo,
                nombre:alm.nombre
              })
            }
          })
        }
      }
    })
  }
}
