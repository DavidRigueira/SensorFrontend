import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/app/models/dato';
import { DatosSensorService } from 'src/app/services/datos-sensor.service';

@Component({
  selector: 'app-datos-actuales',
  templateUrl: './datos-actuales.component.html',
  styleUrls: ['./datos-actuales.component.scss']
})
export class DatosActualesComponent implements OnInit {

  public dato!: Dato;
  constructor(private datosSensorService: DatosSensorService) {
    this.dato = new Dato('', 0, 0, 0, new Date(), 0);
  }

  ngOnInit(): void {
    this.datosSensorService.getUltimoDato().subscribe(
      result => this.dato = result,
      error => alert('Error al leer el dato más actual:' + error.error)
    );
  }

  isLogued(): boolean {
    const local = localStorage.getItem('current-user');
    return local !== null;
  }

}
