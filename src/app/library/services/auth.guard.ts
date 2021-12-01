import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SigninService } from 'src/app/auth/signin.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private signinService: SigninService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.signinService.userValue;
    if (user) {
      return true;
    } else {
      this.router.navigate(['/signin'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
