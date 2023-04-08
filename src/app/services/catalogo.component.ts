import { Component, OnInit } from "@angular/core";
import { Silla } from "../services/silla";
//Servicio Catalogo
import { CatalogoService } from "../services/catalogo.service";
//Http
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.scss"],
})
export class CatalogoComponent implements OnInit {
  //  Lo definimos como variable.
  //  Inteface para obtener los datos del observable.
  catalogo: Array<Silla> = [];
  //  Definimos la variable error para suponer los datos de entrada
  // Booleanos para el control de errores y de recuperacion
  error: string = "";

  constructor (private CatalogoService: CatalogoService) {}

  ngOnInit(): void {
    //  Recuperamos los datos del servicio.Lo llamamos al inicio del proceso.

    //  En este caso al trabajar con un observable. Tendriamos que definirlo de esta manera

    console.log("Recuperamos los datos");

		this.CatalogoService.getSillas().subscribe({
			next: (res: any) => {
				this.sill = res;
			},
			error: (err: any) => {
				this.error = err;
			},
		})
  }
}
