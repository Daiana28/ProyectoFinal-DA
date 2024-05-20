import { Injectable } from "@angular/core";
import { IUser } from './models';
import { catchError, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../enviroments/enviroment.development";

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/users').pipe(
      catchError(this.handleError<IUser[]>('getUsers', []))
    );
  }

  getUserById(id: string): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`).pipe(
      catchError(this.handleError<IUser | undefined>(`getUserById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

