import { Component } from '@angular/core';
import { SigninService } from '@app/auth/signin.service';
import { User } from '@app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentUser: User;
  constructor(private signinService: SigninService) {
    this.signinService.user.subscribe((x: any) => (this.currentUser = x.Data));
  }
}
