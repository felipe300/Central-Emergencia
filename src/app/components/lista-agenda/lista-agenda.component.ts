import { Component, OnInit } from '@angular/core';
import { ConexionAgendaService } from '../../service/conexion-agenda.service';

@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.component.html',
  styleUrls: ['./lista-agenda.component.css']
})
export class ListaAgendaComponent implements OnInit {

  agendas: any;

  // Variable para editarDatosAgenda()
  editarDA:any = {
    nombre: '',
    apellido: ''
  }

  constructor(private conexion: ConexionAgendaService) { 
    this.conexion.listaAgenda().subscribe(agenda => {
      this.agendas = agenda;
    });
  }

  ngOnInit() {
  }

  // Eliminar, viene de lista-agenda.html
  eliminarDatosAgenda(agd){
    // se envian los datos al servicio
    this.conexion.deleteAgenda(agd);
  }

  // Editar, viene de lista-agenda.html
  editarDatosAgenda(agd){
    this.editarDA = agd;
  }

  // Update, viene del Modal de lista-agenda.html
  agregarDAEditados(editarDA){
    this.conexion.updateAgenda(this.editarDA);
  }
}
