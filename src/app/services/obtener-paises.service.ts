import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ObtenerPaisesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPaises(){
    return this.http.get(`${this.baseUrl}/all`);
  }
}
