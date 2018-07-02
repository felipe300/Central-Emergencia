import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';

// Componments
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { GgmapsComponent } from './components/ggmaps/ggmaps.component';

// Service => providers
import { ConexionService } from './service/conexion.service';
import { ListaEmergenciaComponent } from './components/lista-emergencia/lista-emergencia.component';
import { ListaEmergenciaAddComponent } from './components/lista-emergencia-add/lista-emergencia-add.component';
import { EmergenciasComponent } from './components/emergencias/emergencias.component';
import { MaquinasComponent } from './components/maquinas/maquinas.component';
import { CuartelesComponent } from './components/cuarteles/cuarteles.component';

// Routes
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ggmaps', component: GgmapsComponent },
  { path: 'emergencias', component: ListaEmergenciaComponent },
  { path: 'maquinas', component: MaquinasComponent },
  { path: 'cuarteles', component: CuartelesComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    GgmapsComponent,
    ListaEmergenciaComponent,
    ListaEmergenciaAddComponent,
    EmergenciasComponent,
    MaquinasComponent,
    CuartelesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBIHrtwmCKamw5FzIAnZV1OBfwgEWiWVwg',
      libraries: ['places'],
      region: 'CL'
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
