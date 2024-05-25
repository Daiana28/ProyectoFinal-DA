import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iexamenes } from './models';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {
  private baseUrl = 'http://localhost:3000/examenes';

  constructor(private http: HttpClient) {}

  getExamenes(): Observable<Iexamenes[]> {
    return this.http.get<Iexamenes[]>(this.baseUrl);
  }

  inscribirseExamen(examenId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${examenId}/inscribirse`, {});
  }
}

