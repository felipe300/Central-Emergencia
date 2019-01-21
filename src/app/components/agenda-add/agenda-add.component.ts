import { Component, OnInit } from '@angular/core';
import { ConexionAgendaService } from '../../service/conexion-agenda.service';

import * as firebase from 'firebase/app';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Feature, KmlFeatureData } from '@agm/core/services/google-maps-types';

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
  }

  compania: string = '';

  constructor(private servicio: ConexionAgendaService) {
   }

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

  //
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/photos/featured/url1');
    storageRef.put(file, metaData);
    console.log(file.name);
  }

  onUpload() {
  }
  
  selectedChangeHandler(event: any) {
    this.compania = event.target.value;
  }

}
