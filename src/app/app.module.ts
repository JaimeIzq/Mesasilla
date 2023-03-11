// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

// PrimeNG Imports
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Local Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    LoginComponent,
    RegisterComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RippleModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
		DialogModule,
		BrowserAnimationsModule,
		GoogleMapsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
