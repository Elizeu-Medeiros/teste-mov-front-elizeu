import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cars } from 'src/app/Cars';
import { Response } from 'src/app/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/cars`;

  constructor(private http: HttpClient) { }

  getCars(): Observable<Response<Cars[]>> {
    return this.http.get<Response<Cars[]>>(this.apiUrl);
  }

  getCar(id: number): Observable<Response<Cars>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Cars>>(url);
  }

}
