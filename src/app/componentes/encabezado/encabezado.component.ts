import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';

import { AuthService } from 'src/app/servicios/sesion/auth.service';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, MinValidator, RequiredValidator } from '@angular/forms';
import { map } from 'rxjs';
import { TokenService } from 'src/app/servicios/token/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miEncabezado:any;
  persona:any;
  editPers:any;
  isLogged = false;
  

  constructor(private datosPorfolio:PorfolioService, private formBuilder: FormBuilder, private tokenService:TokenService ) { }
    
  editarPersona = new FormGroup({
    id: new FormControl (''),
    nombre: new FormControl (),
    apellido: new FormControl (),
    profesion: new FormControl (),
    residencia: new FormControl (),
    acercaDe: new FormControl (),
    img_banner: new FormControl (),
    img_perfil: new FormControl (),

    });


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.miEncabezado=data;
      this.editarPersona
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  
  putForm(enc:any){
    console.log(enc.id);
    this.editPers = this.editarPersona.value
    console.log(this.editPers)
    this.datosPorfolio.editarPersona(this.editPers, enc).subscribe(()=>{
      this.ngOnInit();
      alert("El encabezado se ha editado correctamente")
    });
  }

}
