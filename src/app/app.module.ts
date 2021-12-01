import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SigninModule } from './auth/signin.module';
import {
  DEFAULT_TIMEOUT,
  HttpErrorInterceptor,
} from './library/services/http-error.interceptor';
import { appInitializer } from './library/services/app.initializer';
import { SigninService } from './auth/signin.service';
import { JwtInterceptor } from './library/services/jwt.interceptor';
import { MainModule } from './admin-page/main.module';
import { MessageService } from 'primeng';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SigninModule,
    HttpClientModule,
    MainModule,
  ],
  providers: [
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [SigninService],
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: DEFAULT_TIMEOUT, useValue: 30000 },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
