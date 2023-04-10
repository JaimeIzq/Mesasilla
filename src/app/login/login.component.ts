import { Component } from '@angular/core';
import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor(private cuentasService: CuentasService) {}

	login(event: Event, username: HTMLInputElement, password: HTMLInputElement): void {
		console.log(username.value);
		this.cuentasService.login(username.value, password.value);
		// window.location.reload();
	}

}
