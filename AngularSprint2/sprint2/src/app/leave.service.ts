import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leave } from './leave';



@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseURL = "http://localhost:8080/Leave/get/{all}";
  

  constructor(private httpClient: HttpClient) { }

  getLeaveList(): Observable<Leave[]> {
    return this.httpClient.get<Leave[]>(`${this.baseURL}`);
  }

  createLeave(leave: Leave): Observable<object>{
    return this.httpClient.post(`$(this.baseURL)`, leave);
  }
}
