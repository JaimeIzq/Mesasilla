import { Component } from '@angular/core';

// PrimeNG Imports
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Mesasilla';
	logo: string = '/assets/img/Mesasila_logo.png';
	phone: string = '(+0) 987-654-321';
	email: string = 'info+customer@mesasilla.com';
	address: string = 'Calle Espiolla, 18, 50540 Borja, Zaragoza';
	latitude: number = 41.8317582;
	longitude: number = -1.53527;
}
