import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { LaboralComponent } from 'src/app/componentes/laboral/laboral.component';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url:string='http://localhost:8080/';

  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })}

  constructor(private http:HttpClient, ) { }


  //Get de las partes del portfolio
 
  obtenerDatosPersona():Observable<any>{
    return this.http.get<any>(this.url + "ver/personas");
  }

  obtenerDatosLaboral():Observable<any>{
    return this.http.get<any>(this.url + "ver/expLaboral");
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get<any>(this.url + "ver/educacion");
  }
  obtenerDatosHabilidades():Observable<any>{
    return this.http.get<any>(this.url + "ver/habilidades");
  }
  obtenerDatosProyectos():Observable<any>{
    return this.http.get<any>(this.url + "ver/proyectos");
  }


  //delete de las partes del portfolio

  borrarLaboral(empleos:any):Observable<any>{
    const uurl = this.url + "delete/expLaboral/" + empleos.id
    console.log(uurl)
    return this.http.delete<any>(uurl);
    
  }

  //editar de las partes del portfolio

  editarLaboral(empleos:any):Observable<any>{
    const uurl = this.url + "actualizar/expLaboral/" + empleos.id
    console.log(uurl)
    return this.http.put<any>(uurl, empleos, this.httpOptions);
    
  }


  //nuevo de las partes del portfolio

  nuevoLaboral(newLab:any):Observable<any>{
    const uurl = this.url + "new/expLaboral/"
    console.log(uurl)
    return this.http.post<any>(uurl, newLab);
    
  }

  
}
