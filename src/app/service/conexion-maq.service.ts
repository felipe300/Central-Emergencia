import { Injectable } from '@angular/core';
//
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//
export interface Maquina {
  codigo_maquina: string;
  tipo_maquina: string;
  cuartel: string;
  chofer: string;
  estado_maquina: string;
  cambiar_estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionMaqService {

  private itemsCollection: AngularFirestoreCollection<Maquina>;
  items: Observable<Maquina[]>;
  // Variable para manipular Documentos
  private itemDoc: AngularFirestoreDocument<Maquina>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Maquina>('maquina');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Maquina;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // va a maquina.ts
  listaMaquina() {
    return this.items;
  }

  // agregar datos a add-Maquina.ts
  addMaquina(item: Maquina) {
    this.itemsCollection.add(item);
  }

  deleteMaquina(maq){
    this.itemDoc = this.afs.doc<Maquina>(`maquina/${maq.id}`);
    this.itemDoc.delete();
  }

  updateMaquina(maq){
    this.itemDoc = this.afs.doc<Maquina>(`maquina/${maq.id}`);
    this.itemDoc.update(maq);
  }

}

