import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "http://localhost:8080/usuario/Ok";
  currentUserSubject: BehaviorSubject<any>;
  

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }

  Login(credenciales:any):Observable<any> {
    console.log(credenciales);
    return this.http.post(this.api, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      
      return data;
      
    }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  public get logIn(): boolean {
    return (sessionStorage.getItem('currentUser') == "true"); //tenia registrado un == !null
  }

}
