import { Injectable } from '@angular/core';
import { preguntas } from 'src/modelo/preguntas';
import { PREGUNTAS } from 'src/modelo/listadopreguntas'

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntaService {

  constructor() { }

  getPreguntas():preguntas[]{
    return PREGUNTAS;
  }
}
