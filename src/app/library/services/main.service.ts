import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  auth: string = `${environment.urlAuth}`;
  price: string = `${environment.urlPrice}`;
  config: string = `${environment.urlConfig}`;
  constructor(private http: HttpClient) {}
}
