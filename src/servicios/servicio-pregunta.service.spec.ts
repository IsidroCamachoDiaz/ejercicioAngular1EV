import { TestBed } from '@angular/core/testing';

import { ServicioPreguntaService } from './servicio-pregunta.service';

describe('ServicioPreguntaService', () => {
  let service: ServicioPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
