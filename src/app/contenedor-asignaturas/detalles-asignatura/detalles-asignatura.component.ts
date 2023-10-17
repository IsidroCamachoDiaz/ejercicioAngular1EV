import { Component, Input } from '@angular/core';
import { asignatura } from 'src/modelo/asignaturas';

@Component({
  selector: 'app-detalles-asignatura',
  templateUrl: './detalles-asignatura.component.html',
  styleUrls: ['./detalles-asignatura.component.css']
})
export class DetallesAsignaturaComponent {
@Input() asignatura?:asignatura;
}
