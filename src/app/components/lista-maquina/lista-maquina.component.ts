import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ConexionMaqService } from '../../service/conexion-maq.service';

@Component({
  selector: 'app-lista-maquina',
  templateUrl: './lista-maquina.component.html',
  styleUrls: ['./lista-maquina.component.css']
})
export class ListaMaquinaComponent implements OnInit {

  maquinas: any;

  editarMQ: any = {
    codigo_maquina: '',
    tipo_maquina: '',
    cuartel: '',
    chofer: '',
  };

  constructor(db: AngularFirestore, private conexion: ConexionMaqService) {
    this.conexion.listaMaquina().subscribe(maquina => {
      this.maquinas = maquina;
    });
  }

  ngOnInit() {
  }

  // Eliminar, viene de lista-agenda.html
  eliminarMaquina(maq){
    // se envian los datos al servicio
    this.conexion.deleteMaquina(maq);
  }

  // Editar, viene de lista-agenda.html
  editarMaquina(maq){
    this.editarMQ = maq;
  }

  // Update, viene del Modal de lista-agenda.html
  agregarDMaquina(editarMQ){
    this.conexion.updateMaquina(this.editarMQ);
  }
}

