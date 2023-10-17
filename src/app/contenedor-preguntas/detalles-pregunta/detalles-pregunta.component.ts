import { Component, Input } from '@angular/core';
import { preguntas } from 'src/modelo/preguntas';

@Component({
  selector: 'app-detalles-pregunta',
  templateUrl: './detalles-pregunta.component.html',
  styleUrls: ['./detalles-pregunta.component.css']
})
export class DetallesPreguntaComponent {
@Input() pregunta?:preguntas;
}
