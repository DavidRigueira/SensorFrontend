import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEditComponent } from './datos-edit.component';

describe('DatosEditComponent', () => {
  let component: DatosEditComponent;
  let fixture: ComponentFixture<DatosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
