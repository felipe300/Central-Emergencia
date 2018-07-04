import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs/operators';
//
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor
   (private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState.take(1)
    .pipe(map(authState => !! authState))
    .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
    });
  }
}
