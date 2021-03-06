import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
    return this.auth.user$.pipe(
      take(1),
      map(user => {
        if (user)
        user.reload();
        if (user && user.emailVerified) {
          return true;
        }
        else if (user && !user.emailVerified) {
          this.router.navigate(['/verifyEmailPage'], { queryParams: { returnUrl: state.url } });
          return false;
        }
        if (!user){
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }

      }), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied')

        }
      })
    )
  }
}