import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';

@Component({
  selector: 'app-lista-emergencia-add',
  templateUrl: './lista-emergencia-add.component.html',
  styleUrls: ['./lista-emergencia-add.component.css']
})
export class ListaEmergenciaAddComponent implements OnInit {

  emerg: any = {
    tipo_emergencia: '',
    sector: '',
    calle: '',
    punto_referencia: '',
    denunciante: '',
    telefono: '',
  };

  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }

  // viene de lista-emergencia-add
  agregarEmergencia() {
    this.servicio.agregarEmg(this.emerg);
    this.emerg.tipo_emergencia = '';
    this.emerg.sector = '';
    this.emerg.calle = '';
    this.emerg.punto_referencia = '';
    this.emerg.denunciante = '';
    this.emerg.telefono = '';
  }

}
