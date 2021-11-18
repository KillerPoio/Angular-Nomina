import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorDatosComponent } from './asesor-datos.component';

describe('AsesorDatosComponent', () => {
  let component: AsesorDatosComponent;
  let fixture: ComponentFixture<AsesorDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
