import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Brands } from 'src/app/Brands';
import { Response } from 'src/app/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/brands`;

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Response<Brands[]>> {
    return this.http.get<Response<Brands[]>>(this.apiUrl);
  }

}
