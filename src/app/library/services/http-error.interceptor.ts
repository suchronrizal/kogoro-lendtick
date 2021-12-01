import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { InjectionToken, Inject, Injectable } from '@angular/core';
import { SigninService } from '@app/auth/signin.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, timeout } from 'rxjs/operators';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private signinService: SigninService,
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);
    return next.handle(request).pipe(
      retry(1),
      timeout(timeoutValueNumeric),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          if (
            [401, 403].includes(error.status) &&
            this.signinService.userValue
          ) {
            // auto logout if 401 or 403 response returned from api
            //this.signinService.logout();
            console.log('logout');
          }
          // client-side error
          console.error(error.message);
        } else {
          // server-side error
          if (error.status == 404) {
            errorMessage = `Error : ${error.status}\nMessage: Bad Input`;
          } else
            errorMessage = `Error : ${error.status}\nMessage: ${error.message}`;
        }

        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
