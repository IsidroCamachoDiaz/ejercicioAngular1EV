import { Component } from '@angular/core';
import { preguntas } from 'src/modelo/preguntas';
import { ServicioPreguntaService } from 'src/servicios/servicio-pregunta.service';

@Component({
  selector: 'app-contenedor-preguntas',
  templateUrl: './contenedor-preguntas.component.html',
  styleUrls: ['./contenedor-preguntas.component.css']
})
export class ContenedorPreguntasComponent {
  constructor(public servioP:ServicioPreguntaService){}
  listadoA?:preguntas[];
  ngOnInit(): void {
    this.getPreguntas();
  }
  getPreguntas():void{
    this.servioP.getPreguntas().subscribe(preguntas=>this.listadoA=preguntas)
  }
  preguntaDar?:preguntas;
  
  darPregunta(p:preguntas):void{
    this.preguntaDar=p;
  }
}
