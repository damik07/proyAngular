import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})



export class ProyectosComponent implements OnInit {

  proyectosList:any;
  editarProyectos:any;
  nuevoProyecto:any;
  editProy:any;
  newProy:any;
  isLogged = false;
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private datosPorfolio:PorfolioService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosProyectos().subscribe(data =>{
      console.log(data);
      this.proyectosList=data;
      
    });


    this.editarProyectos = new FormGroup({
      id: new FormControl (),
      nombre: new FormControl (),
      fecha: new FormControl (),
      descripcion: new FormControl (),
      img: new FormControl (),
      link: new FormControl (),
    
    });
    

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  };

  

  eliminar_proy(proyectos: any){
    //console.log(empleos.id);
    this.datosPorfolio.borrarProyecto(proyectos).subscribe(()=>{
      this.ngOnInit();
      //this.laboralList = this.laboralList.filter( (t:any) =>{return t.id !== empleos.id})
      alert("El Proyecto seleccionado se ha eliminado correctamente")
    });
  }

  editar_proy(proyectos:any){
    //console.log(empleos.id);
    this.editProy = this.editarProyectos.value
    //console.log(this.editLab)
    this.datosPorfolio.editarProyecto(this.editProy, proyectos).subscribe(()=>{
      this.ngOnInit();
      alert("El Proyecto seleccionado se ha editado correctamente")
    });
    
  }


  nuevo_proy(){
    this.newProy = this.editarProyectos.value
    
      this.datosPorfolio.nuevoProyecto(this.newProy).subscribe(newProy=>{
        this.ngOnInit();
        alert("Se ha registrado un nuevo proyecto")
      this.proyectosList.push(this.newProy)
    }

    );


  }

}
