import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getDepartmentsList() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8080/get/{all}";
  

  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Departement[]> {
    return this.httpClient.get<Departement[]>(`${this.baseURL}`);
  }

  createDepartment(department: Departement): Observable<object>{
    return this.httpClient.post(`$(this.baseURL)`, department);
  }
}
