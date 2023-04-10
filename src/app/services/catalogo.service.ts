import { Injectable } from '@angular/core';
//Importamos el modelo
import { Producto } from './producto';
//Importamos HttpClient
import { HttpClient } from '@angular/common/http';
//Nos traemos el objeto.
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
	api: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProductosProm() {
    const promise = new Promise<Producto[]>((resolve, reject) => {
      const apiURL = this.api + '/catalogo/productos';
      this.http
			.get<Producto[]>(apiURL)
			.subscribe({
				next: (res: any) => {
					resolve(res);
				},
				error: (err: any) => {
					reject(err);
				},
				complete: () => {
					console.log('Completado');
				},
			});
    });
    return promise;
  }

	getProductosObs() : Observable<Producto[]> {
		const apiURL = this.api + '/catalogo/productos';
    return this.http.get<Producto[]>(apiURL);
  }
}
