import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';

@Component({
  selector: 'app-lista-emergencia',
  templateUrl: './lista-emergencia.component.html',
  styleUrls: ['./lista-emergencia.component.css']
})
export class ListaEmergenciaComponent implements OnInit {

  items: any;

  editarEmger: any = {
    tipo_emergencia: '',
    sector: '',
    calle: '',
    punto_referencia: '',
    denunciante: '',
    telefono: '',
  };

  constructor(private conexion: ConexionService) {
    this.conexion.listaEmergencia().subscribe(emergencia => {
      this.items = emergencia;
    });
   }

  ngOnInit() {
  }

  eliminarEmg(emg) {
    this.conexion.eliminarEmg(emg);
  }

  editarEmg(emg) {
    this.editarEmger = emg;
  }

  agregarEmgEditado() {
    this.conexion.editarEmg(this.editarEmger);
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}
