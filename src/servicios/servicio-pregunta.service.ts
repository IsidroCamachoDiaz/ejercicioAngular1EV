import { Injectable } from '@angular/core';
import { preguntas } from 'src/modelo/preguntas';
import { PREGUNTAS } from 'src/modelo/listadopreguntas'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntaService {

  constructor() { }

  getPreguntas():Observable<preguntas[]>{
    return of(PREGUNTAS);
  }
}
