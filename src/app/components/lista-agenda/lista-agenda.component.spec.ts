import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendaComponent } from './lista-agenda.component';

describe('ListaAgendaComponent', () => {
  let component: ListaAgendaComponent;
  let fixture: ComponentFixture<ListaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
