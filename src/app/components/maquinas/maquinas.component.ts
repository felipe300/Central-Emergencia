import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {

  maquinas: any = [{
    id: 1,
    chofer: 'felipe GG',
    cuartel: 'quinta',
    estado: 'en_taller',
    n_chasis: 'bb11cc22dd33',
    n_patente: 'as1234',
    tipo: 'Residuos'
  }, {
    id: 2,
    chofer: 'felipe G',
    cuartel: 'quinta',
    estado: 'de_vuelta',
    n_chasis: 'aa11bb22cc33',
    n_patente: 'ya1234',
    tipo: 'rescate'
  }];

  estado_maquinas: any = [{
    id: 'en_cuartel',
    name: 'En Cuartel'
  }, {
    id: 'en_emergencia',
    name: 'En Emergencia'
  }, {
    id: 'de_vuelta',
    name: 'De Vuelta'
  }, {
    id: 'en_taller',
    name: 'En Taller'
  }];

  constructor(db: AngularFirestore) {
    // this.maquinas = db.collection('maquina').valueChanges();
    // this.estado_maquinas = db.collection('estado_maquina').valueChanges();

    /*
    db.collection('estado_maquina').valueChanges().subscribe(data => {
      this.estado_maquinas = data[0].estado;
    });
    */
  }

  ngOnInit() {
  }

  updateEstado(id, estado) {
    console.log('id', id);
    console.log('estado', estado);

    // exito: alert('actualizado!')
    // error:

    /*
    setTimeout(() => {
      alert('Error al actualizar');
      for (const i in this.maquinas) {
        if (this.maquinas[i].id === id) {
          this.maquinas[i].estado = 'en_emergencia';
        }
      }

    }, 5000);*/
  }
}
