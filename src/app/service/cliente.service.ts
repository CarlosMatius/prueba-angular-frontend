import { ClienteRequest } from './../model/ClienteRequest';
import { ClienteDTO } from './../model/ClienteDTO';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})
export class ClienteService {

    constructor(private http: HttpClient) {}

    // crear cliente
    saveCliente(clienteRequest: ClienteRequest):Observable<any> {
        return this.http.post<ClienteRequest>('/api/cliente/save', clienteRequest);
    }

    // obtener clientes
    getClientes(): Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>('/api/cliente/all');
    }

    // buscar cliente por Id
    getById(id:number): Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>('/api/cliente/by/id/'+id);
    }

    // buscar cliente por nombre
    getByNombre(nombre:string): Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>('/api/cliente/by/nombre/'+nombre);
    }

    // buscar cliente por cedula
    getByCedula(cedula:string): Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>('/api/cliente/by/cedula/'+cedula);
    }

    // actualizar cliente
    updateCliente(clienteRequest:ClienteRequest, id:number):Observable<any>{
        return this.http.put<ClienteRequest>('/api/cliente/update/'+id, clienteRequest);
    }

    // eliminar cliente
    deleteCliente(id:number): Observable<any> {
        return this.http.delete<any>('/api/cliente/delete/'+id);
    }
}