import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "https://nameless-springs-70391.herokuapp.com/auth/";
  
  

  constructor(private http:HttpClient) { 
    
  }

  Login(credenciales:LoginUsuario):Observable<JwtDto> {
    
    return this.http.post<JwtDto>(this.api + `login`, credenciales)
   
  }

  Nuevo(nuevoUsuario:NuevoUsuario):Observable<any> {
    return this.http.post(this.api + `nuevoUsu`, nuevoUsuario)
   
  }

  

  
  public get logIn(): boolean {
    return (sessionStorage.getItem('currentUser') == "true"); //tenia registrado un == !null
  }

}
