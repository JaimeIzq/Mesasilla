import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title = 'Mesasilla';

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Catalogo',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/catalogo'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-send',
        routerLink: '/contacto'
      }
    ]
  }

}
