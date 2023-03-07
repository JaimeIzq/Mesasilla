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


	ngOnInit(): void {}

	display: any;
	center: google.maps.LatLngLiteral = {
			lat: 22.2736308,
			lng: 70.7512555
	};

	zoom = 6;

	moveMap(event: google.maps.MapMouseEvent) {
			if (event.latLng != null) this.center = (event.latLng.toJSON());
	}

	move(event: google.maps.MapMouseEvent) {
			if (event.latLng != null) this.display = event.latLng.toJSON();
	}

}
