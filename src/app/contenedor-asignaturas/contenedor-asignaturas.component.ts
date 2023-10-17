import { Component } from '@angular/core';
import { asignatura } from 'src/modelo/asignaturas';
import { ServicioAsignaturaService } from 'src/servicios/servicio-asignatura.service';

@Component({
  selector: 'app-contenedor-asignaturas',
  templateUrl: './contenedor-asignaturas.component.html',
  styleUrls: ['./contenedor-asignaturas.component.css']
})
export class ContenedorAsignaturasComponent {
constructor(public servioA:ServicioAsignaturaService){}
listadoA?:asignatura[];

ngOnInit(): void {
  this.getAsignaturas();
}

public getAsignaturas():void{
this.listadoA=this.servioA.getAsignaturas();
}
}
