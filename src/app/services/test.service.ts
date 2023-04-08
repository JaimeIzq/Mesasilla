import { Injectable } from '@angular/core';
//Importamos el modelo
import { Silla } from '../services/silla';
//Importamos HttpClient
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Nos traemos el objeto.
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  //Reutilizamos el modelo de datos de Silla.
  loadedSillas: Silla[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Obtenemos todas las sillas
   **/
  getSillas() {
    console.log('Llamamos a getSillas');
    return this.http
      .get<{ [key: string]: Silla }>('http://localhost:3000/catalogo/productos')
      .pipe(
        map((responseData: { [id: string]: Silla }) => {
          const sillasArray: Silla[] = [];
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

	getSillasPromesa():Promise<Silla[]> {
    console.log('Llamamos a getSillas');
		return new Promise<Silla[]>((resolve, reject) => {
			
		});
	}

	getSillasObservable(): Observable<Silla[]> {
    console.log('Llamamos a getSillas');
		return new Observable<Silla[]>((observer) => {
			let sillas: Silla[] = [];
			observer.next([]);
		});
  }
}
