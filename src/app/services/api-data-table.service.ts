import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataTableService {

  private apiUrl = 'https://testapp.touchworldtechnology.com/interview/test/v1/product/users';

  constructor(private http: HttpClient) {}


  fetchData(start: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('count', '20000')
      .set('start', start.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}`, { params });
  }
}
