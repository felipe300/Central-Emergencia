import { Injectable } from '@angular/core';
//
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface datosAgenda { 
  nombre: string;
  apellido: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionAgendaService {
  
  private itemsCollection: AngularFirestoreCollection<datosAgenda>;
  items: Observable<datosAgenda[]>;
  // Variable para manipular Documentos
  private itemDoc: AngularFirestoreDocument<datosAgenda>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<datosAgenda>('agenda');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as datosAgenda;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaAgenda() {
    return this.items;
  }

  addAgenda(item: datosAgenda){
    this.itemsCollection.add(item);
  }

  deleteAgenda(agd){
    this.itemDoc = this.afs.doc<datosAgenda>(`agenda/${agd.id}`);
    this.itemDoc.delete();
  }

  updateAgenda(agd){
    this.itemDoc = this.afs.doc<datosAgenda>(`agenda/${agd.id}`);
    this.itemDoc.update(agd);
  }
  
}
