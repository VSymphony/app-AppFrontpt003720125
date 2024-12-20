import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const codigoAlumno = sessionStorage.getItem('codigoAlumno');
    if (codigoAlumno) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
