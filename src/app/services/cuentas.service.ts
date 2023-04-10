import { Injectable } from '@angular/core';

//Importamos el modelo
import { Usuario } from './usuario';
import { Token } from './token';

//Importamos HttpClient
import { HttpClient } from '@angular/common/http';

import { getCookie, setCookie } from '../utils/cookies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
	api: string = 'http://localhost:3000';
	token?: Token;

  constructor(private http: HttpClient) {}

	register(username: string, email: string, password: string) {
		const apiURL = this.api + '/user/register';
		let token: string;
		this.http.post<Token>(apiURL, {
			"username": username,
			"email": email,
			"password": password
		}).subscribe({
			next: (tokenRes: Token) => {
				this.token = tokenRes;
				setCookie("token", tokenRes.token, 2)
			},
			error: (err: any) => {
			},
			complete: () => {
				console.log('Registro Completado');
				window.location.reload();
			},
		});
  }

	login(username: string, password: string) {
		const apiURL = this.api + '/user/login';
		let token: string;
		this.http.post<Token>(apiURL, {
			"username": username,
			"password": password
		}).subscribe({
			next: (tokenRes: Token) => {
				this.token = tokenRes;
				setCookie("token", tokenRes.token, 2)
			},
			error: (err: any) => {
			},
			complete: () => {
				console.log('Login Completado');
				window.location.reload();
			},
		});
  }

	getUser(token: string): Observable<Usuario> {
		const apiURL = this.api + '/user';
		return this.http.post<Usuario>(apiURL, {"token": token})
	}
}
