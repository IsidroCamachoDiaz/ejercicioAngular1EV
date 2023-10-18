import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorAsignaturasComponent } from './contenedor-asignaturas/contenedor-asignaturas.component';
import { ContenedorPreguntasComponent } from './contenedor-preguntas/contenedor-preguntas.component';

const routes: Routes = [ { path: 'asignaturas', component: ContenedorAsignaturasComponent },{ path: 'preguntas', component: ContenedorPreguntasComponent }
 ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
