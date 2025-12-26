import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // otomatis tersedia di seluruh app
})
export class ApiService {
  private baseUrl = '/api'; // pakai proxy.conf.json → otomatis ke backend port 5000

  constructor(private http: HttpClient) {}

  /**
   * Mendapatkan status backend
   */
  getStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/status`);
  }

  /**
   * Mendapatkan daftar users dari backend
   */
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  /**
   * Login user
   * @param data object { username, password }
   */
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
}
