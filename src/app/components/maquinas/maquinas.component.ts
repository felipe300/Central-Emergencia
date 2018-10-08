import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { ConexionMaqService } from '../../service/conexion-maq.service';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {

  items:any;
  
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
  }, {
    id: 'fuera_zona',
    name: 'Fuera de la Zona'
  }
];

  constructor(db: AngularFirestore, private conexion: ConexionMaqService) {
    this.conexion.listaMaquina().subscribe(maquina => {
      this.items = maquina;
    });
  }

  setColor(selectedColor: string): void{
    console.log('Texto '+ selectedColor);    
  }

  ngOnInit() {
  }

  updateEstado(id, estado) {
    console.log('id', id);
    console.log('estado', estado);
  }


}
