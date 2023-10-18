import { Injectable } from '@angular/core';
import { asignatura } from 'src/modelo/asignaturas';
import { ASIGNATURAS } from 'src/modelo/listadoasignaturas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignaturaService {

  constructor() { }

  getAsignaturas():Observable<asignatura[]>{
    return of(ASIGNATURAS);
  }
}
