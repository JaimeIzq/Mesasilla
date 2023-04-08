import { Component, OnInit } from "@angular/core";
import { FilterService } from 'primeng/api';
import { Silla } from "../services/silla";

//Servicio Catalogo
import { CatalogoService } from "../services/catalogo.service";

//Http
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.scss"],
	providers: [FilterService]
})
export class CatalogoComponent implements OnInit {

	sillas: Silla[] = [];

	layout: string = 'list';

	constructor(private catalogoService: CatalogoService) {}

	ngOnInit(): void {
		this.catalogoService.getSillasObs().subscribe({
			next: (sillas: Silla[]) => this.sillas = sillas,
			error: (error: any) => console.error(error),
			complete: () => console.log('Completado')
		});
	}

	getStock(stock: number): string {
		return stock > 0 ? `En Stock (${stock})`: 'Sin Stock';
	}

	getSeverity(stock: number): string {
		return stock > 0 ? 'primary' : 'danger';
	}

	filter(event: Event): void {
		console.log(event);
	}
}
