import { Injectable } from '@angular/core';
//
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  tipo_emergencia: string;
  sector: string;
  calle: string;
  punto_referencia: string;
  denunciante: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('emergencia');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // va a lista_emergencia
  listaEmergencia() {
    return this.items;
  }

  // agregar datos a lista-emergencia-add
  agregarEmg(emerg: Item) {
    this.itemsCollection.add(emerg);
  }

  // eliminar
  eliminarEmg(emg) {
    console.log(emg);
    this.itemDoc = this.afs.doc<Item>(`emergencia/${emg.id}`);
    this.itemDoc.delete();
    console.log(onclick);
  }

  editarEmg(emg) {
    console.log(emg);
    this.itemDoc = this.afs.doc<Item>(`emergencia/${emg.id}`);
    this.itemDoc.update(emg);
    console.log(onclick);
  }

}
