import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  
  habilidadesList:any;
  editarHabilidades:any;
  editHab:any;
  newHab:any;
  

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosHabilidades().subscribe(data =>{
      console.log(data);
      this.habilidadesList=data;
      
    });

    this.editarHabilidades = new FormGroup({
      id: new FormControl (),
      nombre: new FormControl (),
      data: new FormControl (),
      color: new FormControl (),
      
    
    });


  }

  alerta(){
    return sessionStorage.getItem("currentUser");
  }


  eliminar_hab(habilidades: any){
    //console.log(empleos.id);
    this.datosPorfolio.borrarHabilidad(habilidades).subscribe(()=>{
      this.ngOnInit();
      //this.laboralList = this.laboralList.filter( (t:any) =>{return t.id !== empleos.id})
      alert("La habilidad seleccionada se ha eliminado correctamente")
    });
  }

  editar_hab(habilidades:any){
    //console.log(empleos.id);
    this.editHab = this.editarHabilidades.value
    //console.log(this.editLab)
    this.datosPorfolio.editarHabilidad(this.editHab, habilidades).subscribe(()=>{
      this.ngOnInit();
      alert("La experiencia laboral seleccionada se ha editado correctamente")
    });
    
  }


  nuevo_hab(){
    this.newHab = this.editarHabilidades.value
    
      this.datosPorfolio.nuevaHabilidad(this.newHab).subscribe(newHab=>{
        this.ngOnInit();
        alert("Se ha registrado una nueva experiencia laboral")
      //this.habilidadesList.push(newHab)
    }


    );


  }
  
}

