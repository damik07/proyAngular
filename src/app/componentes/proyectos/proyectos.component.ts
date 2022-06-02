import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;
  editarProyectos:any;
  editProy:any;
  newProy:any;
  

  constructor(private datosPorfolio:PorfolioService) { }

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

  };

  eliminar_proy(proyectos: any){
    //console.log(empleos.id);
    this.datosPorfolio.borrarProyecto(proyectos).subscribe(()=>{
      //this.laboralList = this.laboralList.filter( (t:any) =>{return t.id !== empleos.id})
      alert("El Proyecto seleccionado se ha eliminado correctamente")
    });
  }

  editar_proy(proyectos:any){
    //console.log(empleos.id);
    this.editProy = this.editarProyectos.value
    //console.log(this.editLab)
    this.datosPorfolio.editarProyecto(this.editProy, proyectos).subscribe(()=>{
      alert("El Proyecto seleccionado se ha editado correctamente")
    });
    
  }


  nuevo_proy(){
    this.newProy = this.editarProyectos.value
    
      this.datosPorfolio.nuevoProyecto(this.newProy).subscribe(newProy=>{
        alert("Se ha registrado un nuevo proyecto")
      this.proyectosList.push(this.newProy)
    }

    );


  }

}
