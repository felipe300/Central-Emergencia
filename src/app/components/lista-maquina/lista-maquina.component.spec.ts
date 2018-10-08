import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaquinaComponent } from './lista-maquina.component';

describe('ListaMaquinaComponent', () => {
  let component: ListaMaquinaComponent;
  let fixture: ComponentFixture<ListaMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
