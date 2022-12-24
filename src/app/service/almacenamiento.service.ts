import { AlmacenamientoDTO } from './../model/AlmacenamientoDTO';
import { Observable } from 'rxjs';
import { AlmacenamientoRequest } from './../model/AlmacenamientoRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class AlmacenamientoService {
    
    constructor(private http: HttpClient) { }

    // crear almacenamiento
    saveAlmacenamiento(almacenamientoRequest: AlmacenamientoRequest): Observable<any> {
        return this.http.post<AlmacenamientoRequest>('/api/almacenamiento/save', almacenamientoRequest);
    }

    // obtener almacenamientos
    getAlmacenamientos(): Observable<AlmacenamientoDTO[]> {
        return this.http.get<AlmacenamientoDTO[]>('/api/almacenamiento/all');
    }

    // buscar almacenamiento por Id
    getById(id:number): Observable<AlmacenamientoDTO> {
        return this.http.get<AlmacenamientoDTO>('/api/almacenamiento/by/id/'+id);
    }

    // buscar almacenamiento por tipo
    getByTipo(tipo:string): Observable<AlmacenamientoDTO[]> {
        return this.http.get<AlmacenamientoDTO[]>('/api/almacenamiento/by/tipo/'+tipo);
    }

    // buscar almacenamiento por nombre
    getByNombre(nombre:string): Observable<AlmacenamientoDTO> {
        return this.http.get<AlmacenamientoDTO>('/api/almacenamiento/by/nombre/'+nombre);
    }

    // actualizar almacenamiento
    updateAlmacenamiento(almacenamientoRequest:AlmacenamientoRequest, id:number):Observable<any>{
        return this.http.put<AlmacenamientoRequest>('/api/almacenamiento/update/'+id, almacenamientoRequest);
    }

    // eliminar almacenamiento
    deleteAlmacenamiento(id:number): Observable<any> {
        return this.http.delete<any>('/api/almacenamiento/delete/'+id);
    }
}