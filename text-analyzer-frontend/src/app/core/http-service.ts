import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl = '/api/v1';

  constructor(private httpClient: HttpClient) {
  }
  public post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    console.log("Hier: " +url);
    return this.httpClient.post<T>(url, body);
    //return this.httpClient.post<T>(`${this.baseUrl}${endpoint}`, body);
  }
}
