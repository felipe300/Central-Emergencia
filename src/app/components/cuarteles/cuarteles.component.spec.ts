import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartelesComponent } from './cuarteles.component';

describe('CuartelesComponent', () => {
  let component: CuartelesComponent;
  let fixture: ComponentFixture<CuartelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
