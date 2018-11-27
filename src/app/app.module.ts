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
import { FlashMessagesModule } from 'angular2-flash-messages';

import { FormsModule } from '@angular/forms';

// Componments
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { GgmapsComponent } from './components/ggmaps/ggmaps.component';

import { ListaEmergenciaComponent } from './components/lista-emergencia/lista-emergencia.component';
import { ListaEmergenciaAddComponent } from './components/lista-emergencia-add/lista-emergencia-add.component';
import { EmergenciasComponent } from './components/emergencias/emergencias.component';

import { MaquinasComponent } from './components/maquinas/maquinas.component';
import { AddMaquinaComponent } from './components/add-maquina/add-maquina.component';
import { ListaMaquinaComponent } from './components/lista-maquina/lista-maquina.component';

import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaAddComponent } from './components/agenda-add/agenda-add.component';
import { ListaAgendaComponent } from './components/lista-agenda/lista-agenda.component';

import { CuartelesComponent } from './components/cuarteles/cuarteles.component';

// Service => providers
import { ConexionService } from './service/conexion.service';
import { AuthGuard } from './guard/auth.guard';
import { ConexionMaqService } from './service/conexion-maq.service';
import { ConexionAgendaService } from './service/conexion-agenda.service';
import { EstadoMaquinaComponent } from './components/estado-maquina/estado-maquina.component';
import { ConexionEstadoMaquinaService } from './service/conexion-estado-maquina.service';

// Angular Material
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


// Routes
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'agenda', component: AgendaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ggmaps', component: GgmapsComponent, canActivate: [AuthGuard] },
  { path: 'emergencias', component: ListaEmergenciaComponent, canActivate: [AuthGuard] },
  { path: 'maquinas', component: MaquinasComponent, canActivate: [AuthGuard] },
  { path: 'cuarteles', component: CuartelesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    GgmapsComponent,
    ListaEmergenciaComponent,
    ListaEmergenciaAddComponent,
    EmergenciasComponent,
    MaquinasComponent,
    CuartelesComponent,
    AddMaquinaComponent,
    ListaMaquinaComponent,
    AgendaComponent,
    AgendaAddComponent,
    ListaAgendaComponent,
    EstadoMaquinaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBIHrtwmCKamw5FzIAnZV1OBfwgEWiWVwg',
      libraries: ['places'],
      region: 'CL'
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [
    ConexionService,
    ConexionMaqService,
    ConexionAgendaService,
    ConexionEstadoMaquinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
