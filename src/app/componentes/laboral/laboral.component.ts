import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { AuthService } from 'src/app/servicios/sesion/auth.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token/token.service';



@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})

export class LaboralComponent implements OnInit {

  laboralList:any;
  editarLaboral:any;
  nuevoLaboral:any;
  faPen = faPen;
  newLab:any;
  editLab:any;
  isLogged = false;
  
  

  onDelete: EventEmitter<any> = new EventEmitter();


  
  constructor(private datosPorfolio:PorfolioService, private fb:FormBuilder, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosLaboral().subscribe(data =>{
      //console.log(data);
      this.laboralList=data;
    });

    this.editarLaboral = new FormGroup({
      id: new FormControl (),
      nombre: new FormControl (),
      posicion: new FormControl (),
      anioDesde: new FormControl (),
      anioHasta: new FormControl (),
      descripcion: new FormControl (),
      img: new FormControl (),
    
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    

  }

 
  eliminar_lab(empleos:any){
    
    
    this.datosPorfolio.borrarLaboral(empleos).subscribe(() =>{
      this.ngOnInit();
      //this.laboralList = this.laboralList.filter( (t:any) => t.id !== empleos.id)
      alert("La experiencia laboral seleccionada se ha eliminado correctamente")
    });
  }

  editar_lab(empleos:any){
    
    this.editLab = this.editarLaboral.value
    this.datosPorfolio.editarLaboral(this.editLab, empleos).subscribe(()=>{
      this.ngOnInit();
      alert("La experiencia laboral seleccionada se ha editado correctamente")
      
    });
    
  }

  nuevo_lab(){
    this.newLab = this.editarLaboral.value
      this.datosPorfolio.nuevoLaboral(this.newLab).subscribe(newLab=>{
        this.ngOnInit();
        alert("Se ha registrado una nueva experiencia laboral")
      //this.laboralList.push(newLab)
      
    }


    );

  }

}
