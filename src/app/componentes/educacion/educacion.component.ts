import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  editarEducacion:any;
  editEdu:any;
  newEdu:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.educacionList=data;
    });

    this.editarEducacion = new FormGroup({
      id: new FormControl (),
      titulo: new FormControl (),
      universidad: new FormControl (),
      periodo_desde: new FormControl (),
      periodo_hasta: new FormControl (),
      descripcion: new FormControl (),
      img: new FormControl (),
    
    });

    

  }

  eliminar_edu(educacion: any){
    //console.log(empleos.id);
    this.datosPorfolio.borrarEducacion(educacion).subscribe(()=>{
      //this.educacionList = this.educacionList.filter( (t:any) =>{return t.id !== educacion.id})
      alert("La educación seleccionada se a eliminado correctamente")
    }
    );
  }

  editar_edu(educacion:any){
    //console.log(empleos.id);
    this.editEdu = this.editarEducacion.value
    //console.log(this.editLab)
    this.datosPorfolio.editarEducacion(this.editEdu, educacion).subscribe(()=>{
      alert("La educación seleccionada se ha editado correctamente")
    }
    
    );
    
  }


  nuevo_edu(){
    this.newEdu = this.editarEducacion.value
    
      this.datosPorfolio.nuevoEducacion(this.newEdu).subscribe(newEdu=>{
        alert("Se ha registrado una nueva educación")
      this.educacionList.push(newEdu)
    }


    );



  }

}
