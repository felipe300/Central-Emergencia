import { TestBed, inject } from '@angular/core/testing';

import { ConexionAgendaService } from './conexion-agenda.service';

describe('ConexionAgendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionAgendaService]
    });
  });

  it('should be created', inject([ConexionAgendaService], (service: ConexionAgendaService) => {
    expect(service).toBeTruthy();
  }));
});
