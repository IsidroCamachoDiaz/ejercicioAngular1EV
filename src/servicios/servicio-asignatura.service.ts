import { Injectable } from '@angular/core';
import { asignatura } from 'src/modelo/asignaturas';
import { ASIGNATURAS } from 'src/modelo/listadoasignaturas';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignaturaService {

  constructor() { }

  getAsignaturas():asignatura[]{
    return ASIGNATURAS;
  }
}
