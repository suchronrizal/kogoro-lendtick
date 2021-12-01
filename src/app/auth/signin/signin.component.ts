import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  returnUrl: string;
  error = '';
  loading = false;
  constructor(
    private signinService: SigninService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // redirect to home if already logged in
    if (this.signinService.userValue) {
      this.router.navigate(['/main']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
  }

  sumbitLogin(user) {
    this.loading = true;
    this.signinService
      .signin(user)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
