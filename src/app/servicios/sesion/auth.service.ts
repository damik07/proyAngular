import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "http://localhost:8080/auth/";
  
  

  constructor(private http:HttpClient) { 
    
  }

  Login(credenciales:any):Observable<any> {
    return this.http.post<any>(this.api + `login`, credenciales)
   
  }

  Nuevo(nuevoUsuario:any):Observable<any> {
    return this.http.post(this.api + `nuevoUsu`, nuevoUsuario)
   
  }

  

  
  public get logIn(): boolean {
    return (sessionStorage.getItem('currentUser') == "true"); //tenia registrado un == !null
  }

}
