import { Injectable } from '@angular/core';
//
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//

export interface EstadoMaquina { 
  estadoActual: string;
  color: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionEstadoMaquinaService {

  private itemsCollection: AngularFirestoreCollection<EstadoMaquina>;
  estadoMaq: Observable<EstadoMaquina[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<EstadoMaquina>('estadoMaquina');
    this.estadoMaq = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EstadoMaquina;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   mostrarEstadoM(){
     return this.estadoMaq;
   }

}
