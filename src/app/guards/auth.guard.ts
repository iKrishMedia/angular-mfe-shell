import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Role } from '../enums/role.enum';

const commonRoutes = [
  '/home',
  '/albums',
  '/posts',
  '/comments',
  '/photos',
  '/todos',
  '/users',
];
const roleBasedRoutes: Map<Role, string[]> = new Map([
  [Role.admin, ['/dashboard', 'edit', ...commonRoutes]],
  [Role.editor, ['/edit', ...commonRoutes]],
  [Role.user, [...commonRoutes]],
]);

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getRole();
  if (userRole) {
    if (roleBasedRoutes.get(userRole)?.includes(state.url)) {
      return true;
    }
  }
  router.navigate(['/unauthorized']);
  return false;
};

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[],
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getRole();
  if (userRole) {
    const requestedRoute =
      '/' + segments.map((segment) => segment.path).join('/');
    if (roleBasedRoutes.get(userRole)?.includes(requestedRoute)) {
      return true;
    }
  }
  router.navigate(['/unauthorized']);
  return false;
};
