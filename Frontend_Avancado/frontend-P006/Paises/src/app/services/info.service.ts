import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Pais } from '../pais';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  urlApi = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getCountries() {
    return this.http.get<Pais[]>(this.urlApi).pipe(
      map(paises => {
        const randomIndex = Math.floor(Math.random() * paises.length);
        return paises[randomIndex];
      })
    );
  }
}
