import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '@core';
import { CredentialsService } from '@app/auth';

const log = new Logger('HasAccessTokenGuard');

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private router: Router, private credentialsService: CredentialsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }

    log.debug('Access token missing, redirecting and adding redirect url...');

    this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
