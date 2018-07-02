import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmergenciaAddComponent } from './lista-emergencia-add.component';

describe('ListaEmergenciaAddComponent', () => {
  let component: ListaEmergenciaAddComponent;
  let fixture: ComponentFixture<ListaEmergenciaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEmergenciaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmergenciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
