import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }


  getCards(): Observable<any[]> {
    return this.http.get<any[]>('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English');
  }

  getTypes(): Observable<any[]> {
    return this.http.get<any[]>('https://api.magicthegathering.io/v1/types');
  }
}
