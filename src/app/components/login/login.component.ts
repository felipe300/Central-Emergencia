import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
//
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  user: Observable<firebase.User>;
  authenticated = false;

  constructor(public authService: AuthService, public router: Router,
    public flashMensaje: FlashMessagesService) {

  }

  ngOnInit() {
  }

  ingresarAplicacion() {
    this.authService.loginEmail(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/ggmaps']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/about']);
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

}
