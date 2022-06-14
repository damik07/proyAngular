import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from 'src/app/servicios/sesion/auth.service';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, MinValidator, RequiredValidator } from '@angular/forms';
import { map } from 'rxjs';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miEncabezado:any;
  persona:any;
  editPers:any;
  

  constructor(private datosPorfolio:PorfolioService, private formBuilder: FormBuilder ) { }
    
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

    
  }

  alerta(){
    return sessionStorage.getItem("currentUser");
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
