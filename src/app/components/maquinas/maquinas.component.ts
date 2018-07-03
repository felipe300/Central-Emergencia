import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {

  maquinas: Observable<any[]>;
  estado_maquinas: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.maquinas = db.collection('maquina').valueChanges();
    this.estado_maquinas = db.collection('estado_maquina').valueChanges();
  }

  ngOnInit() {
  }

}
