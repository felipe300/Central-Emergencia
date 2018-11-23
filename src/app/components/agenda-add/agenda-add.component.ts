import { Component, OnInit } from '@angular/core';
import { ConexionAgendaService } from '../../service/conexion-agenda.service';

@Component({
  selector: 'app-agenda-add',
  templateUrl: './agenda-add.component.html',
  styleUrls: ['./agenda-add.component.css']
})
export class AgendaAddComponent implements OnInit {

  datosAGD:any = {
    nombre: '',
    cargo: '',
    telefono: '',
    correo: '',
    compania: ''
  }

  constructor(private servicio: ConexionAgendaService) { }

  ngOnInit() {
  }

  // Viene agendaAdd
  agregarDatosAgenda(){
    this.servicio.addAgenda(this.datosAGD);
    this.datosAGD.nombre = '';
    this.datosAGD.cargo = '';
    this.datosAGD.telefono = '';
    this.datosAGD.correo = '';
    this.datosAGD.compania = '';
  }

}
