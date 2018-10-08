import { TestBed, inject } from '@angular/core/testing';

import { ConexionMaqService } from './conexion-maq.service';

describe('ConexionMaqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionMaqService]
    });
  });

  it('should be created', inject([ConexionMaqService], (service: ConexionMaqService) => {
    expect(service).toBeTruthy();
  }));
});
