import { Component, OnInit, Directive, ViewChild, NgZone, ElementRef, EventEmitter, Output } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { MapService } from '../../service/map.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { } from 'googlemaps';

@Component({
  selector: 'app-ggmaps',
  templateUrl: './ggmaps.component.html',
  styleUrls: ['./ggmaps.component.css']
})


export class GgmapsComponent implements OnInit {

  emergencia: Observable<any[]>;
  map: google.maps.Map;
  mapForm: FormGroup;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('inputElement') inputElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, db: AngularFirestore) {
    this.emergencia = db.collection('emergencia').valueChanges();
   }

  lat = -41.46277329621284;
  lng = -72.93061226606369;
  zoom = 18;
  locationChosen = true;
  place_address = 0;

  google: any;


  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(
         this.searchElement.nativeElement, {  });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            // get coords
            const place_address = JSON.stringify(place.geometry.location);
            console.log(place_address);
            if (place.geometry === undefined || place.geometry === null ) {
              return;
            }
            // set latitude, longitude and zoom
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
          });
        });
    });
  }

  onChoseLocation($event) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.locationChosen = true;
  }

  addMarker($event) {
    console.log('addedmarker');
  }

}
