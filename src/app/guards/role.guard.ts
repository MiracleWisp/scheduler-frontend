import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userRoles = this.authService.currentUser.roles;
    let roles = route.data['roles'];
    if (userRoles.some(x => roles.includes(x))) {
      return true;

    }
    return this.router.parseUrl('/');
  }
}
