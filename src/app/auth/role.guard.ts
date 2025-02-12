// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Assuming user info is stored in localStorage

    if (!token || !user.role || user.role !== 'admin') {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
