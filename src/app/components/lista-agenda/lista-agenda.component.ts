import { Component, OnInit } from '@angular/core';
import { ConexionAgendaService } from '../../service/conexion-agenda.service';
//
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { observable } from 'rxjs';

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
    cargo: '',
    telefono: '',
    correo: '',
    compania:''

  }
  datos;

  searchterm: string;
 
  startAt = new Subject();
  endAt = new Subject();
 
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private conexion: ConexionAgendaService, private afs:AngularFirestore) { 
    this.conexion.listaAgenda().subscribe(agenda => {
      this.agendas = agenda;
    });
  }

  ngOnInit() {
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((datos) => {
        this.agendas = datos;
      })
    })
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

  //
  search($event){
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + '\uf8ff');
  }

  firequery(start, end) {
    console.log();
    return this.afs.collection('agenda', ref => ref.limit(5).orderBy('nombre').startAt(start).endAt(end)).valueChanges();
  }

}
