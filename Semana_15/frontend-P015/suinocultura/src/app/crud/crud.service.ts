import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Suino } from './suino';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:4200/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(suino: any): Observable<Suino> {
    return this.httpClient.post<Suino>(this.apiServer + '/suinos/', JSON.stringify(suino), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id: string): Observable<Suino> {
    return this.httpClient.get<Suino>(this.apiServer + '/suinos/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Suino[]> {
    return this.httpClient.get<Suino[]>(this.apiServer + '/suinos/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: string, suino: any): Observable<Suino> {
    return this.httpClient.put<Suino>(this.apiServer + '/suinos/' + id, JSON.stringify(suino), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: string){
    return this.httpClient.delete<Suino>(this.apiServer + '/suinos/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}