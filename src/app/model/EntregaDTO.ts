import { AlmacenamientoDTO } from './AlmacenamientoDTO';
import { ClienteDTO } from './ClienteDTO';
export class EntregaDTO {
    id!: number;
    tipo!: string;
    producto!: string;
    cantidad! : number;
    fecha_registro!: string;
    fecha_entrega!: string;
    precio_envio!: number;
    dato_vehiculo!: string;
    guia!: string;
    descuento!: number;
    precio_final!: number;
    updatedAt!: string;
    cliente!: ClienteDTO;
    almacenamiento!: AlmacenamientoDTO;
}