// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

// Local Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
