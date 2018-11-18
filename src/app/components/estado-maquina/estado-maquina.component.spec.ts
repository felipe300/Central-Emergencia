import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMaquinaComponent } from './estado-maquina.component';

describe('EstadoMaquinaComponent', () => {
  let component: EstadoMaquinaComponent;
  let fixture: ComponentFixture<EstadoMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
