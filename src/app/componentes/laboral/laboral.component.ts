import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';



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
  

  onAddLaboral: EventEmitter<any> = new EventEmitter();


  
  constructor(private datosPorfolio:PorfolioService, private fb:FormBuilder) { }

    

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

    

  }

  eliminar_lab(empleos: any){
    //console.log(empleos.id);
    this.datosPorfolio.borrarLaboral(empleos).subscribe(()=>{
      //this.laboralList = this.laboralList.filter( t => t.id !== empleos.id)
      alert("La experiencia laboral seleccionada se ha eliminado correctamente")
    });
  }

  editar_lab(empleos:any){
    //console.log(empleos.id);
    this.editLab = this.editarLaboral.value
    //console.log(this.editLab)
    this.datosPorfolio.editarLaboral(this.editLab, empleos).subscribe(()=>{
      alert("La experiencia laboral seleccionada se ha editado correctamente")
    });
    
  }


  nuevo_lab(){
    this.newLab = this.editarLaboral.value
    
      this.datosPorfolio.nuevoLaboral(this.newLab).subscribe(newLab=>{
        alert("Se ha registrado una nueva experiencia laboral")
      this.laboralList.push(newLab)
    }


    );

    

    

  }

}
