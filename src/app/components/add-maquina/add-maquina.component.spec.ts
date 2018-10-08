import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaquinaComponent } from './add-maquina.component';

describe('AddMaquinaComponent', () => {
  let component: AddMaquinaComponent;
  let fixture: ComponentFixture<AddMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
