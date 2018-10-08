import { Component, OnInit } from '@angular/core';
import { ConexionMaqService } from '../../service/conexion-maq.service';

@Component({
  selector: 'app-add-maquina',
  templateUrl: './add-maquina.component.html',
  styleUrls: ['./add-maquina.component.css']
})
export class AddMaquinaComponent implements OnInit {

  datosMaq: any = {
    codigo_maquina: '',
    tipo_maquina: '',
    cuartel: '',
    chofer: '',
    estado_maquina: '',
    cambiar_estado: '',
  };

  constructor(private servicio: ConexionMaqService) { }

  ngOnInit() {
  }

  // viene de add-maquina
  agregarMaquina() {
    this.servicio.addMaquina(this.datosMaq);
    this.datosMaq.codigo_maquina = '';
    this.datosMaq.tipo_maquina = '';
    this.datosMaq.cuartel = '';
    this.datosMaq.chofer = '';
    this.datosMaq.estado_maquina = '';
    this.datosMaq.cambiar_estado = '';
  }

}
