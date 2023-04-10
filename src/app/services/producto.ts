export interface Producto {
	id: number;
	nombre: string;
	puntuacion: number;
	descripcion: string;
	categoria?: string;
	urlimagen: string;
	precio: number;
	cantidad: number;
}
