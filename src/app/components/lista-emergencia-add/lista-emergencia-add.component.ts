import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';

@Component({
  selector: 'app-lista-emergencia-add',
  templateUrl: './lista-emergencia-add.component.html',
  styleUrls: ['./lista-emergencia-add.component.css']
})
export class ListaEmergenciaAddComponent implements OnInit {

  emerg: any = {
    punto_referencia: ''
  };

  tipo_emergencia: string = '';

  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }

  // viene de lista-emergencia-add
  agregarEmergencia() {
    this.servicio.agregarEmg(this.emerg);
    this.emerg.punto_referencia = '';
  }

  selectedChangeHandler(event: any) {
    this.tipo_emergencia = event.target.value;
  }

}
