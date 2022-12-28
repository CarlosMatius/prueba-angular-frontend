import { AlmacenamientoRequest } from './AlmacenamientoRequest';
import { ClienteRequest } from './ClienteRequest';

export class EntregaRequest {
    tipo!: string;
    producto!: string;
    cantidad! : number;
    fecha_entrega!: string;
    precio_envio!: number;
    dato_vehiculo!: string;
    guia!: string;
    cliente!: ClienteRequest;
    almacenamiento!: AlmacenamientoRequest;
}