import { SigninService } from 'src/app/auth/signin.service';

export function appInitializer(signinService: SigninService) {
  return () =>
    new Promise((resolve) => {
      resolve(signinService.refreshToken());
    });
}
