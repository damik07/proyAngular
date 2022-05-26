import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  laboralList:any;
  @Output() onDeleteLaboral:EventEmitter <any> = new EventEmitter
  faPen = faPen;

  nombre:String ="";
  posicion:String ="";
  fecha_desde:String ="";
  fecha_hasta:String ="";
  descripcion:String ="";
  img:String ="";
  


  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosLaboral().subscribe(data =>{
      console.log(data);
      this.laboralList=data;
    });
  }

  eliminar_lab(empleos: any){
    console.log(empleos.id);
    this.datosPorfolio.borrarLaboral(empleos).subscribe(data=>{
      this.laboralList = this.laboralList.filter( (t:any) =>{return t.id !== this.laboralList.id

      })

    });
  }

  editar_lab(empleos:any){
    console.log(empleos.id);
    const newLab = {
      nombre: this.nombre,
      posicion: this.posicion,
      fecha_desde: this.fecha_desde,
      fecha_hasta: this.fecha_hasta,
      descripcion: this.descripcion,
      img: this.img

    }

    

    //this.datosPorfolio.editarLaboral(empleos).subscribe()
  }


  nuevo_lab(){
      const newLab = {
      nombre: this.nombre,
      posicion: this.posicion,
      fecha_desde: this.fecha_desde,
      fecha_hasta: this.fecha_hasta,
      descripcion: this.descripcion,
      img: this.img

    }
    console.log(newLab);
    
    this.datosPorfolio.nuevoLaboral(newLab);
  }

}
