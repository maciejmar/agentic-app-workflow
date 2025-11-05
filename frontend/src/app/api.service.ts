import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiBase; // "/api"

  hello() {
    return this.http.get(`${this.base}/hello`, { responseType: 'text' });
  }
}