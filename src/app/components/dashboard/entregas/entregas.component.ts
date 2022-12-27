import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntregaService } from './../../../service/entrega.service';
import { MatTableDataSource } from '@angular/material/table';
import { EntregaDTO } from './../../../model/EntregaDTO';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss']
})
export class EntregasComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = [
    'Id', 
    'Tipo', 
    'Producto', 
    'Cantidad', 
    'Fecha Registro', 
    'Fecha Entrega', 
    'Precio Envio', 
    'Vehiculo', 
    'Guia', 
    'Descuento', 
    'Precio Final', 
    'Actualizado', 
    'Cliente', 
    'Almacen', 
    'Editar', 
    'Eliminar'
  ];
  dataSource = new MatTableDataSource<EntregaDTO>([]);

  entregas! : EntregaDTO[];

  constructor(
    private entregaService: EntregaService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.entregaService.getEntregas().subscribe({
      next:(datos) => {
        this.dataSource.data= datos
      }
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(entrega: EntregaDTO):void {
    this.entregaService.deleteEntrega(entrega.id).subscribe({
      next: () => {
        this.entregaService.getEntregas().subscribe({
          next: (res) => {
            this.dataSource.data=res
          }
        })
        this._snackBar.open("Entrega Eliminada con exito", '', {
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
