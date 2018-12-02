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
    cuartel: '',
    chofer: ''
  };
  tipoMaq: string = '';

  constructor(private servicio: ConexionMaqService) { }

  ngOnInit() {
  }

  // viene de add-maquina
  agregarMaquina() {
    this.servicio.addMaquina(this.datosMaq);
    this.datosMaq.codigo_maquina = '';
    this.datosMaq.cuartel = '';
    this.datosMaq.chofer = '';
  }

  selectedChangeHandler(event: any) {
    this.tipoMaq = event.target.value;
  }

}
