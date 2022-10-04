import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cars } from '../Cars';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/cars`;

  constructor(private http: HttpClient) { }
}
