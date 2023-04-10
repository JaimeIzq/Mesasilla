import { Injectable } from '@angular/core';
//Importamos el modelo
import { Producto } from './producto';
//Importamos HttpClient
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Nos traemos el objeto.
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  //Reutilizamos el modelo de datos de Silla.
  loadedSillas: Producto[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Obtenemos todas las sillas
   **/
  getSillas() {
    console.log('Llamamos a getSillas');
    return this.http
      .get<{ [key: string]: Producto }>('http://localhost:3000/catalogo/productos')
      .pipe(
        map((responseData: { [id: string]: Producto }) => {
          const sillasArray: Producto[] = [];
          for (const key in responseData) {
            console.log('Datos de Respuesta');
            console.log(responseData[key]);
            if (responseData.hasOwnProperty(key)) {
              sillasArray.push({ ...responseData[key] });
              this.loadedSillas.push({ ...responseData[key] });
            }
          }
          return sillasArray;
        })
      );
  }

	getSillasPromesa():Promise<Producto[]> {
    console.log('Llamamos a getSillas');
		return new Promise<Producto[]>((resolve, reject) => {

		});
	}

	getSillasObservable(): Observable<Producto[]> {
    console.log('Llamamos a getSillas');
		return new Observable<Producto[]>((observer) => {
			let sillas: Producto[] = [];
			observer.next([]);
		});
  }
}
