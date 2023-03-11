import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	@Input() logo: string = '/assets/img/Mesasila_logo.png';
	@Input() title: string = 'Mesasila';
	@Input() phone: string = '(+0) 123-456-789';
	@Input() email: string = 'info@mesasilla.com';
	@Input() address: string = 'A-1104, 50164 Monegrillo, Zaragoza';
	@Input() longitude: number = -0.6785647;
	@Input() latitude: number = 41.810912;

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

	ngOnInit(): void { }

	// Change de status of the modal dialog to be visible.
	showDialog() {
		this.show = true;
	}
}
