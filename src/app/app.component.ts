import { Component } from '@angular/core';
import { SigninService } from './auth/signin.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  user: User;
  constructor(private signinService: SigninService) {
    this.signinService.user.subscribe((x) => (this.user = x));
  }
}
