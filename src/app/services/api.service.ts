import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '32575c88cc4743efadfb93f74ffcd785';
  private apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
