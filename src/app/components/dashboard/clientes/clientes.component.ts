import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from './../../../service/cliente.service';
import { ClienteDTO } from './../../../model/ClienteDTO';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['Id', 'Nombre', 'Cedula', 'Correo', 'Telefono', 'Creado', 'Actualizado', 'Editar', 'Eliminar'];
  dataSource = new MatTableDataSource<ClienteDTO>([]);

  clientes! : ClienteDTO[];

  constructor(
    private clienteService: ClienteService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next:(datos) => {
        this.dataSource.data= datos
      }
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(id: number):void {
    this.clienteService.deleteCliente(id).subscribe({
      next: () => {
        this.clienteService.getClientes().subscribe({
          next: (res) => {
            this.dataSource.data=res
          }
        })
        this._snackBar.open("Cliente Eliminado con exito", '', {
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
}