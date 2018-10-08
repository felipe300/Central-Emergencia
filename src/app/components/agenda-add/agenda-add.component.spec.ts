import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAddComponent } from './agenda-add.component';

describe('AgendaAddComponent', () => {
  let component: AgendaAddComponent;
  let fixture: ComponentFixture<AgendaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
