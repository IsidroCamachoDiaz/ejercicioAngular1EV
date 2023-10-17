import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPreguntaComponent } from './detalles-pregunta.component';

describe('DetallesPreguntaComponent', () => {
  let component: DetallesPreguntaComponent;
  let fixture: ComponentFixture<DetallesPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPreguntaComponent]
    });
    fixture = TestBed.createComponent(DetallesPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
