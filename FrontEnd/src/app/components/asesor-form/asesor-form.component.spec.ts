import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorFormComponent } from './asesor-form.component';

describe('AsesorFormComponent', () => {
  let component: AsesorFormComponent;
  let fixture: ComponentFixture<AsesorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
