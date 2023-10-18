import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorAsignaturasComponent } from './contenedor-asignaturas/contenedor-asignaturas.component';
import { ContenedorPreguntasComponent } from './contenedor-preguntas/contenedor-preguntas.component';
import { DetallesAsignaturaComponent } from './contenedor-asignaturas/detalles-asignatura/detalles-asignatura.component';
import { DetallesPreguntaComponent } from './contenedor-preguntas/detalles-pregunta/detalles-pregunta.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorAsignaturasComponent,
    ContenedorPreguntasComponent,
    DetallesAsignaturaComponent,
    DetallesPreguntaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
