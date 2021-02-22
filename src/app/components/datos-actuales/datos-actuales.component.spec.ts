import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosActualesComponent } from './datos-actuales.component';

describe('DatosActualesComponent', () => {
  let component: DatosActualesComponent;
  let fixture: ComponentFixture<DatosActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
