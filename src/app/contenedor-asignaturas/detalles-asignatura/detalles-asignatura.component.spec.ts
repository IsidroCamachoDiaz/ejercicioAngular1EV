import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAsignaturaComponent } from './detalles-asignatura.component';

describe('DetallesAsignaturaComponent', () => {
  let component: DetallesAsignaturaComponent;
  let fixture: ComponentFixture<DetallesAsignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesAsignaturaComponent]
    });
    fixture = TestBed.createComponent(DetallesAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
