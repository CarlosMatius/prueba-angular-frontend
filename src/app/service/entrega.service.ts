import { EntregaDTO } from './../model/EntregaDTO';
import { Observable } from 'rxjs';
import { EntregaRequest } from './../model/EntregaRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable ({
    providedIn: 'root'
})
export class AlmacenamientoService {
    
    constructor(private http: HttpClient) { }

    // crear entrega
    saveEntrega(entregaRequest: EntregaRequest): Observable<any> {
        return this.http.post<EntregaRequest>('/api/entrega/save', entregaRequest);
    }

    // obtener entregas
    getEntregas(): Observable<EntregaDTO[]> {
        return this.http.get<EntregaDTO[]>('/api/entrega/all');
    }

    // busqueda filtrada de entregas
    getFiltradaEntregas(palabra: string): Observable<EntregaDTO[]> {
        return this.http.get<EntregaDTO[]>('/api/entrega/filtro/'+palabra);
    }

    // buscar entrega por Id
    getById(id:number): Observable<EntregaDTO> {
        return this.http.get<EntregaDTO>('/api/entrega/by/id/'+id);
    }

    // buscar entrega por tipo
    getByTipo(tipo:string): Observable<EntregaDTO[]> {
        return this.http.get<EntregaDTO[]>('/api/entrega/by/tipo/'+tipo);
    }

    // buscar entrega por guia
    getByGuia(guia:string): Observable<EntregaDTO> {
        return this.http.get<EntregaDTO>('/api/entrega/by/guia/'+guia);
    }

    // actualizar entrega
    updateEntrega(entregaRequest:EntregaRequest, id:number):Observable<any>{
        return this.http.put<EntregaRequest>('/api/entrega/update/'+id, entregaRequest);
    }

    // eliminar entrega
    deleteEntrega(id:number): Observable<any> {
        return this.http.delete<any>('/api/entrega/delete/'+id);
    }
}