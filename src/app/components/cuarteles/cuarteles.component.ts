import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuarteles',
  templateUrl: './cuarteles.component.html',
  styleUrls: ['./cuarteles.component.css']
})
export class CuartelesComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('cuartel').valueChanges();
  }

  ngOnInit() {
  }

}
