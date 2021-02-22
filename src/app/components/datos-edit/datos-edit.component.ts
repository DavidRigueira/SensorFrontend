import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dato } from 'src/app/models/dato';
import { DatosSensorService } from 'src/app/services/datos-sensor.service';

@Component({
  selector: 'app-datos-edit',
  templateUrl: './datos-edit.component.html',
  styleUrls: ['./datos-edit.component.scss']
})
export class DatosEditComponent implements OnInit {

  public id!: string;
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private datosSensorService: DatosSensorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.form = this.formBuilder.group({
      co2: ['', Validators.required],
      temperatura: ['', Validators.required],
      humedad: ['', Validators.required],
      idSensor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;

    if (this.id) {
      this.datosSensorService.getDatoById(this.id).subscribe(
        result => this.form.patchValue(result),
        error => alert('Error al cargar los datos')
      );
    }
  }

  onSubmit(formValue: Dato): void {
    if (this.id) {
      this.actualizarDatoExistente(this.id, formValue);
    } else {
      this.addNuevoDato(formValue);
    }
  }

  addNuevoDato(dato: Dato): void {
    this.datosSensorService.addDato(dato).subscribe(
      result => this.router.navigate(['/datos-list']),
      error => alert('Error al guardar el dato:' + error.text)
    );
  }

  actualizarDatoExistente(id: string, dato: Dato): void {
    this.datosSensorService.updateDato(id, dato).subscribe(
      result => this.router.navigate(['/datos-list']),
      error => alert('Error al modificar el dato:' + error.text)
    );
  }

}
