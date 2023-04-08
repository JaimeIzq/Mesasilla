import { Injectable } from '@angular/core';
//Importamos el modelo
import { Silla } from '../services/silla';
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

  getSillasProm() {
    const promise = new Promise<Silla[]>((resolve, reject) => {
      const apiURL = this.api + '/catalogo/productos';
      this.http
			.get<Silla[]>(apiURL)
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

	getSillasObs() : Observable<Silla[]> {
		const apiURL = this.api + '/catalogo/productos';
    return this.http.get<Silla[]>(apiURL);
  }
}
