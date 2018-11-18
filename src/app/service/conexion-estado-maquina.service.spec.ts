import { TestBed, inject } from '@angular/core/testing';

import { ConexionEstadoMaquinaService } from './conexion-estado-maquina.service';

describe('ConexionEstadoMaquinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionEstadoMaquinaService]
    });
  });

  it('should be created', inject([ConexionEstadoMaquinaService], (service: ConexionEstadoMaquinaService) => {
    expect(service).toBeTruthy();
  }));
});
