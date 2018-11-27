import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ConexionEstadoMaquinaService } from 'src/app/service/conexion-estado-maquina.service';

// lo encia a REAL TIME DATA BASE NO A CLOUD
// import * as firebase from 'firebase';
// import 'firebase/firestore';


@Component({
  selector: 'app-estado-maquina',
  templateUrl: './estado-maquina.component.html',
  styleUrls: ['./estado-maquina.component.css']
})
export class EstadoMaquinaComponent implements OnInit {

  color: string ='green';
  estado: string ='';

  datos: any;

  estadoMA: any = {
    name:''
  }

  constructor(private conexion: ConexionEstadoMaquinaService) {
    this.conexion.mostrarEstadoM().subscribe(estadoA=>{
      this.datos = estadoA;
    });
   }

  ngOnInit() {
  }

  setColor(selectedColor: string): void{
    console.log('Color '+ selectedColor);
    this.color = selectedColor;
    // NO Sierve para CLoud Date Base
    // firebase.database().ref().child('color').set(selectedColor);
    
  }

  setValue(selectedValue: string): void{
    console.log('Valor '+ selectedValue);
    this.estado = selectedValue;
  }

  upDateColor(): void {
    console.log('TODO');
  }

}
