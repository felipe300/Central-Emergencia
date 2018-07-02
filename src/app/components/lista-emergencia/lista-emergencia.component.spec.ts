import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmergenciaComponent } from './lista-emergencia.component';

describe('ListaEmergenciaComponent', () => {
  let component: ListaEmergenciaComponent;
  let fixture: ComponentFixture<ListaEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
