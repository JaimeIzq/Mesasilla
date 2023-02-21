import { Component } from '@angular/core';

// PrimeNG Imports
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mesasilla';
  // Menubar items
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', url: '/home',
        icon: 'pi pi-fw pi-home',
      },
      { label: 'Catálogo', url: '/catalogo',
        icon: 'pi pi-fw pi-list',
      }
    ];
  }

}
