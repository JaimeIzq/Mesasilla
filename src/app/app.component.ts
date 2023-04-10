import { Component, OnInit } from '@angular/core';

// PrimeNG Imports
import { MenuItem } from 'primeng/api';
import { CuentasService } from './services/cuentas.service';
import { Usuario } from './services/usuario';
import { getCookie } from './utils/cookies';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title: string = 'Mesasilla';
	logo: string = '/assets/img/Mesasila_logo.png';
	phone: string = '(+0) 987-654-321';
	email: string = 'info+customer@mesasilla.com';
	address: string = 'Calle Espiolla, 18, 50540 Borja, Zaragoza';
	latitude: number = 41.8317582;
	longitude: number = -1.53527;
	user?: Usuario;

	constructor(private cuentasService: CuentasService) {}

	ngOnInit(): void {
		let token = getCookie('token');
		if (token != "") {
			this.cuentasService.getUser(token).subscribe((user: Usuario) => {
				this.user = user;
			});
		}
		console.log(this.user);
	}
}
