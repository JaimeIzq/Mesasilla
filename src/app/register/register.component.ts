import { Component } from '@angular/core';
import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

	constructor(private cuentasService: CuentasService) {}

	register(event: Event, username: HTMLInputElement, email: HTMLInputElement, password1: HTMLInputElement, password2: HTMLInputElement ): void {
		console.log(event.target);
		if (password1.value === password2.value){
			this.cuentasService.register(username.value, email.value, password1.value);
			// window.location.reload();
		}
	}

}
