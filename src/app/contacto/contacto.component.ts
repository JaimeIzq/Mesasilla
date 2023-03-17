import { Component } from '@angular/core';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
	es: any;
	today: Date = new Date();

	title: string = 'Mesasilla';
	logo: string = '/assets/img/Mesasila_logo.png';
	phone: string = '(+0) 987-654-321';
	email: string = 'info+customer@mesasilla.com';
	address: string = 'Calle Espiolla, 18, 50540 Borja, Zaragoza';
	latitude: number = 41.8317582;
	longitude: number = -1.53527;

	center = { lat: this.latitude, lng: this.longitude };
	//Modal dialog status
	show: boolean = false;
 // declare center variable
	zoom = 12;

	options: google.maps.MapOptions = {
		mapTypeId: 'roadmap',
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		maxZoom: 15,
		minZoom: 8,
	};

	// Change de status of the modal dialog to be visible.
	showDialog() {
		this.show = true;
	}

	ngOnInit() {
		this.es = {
			firstDayOfWeek: 1,
			dayNames: [
				'lunes',
				'martes',
				'miércoles',
				'jueves',
				'viernes',
				'sábado',
				'domingo'
			],
			dayNamesShort: ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'],
			dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
			monthNames: [
				'enero',
				'febrero',
				'marzo',
				'abril',
				'mayo',
				'junio',
				'julio',
				'agosto',
				'septiembre',
				'octubre',
				'noviembre',
				'diciembre',
			],
			monthNamesShort: [
				'ene',
				'feb',
				'mar',
				'abr',
				'may',
				'jun',
				'jul',
				'ago',
				'sep',
				'oct',
				'nov',
				'dic',
			],
			today: 'Hoy',
			clear: 'Borrar',
		};
	}
}
