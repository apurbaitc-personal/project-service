import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from './employee';
import { catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private  _url :string  = "/assets/data/employee.json"

  constructor( private http:HttpClient) { }


  getEmployees():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url).pipe(catchError(this.errorHandeler));
  }

  errorHandeler(error: HttpErrorResponse){
    return throwError(error.message || 'Server error')
  }
}
