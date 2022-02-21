import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'https://localhost:4200/api';

  token: any; 

  constructor(private http: HttpClient, private router: Router) { }

  login(cuit:number, email:string, password:string) {
    this.http.post(this.api + '/autenticate', {cuit:cuit,email:email,password:password}).subscribe((resp:any)=> 
    {this.router.navigate(['profile']);
    localStorage.setItem('auth_token', resp.token);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
