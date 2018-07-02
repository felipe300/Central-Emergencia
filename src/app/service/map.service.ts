import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';

//
export class  GgmapsComponent {
  tipo_Emergencia = 'tipo emergencia dropdownlist';
  sector = 'sector dropdownlist';
  calle = 'agrega calle';
  esquina_Cercana = 'agrega dir';
  nombre_denunciante = 'agrega nombre';
  telefono_contacto = 50;
}
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) { }

  //
  createmap(): FirebaseObjectObservable<GgmapsComponent> {
    const mapDefault = new GgmapsComponent();
    const mapKey = this.db.list('/map').push(mapDefault).key;
    return this.db.object('/map/' + mapKey);
  }

  //
  updateMap(map: FirebaseObjectObservable<GgmapsComponent>, data: any) {
    return map.update(data);
  }
}
