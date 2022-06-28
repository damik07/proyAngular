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
    return this.http.get<any>(this.url + "auth/ver/personas");
  }

  obtenerDatosLaboral():Observable<any>{
    return this.http.get<any>(this.url + "auth/ver/expLaboral");
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get<any>(this.url + "auth/ver/educacion");
  }
  obtenerDatosHabilidades():Observable<any>{
    return this.http.get<any>(this.url + "auth/ver/habilidades");
  }
  obtenerDatosProyectos():Observable<any>{
    return this.http.get<any>(this.url + "auth/ver/proyectos");
  }


  //delete de las partes del portfolio

  borrarLaboral(empleos:any):Observable<any>{
    const uurl = this.url + "delete/expLaboral/" + empleos.id
    //console.log(uurl)
    return this.http.delete<any>(uurl);
    
  }

  borrarEducacion(educacion:any):Observable<any>{
    const uurl = this.url + "delete/educacion/" + educacion.id
    //console.log(uurl)
    return this.http.delete<any>(uurl);
    
  }

  borrarHabilidad(habilidades:any):Observable<any>{
    const uurl = this.url + "delete/habilidades/" + habilidades.id
    //console.log(uurl)
    return this.http.delete<any>(uurl);
    
  }

  borrarProyecto(proyectos:any):Observable<any>{
    const uurl = this.url + "delete/proyecto/" + proyectos.id
    //console.log(uurl)
    return this.http.delete<any>(uurl);
    
  }
  
  //editar de las partes del portfolio

  editarPersona(editpers:any, enc:any):Observable<any>{
    const uurl = this.url + "actualizar/persona/" + enc.id
    console.log(uurl);
    console.log(editpers);
    return this.http.put<any>(uurl, editpers, this.httpOptions);
    
  }


  editarLaboral(editlab:any, empleos:any):Observable<any>{
    const uurl = this.url + "actualizar/expLaboral/" + empleos.id
    //console.log(uurl);
    //console.log(editlab);
    return this.http.put<any>(uurl, editlab, this.httpOptions);
    
  }

  editarEducacion(editEdu:any, educacion:any):Observable<any>{
    const uurl = this.url + "actualizar/educacion/" + educacion.id
    //console.log(uurl);
    //console.log(editlab);
    return this.http.put<any>(uurl, editEdu, this.httpOptions);
    
  }

  editarHabilidad(editHab:any, habilidades:any):Observable<any>{
    const uurl = this.url + "actualizar/habilidades/" + habilidades.id
    //console.log(uurl);
    //console.log(editlab);
    return this.http.put<any>(uurl, editHab, this.httpOptions);
    
  }

  editarProyecto(editProy:any, proyectos:any):Observable<any>{
    const uurl = this.url + "actualizar/proyecto/" + proyectos.id
    //console.log(uurl);
    //console.log(editlab);
    return this.http.put<any>(uurl, editProy, this.httpOptions);
    
  }


  //nuevo de las partes del portfolio

  nuevoLaboral(newLab:any):Observable<any>{
    const uurl = this.url + "new/expLaboral"
    //console.log(uurl)
    //console.log(newLab)
    return this.http.post<any>(uurl, newLab, this.httpOptions);
    
  }

  nuevoEducacion(newEdu:any):Observable<any>{
    const uurl = this.url + "new/educacion"
    //console.log(uurl)
    //console.log(newLab)
    return this.http.post<any>(uurl, newEdu, this.httpOptions);
    
  }


  nuevaHabilidad(newHab:any):Observable<any>{
    const uurl = this.url + "new/habilidad"
    //console.log(uurl)
    //console.log(newLab)
    return this.http.post<any>(uurl, newHab, this.httpOptions);
    
  }

  nuevoProyecto(newProy:any):Observable<any>{
    const uurl = this.url + "new/proyecto"
    //console.log(uurl)
    //console.log(newLab)
    return this.http.post<any>(uurl, newProy, this.httpOptions);
    
  }
  
}
