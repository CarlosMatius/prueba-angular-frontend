import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlmacenamientoService } from './../../../service/almacenamiento.service';
import { MatTableDataSource } from '@angular/material/table';
import { AlmacenamientoDTO } from './../../../model/AlmacenamientoDTO';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-almacenamientos',
  templateUrl: './almacenamientos.component.html',
  styleUrls: ['./almacenamientos.component.scss']
})
export class AlmacenamientosComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['Id', 'Tipo', 'Nombre', 'Creado', 'Actualizado', 'Editar', 'Eliminar'];
  dataSource = new MatTableDataSource<AlmacenamientoDTO>([]);

  almacenamientos! : AlmacenamientoDTO[];

  constructor(
    private almacenamientoService: AlmacenamientoService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.almacenamientoService.getAlmacenamientos().subscribe({
      next:(datos) => {
        this.dataSource.data= datos
      }
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(almacenamiento: AlmacenamientoDTO):void {
    this.almacenamientoService.deleteAlmacenamiento(almacenamiento.id).subscribe({
      next: () => {
        this.almacenamientoService.getAlmacenamientos().subscribe({
          next: (res) => {
            this.dataSource.data=res
          }
        })
        this._snackBar.open("Almacenamiento Eliminado con exito", '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      },
      error: (err) => {
        this._snackBar.open(err.error.message, '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      }
    })
  }

}
