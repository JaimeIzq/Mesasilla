import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Usuario } from './services/usuario';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', data: {title: 'Mesasilla - Home'}, component: HomeComponent },
  { path: 'catalogo', data: {title: 'Mesasilla - Catalogo'}, component: CatalogoComponent },
  { path: 'contacto', data: {title: 'Mesasilla - Contacto'}, component: ContactoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	@Input() user?: Usuario;
}
