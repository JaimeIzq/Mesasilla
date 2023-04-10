import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { getCookie } from '../utils/cookies';
import { Usuario } from '../services/usuario';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() title = 'Mesasilla';
	@Input() user?: Usuario;

	items: MenuItem[] = [];
	visible: boolean = false;

	ngOnInit(): void {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: '/home',
			},
			{
				label: 'Catalogo',
				icon: 'pi pi-fw pi-shopping-cart',
				routerLink: '/catalogo',
			},
			{
				label: 'Contacto',
				icon: 'pi pi-fw pi-send',
				routerLink: '/contacto',
			},
		];
	}

	isLogged() {
		return this.user != undefined;
	}
	showDialog() {
		this.visible = true;
	}
	getUsername() {
		if (this.user != undefined) {
			return this.user.username;
		}
		return "User";
	}
}
