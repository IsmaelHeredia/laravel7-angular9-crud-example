import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Producto } from './producto';
   
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  errorMsg: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>('api/productos/leer/')
    .pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.errorMsg = `Error: ${error.error.message}`;
            } else {
                this.errorMsg = this.getServerErrorMessage(error);
            }

            return throwError(this.errorMsg);
        })
    )
  }
   
  create(producto): Observable<Producto> {
    return this.httpClient.post<Producto>('api/productos/guardar', JSON.stringify(producto), this.httpOptions)
    .pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.errorMsg = `Error: ${error.error.message}`;
            } else {
                this.errorMsg = this.getServerErrorMessage(error);
            }

            return throwError(this.errorMsg);
        })
    );
  }  
   
  find(id): Observable<Producto> {
    return this.httpClient.get<Producto>('api/productos/leer/' + id)
    .pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.errorMsg = `Error: ${error.error.message}`;
            } else {
                this.errorMsg = this.getServerErrorMessage(error);
            }

            return throwError(this.errorMsg);
        })
    )
  }
   
  update(id, producto): Observable<Producto> {
    return this.httpClient.put<Producto>('api/productos/actualizar/' + id, JSON.stringify(producto), this.httpOptions)
    .pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.errorMsg = `Error: ${error.error.message}`;
            } else {
                this.errorMsg = this.getServerErrorMessage(error);
            }

            return throwError(this.errorMsg);
        })
    )
  }
   
  delete(id){
    return this.httpClient.delete<Producto>('api/productos/borrar/' + id, this.httpOptions)
    .pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.errorMsg = `Error: ${error.error.message}`;
            } else {
                this.errorMsg = this.getServerErrorMessage(error);
            }

            return throwError(this.errorMsg);
        })
    )
  }
    
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

  private getServerErrorMessage(error: HttpErrorResponse): string {
      switch (error.status) {
          case 404: {
              return `Not Found: ${error.message}`;
          }
          case 403: {
              return `Access Denied: ${error.message}`;
          }
          case 500: {
              return `Internal Server Error: ${error.message}`;
          }
          default: {
              return `Unknown Server Error: ${error.message}`;
          }

      }
  }

}