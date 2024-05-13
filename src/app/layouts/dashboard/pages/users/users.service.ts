import { Injectable } from "@angular/core";
import { IUser } from './models';
import { catchError, delay, first, Observable, of, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../enviroments/enviroment";

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.baseAPIURL + '/users');
  }

  getUserById(id: string): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`);
  }
  }
