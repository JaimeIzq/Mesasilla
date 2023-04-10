import { Component, OnInit } from '@angular/core';
import { Usuario } from '../services/usuario';
import { CuentasService } from '../services/cuentas.service';
import { getCookie } from '../utils/cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'MyFirstPrimeNG - Home';
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
